#!/usr/bin/env python3
"""Gera fichas de produto verticais, otimizadas para leitura no celular."""

import html
import json
import sys
from io import BytesIO
from pathlib import Path
from urllib.parse import unquote

from PIL import Image, ImageOps
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import portrait
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph


PAPER = (251, 250, 249)
SAND = (241, 237, 233)
INK = (42, 35, 37)
MUTED = (111, 102, 98)
SAGE = (78, 126, 110)
PAGE_SIZE = portrait((108 * mm, 192 * mm))


def register_fonts():
    pdfmetrics.registerFont(TTFont("PinheiroSerif", "/System/Library/Fonts/Supplemental/Georgia.ttf"))
    pdfmetrics.registerFont(TTFont("PinheiroSerifBold", "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"))
    pdfmetrics.registerFont(TTFont("PinheiroSans", "/System/Library/Fonts/Supplemental/Arial.ttf"))
    pdfmetrics.registerFont(TTFont("PinheiroSansBold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))


def color(rgb):
    return tuple(component / 255 for component in rgb)


def product_image_path(root, source):
    clean = unquote(source.split("?", 1)[0]).lstrip("/")
    return root / clean


def prepared_image(path, size, mode="contain"):
    width, height = size
    with Image.open(path) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        if mode == "cover":
            result = ImageOps.fit(image, (width, height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        else:
            result = Image.new("RGB", (width, height), SAND)
            fitted = ImageOps.contain(image, (width, height), method=Image.Resampling.LANCZOS)
            result.paste(fitted, ((width - fitted.width) // 2, (height - fitted.height) // 2))
    output = BytesIO()
    result.save(output, format="JPEG", quality=84, optimize=True, progressive=True)
    output.seek(0)
    return ImageReader(output), output


def draw_image_frame(pdf, path, x, y, width, height, mode="contain", radius=8):
    pdf.setFillColorRGB(*color(SAND))
    pdf.roundRect(x, y, width, height, radius, fill=1, stroke=0)
    reader, buffer = prepared_image(path, (max(1, int(width * 3)), max(1, int(height * 3))), mode)
    pdf.saveState()
    clip = pdf.beginPath()
    clip.roundRect(x, y, width, height, radius)
    pdf.clipPath(clip, stroke=0, fill=0)
    pdf.drawImage(reader, x, y, width, height, preserveAspectRatio=False, mask="auto")
    pdf.restoreState()
    buffer.close()


def money(value):
    rounded = int(round(float(value)))
    return f"R$ {rounded:,}".replace(",", ".")


def fit_paragraph(text, width, max_height, font_name, start_size, min_size, color_value, leading_ratio=1.28):
    size = start_size
    safe = html.escape(text)
    while size >= min_size:
        style = ParagraphStyle(
            "fit",
            fontName=font_name,
            fontSize=size,
            leading=size * leading_ratio,
            textColor=color(color_value),
            alignment=TA_LEFT,
            spaceAfter=0,
            spaceBefore=0,
        )
        paragraph = Paragraph(safe, style)
        _, height = paragraph.wrap(width, max_height)
        if height <= max_height:
            return paragraph, height
        size -= 0.35
    if height > max_height:
        raise ValueError(f"Texto não cabe na área reservada: {text[:80]}")
    return paragraph, height


def build_pdf(product, root, output_dir):
    slug = product.get("slug") or product["id"]
    photos = product.get("photos") or [{"src": product["image"]}]
    paths = [product_image_path(root, photo["src"]) for photo in photos]
    paths = [path for path in paths if path.exists()]
    if not paths:
        raise FileNotFoundError(f"Nenhuma imagem encontrada para {slug}")

    output = output_dir / f"{slug}.pdf"
    width, height = PAGE_SIZE
    pdf = canvas.Canvas(str(output), pagesize=PAGE_SIZE, pageCompression=1, invariant=1)
    pdf.setTitle(f"{product['name']} - pinheiro.life")
    pdf.setAuthor("pinheiro.life")
    pdf.setSubject("Ficha de produto para celular")
    pdf.setFillColorRGB(*color(PAPER))
    pdf.rect(0, 0, width, height, fill=1, stroke=0)

    margin = 8.5 * mm
    content_width = width - 2 * margin

    pdf.setFont("PinheiroSerifBold", 13)
    pdf.setFillColorRGB(*color(INK))
    pdf.drawString(margin, height - 12.5 * mm, "pinheiro")
    brand_width = pdf.stringWidth("pinheiro", "PinheiroSerifBold", 13)
    pdf.setFillColorRGB(*color(SAGE))
    pdf.drawString(margin + brand_width, height - 12.5 * mm, ".life")

    extra_photos = paths[1:5]
    if extra_photos:
        main_y, main_height = 108.5 * mm, 67 * mm
        thumbs_y, thumb_height = 87.5 * mm, 17 * mm
        title_top = 82.5 * mm
    else:
        main_y, main_height = 96 * mm, 79.5 * mm
        thumbs_y, thumb_height = 0, 0
        title_top = 90.5 * mm

    draw_image_frame(pdf, paths[0], margin, main_y, content_width, main_height, "contain", 7)

    if extra_photos:
        gap = 2.2 * mm
        thumb_width = (content_width - 3 * gap) / 4
        for index, path in enumerate(extra_photos):
            draw_image_frame(pdf, path, margin + index * (thumb_width + gap), thumbs_y, thumb_width, thumb_height, "cover", 4)

    title_max_height = 18 * mm
    title, title_height = fit_paragraph(product["name"], content_width, title_max_height, "PinheiroSerif", 16, 12.5, INK, 1.13)
    title_y = title_top - title_height
    title.drawOn(pdf, margin, title_y)

    description_top = title_y - 4 * mm
    description_bottom = 22 * mm
    description_max_height = max(20 * mm, description_top - description_bottom)
    description, description_height = fit_paragraph(product["description"], content_width, description_max_height, "PinheiroSans", 8.7, 7.15, MUTED, 1.34)
    description.drawOn(pdf, margin, description_top - description_height)

    price_text = money(product["price"])
    if product.get("priceSuffix"):
        price_text += f" {product['priceSuffix']}"
    pdf.setFont("PinheiroSansBold", 6.8)
    pdf.setFillColorRGB(*color(SAGE))
    pdf.drawString(margin, 14.8 * mm, "VALOR")
    pdf.setFont("PinheiroSerifBold", 22)
    pdf.setFillColorRGB(*color(INK))
    pdf.drawString(margin, 7.8 * mm, price_text)

    pdf.setFont("PinheiroSans", 6.8)
    pdf.setFillColorRGB(*color(MUTED))
    footer = "pinheiro.life"
    pdf.drawRightString(width - margin, 9.2 * mm, footer)

    pdf.showPage()
    pdf.save()
    return output


def main():
    if len(sys.argv) != 4:
        raise SystemExit("Uso: build-product-pdfs.py <dados.json> <raiz> <saida>")
    data_path, root, output_dir = map(Path, sys.argv[1:])
    products = json.loads(data_path.read_text(encoding="utf-8"))
    output_dir.mkdir(parents=True, exist_ok=True)
    register_fonts()
    generated = [build_pdf(product, root, output_dir) for product in products]
    print(f"{len(generated)} PDFs de produto gerados em {output_dir}")


if __name__ == "__main__":
    main()
