'use strict';
// Catálogo editado pela conversa. Fotos, descrição, observações e preço pertencem a cada item.
const categories = [
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'casa-cozinha', label: 'Casa e cozinha' },
  { id: 'relogios', label: 'Relógios' },
  { id: 'esportes', label: 'Esportes' },
  { id: 'moda-fitness', label: 'Moda fitness' },
  { id: 'perfumes', label: 'Perfumes' },
  { id: 'beleza', label: 'Beleza' }
];
const products = [
  {
    "id": "kit-2-vestidos-donna-carioca-p",
    "slug": "kit-2-vestidos-donna-carioca-beach-tennis-fitness-tamanho-p",
    "name": "Kit 2 vestidos Donna Carioca",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 149,
    "image": "assets/produtos/kit-2-vestidos-donna-carioca-p/capa-duas-modelos.png",
    "alt": "Duas mulheres adultas usando vestidos Donna Carioca laranja e verde em uma quadra de beach tennis — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/capa-duas-modelos.png",
        "alt": "Duas mulheres adultas usando vestidos Donna Carioca laranja e verde em uma quadra de beach tennis — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/modelos-de-costas.png",
        "alt": "Duas mulheres adultas vistas de costas usando os vestidos Donna Carioca laranja e verde com alças transpassadas — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/foto-real-laranja-frente.jpg",
        "alt": "Vestido Donna Carioca laranja tamanho P anunciado — foto real da frente"
      },
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/foto-real-laranja-costas.jpg",
        "alt": "Vestido Donna Carioca laranja tamanho P anunciado — foto real das costas e alças transpassadas"
      },
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/foto-real-verde-frente.jpg",
        "alt": "Vestido Donna Carioca verde tamanho P anunciado — foto real da frente"
      },
      {
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/foto-real-verde-costas.jpg",
        "alt": "Vestido Donna Carioca verde tamanho P anunciado — foto real das costas e alças transpassadas"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Tamanho P",
    "tag": "Kit · 2 vestidos",
    "meta": "Donna Carioca · laranja e verde · tamanho P",
    "conditionSummary": "Dois vestidos tamanho P, vendidos somente juntos.",
    "disclosureNote": "As duas primeiras imagens são ambientações criadas com IA a partir das fotos reais. As quatro imagens seguintes mostram os vestidos anunciados.",
    "description": "Kit com dois vestidos esportivos Donna Carioca tamanho P, indicados para beach tennis, tênis, academia e outras atividades. Uma peça é laranja e a outra é verde; ambas têm saia levemente evasê e alças largas estampadas que se cruzam nas costas. Venda somente do kit completo por R$ 149.",
    "conditionNotes": "As duas primeiras imagens apresentam os vestidos em uso, de frente e de costas. As quatro fotos reais da galeria mostram cada peça sem ambientação, incluindo os detalhes das alças transpassadas.",
    "details": [
      ["Marca", "Donna Carioca"],
      ["Composição do kit", "2 vestidos esportivos"],
      ["Tamanho", "P"],
      ["Cores", "Laranja e verde"],
      ["Detalhe", "Alças elásticas transpassadas"],
      ["Formato de venda", "Somente o kit completo"]
    ]
  },
  {
    "id": "vestido-hupi-beach-tennis-rosa-neon-p",
    "slug": "vestido-beach-tennis-hupi-rosa-neon-com-shorts-tamanho-p",
    "name": "Vestido Beach Tennis Hupi com shorts",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 99,
    "image": "assets/produtos/vestido-hupi-beach-tennis-p/capa-modelo-quadra.png",
    "alt": "Mulher adulta usando vestido Hupi rosa neon com shorts em uma quadra — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/vestido-hupi-beach-tennis-p/capa-modelo-quadra.png",
        "alt": "Mulher adulta usando vestido Hupi rosa neon com shorts em uma quadra — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-hupi-beach-tennis-p/foto-real-frente.jpg",
        "alt": "Vestido Hupi rosa neon tamanho P anunciado — foto real da frente"
      },
      {
        "src": "assets/produtos/vestido-hupi-beach-tennis-p/foto-real-costas-shorts.jpg",
        "alt": "Costas do vestido Hupi e shorts rosa neon tamanho P anunciados — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Tamanho P",
    "tag": "Conjunto · vestido + shorts",
    "meta": "Hupi · rosa neon e azul-marinho · tamanho P",
    "conditionSummary": "Tamanho P. Vestido e shorts vendidos juntos.",
    "description": "Conjunto feminino Hupi para beach tennis e outros esportes, composto por vestido em poliamida e shorts combinando. O vestido rosa neon tem painéis laterais azul-marinho e modelagem esportiva. As duas peças são vendidas juntas por R$ 99.",
    "conditionNotes": "As fotos reais da galeria mostram a frente do vestido, as costas e o shorts que acompanha a peça.",
    "details": [
      ["Marca", "Hupi"],
      ["Composição", "Vestido + shorts"],
      ["Tamanho", "P"],
      ["Cores", "Rosa neon e azul-marinho"],
      ["Material", "Poliamida"],
      ["Formato de venda", "Somente o conjunto completo"]
    ]
  },
  {
    "id": "adega-electrolux-acs34",
    "slug": "adega-climatizada-electrolux-acs34-34-garrafas",
    "name": "Adega climatizada Electrolux ACS34",
    "type": "single",
    "category": "Adegas e bebidas",
    "categoryId": "casa-cozinha",
    "price": 1490,
    "image": "assets/produtos/adega-electrolux-acs34/capa-ambiente.png",
    "alt": "Adega climatizada Electrolux ACS34 em uma sala de jantar contemporânea — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/adega-electrolux-acs34/capa-ambiente.png",
        "alt": "Adega Electrolux ACS34 com garrafas em um ambiente contemporâneo — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-01-angulo.jpg",
        "alt": "Adega Electrolux ACS34 anunciada — vista frontal em ângulo"
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-02-lateral.jpg",
        "alt": "Adega Electrolux ACS34 anunciada — vista lateral com marcas de uso"
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-03-painel.jpg",
        "alt": "Painel touch e display de temperatura da adega Electrolux ACS34"
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-04-etiqueta.jpg",
        "alt": "Etiqueta da adega Electrolux ACS34 com volume de 96 litros e tensão de 220 V"
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-05-interior.jpg",
        "alt": "Interior da adega Electrolux ACS34 com prateleiras removíveis"
      },
      {
        "src": "assets/produtos/adega-electrolux-acs34/foto-real-06-tampo.jpg",
        "alt": "Tampo de vidro da adega Electrolux ACS34"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · funcionando perfeitamente",
    "tag": "Avulso · 34 garrafas",
    "meta": "96 L · 220 V · painel touch",
    "conditionSummary": "Funcionando perfeitamente, com marcas de uso apenas na lateral.",
    "description": "Adega climatizada Electrolux ACS34 com capacidade para até 34 garrafas, painel eletrônico touch, iluminação interna e prateleiras removíveis. Modelo vertical preto com acabamento em inox, volume total de 96 litros e tensão de 220 V.",
    "conditionNotes": "Produto usado e funcionando perfeitamente. Apresenta marcas de uso apenas na lateral, visíveis nas fotos reais da galeria.",
    "details": [
      ["Marca", "Electrolux"],
      ["Modelo", "ACS34"],
      ["Capacidade", "Até 34 garrafas"],
      ["Volume total", "96 litros"],
      ["Faixa de temperatura", "5 °C a 18 °C"],
      ["Controle", "Painel eletrônico touch"],
      ["Voltagem", "220 V"],
      ["Dimensões", "48,5 × 85,3 × 44 cm"],
      ["Condição", "Usada, funcionando perfeitamente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "kit-pipoqueira-waffle",
    "slug": "kit-pipoqueira-eletrica-maquina-de-waffle",
    "name": "Kit pipoqueira elétrica + máquina de waffle",
    "type": "kit",
    "category": "Eletroportáteis",
    "categoryId": "casa-cozinha",
    "price": 99,
    "image": "assets/produtos/kit-pipoqueira-waffle/capa-cozinha.png",
    "alt": "Pipoqueira elétrica vermelha e máquina de waffle vermelha em uma cozinha — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/kit-pipoqueira-waffle/capa-cozinha.png",
        "alt": "Pipoqueira elétrica e máquina de waffle com pipoca e waffles em uma cozinha — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-pipoqueira-waffle/foto-real-frontal.jpg",
        "alt": "Pipoqueira elétrica Kian e máquina de waffle abertas — foto real"
      },
      {
        "src": "assets/produtos/kit-pipoqueira-waffle/foto-real-superior.jpg",
        "alt": "Vista superior da pipoqueira elétrica e da máquina de waffle fechada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usados · funcionando",
    "tag": "Kit · 2 eletroportáteis",
    "meta": "Pipoqueira + máquina de waffle · 110 V",
    "conditionSummary": "Ambos funcionando. Pipoqueira usada apenas uma vez.",
    "description": "Kit com uma pipoqueira elétrica Kian e uma máquina de waffle vermelha. Os dois aparelhos são vendidos juntos por R$ 99.",
    "conditionNotes": "Ambos os aparelhos estão funcionando e são 110 V. A pipoqueira foi usada apenas uma vez. Venda somente do kit completo.",
    "details": [
      ["Composição", "Pipoqueira elétrica + máquina de waffle"],
      ["Pipoqueira", "Kian · usada 1 vez"],
      ["Voltagem", "110 V"],
      ["Funcionamento", "Ambos funcionando"],
      ["Formato de venda", "Somente o kit completo"]
    ]
  },
  {
    "id": "apple-airpods-max-prata",
    "slug": "apple-airpods-max-prata-com-smart-case",
    "name": "Apple AirPods Max prata",
    "type": "single",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 590,
    "image": "assets/produtos/apple-airpods-max-prata/capa-mulher-sorrindo.png",
    "alt": "Mulher sorrindo usando Apple AirPods Max prata e branco — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/apple-airpods-max-prata/capa-mulher-sorrindo.png",
        "alt": "Mulher sorrindo usando Apple AirPods Max prata e branco — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/apple-airpods-max-prata/IMG_4659.jpg",
        "alt": "Apple AirPods Max prata e branco anunciado — vista frontal real"
      },
      {
        "src": "assets/produtos/apple-airpods-max-prata/IMG_4660.jpg",
        "alt": "Apple AirPods Max prata e branco ao lado do Smart Case — foto real"
      },
      {
        "src": "assets/produtos/apple-airpods-max-prata/IMG_4661.jpg",
        "alt": "Almofadas, arco e Smart Case do Apple AirPods Max — foto real"
      },
      {
        "src": "assets/produtos/apple-airpods-max-prata/IMG_4662.jpg",
        "alt": "Apple AirPods Max guardado no Smart Case — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · sinais de uso",
    "tag": "Avulso · com Smart Case",
    "meta": "Prata e branco · headphone over-ear",
    "conditionSummary": "Usado, com sinais de uso visíveis nas partes claras e nas conchas.",
    "disclosureNote": "Capa criada com IA; as demais imagens são fotos reais. O preço foi informado pelo proprietário e os sinais de uso foram descritos a partir das fotos.",
    "description": "Apple AirPods Max na combinação prata e branco, com estrutura over-ear e Smart Case. Um headphone de visual marcante para música, chamadas e uso no dia a dia, anunciado por R$ 590.",
    "conditionNotes": "Produto usado com sinais de uso e funcionando perfeitamente. O Smart Case mostrado nas fotos acompanha o produto.",
    "details": [
      ["Marca", "Apple"],
      ["Linha", "AirPods Max"],
      ["Cor", "Prata e branco"],
      ["Formato", "Over-ear"],
      ["Acompanha", "Smart Case"],
      ["Condição", "Usado, com sinais de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "ubiquiti-unifi-u6-plus",
    "slug": "access-point-ubiquiti-unifi-u6-plus-com-fonte-poe",
    "name": "Access Point Ubiquiti UniFi U6+",
    "type": "single",
    "category": "Rede e conectividade",
    "categoryId": "tecnologia",
    "price": 490,
    "priceSuffix": "cada",
    "quantity": 2,
    "image": "assets/produtos/ubiquiti-unifi-u6-plus/produto-oficial.png",
    "alt": "Access point Ubiquiti UniFi U6+ branco — foto oficial de referência do mesmo modelo",
    "photos": [
      {
        "src": "assets/produtos/ubiquiti-unifi-u6-plus/produto-oficial.png",
        "alt": "Access point Ubiquiti UniFi U6+ branco — foto oficial de referência do mesmo modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/ubiquiti-unifi-u6-plus/instalado-no-teto-escala-real.png",
        "alt": "Ubiquiti UniFi U6+ instalado em teto branco de uma sala contemporânea — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "contain",
    "referenceCover": true,
    "referencePhotoSource": {
      "label": "Ubiquiti",
      "url": "https://store.ui.com/us/en/category/wifi-flagship/products/u6-plus?variant=u6-us"
    },
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando perfeitamente",
    "tag": "Avulso · 2 unidades",
    "meta": "Wi-Fi 6 · fonte PoE incluída · R$ 490 cada",
    "conditionSummary": "Duas unidades em perfeito funcionamento, com fonte PoE.",
    "description": "Access point Ubiquiti UniFi U6+ com Wi-Fi 6, indicado para ampliar a cobertura de redes residenciais ou de pequenos escritórios. Há duas unidades disponíveis, vendidas individualmente por R$ 490 cada. Cada unidade acompanha sua fonte/injetor PoE.",
    "conditionNotes": "As duas unidades são usadas e estão em perfeito funcionamento. Como permanecem instaladas no momento, a foto principal é uma referência oficial do mesmo modelo e a segunda imagem simula o produto montado no teto.",
    "details": [
      ["Marca", "Ubiquiti"],
      ["Linha", "UniFi"],
      ["Modelo", "U6+"],
      ["Padrão Wi-Fi", "Wi-Fi 6"],
      ["Cobertura indicada pelo fabricante", "Até 140 m²"],
      ["Alimentação", "PoE"],
      ["Acompanha", "Fonte/injetor PoE"],
      ["Quantidade disponível", "2 unidades"],
      ["Preço", "R$ 490 por unidade"],
      ["Condição", "Usado, em perfeito funcionamento"],
      ["Formato de venda", "Por unidade"]
    ]
  },
  {
    "id": "jaeger-lecoultre-atmos-elysee-540",
    "slug": "relogio-jaeger-lecoultre-atmos-elysee-calibre-540",
    "name": "Relógio Jaeger-LeCoultre Atmos Élysée",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 12900,
    "image": "assets/produtos/jaeger-lecoultre-atmos-elysee-540/capa-referencia-correta.jpg",
    "alt": "Jaeger-LeCoultre Atmos calibre 540 com anel branco de algarismos romanos e centro aberto — foto de referência do mesmo modelo",
    "photos": [
      {
        "src": "assets/produtos/jaeger-lecoultre-atmos-elysee-540/capa-referencia-correta.jpg",
        "alt": "Jaeger-LeCoultre Atmos calibre 540 com anel branco e centro aberto — foto de referência do mesmo modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/jaeger-lecoultre-atmos-elysee-540/relogio-real.jpg",
        "alt": "Relógio Jaeger-LeCoultre Atmos Élysée anunciado — foto real"
      },
      {
        "src": "assets/produtos/jaeger-lecoultre-atmos-elysee-540/calibre-540.jpg",
        "alt": "Detalhe do movimento suíço de 13 rubis e da marcação calibre 540 — foto real"
      },
      {
        "src": "assets/produtos/jaeger-lecoultre-atmos-elysee-540/numero-serie-672387.jpg",
        "alt": "Número de série 672387 gravado no mecanismo — foto real"
      }
    ],
    "imageFit": "contain",
    "referenceCover": true,
    "referencePhotoSource": {
      "label": "Piers Motley Auctions",
      "url": "https://www.piersmotleyauctions.co.uk/catalogue/lot/6e2b2f353c7e130b0a31928a2eb31e4e/fbd436970b00da2659ddaf1531707ff1/single-source-unreserved-antique-collecables-sale-lot-278/"
    },
    "isDemo": false,
    "status": "available",
    "condition": "Usado · impecável",
    "tag": "Avulso · colecionável",
    "meta": "Calibre 540 · nº 672387 · década de 1990",
    "conditionSummary": "Impecável e em funcionamento.",
    "description": "Relógio de mesa suíço Jaeger-LeCoultre Atmos Élysée, calibre 540, com movimento atmosférico de 13 rubis e número de série 672387. A caixa de vidro e latão dourado revela o mecanismo, complementado pelo mostrador branco com algarismos romanos e ponteiros azulados. Peça produzida no início da década de 1990, anunciada por R$ 12.900.",
    "conditionNotes": "Peça usada, em estado impecável e em funcionamento. Não acompanha caixa nem documentos. Para operar corretamente, o Atmos deve permanecer perfeitamente nivelado e com o pêndulo destravado. Durante qualquer transporte, o pêndulo deve permanecer travado.",
    "details": [
      [
        "Marca",
        "Jaeger-LeCoultre"
      ],
      [
        "Linha",
        "Atmos Élysée"
      ],
      [
        "Calibre",
        "540"
      ],
      [
        "Movimento",
        "Mecânico atmosférico"
      ],
      [
        "Rubis",
        "13"
      ],
      [
        "Número de série",
        "672387"
      ],
      [
        "Período estimado",
        "1992–1993"
      ],
      [
        "Caixa",
        "Vidro e latão dourado"
      ],
      [
        "Acompanha",
        "Somente o relógio"
      ],
      [
        "Condição",
        "Impecável e em funcionamento"
      ],
      [
        "Formato de venda",
        "Produto avulso"
      ]
    ]
  },
  {
    "id": "breitling-j-class-d53067",
    "slug": "breitling-j-class-d53067-vintage",
    "name": "Breitling J-Class D53067 vintage",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 7900,
    "image": "assets/produtos/breitling-d53067/capa-travertino.jpg",
    "alt": "Breitling J-Class D53067 sobre travertino — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/breitling-d53067/capa-travertino.jpg",
        "alt": "Breitling J-Class D53067 sobre travertino — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · vintage",
    "tag": "Avulso · vintage",
    "meta": "Cronógrafo quartz · mostrador azul · bicolor",
    "conditionSummary": "Relógio usado, modelo vintage.",
    "description": "Relógio Breitling J-Class vintage, referência D53067 informada pelo proprietário. Cronógrafo quartz com mostrador azul, indicação de data e acabamento bicolor, por R$ 7.900.",
    "conditionNotes": "Produto usado. A imagem ambientada preserva o relógio apresentado na foto original, incluindo o acabamento bicolor, o mostrador azul e os sinais visíveis da peça.",
    "details": [
      [
        "Marca",
        "Breitling"
      ],
      [
        "Linha",
        "J-Class"
      ],
      [
        "Referência informada",
        "D53067"
      ],
      [
        "Movimento",
        "Quartz"
      ],
      [
        "Mostrador",
        "Azul"
      ],
      [
        "Condição",
        "Usado · vintage"
      ],
      [
        "Formato de venda",
        "Produto avulso"
      ]
    ],
    "referenceUrl": "https://watchcharts.com/watch_model/25902-breitling-j-class-d53067/overview",
    "illustratedCover": true
  },
  {
    "id": "kit-perfumes-importados",
    "slug": "kit-perfumes-importados",
    "name": "Kit de perfumes importados",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 290,
    "image": "assets/produtos/kit-perfumes-importados/capa-travertino.jpg",
    "alt": "Kit com perfumes Abercrombie & Fitch, Tommy Hilfiger Impact e Hollister California sobre travertino — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/kit-perfumes-importados/capa-travertino.jpg",
        "alt": "Kit com três perfumes importados sobre travertino — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-perfumes-importados/4626.jpg",
        "alt": "Os três frascos do kit — foto real"
      },
      {
        "src": "assets/produtos/kit-perfumes-importados/4627.jpg",
        "alt": "Frasco Abercrombie & Fitch com aproximadamente 15% — foto real"
      },
      {
        "src": "assets/produtos/kit-perfumes-importados/4628.jpg",
        "alt": "Frasco Hollister California com aproximadamente 100% — foto real"
      },
      {
        "src": "assets/produtos/kit-perfumes-importados/4629.jpg",
        "alt": "Frasco Tommy Hilfiger Impact com aproximadamente 20% — foto real"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "isTest": true,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Abercrombie & Fitch, Hollister e Tommy Hilfiger",
    "conditionSummary": "Conteúdos aproximados de 15%, 100% e 20%. Venda somente do kit completo.",
    "description": "Kit com três perfumes importados: Abercrombie & Fitch, Hollister California e Tommy Hilfiger Impact. Os três frascos são vendidos juntos por R$ 290; não há venda separada.",
    "conditionNotes": "Produtos abertos. Conteúdos aproximados informados pelo proprietário: Abercrombie & Fitch com 15%, Hollister com 100% e Tommy Hilfiger Impact com 20%. Confira os frascos, níveis e sinais de uso nas fotos reais. Este anúncio é um teste e a venda é somente do kit completo.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Abercrombie & Fitch",
        "Aprox. 15%"
      ],
      [
        "Hollister California",
        "Aprox. 100%"
      ],
      [
        "Tommy Hilfiger Impact",
        "Aprox. 20%"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ],
      [
        "Status",
        "Anúncio de teste"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "drop-shot-spektro-7-0-bt",
    "slug": "raquete-beach-tennis-drop-shot-spektro-7-0-bt",
    "name": "Raquete Drop Shot Spektro 7.0 BT",
    "type": "single",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 790,
    "image": "assets/produtos/drop-shot-spektro-7-0-bt/capa-praia.jpg",
    "alt": "Raquete de beach tennis Drop Shot Spektro 7.0 BT com grip branco na areia e duas bolinhas — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/capa-praia.jpg",
        "alt": "Raquete Drop Shot Spektro 7.0 BT com grip branco na areia e duas bolinhas — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/4632.jpg",
        "alt": "Raquete Drop Shot Spektro 7.0 BT inteira — foto real"
      },
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/4633.jpg",
        "alt": "Perfil e acabamento lateral da raquete — foto real"
      },
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/4634.jpg",
        "alt": "Borda da raquete com marcas de uso — foto real"
      },
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/4635.jpg",
        "alt": "Face da Drop Shot Spektro 7.0 BT — foto real"
      },
      {
        "src": "assets/produtos/drop-shot-spektro-7-0-bt/4636.jpg",
        "alt": "Capinha Drop Shot incluída — foto real"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · com capinha",
    "tag": "Avulso · com capinha",
    "meta": "Drop Shot · LCP Spektro 7.0 BT",
    "conditionSummary": "Usada, com marcas de uso visíveis. Acompanha capinha Drop Shot e grip branco novo.",
    "description": "Raquete de beach tennis Drop Shot LCP Spektro 7.0 BT, em preto com detalhes turquesa, rosa e cobre. Vendida por R$ 790 com grip branco novo e a capinha Drop Shot mostrada nas fotos.",
    "conditionNotes": "Produto usado. Há marcas de uso visíveis na face e nas bordas, conforme as fotos reais. A capinha também apresenta sinais de uso e está incluída na venda. As indicações impressas na lateral informam peso de 330–350 g e balanço médio.",
    "details": [
      [
        "Marca",
        "Drop Shot"
      ],
      [
        "Modelo",
        "LCP Spektro 7.0 BT"
      ],
      [
        "Modalidade",
        "Beach tennis"
      ],
      [
        "Peso indicado",
        "330–350 g"
      ],
      [
        "Balanço indicado",
        "Médio"
      ],
      [
        "Acompanha",
        "Capinha Drop Shot e grip branco novo"
      ],
      [
        "Condição",
        "Usada, com marcas de uso"
      ],
      [
        "Formato de venda",
        "Produto avulso"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "top-mulher-elastica-vinho",
    "slug": "top-esportivo-mulher-elastica-vinho-tamanho-p",
    "name": "Top esportivo Mulher Elástica",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 79,
    "image": "assets/produtos/top-mulher-elastica-vinho/capa-linho.jpg",
    "alt": "Top esportivo Mulher Elástica vinho sobre linho claro — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/top-mulher-elastica-vinho/capa-linho.jpg",
        "alt": "Top esportivo Mulher Elástica vinho sobre linho claro — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · tamanho P",
    "tag": "Avulso · novo",
    "meta": "Tamanho P · vinho · zíper frontal",
    "conditionSummary": "Produto novo, tamanho P.",
    "description": "Top esportivo feminino da Mulher Elástica, na cor vinho, com modelagem sem mangas, recortes contrastantes e zíper frontal com puxador circular. Produto novo, tamanho P, por R$ 79.",
    "conditionNotes": "Produto novo. A imagem mostra a peça, a cor, as costuras, o zíper frontal e a etiqueta Mulher Elástica.",
    "details": [
      [
        "Marca",
        "Mulher Elástica"
      ],
      [
        "Tamanho",
        "P"
      ],
      [
        "Cor",
        "Vinho"
      ],
      [
        "Detalhe",
        "Zíper frontal"
      ],
      [
        "Condição",
        "Novo"
      ],
      [
        "Formato de venda",
        "Produto avulso"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-shorts-under-armour-p",
    "slug": "kit-2-shorts-femininos-under-armour-tamanho-p",
    "name": "Kit com 2 shorts Under Armour",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 99,
    "image": "assets/produtos/kit-shorts-under-armour-p/capa-modelo-corrigida.jpg",
    "alt": "Mulher adulta usando o short verde do kit com top branco e short cinza ao lado — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/kit-shorts-under-armour-p/capa-modelo-corrigida.jpg",
        "alt": "Mulher adulta usando o short verde do kit com top branco e short cinza ao lado — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-shorts-under-armour-p/modelo-short-cinza.jpg",
        "alt": "Mulher adulta olhando para a câmera usando o short cinza do kit com top branco e short verde ao lado — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-shorts-under-armour-p/capa-linho.jpg",
        "alt": "Os dois shorts Under Armour do kit sobre linho claro — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente novos · tamanho P",
    "tag": "Kit · 2 shorts",
    "meta": "Under Armour · tamanho P · cinza e verde",
    "conditionSummary": "Praticamente novos, tamanho P. Venda somente do kit completo.",
    "description": "Kit com dois shorts femininos Under Armour, ambos tamanho P: um cinza com detalhes brancos e outro verde com detalhes brancos. O conjunto completo é vendido por R$ 99; não há venda separada.",
    "conditionNotes": "Produtos praticamente novos. As imagens mostram cada short no corpo com top branco e as duas peças juntas, deixando visíveis as cores, os recortes e o acabamento do conjunto.",
    "details": [
      [
        "Marca",
        "Under Armour"
      ],
      [
        "Composição",
        "2 shorts femininos"
      ],
      [
        "Tamanho",
        "P"
      ],
      [
        "Cores",
        "Cinza e verde"
      ],
      [
        "Condição",
        "Praticamente novos"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "conjunto-reebok-rosa-p",
    "slug": "conjunto-reebok-top-short-rosa-tamanho-p",
    "name": "Conjunto Reebok: top + short",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 99,
    "image": "assets/produtos/conjunto-reebok-rosa-p/capa-modelo.jpg",
    "alt": "Mulher adulta usando conjunto Reebok rosa com top e short — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/conjunto-reebok-rosa-p/capa-modelo.jpg",
        "alt": "Mulher adulta usando conjunto Reebok rosa com top e short — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-reebok-rosa-p/original-ambientada-linho.jpg",
        "alt": "Conjunto Reebok real com top e short disposto sobre linho claro em banco de madeira — foto original ambientada com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado 1 vez · tamanho P",
    "tag": "Conjunto · 2 peças",
    "meta": "Reebok · tamanho P · rosa",
    "conditionSummary": "Top e short usados apenas uma vez. Venda somente do conjunto.",
    "description": "Conjunto fitness feminino Reebok tamanho P, composto por top nadador e short esportivo na cor rosa. As duas peças são vendidas juntas por R$ 99; não há venda separada.",
    "conditionNotes": "Conjunto usado apenas uma vez. A primeira imagem mostra as peças no corpo; a segunda preserva o conjunto real da foto original e altera somente o ambiente. As imagens mostram a cor, a modelagem, os logos e o acabamento das duas peças.",
    "details": [
      [
        "Marca",
        "Reebok"
      ],
      [
        "Composição",
        "Top + short"
      ],
      [
        "Tamanho",
        "P"
      ],
      [
        "Cor",
        "Rosa"
      ],
      [
        "Condição",
        "Usado apenas 1 vez"
      ],
      [
        "Formato de venda",
        "Somente o conjunto completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "conjunto-calvin-klein-vermelho-p",
    "slug": "conjunto-fitness-calvin-klein-vermelho-tamanho-p",
    "name": "Conjunto fitness Calvin Klein",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 149,
    "image": "assets/produtos/conjunto-calvin-klein-vermelho-p/capa-modelo.jpg",
    "alt": "Mulher adulta usando conjunto fitness Calvin Klein vermelho com top e legging — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/conjunto-calvin-klein-vermelho-p/capa-modelo.jpg",
        "alt": "Mulher adulta usando conjunto fitness Calvin Klein vermelho com top e legging — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-calvin-klein-vermelho-p/original-ambientada-tapete.jpg",
        "alt": "Conjunto Calvin Klein real com top e legging disposto sobre tapete de exercício — foto original ambientada com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente sem uso · tamanho P",
    "tag": "Conjunto · 2 peças",
    "meta": "Calvin Klein Performance · tamanho P · vermelho",
    "conditionSummary": "Praticamente sem uso, tamanho P. Venda somente do conjunto.",
    "description": "Conjunto fitness feminino Calvin Klein Performance tamanho P, composto por top nadador e legging vermelhos. As duas peças são vendidas juntas por R$ 149; não há venda separada.",
    "conditionNotes": "Conjunto praticamente sem uso. A primeira imagem mostra as peças no corpo; a segunda preserva o conjunto real da foto original e altera somente o ambiente.",
    "details": [
      [
        "Marca",
        "Calvin Klein Performance"
      ],
      [
        "Composição",
        "Top + legging"
      ],
      [
        "Tamanho",
        "P"
      ],
      [
        "Cor",
        "Vermelho"
      ],
      [
        "Condição",
        "Praticamente sem uso"
      ],
      [
        "Formato de venda",
        "Somente o conjunto completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "conjunto-nola-activewear-p",
    "slug": "conjunto-fitness-nola-activewear-tamanho-p",
    "name": "Conjunto fitness Nola Activewear",
    "type": "kit",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 149,
    "image": "assets/produtos/conjunto-nola-activewear-p/capa-modelo.jpg",
    "alt": "Mulher adulta usando conjunto fitness Nola Activewear coral e azul-marinho com top e legging — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/conjunto-nola-activewear-p/capa-modelo.jpg",
        "alt": "Mulher adulta usando conjunto fitness Nola Activewear coral e azul-marinho com top e legging — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-nola-activewear-p/original-ambientada-yoga.jpg",
        "alt": "Conjunto Nola Activewear real com top e legging disposto sobre tapete de yoga — foto original ambientada com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · tamanho P",
    "tag": "Conjunto · 2 peças",
    "meta": "Nola Activewear · tamanho P · coral e azul-marinho",
    "conditionSummary": "Nunca usado, tamanho P. Venda somente do conjunto.",
    "description": "Conjunto fitness feminino Nola Activewear tamanho P, composto por top cropped coral com detalhes azul-marinho e legging azul-marinho com painéis laterais coral. As duas peças são vendidas juntas por R$ 149; não há venda separada.",
    "conditionNotes": "Conjunto novo, nunca usado. A primeira imagem mostra as peças no corpo; a segunda preserva o conjunto real da foto original e altera somente o ambiente. As imagens mostram as cores, a modelagem, os emblemas e os painéis laterais das duas peças.",
    "details": [
      [
        "Marca",
        "Nola Activewear"
      ],
      [
        "Composição",
        "Top + legging"
      ],
      [
        "Tamanho",
        "P"
      ],
      [
        "Cores",
        "Coral e azul-marinho"
      ],
      [
        "Condição",
        "Novo · nunca usado"
      ],
      [
        "Formato de venda",
        "Somente o conjunto completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-loreal-age-perfect",
    "slug": "kit-loreal-paris-age-perfect-dia-noite-olhos",
    "name": "Kit L'Oréal Paris Age Perfect",
    "type": "kit",
    "category": "Cuidados pessoais",
    "categoryId": "beleza",
    "price": 149,
    "image": "assets/produtos/kit-loreal-age-perfect/capa-banheiro.jpg",
    "alt": "Kit L'Oréal Paris Age Perfect com cremes de dia, noite e olhos em bancada de banheiro — composição ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/kit-loreal-age-perfect/capa-banheiro.jpg",
        "alt": "Kit L'Oréal Paris Age Perfect com cremes de dia, noite e olhos em bancada de banheiro — composição ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-loreal-age-perfect/caixa-real-ambientada-banheiro.jpg",
        "alt": "Caixa real lacrada do kit L'Oréal Paris Age Perfect sobre bancada de travertino — foto original ambientada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-loreal-age-perfect/foto-real-frente-otimizada.jpg",
        "alt": "Caixa real lacrada do kit L'Oréal Paris Age Perfect — vista frontal"
      },
      {
        "src": "assets/produtos/kit-loreal-age-perfect/foto-real-angulo-otimizada.jpg",
        "alt": "Caixa real lacrada do kit L'Oréal Paris Age Perfect — vista em ângulo"
      },
      {
        "src": "assets/produtos/kit-loreal-age-perfect/foto-real-lateral-texto-otimizada.jpg",
        "alt": "Caixa real do kit L'Oréal Paris Age Perfect — lateral com composição e modo de uso"
      },
      {
        "src": "assets/produtos/kit-loreal-age-perfect/foto-real-lateral-lacre-otimizada.jpg",
        "alt": "Caixa real do kit L'Oréal Paris Age Perfect — lateral e lacre"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo e lacrado",
    "tag": "Kit · 3 produtos",
    "meta": "L'Oréal Paris · 115 ml no total · lacrado",
    "conditionSummary": "Novo, sem uso e com a caixa lacrada.",
    "description": "Kit completo L'Oréal Paris Age Perfect para pele madura, com creme diurno de 50 ml, creme noturno de 50 ml e creme para a área dos olhos de 15 ml. A caixa destaca uma rotina anti-flacidez e anti-manchas. Venda somente do kit lacrado por R$ 149.",
    "conditionNotes": "Produto novo, sem uso e com a caixa lacrada. A capa usa fotos comerciais dos potes em uma composição ilustrativa. A segunda imagem preserva a caixa real lacrada e altera somente o ambiente; as quatro fotos seguintes mostram a embalagem recebida sem ambientação.",
    "details": [
      [
        "Marca",
        "L'Oréal Paris"
      ],
      [
        "Linha",
        "Age Perfect"
      ],
      [
        "Conteúdo",
        "Creme dia + creme noite + creme para olhos"
      ],
      [
        "Volumes",
        "50 ml + 50 ml + 15 ml"
      ],
      [
        "Indicação da embalagem",
        "Pele madura · 50+"
      ],
      [
        "Condição",
        "Novo e lacrado"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "jbl-partybox-1000",
    "name": "JBL PartyBox 1000",
    "type": "single",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 2000,
    "image": "assets/produtos/jbl-partybox-1000/capa-sala.jpg",
    "alt": "JBL PartyBox 1000 em sala — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/jbl-partybox-1000/capa-sala.jpg",
        "alt": "JBL PartyBox 1000 em sala — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jbl-partybox-1000/0880.jpg",
        "alt": "JBL PartyBox 1000 — vista frontal"
      },
      {
        "src": "assets/produtos/jbl-partybox-1000/0881.jpg",
        "alt": "JBL PartyBox 1000 — vista lateral com marcas de uso"
      },
      {
        "src": "assets/produtos/jbl-partybox-1000/0882.jpg",
        "alt": "JBL PartyBox 1000 — vista traseira e conexões"
      },
      {
        "src": "assets/produtos/jbl-partybox-1000/0883.jpg",
        "alt": "JBL PartyBox 1000 — outra lateral com avarias físicas"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · com avarias",
    "tag": "Avulso · usado",
    "meta": "Caixa de som Bluetooth · preta",
    "conditionSummary": "Avarias físicas. Esquenta e desliga após uso prolongado em volume alto.",
    "description": "Caixa de som JBL PartyBox 1000 com conexão Bluetooth, na cor preta. Produto avulso usado. As quatro fotos mostram a unidade à venda, de frente, de trás e dos dois lados.",
    "conditionNotes": "Produto usado, com avarias físicas e marcas de uso, conforme as fotos. Ao tocar por muito tempo em volume muito alto, a caixa esquenta e desliga.",
    "details": [
      [
        "Marca",
        "JBL"
      ],
      [
        "Modelo",
        "PartyBox 1000"
      ],
      [
        "Cor",
        "Preta"
      ],
      [
        "Condição",
        "Usado, com avarias"
      ],
      [
        "Formato de venda",
        "Produto avulso"
      ]
    ],
    "referenceUrl": "https://www.mercadolivre.com.br/alto-falante-bluetooth-compacto-jbl-partybox-1000-1100w-preto-220v/p/MLB2106576029",
    "video": {
      "src": "assets/produtos/jbl-partybox-1000/funcionando.mp4",
      "poster": "assets/produtos/jbl-partybox-1000/video-capa.jpg",
      "label": "Vídeo da JBL PartyBox 1000 em funcionamento",
      "duration": 13.4
    },
    "illustratedCover": true
  },
  {
    "id": "yonex-vcore-98-laranja",
    "name": "Yonex VCORE 98 · cordas laranja",
    "type": "single",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 1000,
    "image": "assets/produtos/yonex-vcore-98/capa-laranja-quadra-rapida.jpg",
    "alt": "Yonex VCORE 98 com cordas laranja na quadra rápida — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/yonex-vcore-98/capa-laranja-quadra-rapida.jpg",
        "alt": "Yonex VCORE 98 com cordas laranja na quadra rápida — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0888.jpg",
        "alt": "Yonex VCORE 98 com encordoamento laranja — vista frontal"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0891.jpg",
        "alt": "Detalhe do aro e encordoamento laranja"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0893.jpg",
        "alt": "Detalhes dos quadros das duas raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0894.jpg",
        "alt": "Bases dos cabos e empunhaduras das raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0895.jpg",
        "alt": "Gravações da empunhadura 4 3/8 nas duas raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0897.jpg",
        "alt": "Especificações gravadas: 305 g, balanço 315 mm e 27 polegadas"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · boa condição",
    "tag": "Avulso · 1 raquete",
    "meta": "R$ 1.000 cada · R$ 1.800 o par",
    "conditionSummary": "Usada, em boa condição.",
    "description": "Raquete de tênis Yonex VCORE 98 preta, com encordoamento laranja. Valor de R$ 1.000 por esta unidade. Também disponível junto com a raquete de cordas claras e roxas por R$ 1.800 o par.",
    "conditionNotes": "Raquete usada, em boa condição. As fotos em conjunto mostram também a outra unidade, vendida separadamente ou no kit.",
    "details": [
      [
        "Marca",
        "Yonex"
      ],
      [
        "Modelo",
        "VCORE 98"
      ],
      [
        "Cor",
        "Preta"
      ],
      [
        "Cabeça",
        "98 pol²"
      ],
      [
        "Peso indicado no quadro",
        "305 g"
      ],
      [
        "Empunhadura",
        "L3 · 4 3/8"
      ],
      [
        "Formato de venda",
        "1 raquete"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "yonex-vcore-98-clara",
    "name": "Yonex VCORE 98 · cordas claras e roxas",
    "type": "single",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 1000,
    "image": "assets/produtos/yonex-vcore-98/capa-clara-quadra-rapida.jpg",
    "alt": "Yonex VCORE 98 com cordas claras e roxas na quadra rápida — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/yonex-vcore-98/capa-clara-quadra-rapida.jpg",
        "alt": "Yonex VCORE 98 com cordas claras e roxas na quadra rápida — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0889.jpg",
        "alt": "Yonex VCORE 98 com encordoamento claro e roxo — vista frontal"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0892.jpg",
        "alt": "Detalhe do aro e encordoamento claro e roxo"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0890.jpg",
        "alt": "Detalhes das laterais das duas raquetes Yonex"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0894.jpg",
        "alt": "Bases dos cabos e empunhaduras das raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0895.jpg",
        "alt": "Gravações da empunhadura 4 3/8 nas duas raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0897.jpg",
        "alt": "Especificações gravadas: 305 g, balanço 315 mm e 27 polegadas"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · boa condição",
    "tag": "Avulso · 1 raquete",
    "meta": "R$ 1.000 cada · R$ 1.800 o par",
    "conditionSummary": "Usada, em boa condição.",
    "description": "Raquete de tênis Yonex VCORE 98 preta, com encordoamento claro e roxo. Valor de R$ 1.000 por esta unidade. Também disponível junto com a raquete de cordas laranja por R$ 1.800 o par.",
    "conditionNotes": "Raquete usada, em boa condição. As fotos em conjunto mostram também a outra unidade, vendida separadamente ou no kit.",
    "details": [
      [
        "Marca",
        "Yonex"
      ],
      [
        "Modelo",
        "VCORE 98"
      ],
      [
        "Cor",
        "Preta"
      ],
      [
        "Cabeça",
        "98 pol²"
      ],
      [
        "Peso indicado no quadro",
        "305 g"
      ],
      [
        "Empunhadura",
        "L3 · 4 3/8"
      ],
      [
        "Formato de venda",
        "1 raquete"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "yonex-vcore-98-par",
    "name": "Par de raquetes Yonex VCORE 98",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 1800,
    "image": "assets/produtos/yonex-vcore-98/capa-par-quadra-rapida.jpg",
    "alt": "Par de Yonex VCORE 98 na quadra rápida — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/yonex-vcore-98/capa-par-quadra-rapida.jpg",
        "alt": "Par de Yonex VCORE 98 na quadra rápida — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0887.jpg",
        "alt": "Par de raquetes Yonex VCORE 98 pretas"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0888.jpg",
        "alt": "Yonex VCORE 98 com encordoamento laranja — vista frontal"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0889.jpg",
        "alt": "Yonex VCORE 98 com encordoamento claro e roxo — vista frontal"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0890.jpg",
        "alt": "Detalhes das laterais das duas raquetes Yonex"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0891.jpg",
        "alt": "Detalhe do aro e encordoamento laranja"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0892.jpg",
        "alt": "Detalhe do aro e encordoamento claro e roxo"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0893.jpg",
        "alt": "Detalhes dos quadros das duas raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0894.jpg",
        "alt": "Bases dos cabos e empunhaduras das raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0895.jpg",
        "alt": "Gravações da empunhadura 4 3/8 nas duas raquetes"
      },
      {
        "src": "assets/produtos/yonex-vcore-98/0897.jpg",
        "alt": "Especificações gravadas: 305 g, balanço 315 mm e 27 polegadas"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usadas · boa condição",
    "tag": "Kit · 2 raquetes",
    "meta": "R$ 1.000 cada · R$ 1.800 o par",
    "conditionSummary": "Usadas, em boa condição.",
    "description": "Kit com as duas raquetes de tênis Yonex VCORE 98 pretas das fotos: uma com encordoamento laranja e outra com encordoamento claro e roxo. R$ 1.800 pelo par, com economia de R$ 200 em relação à compra avulsa. São as mesmas unidades dos anúncios individuais.",
    "conditionNotes": "Raquetes usadas, em boa condição. As fotos mostram as unidades à venda.",
    "details": [
      [
        "Marca",
        "Yonex"
      ],
      [
        "Modelo",
        "VCORE 98"
      ],
      [
        "Cor",
        "Preta"
      ],
      [
        "Cabeça",
        "98 pol²"
      ],
      [
        "Peso indicado no quadro",
        "305 g"
      ],
      [
        "Empunhadura",
        "L3 · 4 3/8"
      ],
      [
        "Formato de venda",
        "Par de raquetes"
      ]
    ],
    "includesProductIds": [
      "yonex-vcore-98-laranja",
      "yonex-vcore-98-clara"
    ],
    "illustratedCover": true
  }
];
