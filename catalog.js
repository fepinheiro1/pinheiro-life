'use strict';
// Catálogo editado pela conversa. Fotos, descrição, observações e preço pertencem a cada item.
const categories = [
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'casa-cozinha', label: 'Casa e cozinha' },
  { id: 'relogios', label: 'Relógios' },
  { id: 'esportes', label: 'Esportes' },
  { id: 'moda-feminina', label: 'Moda feminina' },
  { id: 'moda-fitness', label: 'Moda fitness' },
  { id: 'perfumes', label: 'Perfumes' },
  { id: 'beleza', label: 'Beleza' }
];
const products = [
  {
    "id": "nespresso-expert-c80",
    "slug": "cafeteira-nespresso-expert-c80-19-bar",
    "name": "Cafeteira Nespresso Expert C80 19 Bar",
    "type": "single",
    "category": "Cafeteiras",
    "categoryId": "casa-cozinha",
    "price": 490,
    "newPriceText": "R$ 900",
    "newPriceLabel": "Mesmo modelo usado encontrado",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://lista.mercadolivre.com.br/nespresso-expert"
    },
    "image": "assets/produtos/nespresso-expert-c80/capa-cantinho-cafe.webp",
    "alt": "Cafeteira Nespresso Expert C80 preparando espresso em um cantinho de café contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/nespresso-expert-c80/capa-cantinho-cafe.webp",
        "alt": "Cafeteira Nespresso Expert C80 preparando espresso em um cantinho de café contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/nespresso-expert-c80/foto-real-frente.webp",
        "alt": "Vista frontal da Cafeteira Nespresso Expert anunciada, com reservatório de água e suporte de xícara — foto real"
      },
      {
        "src": "assets/produtos/nespresso-expert-c80/foto-real-lateral.webp",
        "alt": "Vista lateral da Cafeteira Nespresso Expert anunciada e de seu reservatório de água — foto real"
      },
      {
        "src": "assets/produtos/nespresso-expert-c80/foto-real-superior.webp",
        "alt": "Vista superior da Cafeteira Nespresso Expert anunciada, mostrando os seletores e o compartimento de cápsula — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do produto real.<br>As três imagens seguintes são fotos reais da cafeteira anunciada.",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas leves de uso",
    "tag": "Avulsa · linha Original · 19 bar",
    "meta": "5 bebidas · 3 temperaturas · reservatório 1,11 L",
    "conditionSummary": "Usada, completa e com marcas leves de uso aparentes nas fotos.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. As três imagens seguintes mostram exatamente a cafeteira anunciada.",
    "description": "Nespresso Expert C80, modelo premium da linha Original com pressão de 19 bar. Permite escolher entre Ristretto, Espresso, Lungo, Americano e água quente, além de três níveis de temperatura. O reservatório lateral removível tem capacidade aproximada de 1,11 litro.",
    "conditionNotes": "Produto usado, completo e com marcas leves de uso aparentes nas fotos reais. O estado de funcionamento e a tensão elétrica serão confirmados antes da retirada. A conectividade por aplicativo não foi considerada na avaliação deste anúncio.",
    "details": [
      ["Marca", "Nespresso"],
      ["Linha", "Expert"],
      ["Modelo", "C80"],
      ["Sistema", "Cápsulas Nespresso Original"],
      ["Pressão", "19 bar"],
      ["Bebidas", "Ristretto · Espresso · Lungo · Americano · água quente"],
      ["Temperatura", "3 níveis selecionáveis"],
      ["Reservatório", "Removível · aproximadamente 1,11 litro"],
      ["Controles", "Seletores frontais de bebida e temperatura"],
      ["Suporte de xícara", "Ajustável e removível"],
      ["Peso", "Aproximadamente 4,4 kg"],
      ["Dimensões aproximadas", "38,1 × 28,7 × 22,3 cm"],
      ["Tensão", "A confirmar antes da retirada"],
      ["Cor", "Preta com acabamento metálico"],
      ["Condição", "Usada, com marcas leves de uso"]
    ]
  },
  {
    "id": "dell-ultrasharp-u2211h-215",
    "slug": "monitor-dell-ultrasharp-u2211h-215-full-hd-ips",
    "name": "Monitor Dell UltraSharp U2211H 21,5″ Full HD IPS",
    "type": "single",
    "category": "Monitores",
    "categoryId": "tecnologia",
    "price": 290,
    "newPriceText": "R$ 618",
    "newPriceLabel": "Dell 21,5″ novo comparável",
    "newPriceSource": {
      "label": "Dell Brasil",
      "url": "https://www.dell.com/pt-br/shop/cty/pdp/spd/se2225hm-monitor/m_se2225hm_bcc"
    },
    "image": "assets/produtos/dell-ultrasharp-u2211h-215/capa-home-office.webp",
    "alt": "Monitor Dell UltraSharp U2211H ligado sobre uma mesa de home office contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/dell-ultrasharp-u2211h-215/capa-home-office.webp",
        "alt": "Monitor Dell UltraSharp U2211H ligado sobre uma mesa de home office contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/dell-ultrasharp-u2211h-215/foto-real-frente.webp",
        "alt": "Vista frontal do Monitor Dell UltraSharp U2211H anunciado — foto real"
      },
      {
        "src": "assets/produtos/dell-ultrasharp-u2211h-215/foto-real-traseira.webp",
        "alt": "Vista traseira, base ajustável e acabamento do Monitor Dell UltraSharp U2211H anunciado — foto real"
      },
      {
        "src": "assets/produtos/dell-ultrasharp-u2211h-215/foto-real-etiqueta-serial-oculto.webp",
        "alt": "Etiqueta do Monitor Dell UltraSharp confirmando o modelo U2211Ht, com número de série ocultado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do produto real.<br>As três imagens seguintes são fotos reais do monitor anunciado.",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · bom estado visual",
    "tag": "Avulso · IPS · base ergonômica",
    "meta": "21,5″ · Full HD · DisplayPort · 4 USB",
    "conditionSummary": "Usado, com bom estado visual aparente nas fotos reais.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. As três imagens seguintes mostram exatamente o monitor anunciado; o número de série foi ocultado na foto da etiqueta.",
    "description": "Dell UltraSharp U2211H de 21,5 polegadas com painel IPS e resolução Full HD. A linha UltraSharp combina boa reprodução de cores e amplo ângulo de visão com uma base ergonômica que permite ajustar altura, inclinação, giro e usar a tela na posição vertical.",
    "conditionNotes": "Produto usado, com bom estado visual aparente e marcas leves de uso conforme as fotos reais. O estado de funcionamento e os cabos incluídos serão confirmados antes da retirada.",
    "details": [
      ["Marca", "Dell"],
      ["Linha", "UltraSharp"],
      ["Modelo", "U2211H · etiqueta U2211Ht"],
      ["Tela", "21,5 polegadas · antirreflexo"],
      ["Painel", "IPS"],
      ["Resolução", "Full HD · 1920 × 1080 a 60 Hz"],
      ["Brilho", "250 cd/m²"],
      ["Contraste", "1000:1"],
      ["Tempo de resposta", "8 ms GtG"],
      ["Conexões de vídeo", "DisplayPort · DVI-D · VGA"],
      ["USB", "Hub com 4 portas USB 2.0"],
      ["Ajustes da base", "Altura · inclinação · giro · pivô vertical"],
      ["Montagem", "VESA 100 × 100 mm"],
      ["Alimentação", "Bivolt · 100–240 V"],
      ["Cor", "Preta com base preta e prata"],
      ["Condição", "Usado, em bom estado visual"]
    ]
  },
  {
    "id": "liquidificador-ninja-bl610-1000w",
    "slug": "liquidificador-ninja-professional-bl610-1000w-21l",
    "name": "Liquidificador Ninja Professional BL610 1000 W 2,1 L",
    "type": "single",
    "category": "Eletroportáteis",
    "categoryId": "casa-cozinha",
    "price": 590,
    "newPrice": 1426,
    "newPriceLabel": "Novo encontrado",
    "newPriceSource": {
      "label": "Ecletiq",
      "url": "https://ninja.ecletiq.com.br/liquidificador-ninja-bl610-trituracao-total-21-l"
    },
    "image": "assets/produtos/liquidificador-ninja-bl610-1000w/capa-cozinha.webp",
    "alt": "Liquidificador Ninja Professional BL610 sobre a bancada de uma cozinha contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/liquidificador-ninja-bl610-1000w/capa-cozinha.webp",
        "alt": "Liquidificador Ninja Professional BL610 sobre a bancada de uma cozinha contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/liquidificador-ninja-bl610-1000w/foto-real-montado.webp",
        "alt": "Liquidificador Ninja Professional BL610 anunciado com a jarra e a tampa montadas — foto real"
      },
      {
        "src": "assets/produtos/liquidificador-ninja-bl610-1000w/foto-real-jarra-laminas.webp",
        "alt": "Base, jarra de 2,1 litros, tampa e conjunto de lâminas do Ninja BL610 anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do produto real.<br>Segunda e terceira imagens: fotos reais do liquidificador e dos itens incluídos.",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · bom estado visual",
    "tag": "Avulso · 1000 W · 110 V",
    "meta": "Jarra 2,1 L · lâminas Total Crushing · 3 velocidades",
    "conditionSummary": "Usado, com marcas de uso aparentes nas fotos reais.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir da foto do produto real. As duas imagens seguintes mostram exatamente o liquidificador e os componentes incluídos.",
    "description": "Liquidificador Ninja Professional BL610 com motor de 1000 W e jarra grande de 2,1 litros. O conjunto de lâminas Total Crushing foi desenvolvido para triturar gelo, frutas congeladas e preparar vitaminas, molhos e bebidas em maior volume. O painel oferece três velocidades e função Pulse.",
    "conditionNotes": "Produto usado, com marcas de uso visíveis na jarra e na base, conforme as fotos reais. Este anúncio inclui a base motorizada, a jarra de 2,1 litros, a tampa com trava e o conjunto de lâminas empilhadas mostrados nas imagens.",
    "details": [
      ["Marca", "Ninja"],
      ["Linha", "Professional"],
      ["Modelo", "BL610"],
      ["Potência", "1000 W"],
      ["Tensão", "110 V"],
      ["Capacidade da jarra", "72 oz · 2,1 litros"],
      ["Capacidade máxima para líquidos", "64 oz · 1,9 litro"],
      ["Velocidades", "3"],
      ["Funções", "3 velocidades · Pulse"],
      ["Lâminas", "Total Crushing · conjunto empilhado removível"],
      ["Itens incluídos", "Base · jarra · tampa com trava · conjunto de lâminas"],
      ["Cor", "Cinza e preta"],
      ["Condição", "Usado, com marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "samsung-syncmaster-t27a550-27",
    "slug": "tv-monitor-samsung-syncmaster-t27a550-27-full-hd",
    "name": "TV Monitor Samsung SyncMaster T27A550 27″ Full HD",
    "type": "single",
    "category": "Monitores",
    "categoryId": "tecnologia",
    "price": 390,
    "newPriceText": "R$ 681",
    "newPriceLabel": "Samsung 27″ novo comparável",
    "newPriceSource": {
      "label": "Curitiba Tech",
      "url": "https://www.curitibatech.com.br/produtos/monitor-samsung-27-led-full-hd-hdmi-75hz-5ms-f27t350fhlmzd/"
    },
    "image": "assets/produtos/samsung-syncmaster-t27a550-27/capa-home-office.webp",
    "alt": "TV Monitor Samsung SyncMaster T27A550 de 27 polegadas ligado em um home office contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/samsung-syncmaster-t27a550-27/capa-home-office.webp",
        "alt": "TV Monitor Samsung SyncMaster T27A550 de 27 polegadas ligado em um home office contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/samsung-syncmaster-t27a550-27/foto-real-frente.webp",
        "alt": "Vista frontal do TV Monitor Samsung SyncMaster T27A550 anunciado — foto real"
      },
      {
        "src": "assets/produtos/samsung-syncmaster-t27a550-27/foto-real-traseira.webp",
        "alt": "Vista traseira, conexões e base do TV Monitor Samsung SyncMaster T27A550 anunciado — foto real"
      },
      {
        "src": "assets/produtos/samsung-syncmaster-t27a550-27/foto-real-etiqueta-serial-oculto.webp",
        "alt": "Etiqueta do TV Monitor Samsung confirmando o modelo T27A550, com número de série ocultado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · bom estado visual",
    "tag": "Avulso · monitor e TV digital",
    "meta": "27″ · Full HD · 2 HDMI · alto-falantes",
    "conditionSummary": "Usado, em bom estado visual, com marcas leves de uso.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. As três imagens seguintes mostram exatamente o aparelho anunciado; o número de série foi ocultado na foto da etiqueta.",
    "description": "Samsung SyncMaster T27A550 de 27 polegadas com resolução Full HD. É um aparelho 2 em 1: funciona como monitor e como TV digital, trazendo duas entradas HDMI, USB, VGA, entradas de vídeo, alto-falantes integrados e função Picture in Picture.",
    "conditionNotes": "Produto usado, em bom estado visual, com marcas leves de uso aparentes nas fotos reais. O estado de funcionamento e os acessórios incluídos serão confirmados antes da retirada.",
    "details": [
      ["Marca", "Samsung"],
      ["Linha", "SyncMaster"],
      ["Modelo", "T27A550 · LT27A550LBMZD"],
      ["Tela", "27 polegadas · LED"],
      ["Resolução", "Full HD · 1920 × 1080"],
      ["Tempo de resposta", "5 ms"],
      ["Conexões", "2 HDMI · VGA · USB · componente · vídeo composto"],
      ["TV", "Sintonizador digital integrado"],
      ["Áudio", "Alto-falantes estéreo integrados · 10 W RMS"],
      ["Recursos", "Picture in Picture · reprodução por USB"],
      ["Montagem", "VESA 200 × 100 mm"],
      ["Tensão", "Bivolt · 100–240 V"],
      ["Consumo máximo", "65 W"],
      ["Cor", "Preta com detalhe vermelho"],
      ["Condição", "Usado, em bom estado visual"]
    ]
  },
  {
    "id": "kit-3-tubos-dunlop-atp-championship",
    "slug": "kit-3-tubos-bolas-tenis-dunlop-atp-championship-extra-duty",
    "name": "Kit 3 Tubos de Bolas de Tênis Dunlop ATP Championship",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 120,
    "newPriceText": "R$ 189,90",
    "newPriceLabel": "Kit novo com 3 tubos encontrado",
    "newPriceSource": {
      "label": "ProTenista",
      "url": "https://www.protenista.com.br/dunlop"
    },
    "image": "assets/produtos/kit-3-tubos-dunlop-atp-championship/capa-quadra.webp",
    "alt": "Três tubos lacrados de bolas de tênis Dunlop ATP Championship Extra Duty ao lado de uma quadra — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/kit-3-tubos-dunlop-atp-championship/capa-quadra.webp",
        "alt": "Três tubos lacrados de bolas de tênis Dunlop ATP Championship Extra Duty ao lado de uma quadra — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-3-tubos-dunlop-atp-championship/foto-real-tres-tubos.webp",
        "alt": "Os três tubos lacrados de bolas de tênis Dunlop ATP Championship Extra Duty anunciados — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Novos · lacrados",
    "tag": "Kit · 3 tubos · 9 bolas",
    "meta": "Extra Duty · pressurizadas · lacradas",
    "conditionSummary": "Três tubos novos, fechados e ainda lacrados.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. A segunda imagem mostra exatamente os três tubos lacrados anunciados.",
    "description": "Kit com três tubos Dunlop ATP Championship Extra Duty, cada um com três bolas pressurizadas — nove bolas ao todo. A versão Extra Duty tem feltro resistente e foi desenvolvida para oferecer quique consistente em treinos e partidas.",
    "conditionNotes": "Os três tubos estão novos, fechados e com o lacre plástico original, conforme a foto real. O conjunto será vendido completo, com nove bolas.",
    "details": [
      ["Marca", "Dunlop"],
      ["Linha", "ATP Championship"],
      ["Versão", "Extra Duty"],
      ["Quantidade", "3 tubos · 9 bolas"],
      ["Conteúdo por tubo", "3 bolas pressurizadas"],
      ["Indicação", "Treinos e partidas"],
      ["Superfície", "All Court"],
      ["Condição", "Novas e lacradas"],
      ["Formato de venda", "Kit completo"]
    ]
  },
  {
    "id": "air-fryer-electrolux-eaf20-32l",
    "slug": "air-fryer-electrolux-digital-experience-eaf20-32l",
    "name": "Air Fryer Electrolux Digital Experience EAF20 3,2 L",
    "type": "single",
    "category": "Eletroportáteis",
    "categoryId": "casa-cozinha",
    "price": 290,
    "newPriceText": "R$ 549,10",
    "newPriceLabel": "Nova de 220 V encontrada",
    "newPriceSource": {
      "label": "Friopeças",
      "url": "https://www.friopecas.com.br/fritadeira-eletrica-airfryer-electrolux-32litros-preta-eaf20-220-volts/p"
    },
    "image": "assets/produtos/air-fryer-electrolux-eaf20/capa-cozinha.webp",
    "alt": "Air Fryer Electrolux Digital Experience EAF20 sobre a bancada de uma cozinha contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/air-fryer-electrolux-eaf20/capa-cozinha.webp",
        "alt": "Air Fryer Electrolux Digital Experience EAF20 sobre a bancada de uma cozinha contemporânea — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/air-fryer-electrolux-eaf20/foto-real-fechada.webp",
        "alt": "Vista frontal da Air Fryer Electrolux EAF20 anunciada com o painel Assistant Touch — foto real"
      },
      {
        "src": "assets/produtos/air-fryer-electrolux-eaf20/foto-real-cesto.webp",
        "alt": "Air Fryer Electrolux EAF20 anunciada com o cesto aberto — foto real"
      },
      {
        "src": "assets/produtos/air-fryer-electrolux-eaf20/foto-real-interior.webp",
        "alt": "Vista superior do cesto e do interior da Air Fryer Electrolux EAF20 anunciada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · com marcas de uso",
    "tag": "Avulso · cesto 3,2 L",
    "meta": "1400 W · painel digital · 9 receitas",
    "conditionSummary": "Usada, com marcas de uso aparentes nas fotos reais.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. As três imagens seguintes mostram exatamente a Air Fryer anunciada e seu estado de conservação.",
    "description": "Air Fryer Electrolux Digital Experience EAF20 com painel Assistant Touch, nove receitas predefinidas e cesto antiaderente de 3,2 litros. Permite ajustar tempo e temperatura, pré-aquecer e avisa quando é hora de virar o alimento.",
    "conditionNotes": "Produto usado, com riscos e outras marcas de uso visíveis no acabamento externo conforme as fotos reais. O painel digital acende e funciona normalmente. O cesto e o interior também estão registrados nas imagens. A tensão será confirmada antes da retirada.",
    "details": [
      ["Marca", "Electrolux"],
      ["Linha", "Digital Experience"],
      ["Modelo", "EAF20"],
      ["Capacidade do cesto", "3,2 litros"],
      ["Capacidade total", "4 litros"],
      ["Potência", "1400 W"],
      ["Painel", "Digital Assistant Touch"],
      ["Receitas predefinidas", "9"],
      ["Funções", "Pré-aquecer · aviso para virar · timer · desligamento automático"],
      ["Cesto", "Removível e antiaderente"],
      ["Temperatura", "Até 200 °C"],
      ["Tensão", "A confirmar antes da retirada"],
      ["Cor", "Grafite"],
      ["Condição", "Usada, com marcas de uso"]
    ]
  },
  {
    "id": "cervejeira-midea-bca10p2-96l",
    "slug": "cervejeira-midea-flex-bca10p2-96l-220v",
    "name": "Cervejeira Midea Flex BCA10P2 96 L 220 V",
    "type": "single",
    "category": "Adegas e bebidas",
    "categoryId": "casa-cozinha",
    "price": 1890,
    "newPrice": 2727,
    "newPriceLabel": "Nova encontrada",
    "newPriceSource": {
      "label": "Loja Solar",
      "url": "https://www.lojasolar.com.br/cervejeira-flex-96l-preta-220v-bca10p2-midea/p"
    },
    "image": "assets/produtos/cervejeira-midea-bca10p2-96l/capa-varanda-gourmet.webp",
    "alt": "Cervejeira Midea Flex BCA10P2 de 96 litros em uma varanda gourmet — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/cervejeira-midea-bca10p2-96l/capa-varanda-gourmet.webp",
        "alt": "Cervejeira Midea Flex BCA10P2 de 96 litros em uma varanda gourmet — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/cervejeira-midea-bca10p2-96l/referencia-oficial-frontal.webp",
        "alt": "Vista frontal oficial da cervejeira Midea Flex BCA10P2 de 96 litros",
        "isReference": true
      },
      {
        "src": "assets/produtos/cervejeira-midea-bca10p2-96l/foto-real-etiqueta.webp",
        "alt": "Etiqueta real da cervejeira anunciada confirmando o modelo BCA10P2 e a tensão de 220 V"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "referencePhotoSource": {
      "label": "Midea",
      "url": "https://www.midea.com.br/cervejeira-frost-free-flex-3-em-1-midea-96-l-26/p"
    },
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA.<br>Segunda imagem: referência oficial do mesmo modelo.<br>Terceira imagem: etiqueta real da cervejeira anunciada.",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · perfeito estado de conservação",
    "tag": "Avulso · 96 L · 220 V",
    "meta": "96 L · −5 °C a 18 °C · Frost Free",
    "conditionSummary": "Funcionando perfeitamente e em perfeito estado de conservação.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA. A segunda imagem é uma referência oficial do modelo e a terceira mostra a etiqueta real da cervejeira anunciada.",
    "description": "Cervejeira Midea Flex BCA10P2 com capacidade de 96 litros e ampla regulagem de temperatura, de −5 °C a 18 °C. O modelo 3 em 1 pode ser utilizado como cervejeira, frigobar ou adega e conta com sistema Frost Free, porta de vidro triplo, painel digital touch, iluminação interna em LED e três prateleiras removíveis.",
    "conditionNotes": "Cervejeira usada, funcionando perfeitamente e em perfeito estado de conservação. A foto real da etiqueta confirma o modelo BCA10P2 e a tensão de 220 V.",
    "details": [
      ["Marca", "Midea"],
      ["Linha", "Flex"],
      ["Modelo", "BCA10P2"],
      ["Capacidade", "96 litros"],
      ["Funções", "Cervejeira · frigobar · adega"],
      ["Faixa de temperatura", "−5 °C a 18 °C"],
      ["Refrigeração", "Compressor · Frost Free"],
      ["Porta", "Vidro triplo"],
      ["Controle", "Painel digital touch"],
      ["Iluminação", "LED interno"],
      ["Prateleiras", "3 removíveis"],
      ["Armazenamento", "Até 67 latas de 350 ml"],
      ["Tensão", "220 V"],
      ["Potência", "90 W"],
      ["Dimensões", "84,5 × 48 × 47,5 cm"],
      ["Peso", "35 kg"],
      ["Condição", "Usada, funcionando perfeitamente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "decanter-cristal-whisky-26cm",
    "slug": "decanter-de-cristal-lapidado-para-whisky-26cm",
    "name": "Decanter Kosta Boda City by Vicke Lindstrand 26 cm",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 790,
    "newPriceText": "US$ 80",
    "newPriceLabel": "Outro decanter City com microavarias vendido em leilão",
    "newPriceSource": {
      "label": "Auctionet",
      "url": "https://auctionet.com/sv/4883944-karaff-city-vicke-lindstrand-kosta-signerad"
    },
    "image": "assets/produtos/decanter-cristal-whisky-26cm/capa-bar.webp",
    "alt": "Decanter de cristal lapidado para whisky sobre uma bandeja em um bar residencial — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/decanter-cristal-whisky-26cm/capa-bar.webp",
        "alt": "Decanter de cristal lapidado para whisky sobre uma bandeja em um bar residencial — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/decanter-cristal-whisky-26cm/foto-real-frente.webp",
        "alt": "Vista frontal do decanter de cristal lapidado anunciado com tampa esférica — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Vintage · ótimo estado aparente",
    "tag": "Avulso · Kosta Boda",
    "meta": "linha City · Vicke Lindstrand · 26 cm",
    "conditionSummary": "Peça pesada, com cristal espesso e sem avarias visíveis na foto enviada.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa criada com IA a partir da peça real. A segunda imagem mostra exatamente o decanter anunciado.",
    "description": "Decanter vintage da linha City, desenhada por Vicke Lindstrand para a tradicional vidraria sueca Kosta, hoje Kosta Boda. O padrão quadriculado lapidado, a medida de 26 cm e a forma correspondem às referências catalogadas da coleção, produzida na segunda metade do século XX. É uma peça pesada de cristal para whisky, bourbon ou licores, com presença de objeto de design escandinavo.",
    "conditionNotes": "Peça vintage, muito pesada e em perfeito estado de conservação. A foto real mostra o corpo lapidado, a base espessa e a tampa esférica.",
    "details": [
      ["Tipo", "Decanter / licoreira para whisky"],
      ["Marca", "Kosta Boda / Kosta, Suécia"],
      ["Linha", "City"],
      ["Designer", "Vicke Lindstrand"],
      ["Período", "Segunda metade do século XX · linha descontinuada"],
      ["Material", "Cristal transparente com corte quadriculado"],
      ["Altura", "26 cm com a tampa"],
      ["Diâmetro", "13 cm"],
      ["Tampa", "Esférica em cristal com encaixe"],
      ["Construção", "Peça pesada com base espessa"],
      ["Uso indicado", "Whisky, bourbon e licores"],
      ["Condição", "Usado, em ótimo estado aparente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "porta-retrato-digital-frameo-10-16gb",
    "slug": "porta-retrato-digital-frameo-10-1-wifi-16gb",
    "name": "Porta-Retrato Digital Frameo 10,1″ Wi-Fi 16 GB",
    "type": "single",
    "category": "Tecnologia",
    "categoryId": "tecnologia",
    "price": 390,
    "newPriceText": "cerca de R$ 600",
    "newPriceLabel": "Similar novo no Brasil",
    "newPriceSource": {
      "label": "Magazine Luiza",
      "url": "https://www.magazineluiza.com.br/busca/portaretratos%2Bdigital%2Bframeo/"
    },
    "image": "assets/produtos/porta-retrato-digital-frameo-10-16gb/capa-sala.png",
    "alt": "Porta-retrato digital Frameo preto exibindo uma paisagem em uma sala contemporânea — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/porta-retrato-digital-frameo-10-16gb/capa-sala.png",
        "alt": "Porta-retrato digital Frameo preto exibindo uma paisagem em uma sala contemporânea — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/porta-retrato-digital-frameo-10-16gb/foto-real-tela.jpg?v=2",
        "alt": "Porta-retrato digital Frameo anunciado em funcionamento exibindo uma foto de família — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando normalmente",
    "tag": "Avulso · Wi-Fi",
    "meta": "10,1″ · IPS touch · 16 GB · app Frameo",
    "conditionSummary": "Usado, funcionando normalmente e com tela touch, Wi-Fi e memória interna de 16 GB.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa criada com IA a partir da foto real. A segunda mostra exatamente o porta-retrato anunciado em funcionamento.",
    "description": "Porta-retrato digital Frameo de 10,1 polegadas com tela IPS sensível ao toque, resolução 1280 × 800, Wi-Fi e 16 GB de armazenamento interno. Pelo aplicativo Frameo para iOS e Android, familiares e amigos podem enviar fotos e vídeos curtos diretamente para o aparelho.",
    "conditionNotes": "Aparelho usado e fotografado em funcionamento. A imagem real comprova a tela ligada e o acabamento preto está em bom estado aparente.",
    "details": [
      ["Linha / aplicativo", "Frameo"],
      ["Tela", "10,1″ IPS sensível ao toque"],
      ["Resolução", "1280 × 800 pixels"],
      ["Armazenamento", "16 GB internos"],
      ["Conectividade", "Wi-Fi"],
      ["Aplicativo", "Frameo para iOS e Android"],
      ["Orientação", "Rotação automática horizontal e vertical"],
      ["Fotos", "JPG, JPEG, BMP e PNG"],
      ["Vídeos", "MP4"],
      ["Instalação", "Sobre móvel ou fixado na parede"],
      ["Condição", "Usado e funcionando normalmente"],
      ["Referência do modelo", "Amazon ASIN B09NKL4YK5"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "lanterna-decorativa-vidro-vela-led",
    "slug": "lanterna-decorativa-de-vidro-com-vela-led",
    "name": "Lanterna Decorativa de Vidro com Vela LED",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 190,
    "newPrice": 399,
    "newPriceLabel": "Similar novo",
    "newPriceSource": {
      "label": "Magazine Luiza",
      "url": "https://www.magazineluiza.com.br/busca/lanterna%2Bdecorativa%2Bde%2Bvidro/"
    },
    "image": "assets/produtos/lanterna-decorativa-vidro-vela-led/capa-varanda.png",
    "alt": "Lanterna decorativa redonda de vidro e metal com vela de LED acesa em uma varanda — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/lanterna-decorativa-vidro-vela-led/capa-varanda.png",
        "alt": "Lanterna decorativa redonda de vidro e metal com vela de LED acesa em uma varanda — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/lanterna-decorativa-vidro-vela-led/foto-real-frente.jpg",
        "alt": "Vista frontal da lanterna decorativa de vidro com vela de LED anunciada — foto real"
      },
      {
        "src": "assets/produtos/lanterna-decorativa-vidro-vela-led/foto-real-lateral.jpg",
        "alt": "Vista lateral da lanterna decorativa com alça e estrutura metálica — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · bom estado aparente",
    "tag": "Avulso · decoração",
    "meta": "vidro transparente · metal prateado · vela LED",
    "conditionSummary": "Usada, em bom estado aparente e acompanhada da vela de LED mostrada nas fotos.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa criada com IA a partir das fotos reais. As duas imagens seguintes mostram exatamente a lanterna e a vela de LED anunciadas.",
    "description": "Lanterna decorativa redonda com globo de vidro transparente, base e alça em metal prateado e vela de LED. A combinação cria uma iluminação suave e acolhedora para sala, varanda coberta, quarto, hall de entrada ou mesa posta.",
    "conditionNotes": "Peça usada, em bom estado aparente nas fotos enviadas. O vidro, a base, a alça e a estrutura metálica interna estão visíveis nas imagens reais. Acompanha a vela de LED mostrada.",
    "details": [
      ["Tipo", "Lanterna decorativa / porta-vela"],
      ["Material", "Vidro e metal"],
      ["Cor", "Transparente e prateada"],
      ["Formato", "Redondo com alça"],
      ["Iluminação", "Vela de LED"],
      ["Acompanha", "Vela de LED mostrada nas fotos"],
      ["Uso indicado", "Ambientes internos ou varanda coberta"],
      ["Condição", "Usada, em bom estado aparente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "abajur-madeira-ripado-gota",
    "slug": "abajur-luminaria-de-mesa-madeira-ripada-formato-gota",
    "name": "Abajur de Madeira Ripado Formato Gota",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 190,
    "newPrice": 579,
    "newPriceLabel": "Similar novo",
    "newPriceSource": {
      "label": "Arevo Iluminação",
      "url": "https://www.arevoiluminacao.com.br/abajures/abajur-ripado-gota-cabo-pp-preto-2-vias-classic-lar-"
    },
    "image": "assets/produtos/abajur-madeira-ripado-gota/capa-sala.png",
    "alt": "Abajur de madeira ripado em formato de gota aceso sobre uma mesa lateral em uma sala — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/abajur-madeira-ripado-gota/capa-sala.png",
        "alt": "Abajur de madeira ripado em formato de gota aceso sobre uma mesa lateral em uma sala — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/abajur-madeira-ripado-gota/foto-real-frente.jpg",
        "alt": "Vista frontal do abajur de madeira ripado em formato de gota anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · bom estado aparente",
    "tag": "Avulso · decoração",
    "meta": "madeira escura · formato gota · soquete E27",
    "conditionSummary": "Usado, em bom estado aparente na foto e pronto para compor a decoração.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa criada com IA a partir da foto real. A segunda imagem mostra exatamente o abajur anunciado.",
    "description": "Abajur de mesa decorativo com estrutura ripada em madeira escura e desenho orgânico em formato de gota. As lâminas vazadas deixam a luz aparente e criam um efeito acolhedor, ideal para sala, quarto, escritório ou hall de entrada.",
    "conditionNotes": "Peça usada, em bom estado aparente na foto enviada. A imagem real mostra a estrutura de madeira, o soquete, a lâmpada e o cabo de alimentação.",
    "details": [
      ["Tipo", "Abajur / luminária de mesa"],
      ["Material", "Madeira"],
      ["Cor", "Marrom escuro"],
      ["Formato", "Gota ripada e vazada"],
      ["Soquete", "Padrão E27"],
      ["Uso indicado", "Ambientes internos"],
      ["Condição", "Usado, em bom estado aparente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "oculos-grau-montblanc-retangular-dourado",
    "slug": "oculos-de-grau-montblanc-retangular-dourado-novo",
    "name": "Óculos de Grau Montblanc Retangular Dourado",
    "type": "single",
    "category": "Acessórios",
    "categoryId": "acessorios",
    "price": 490,
    "newPriceText": "R$ 4.085,00",
    "newPriceLabel": "Armação Montblanc comparável nova",
    "newPriceSource": {
      "label": "Óticas Diniz",
      "url": "https://www.oticasdiniz.com.br/armacao-oculos-grau-montblanc-mb0346o-001-preto-e-dourado/p"
    },
    "image": "assets/produtos/oculos-grau-montblanc-dourado/capa-escritorio.jpg",
    "alt": "Óculos de grau Montblanc dourados com estojo e caixa sobre uma mesa de escritório",
    "photos": [
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/capa-escritorio.jpg",
        "alt": "Óculos de grau Montblanc dourados ambientados em um escritório",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-frente.jpg",
        "alt": "Foto real frontal dos óculos de grau Montblanc anunciados"
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-lateral.jpg",
        "alt": "Foto real lateral da armação Montblanc dourada e das hastes pretas"
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-detalhe-logo-1.jpg",
        "alt": "Detalhe real do emblema Montblanc na ponta da haste"
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-gravacao-montblanc.jpg",
        "alt": "Gravação Montblanc Made in Italy na haste dos óculos anunciados"
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-frente-sobre-caixa.jpg",
        "alt": "Foto real da armação Montblanc vista de frente sobre a caixa"
      },
      {
        "src": "assets/produtos/oculos-grau-montblanc-dourado/foto-real-conjunto-completo.jpg",
        "alt": "Conjunto real completo com óculos Montblanc, estojo, caixa e documentação"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Novo · zero uso",
    "tag": "Avulso · original · completo",
    "meta": "Montblanc · metal dourado · hastes pretas",
    "conditionSummary": "Produto original, novo e nunca usado, com estojo, caixa e documentação.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir dos óculos reais.<br>As seis imagens seguintes mostram exatamente a peça e os acessórios anunciados.",
    "disclosureNote": "A referência da Óticas Diniz é de outra armação Montblanc comparável e serve apenas para contextualizar o valor de uma peça nova da marca.",
    "description": "Óculos de grau Montblanc originais com armação retangular fina em metal dourado e hastes pretas. O desenho discreto combina o acabamento clássico da marca com um formato leve e elegante. Acompanha estojo rígido, caixa e documentação Montblanc mostrados nas fotos reais.",
    "conditionNotes": "Peça nova, sem uso e sem sinais de utilização. O conjunto está completo com estojo rígido, caixa e documentação. As fotos reais mostram a frente, a lateral, os emblemas nas hastes, a gravação Montblanc Made in Italy e todos os itens que acompanham o produto.",
    "details": [
      ["Marca", "Montblanc"],
      ["Tipo", "Óculos de grau / armação óptica"],
      ["Formato", "Retangular"],
      ["Material", "Metal"],
      ["Cor da armação", "Dourada"],
      ["Hastes", "Pretas com emblema Montblanc"],
      ["Origem indicada", "Made in Italy"],
      ["Acompanha", "Estojo rígido · caixa · documentação"],
      ["Condição", "Novo · zero uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "oculos-prada-linea-rossa-sps-56m",
    "slug": "oculos-de-sol-prada-linea-rossa-sps-56m",
    "name": "Óculos de Sol Prada Linea Rossa SPS 56M",
    "type": "single",
    "category": "Acessórios",
    "categoryId": "acessorios",
    "price": 690,
    "newPriceText": "£ 156,75",
    "newPriceLabel": "Novo no exterior",
    "newPriceSource": {
      "label": "United Sunglasses",
      "url": "https://www.unitedsunglasses.com/products/prada-sunglasses-brown-gradient-pilot-rimless-ps56ms-sps-56m-5av-6s1-62mm"
    },
    "image": "assets/produtos/oculos-prada-linea-rossa-sps-56m/capa-homem-terraco.jpg",
    "alt": "Homem adulto usando óculos Prada Linea Rossa SPS 56M em um terraço — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/capa-homem-terraco.jpg",
        "alt": "Homem adulto usando óculos Prada Linea Rossa SPS 56M em um terraço — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-frente-com-estojo.jpg?v=2",
        "alt": "Óculos Prada Linea Rossa SPS 56M anunciados com o estojo original — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-frente.jpg?v=2",
        "alt": "Vista frontal dos óculos Prada Linea Rossa SPS 56M anunciados — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-haste-direita.jpg?v=2",
        "alt": "Vista lateral da haste com detalhe vermelho Prada Linea Rossa — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-haste-esquerda.jpg?v=2",
        "alt": "Vista lateral oposta dos óculos Prada Linea Rossa anunciados — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-frente-sobre-estojo.jpg?v=2",
        "alt": "Óculos Prada Linea Rossa apoiados sobre o estojo original — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-gravacao-prada-made-in-italy.jpg?v=2",
        "alt": "Gravação Prada Made in Italy na haste dos óculos anunciados — foto real"
      },
      {
        "src": "assets/produtos/oculos-prada-linea-rossa-sps-56m/foto-real-gravacao-modelo.jpg?v=2",
        "alt": "Gravação do modelo SPS 56M 5AV-6S1 e medidas na haste — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · quase nenhuma marca de uso",
    "tag": "Avulso · com estojo original",
    "meta": "Prada Linea Rossa · 62–14–130 · lentes degradê",
    "conditionSummary": "Usado, com quase nenhuma marca de uso e em excelente estado geral.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa criada com IA a partir das fotos reais. As sete imagens seguintes mostram exatamente os óculos e o estojo anunciados.",
    "description": "Óculos de sol Prada Linea Rossa SPS 56M, código de cor 5AV-6S1, com design aviador sem aro, armação gunmetal e preta e lentes marrons degradê. O detalhe vermelho Prada nas hastes completa o visual esportivo. Acompanha o estojo original mostrado nas fotos.",
    "conditionNotes": "Óculos usados com quase nenhuma marca de uso aparente. As fotos reais mostram a frente, as duas hastes, as gravações do modelo e o estojo original que acompanha a peça.",
    "details": [
      ["Marca", "Prada Linea Rossa"],
      ["Modelo", "SPS 56M"],
      ["Código", "5AV-6S1"],
      ["Formato", "Aviador sem aro"],
      ["Lentes", "Marrom degradê · categoria 3N"],
      ["Armação", "Gunmetal e preta"],
      ["Medidas", "62–14–130 mm"],
      ["Origem indicada", "Made in Italy"],
      ["Acompanha", "Estojo original Prada"],
      ["Condição", "Usado, com quase nenhuma marca de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "jaqueta-calvin-klein-performance-branca-m",
    "slug": "jaqueta-calvin-klein-performance-unissex-branca-tamanho-m",
    "name": "Jaqueta Calvin Klein Performance Unissex Branca",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 690,
    "newPrice": 1490,
    "newPriceLabel": "Jaqueta similar nova",
    "newPriceSource": {
      "label": "Calvin Klein Brasil",
      "url": "https://www.calvinklein.com.br/jaqueta-masculina-calvin-klein-jeans-matelasse-com-capuz_branco-2_cme55150_0900/p"
    },
    "image": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/capa-quadra.jpg",
    "alt": "Homem adulto usando jaqueta Calvin Klein Performance unissex branca em ambiente esportivo — imagem ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/capa-quadra.jpg",
        "alt": "Homem adulto usando jaqueta Calvin Klein Performance unissex branca em ambiente esportivo — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/capa-feminina-quadra.jpg",
        "alt": "Mulher adulta usando jaqueta Calvin Klein Performance unissex branca em ambiente esportivo — imagem ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/foto-real-frente-cabide.jpg",
        "alt": "Frente da jaqueta Calvin Klein Performance branca anunciada no cabide — foto real"
      },
      {
        "src": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/foto-real-frente-mesa.jpg",
        "alt": "Jaqueta Calvin Klein Performance branca anunciada aberta sobre uma mesa — foto real"
      },
      {
        "src": "assets/produtos/jaqueta-calvin-klein-performance-branca-m/foto-real-costas.jpg",
        "alt": "Parte traseira da jaqueta Calvin Klein Performance branca anunciada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente nova · sem marcas de uso",
    "tag": "Avulso · tamanho M",
    "meta": "100% poliéster · unissex · peça encorpada",
    "conditionSummary": "Praticamente nova, sem marcas de uso e em excelente estado.",
    "disclosureNote": "As duas primeiras imagens são ambientações ilustrativas criadas com IA a partir das fotos reais. As três imagens seguintes mostram a jaqueta anunciada.",
    "description": "Jaqueta Calvin Klein Performance unissex branca, tamanho M, confeccionada em 100% poliéster. É uma peça pesada e encorpada, com gola alta, fechamento frontal por zíper, bolsos laterais, punhos e barra elásticos e faixa preta com o nome Calvin Klein atravessando o peito e as mangas.",
    "conditionNotes": "Peça praticamente nova, sem marcas de uso aparentes nas fotos. As imagens reais mostram a frente, os detalhes da faixa de logos e a parte traseira.",
    "details": [
      ["Marca", "Calvin Klein Performance"],
      ["Tipo", "Jaqueta esportiva unissex"],
      ["Tamanho", "M"],
      ["Cor", "Branca com faixa preta"],
      ["Composição", "100% poliéster"],
      ["Estrutura", "Peça pesada e encorpada"],
      ["Fechamento", "Zíper frontal"],
      ["Bolsos", "Dois bolsos laterais"],
      ["Condição", "Praticamente nova, sem marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "video-porteiro-hd-7-rfid",
    "slug": "video-porteiro-hd-7-polegadas-rfid",
    "name": "Vídeo Porteiro HD 7 Polegadas com RFID",
    "type": "single",
    "category": "Segurança e acesso",
    "categoryId": "casa-cozinha",
    "price": 490,
    "newPriceText": "US$ 125",
    "newPriceLabel": "Similar novo importado",
    "newPriceSource": {
      "label": "eBay",
      "url": "https://www.ebay.com/itm/266410694761"
    },
    "image": "assets/produtos/video-porteiro-hd-7-rfid/capa-entrada-residencial.png",
    "alt": "Vídeo porteiro HD com monitor de 7 polegadas e módulo externo instalados em uma entrada residencial — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/video-porteiro-hd-7-rfid/capa-entrada-residencial.png",
        "alt": "Vídeo porteiro HD com monitor de 7 polegadas e módulo externo instalados em uma entrada residencial — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/video-porteiro-hd-7-rfid/foto-real-caixa.jpg",
        "alt": "Caixa original do vídeo porteiro HD de 7 polegadas anunciado — foto real"
      },
      {
        "src": "assets/produtos/video-porteiro-hd-7-rfid/foto-real-conteudo.jpg",
        "alt": "Conteúdo completo do vídeo porteiro novo dentro da caixa — foto real"
      },
      {
        "src": "assets/produtos/video-porteiro-hd-7-rfid/foto-real-modulo-externo.jpg",
        "alt": "Módulo externo com câmera, leitor RFID e botão de chamada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca instalado",
    "tag": "Avulso · novo",
    "meta": "Tela 7″ · RFID · visão noturna",
    "conditionSummary": "Novo, nunca usado e nunca instalado.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir das fotos do produto.<br>As três imagens seguintes mostram o kit real anunciado.",
    "description": "Kit importado de vídeo porteiro HD com monitor interno colorido de 7 polegadas e módulo externo com câmera e leitor RFID. Permite visualizar e conversar com visitantes, monitorar a área externa e acionar uma fechadura elétrica compatível pelo monitor.",
    "conditionNotes": "Produto novo, nunca usado e nunca instalado. Conservado na embalagem original. O kit anunciado é exatamente o mostrado nas fotos.",
    "details": [
      ["Tipo", "Vídeo porteiro com fio"],
      ["Tela", "LCD colorida de 7 polegadas"],
      ["Comunicação", "Viva-voz"],
      ["Módulo externo", "Câmera · leitor RFID · botão de chamada"],
      ["Recursos", "Visão noturna · monitoramento externo · abertura elétrica"],
      ["Instalação", "Residencial · sistema cabeado"],
      ["Conteúdo do kit", "Monitor interno · módulo externo · fonte · cabeamento · botão de saída · manual e acessórios mostrados nas fotos"],
      ["Origem", "Importado"],
      ["Estado", "Novo · nunca instalado"]
    ]
  },
  {
    "id": "ghome-smart-k02apro",
    "slug": "fechadura-inteligente-ghome-smart-k02apro-biometria",
    "name": "Fechadura Inteligente GHome Smart K02APRO com Biometria",
    "type": "single",
    "category": "Segurança e acesso",
    "categoryId": "casa-cozinha",
    "price": 290,
    "newPriceText": "US$ 59,99",
    "newPriceLabel": "Nova na fabricante",
    "newPriceSource": {
      "label": "GHome Smart",
      "url": "https://us.ghomesmart.com/products/ghome-4-in-1-smart-fingerprint-door-knob?cfb=ca5ca9b2-7818-43fb-bd21-99cf59a1cf74&ifb=ca5ca9b2-7818-43fb-bd21-99cf59a1cf74&scm=search.v39.101.102.103.104&score=1&ssp=&spm=..search.search_1.1"
    },
    "image": "assets/produtos/ghome-smart-k02apro/capa-porta-moderna.png",
    "alt": "Fechadura inteligente GHome Smart K02APRO instalada em uma porta de madeira — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/ghome-smart-k02apro/capa-porta-moderna.png",
        "alt": "Fechadura inteligente GHome Smart K02APRO instalada em uma porta de madeira — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/ghome-smart-k02apro/referencia-produto.png",
        "alt": "GHome Smart K02APRO com teclado, leitor biométrico, chaves e aplicativo — imagem de referência do modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/ghome-smart-k02apro/foto-real-frente.jpg",
        "alt": "Frente da caixa lacrada da fechadura GHome Smart K02APRO anunciada — foto real"
      },
      {
        "src": "assets/produtos/ghome-smart-k02apro/foto-real-lateral.jpg",
        "alt": "Vista lateral da caixa lacrada da fechadura anunciada com a relação de componentes — foto real"
      },
      {
        "src": "assets/produtos/ghome-smart-k02apro/foto-real-especificacoes.jpg",
        "alt": "Especificações impressas na caixa da GHome Smart K02APRO anunciada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Nova · lacrada",
    "tag": "Avulso · nova e lacrada",
    "meta": "Biometria · senha · app · chave",
    "conditionSummary": "Nova, lacrada na embalagem original.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir da imagem do modelo.<br>A segunda imagem é uma referência do produto. As três imagens seguintes mostram a caixa lacrada anunciada.",
    "disclosureNote": "A primeira imagem é uma ambientação ilustrativa, a segunda é uma referência do modelo e as três imagens seguintes mostram a caixa real lacrada.",
    "description": "Fechadura inteligente GHome Smart K02APRO com quatro formas de abertura: impressão digital, senha, aplicativo e chave física. O modelo utiliza Bluetooth, permite gerenciar usuários pelo aplicativo Gosund e possui alimentação emergencial por USB-C.",
    "conditionNotes": "Produto novo e lacrado na embalagem original. As quatro pilhas AAA necessárias para o funcionamento não acompanham o produto.",
    "details": [
      ["Marca", "GHome Smart"],
      ["Modelo", "K02APRO"],
      ["Cor", "Preta"],
      ["Formas de abertura", "Biometria · senha · aplicativo · chave"],
      ["Capacidade", "Até 18 digitais e 20 senhas"],
      ["Conexão", "Bluetooth"],
      ["Aplicativo", "Gosund"],
      ["Alimentação", "4 pilhas AAA · não inclusas"],
      ["Energia emergencial", "USB-C · 5 V / 2 A"],
      ["Proteção", "IP54"],
      ["Espessura de porta", "35 a 55 mm"],
      ["Conteúdo indicado na caixa", "Conjunto da fechadura · mecanismo · 2 chaves · parafusos · manual"]
    ]
  },
  {
    "id": "monitor-benq-zowie-rl2755-27",
    "slug": "monitor-gamer-benq-zowie-rl2755-27-full-hd",
    "name": "Monitor Gamer BenQ Zowie RL2755 27” Full HD",
    "type": "single",
    "category": "Monitores",
    "categoryId": "tecnologia",
    "price": 490,
    "newPriceText": "R$ 856,15",
    "newPriceLabel": "Monitor novo comparável",
    "newPriceSource": {
      "label": "LG 27” Full HD disponível na KaBuM",
      "url": "https://www.kabum.com.br/produto/619753/monitor-gamer-lg-27-full-hd-100hz-5ms-ips-27ms500-bivolt"
    },
    "image": "assets/produtos/monitor-benq-zowie-rl2755-27/capa-home-office.webp",
    "alt": "Monitor Gamer BenQ Zowie RL2755 de 27 polegadas ligado em um home office contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/monitor-benq-zowie-rl2755-27/capa-home-office.webp",
        "alt": "Monitor Gamer BenQ Zowie RL2755 de 27 polegadas ligado em um home office contemporâneo — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/monitor-benq-zowie-rl2755-27/foto-real-frente.webp",
        "alt": "Vista frontal do Monitor Gamer BenQ Zowie RL2755 anunciado — foto real"
      },
      {
        "src": "assets/produtos/monitor-benq-zowie-rl2755-27/foto-real-traseira.webp",
        "alt": "Vista traseira, base e acabamento do Monitor Gamer BenQ Zowie RL2755 anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando perfeitamente",
    "tag": "Avulso · 27” · Full HD",
    "meta": "60 Hz · 1 ms · 2 HDMI · alto-falantes",
    "conditionSummary": "Usado, funcionando perfeitamente e acompanhado do cabo de energia.",
    "disclosureNote": "A capa é uma ambientação ilustrativa criada com IA a partir do produto real. A segunda e a terceira imagens mostram exatamente o monitor anunciado. A foto da etiqueta de identificação não foi publicada para preservar o número de série.",
    "description": "Monitor Gamer BenQ Zowie RL2755 de 27 polegadas, resolução Full HD e resposta de 1 ms. O modelo oferece Black eQualizer, modos para jogos, tecnologia Flicker-Free, duas entradas HDMI e alto-falantes integrados de 2 W cada.",
    "conditionNotes": "Produto usado, funcionando perfeitamente e com bom estado visual conforme as fotos reais. Acompanha o cabo de energia. Cabo HDMI não incluso.",
    "details": [
      ["Marca", "BenQ Zowie"],
      ["Modelo", "RL2755-B · tipo RL2755"],
      ["Tamanho", "27 polegadas"],
      ["Resolução", "Full HD · 1920 × 1080"],
      ["Painel", "TN"],
      ["Taxa de atualização", "60 Hz"],
      ["Tempo de resposta", "1 ms GtG"],
      ["Brilho", "300 cd/m²"],
      ["Conexões de vídeo", "2 HDMI · DVI-D · VGA"],
      ["Áudio", "Alto-falantes 2 W × 2 · entrada e saída de áudio"],
      ["Recursos", "Black eQualizer · Flicker-Free · Low Blue Light"],
      ["Montagem", "VESA 100 × 100 mm"],
      ["Alimentação", "Bivolt · cabo de energia incluso"],
      ["Cabo HDMI", "Não incluso"],
      ["Condição", "Usado · funcionando perfeitamente"]
    ]
  },
  {
    "id": "samsung-cf390-27-unidade-1",
    "slug": "monitor-curvo-samsung-cf390-27-full-hd-unidade-1",
    "name": "Monitor Curvo Samsung CF390 27” Full HD — Unidade 1",
    "type": "single",
    "category": "Monitores",
    "categoryId": "tecnologia",
    "price": 690,
    "newPrice": 1234,
    "newPriceLabel": "Similar novo encontrado",
    "newPriceSource": {
      "label": "Samsung 27” curvo novo",
      "url": "https://www.mercadolivre.com.br/samsung-27-fhd-100hz-curved-monitor-black-preto/p/MLB2080269609"
    },
    "image": "assets/produtos/samsung-cf390-27-duas-unidades/referencia-oficial-frente.jpg",
    "alt": "Vista frontal do Monitor Curvo Samsung CF390 de 27 polegadas — unidade 1, imagem de referência do modelo",
    "photos": [
      {
        "src": "assets/produtos/samsung-cf390-27-duas-unidades/referencia-oficial-frente.jpg",
        "alt": "Vista frontal do Monitor Curvo Samsung CF390 de 27 polegadas — unidade 1, imagem de referência do modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/samsung-cf390-27-duas-unidades/capa-home-office.jpg",
        "alt": "As duas unidades do monitor Samsung CF390 em um home office — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "contain",
    "illustratedCover": false,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · excelente estado",
    "tag": "Avulso · unidade 1",
    "meta": "27” · Full HD · curvo · unidade individual",
    "conditionSummary": "Perfeito estado de uso e conservação.",
    "galleryDisclosure": "Primeira imagem: referência oficial do mesmo modelo.<br>A segunda imagem apresenta as duas unidades em um ambiente ilustrativo. Fotos reais serão adicionadas posteriormente.",
    "disclosureNote": "A primeira imagem é uma referência oficial do mesmo modelo e a segunda apresenta as duas unidades em uma ambientação criada com IA. Fotos reais serão adicionadas posteriormente.",
    "description": "Monitor curvo Samsung CF390 de 27 polegadas — unidade 1. Possui painel VA, resolução Full HD, curvatura 1800R, conexões HDMI e VGA, AMD FreeSync e modo de proteção ocular. O valor individual é de R$ 690; levando as duas unidades, a sacola aplica automaticamente o preço especial de R$ 1.300 pelo par.",
    "conditionNotes": "Unidade 1 usada, em perfeito estado de uso e conservação e com funcionamento normal.",
    "details": [
      [
        "Marca",
        "Samsung"
      ],
      [
        "Modelo",
        "CF390 · LC27F390FHLMZD"
      ],
      [
        "Tamanho",
        "27 polegadas"
      ],
      [
        "Formato",
        "Tela curva 1800R"
      ],
      [
        "Resolução",
        "Full HD · 1920 × 1080"
      ],
      [
        "Painel",
        "VA"
      ],
      [
        "Taxa de atualização",
        "60 Hz"
      ],
      [
        "Tempo de resposta",
        "4 ms"
      ],
      [
        "Conexões",
        "HDMI · VGA · saída para fone"
      ],
      [
        "Recursos",
        "AMD FreeSync · Eye Saver Mode"
      ],
      [
        "Identificação",
        "Unidade 1 de 2"
      ],
      [
        "Preço",
        "R$ 690 · par com desconto automático na sacola"
      ]
    ],
    "referenceCover": true,
    "bundleGroup": "samsung-cf390-pair"
  },
  {
    "id": "samsung-cf390-27-unidade-2",
    "slug": "monitor-curvo-samsung-cf390-27-full-hd-unidade-2",
    "name": "Monitor Curvo Samsung CF390 27” Full HD — Unidade 2",
    "type": "single",
    "category": "Monitores",
    "categoryId": "tecnologia",
    "price": 690,
    "newPrice": 1234,
    "newPriceLabel": "Similar novo encontrado",
    "newPriceSource": {
      "label": "Samsung 27” curvo novo",
      "url": "https://www.mercadolivre.com.br/samsung-27-fhd-100hz-curved-monitor-black-preto/p/MLB2080269609"
    },
    "image": "assets/produtos/samsung-cf390-27-duas-unidades/referencia-oficial-frente.jpg",
    "alt": "Vista frontal do Monitor Curvo Samsung CF390 de 27 polegadas — unidade 2, imagem de referência do modelo",
    "photos": [
      {
        "src": "assets/produtos/samsung-cf390-27-duas-unidades/referencia-oficial-frente.jpg",
        "alt": "Vista frontal do Monitor Curvo Samsung CF390 de 27 polegadas — unidade 2, imagem de referência do modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/samsung-cf390-27-duas-unidades/capa-home-office.jpg",
        "alt": "As duas unidades do monitor Samsung CF390 em um home office — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      }
    ],
    "imageFit": "contain",
    "illustratedCover": false,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · excelente estado",
    "tag": "Avulso · unidade 2",
    "meta": "27” · Full HD · curvo · unidade individual",
    "conditionSummary": "Perfeito estado de uso e conservação.",
    "galleryDisclosure": "Primeira imagem: referência oficial do mesmo modelo.<br>A segunda imagem apresenta as duas unidades em um ambiente ilustrativo. Fotos reais serão adicionadas posteriormente.",
    "disclosureNote": "A primeira imagem é uma referência oficial do mesmo modelo e a segunda apresenta as duas unidades em uma ambientação criada com IA. Fotos reais serão adicionadas posteriormente.",
    "description": "Monitor curvo Samsung CF390 de 27 polegadas — unidade 2. Possui painel VA, resolução Full HD, curvatura 1800R, conexões HDMI e VGA, AMD FreeSync e modo de proteção ocular. O valor individual é de R$ 690; levando as duas unidades, a sacola aplica automaticamente o preço especial de R$ 1.300 pelo par.",
    "conditionNotes": "Unidade 2 usada, em perfeito estado de uso e conservação e com funcionamento normal.",
    "details": [
      [
        "Marca",
        "Samsung"
      ],
      [
        "Modelo",
        "CF390 · LC27F390FHLMZD"
      ],
      [
        "Tamanho",
        "27 polegadas"
      ],
      [
        "Formato",
        "Tela curva 1800R"
      ],
      [
        "Resolução",
        "Full HD · 1920 × 1080"
      ],
      [
        "Painel",
        "VA"
      ],
      [
        "Taxa de atualização",
        "60 Hz"
      ],
      [
        "Tempo de resposta",
        "4 ms"
      ],
      [
        "Conexões",
        "HDMI · VGA · saída para fone"
      ],
      [
        "Recursos",
        "AMD FreeSync · Eye Saver Mode"
      ],
      [
        "Identificação",
        "Unidade 2 de 2"
      ],
      [
        "Preço",
        "R$ 690 · par com desconto automático na sacola"
      ]
    ],
    "referenceCover": true,
    "bundleGroup": "samsung-cf390-pair"
  },
  {
    "id": "jbl-flip-5-preta",
    "slug": "jbl-flip-5-bluetooth-20w-preta",
    "name": "JBL Flip 5 Bluetooth 20 W Preta",
    "type": "single",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 700,
    "newPriceLabel": "Nova encontrada",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://www.xenxen.com.br/produto/caixa-de-som-bluetooth-jbl-flip-5-preto-xen2-0864"
    },
    "image": "assets/produtos/jbl-flip-5-preta/capa-varanda-piscina.jpg",
    "alt": "JBL Flip 5 preta em uma varanda ao lado da piscina — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/jbl-flip-5-preta/capa-varanda-piscina.jpg",
        "alt": "JBL Flip 5 preta em uma varanda ao lado da piscina — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jbl-flip-5-preta/foto-real-frente.jpg",
        "alt": "Vista frontal da JBL Flip 5 preta anunciada — foto real"
      },
      {
        "src": "assets/produtos/jbl-flip-5-preta/foto-real-ligada.jpg",
        "alt": "JBL Flip 5 anunciada ligada, mostrando os indicadores de energia e Bluetooth — foto real"
      },
      {
        "src": "assets/produtos/jbl-flip-5-preta/foto-real-lateral.jpg",
        "alt": "Vista lateral da JBL Flip 5 anunciada, mostrando acabamento e marcas de uso — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulso · JBL",
    "meta": "20 W RMS · Bluetooth · IPX7",
    "conditionSummary": "Marcas de uso visíveis e funcionamento perfeito.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As três imagens seguintes mostram a caixa de som anunciada, ligada e com suas marcas de uso reais.",
    "description": "Caixa de som portátil JBL Flip 5 com potência de 20 W RMS, conexão Bluetooth e tecnologia PartyBoost para conectar outras caixas JBL compatíveis. Possui bateria interna recarregável, carregamento por USB-C e estrutura resistente à água com certificação IPX7.",
    "conditionNotes": "Produto usado com marcas de uso visíveis nas extremidades e no acabamento. Está funcionando perfeitamente.",
    "details": [
      ["Marca", "JBL"],
      ["Modelo", "Flip 5"],
      ["Cor", "Preta"],
      ["Potência", "20 W RMS"],
      ["Conectividade", "Bluetooth 4.2"],
      ["Bateria", "Interna recarregável · autonomia do modelo de até 12 horas"],
      ["Carregamento", "USB-C"],
      ["Resistência", "Água · certificação IPX7"],
      ["Recurso", "JBL PartyBoost"],
      ["Transporte", "Cordão integrado"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "bose-portable-smart-speaker-triple-black",
    "slug": "bose-portable-smart-speaker-triple-black",
    "name": "Bose Portable Smart Speaker Triple Black",
    "type": "single",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 690,
    "newPrice": 2990,
    "newPriceLabel": "Nova encontrada",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://htclick.com.br/produto/caixa-de-som-wi-fi-bose-portable-smart-speaker-triple-black/"
    },
    "image": "assets/produtos/bose-portable-smart-speaker-triple-black/capa-quadra-beach-tennis.jpg",
    "alt": "Bose Portable Smart Speaker Triple Black ao lado de uma quadra de beach tennis — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/bose-portable-smart-speaker-triple-black/capa-quadra-beach-tennis.jpg",
        "alt": "Bose Portable Smart Speaker Triple Black ao lado de uma quadra de beach tennis — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/bose-portable-smart-speaker-triple-black/foto-real-frente.jpg",
        "alt": "Vista frontal da Bose Portable Smart Speaker Triple Black anunciada — foto real"
      },
      {
        "src": "assets/produtos/bose-portable-smart-speaker-triple-black/foto-real-controles.jpg",
        "alt": "Vista superior e lateral da Bose Portable Smart Speaker anunciada, mostrando controles e marcas de uso — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulso · Bose",
    "meta": "Bluetooth · Wi-Fi · som 360°",
    "conditionSummary": "Marcas de uso visíveis e funcionamento perfeito.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As duas imagens seguintes mostram a caixa de som anunciada e suas marcas de uso reais.",
    "description": "Caixa de som portátil Bose com áudio em 360 graus e bateria interna recarregável. Possui Bluetooth e Wi-Fi, além de compatibilidade com o aplicativo Bose Music, Apple AirPlay 2 e Spotify Connect. Pode ser usada em casa conectada à rede ou como caixa Bluetooth portátil.",
    "conditionNotes": "Produto usado com muitas marcas de uso visíveis, principalmente na parte superior e no corpo. Está funcionando perfeitamente.",
    "details": [
      ["Marca", "Bose"],
      ["Modelo", "Portable Smart Speaker"],
      ["Cor", "Triple Black"],
      ["Conectividade", "Bluetooth e Wi-Fi"],
      ["Recursos", "Som 360° · AirPlay 2 · Spotify Connect"],
      ["Aplicativo", "Bose Music"],
      ["Alimentação", "Bateria interna recarregável · USB-C"],
      ["Resistência", "Respingos d’água · IPX4"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "macbook-pro-16-m2-max-96gb-1tb",
    "slug": "macbook-pro-16-m2-max-96gb-1tb",
    "name": "MacBook Pro 16” M2 Max 96 GB 1 TB",
    "type": "single",
    "category": "Notebooks",
    "categoryId": "tecnologia",
    "price": 19900,
    "image": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/capa-estudio-criativo.jpg",
    "alt": "MacBook Pro de 16 polegadas com chip M2 Max em uma mesa de trabalho criativo — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/capa-estudio-criativo.jpg",
        "alt": "MacBook Pro de 16 polegadas com chip M2 Max em uma mesa de trabalho criativo — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/foto-real-fechado.jpg",
        "alt": "MacBook Pro de 16 polegadas anunciado fechado, mostrando a tampa e o acabamento — foto real"
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/foto-real-base-serie-protegida.jpg",
        "alt": "Base do MacBook Pro anunciado mostrando o modelo A2780, com número de série borrado — foto real"
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/foto-real-especificacoes-serie-protegida.jpg",
        "alt": "Tela de informações do MacBook Pro mostrando chip M2 Max e memória de 96 GB, com número de série borrado — foto real"
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/applecare-ate-marco-2027-dados-protegidos.png",
        "alt": "Tela mostrando AppleCare Plus válido até março de 2027, com dados identificadores borrados — captura real"
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/bateria-condicao-normal.png",
        "alt": "Tela de bateria do MacBook Pro mostrando condição normal — captura real"
      },
      {
        "src": "assets/produtos/macbook-pro-16-m2-max-96gb-1tb/bateria-capacidade-82.png",
        "alt": "Tela de bateria do MacBook Pro mostrando capacidade máxima de 82 por cento — captura real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · poucas marcas de uso",
    "tag": "Avulso · AppleCare+",
    "meta": "M2 Max · 96 GB · SSD 1 TB",
    "conditionSummary": "Poucas marcas de uso, AppleCare+ ativo e carregador original incluso.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As imagens seguintes mostram o MacBook anunciado e suas informações reais. Números de série, contrato e dados pessoais foram borrados por privacidade.",
    "description": "MacBook Pro de 16 polegadas com chip Apple M2 Max, 96 GB de memória unificada e SSD de 1 TB. Configuração profissional para edição de vídeo, criação 3D, desenvolvimento, produção musical, inteligência artificial e outras tarefas exigentes. Possui tela Liquid Retina XDR, teclado retroiluminado, Touch ID, HDMI, leitor de cartões SDXC e conexão MagSafe.",
    "conditionNotes": "Produto usado com poucas marcas de uso. Bateria em condição normal, com capacidade máxima de 82%. Possui AppleCare+ ativo até 22 de março de 2027 e acompanha carregador original.",
    "details": [
      ["Marca", "Apple"],
      ["Modelo", "MacBook Pro 16” · A2780"],
      ["Chip", "Apple M2 Max"],
      ["Memória", "96 GB de memória unificada"],
      ["Armazenamento", "SSD de 1 TB"],
      ["Tela", "Liquid Retina XDR de 16,2”"],
      ["Bateria", "Condição normal · capacidade máxima de 82%"],
      ["Cobertura", "AppleCare+ até 22 de março de 2027"],
      ["Cor", "Cinza-espacial"],
      ["Acompanha", "Carregador original"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "microfone-lapela-sem-fio-duplo-lightning",
    "slug": "microfone-lapela-sem-fio-duplo-lightning",
    "name": "Kit Microfone de Lapela Sem Fio Duplo Lightning",
    "type": "kit",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 49,
    "newPrice": 75,
    "newPriceLabel": "Novo encontrado",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://ifinformatica.com/produto/microfone-lapela-wireless-iphone-lightning-duplo"
    },
    "image": "assets/produtos/microfone-lapela-duplo-lightning/capa-mesa-criador.png",
    "alt": "Dois microfones de lapela sem fio e receptor Lightning em uma mesa de criação de conteúdo — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/microfone-lapela-duplo-lightning/capa-mesa-criador.png",
        "alt": "Dois microfones de lapela sem fio e receptor Lightning em uma mesa de criação de conteúdo — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/microfone-lapela-duplo-lightning/foto-real-4708.jpg",
        "alt": "Dois microfones de lapela sem fio e receptor Lightning anunciados — foto real"
      },
      {
        "src": "assets/produtos/microfone-lapela-duplo-lightning/foto-real-4707.jpg",
        "alt": "Caixa do kit de microfones de lapela sem fio anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Kit completo",
    "tag": "Kit · 2 microfones",
    "meta": "Sem fio · Lightning · 2 cabos",
    "conditionSummary": "Kit com dois microfones, receptor Lightning e dois cabos.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As duas imagens seguintes mostram o kit anunciado.",
    "description": "Kit compacto com dois microfones de lapela sem fio para gravar duas pessoas simultaneamente. O receptor possui conector Lightning para uso com iPhones e iPads compatíveis, sendo uma opção prática para vídeos, entrevistas, aulas e conteúdos para redes sociais.",
    "conditionNotes": "Acompanha dois microfones, receptor Lightning, dois cabos e caixa. As fotos reais da galeria mostram o conjunto anunciado.",
    "details": [
      ["Tipo", "Microfone de lapela sem fio"],
      ["Quantidade", "2 microfones"],
      ["Receptor", "Lightning"],
      ["Compatibilidade", "iPhone e iPad com entrada Lightning"],
      ["Acompanha", "2 cabos e caixa"],
      ["Formato de venda", "Kit completo"]
    ]
  },
  {
    "id": "canon-eos-rebel-t3i-kit-18-55-75-300",
    "slug": "canon-eos-rebel-t3i-kit-18-55-75-300",
    "name": "Canon EOS Rebel T3i com Lentes 18–55 e 75–300 mm",
    "type": "kit",
    "category": "Câmeras",
    "categoryId": "tecnologia",
    "price": 1900,
    "image": "assets/produtos/canon-t3i-kit-duas-lentes/capa-estudio-fotografia.png",
    "alt": "Canon EOS Rebel T3i com lentes 18–55 e 75–300 mm em uma mesa de fotografia — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/capa-estudio-fotografia.png",
        "alt": "Canon EOS Rebel T3i com lentes 18–55 e 75–300 mm em uma mesa de fotografia — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4701.jpg",
        "alt": "Kit Canon EOS Rebel T3i anunciado com as duas lentes, bateria e carregador — foto real"
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4702.jpg",
        "alt": "Vista frontal da Canon EOS Rebel T3i anunciada com a lente 18–55 mm — foto real"
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4703.jpg",
        "alt": "Vista lateral da Canon EOS Rebel T3i anunciada — foto real"
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4704.jpg",
        "alt": "Parte traseira da Canon EOS Rebel T3i anunciada com tela articulada — foto real"
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4705.jpg",
        "alt": "Vista superior e lateral da Canon EOS Rebel T3i com lente 18–55 mm — foto real"
      },
      {
        "src": "assets/produtos/canon-t3i-kit-duas-lentes/foto-real-4706.jpg",
        "alt": "Lente Canon EF 75–300 mm III incluída no kit — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · funcionamento perfeito",
    "tag": "Kit · 2 lentes",
    "meta": "18 MP · 18–55 mm · 75–300 mm",
    "conditionSummary": "Câmera e lentes em perfeito funcionamento.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As seis imagens seguintes mostram exatamente a câmera, as lentes e os acessórios anunciados.",
    "description": "Kit Canon EOS Rebel T3i com sensor de 18 megapixels, gravação de vídeo Full HD e tela LCD articulada. Acompanha uma lente Canon EF-S 18–55 mm IS II para uso geral e uma lente Canon EF 75–300 mm III para fotografar assuntos mais distantes.",
    "conditionNotes": "Câmera e lentes usadas, em perfeito funcionamento. As fotos reais da galeria mostram o estado atual do conjunto.",
    "details": [
      ["Marca", "Canon"],
      ["Modelo", "EOS Rebel T3i"],
      ["Sensor", "18 megapixels · APS-C"],
      ["Vídeo", "Full HD"],
      ["Tela", "LCD articulada"],
      ["Lente principal", "Canon EF-S 18–55 mm IS II"],
      ["Lente teleobjetiva", "Canon EF 75–300 mm f/4–5.6 III"],
      ["Acompanha", "Bateria e carregador Canon"],
      ["Formato de venda", "Kit completo"]
    ]
  },
  {
    "id": "macbook-air-retina-2019-i5-16gb-256gb",
    "slug": "macbook-air-retina-2019-i5-16gb-256gb",
    "name": "MacBook Air Retina 13” i5 16 GB 256 GB",
    "type": "single",
    "category": "Notebooks",
    "categoryId": "tecnologia",
    "price": 2900,
    "image": "assets/produtos/macbook-air-2019-16gb-256gb/capa-home-office.jpg",
    "alt": "MacBook Air Retina de 13 polegadas em uma mesa de trabalho iluminada — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/macbook-air-2019-16gb-256gb/capa-home-office.jpg",
        "alt": "MacBook Air Retina de 13 polegadas em uma mesa de trabalho iluminada — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/macbook-air-2019-16gb-256gb/foto-real-frente.jpg",
        "alt": "MacBook Air anunciado aberto e ligado, visto de frente — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-2019-16gb-256gb/foto-real-angulo.jpg",
        "alt": "MacBook Air anunciado aberto e ligado, visto em ângulo — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-2019-16gb-256gb/foto-real-especificacoes.jpg",
        "alt": "Tela de informações do MacBook Air mostrando processador Core i5 e memória de 16 GB, com número de série borrado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · estado impecável",
    "tag": "Avulso · 256 GB",
    "meta": "16 GB RAM · Intel Core i5 · Retina 13”",
    "conditionSummary": "Muito bem conservado e acompanhado de carregador e capa de proteção.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As três imagens seguintes mostram o MacBook anunciado. O número de série foi borrado por privacidade.",
    "description": "MacBook Air Retina de 13 polegadas com processador Intel Core i5 dual-core de 1,6 GHz, 16 GB de memória RAM e SSD de 256 GB. Possui tela Retina, Touch ID, teclado retroiluminado e duas portas Thunderbolt 3 USB-C.",
    "conditionNotes": "Produto em estado impecável. Acompanha carregador e capa de proteção.",
    "details": [
      ["Marca", "Apple"],
      ["Modelo", "MacBook Air Retina 13”"],
      ["Processador", "Intel Core i5 dual-core de 1,6 GHz"],
      ["Memória", "16 GB LPDDR3 2133 MHz"],
      ["Armazenamento", "SSD de 256 GB"],
      ["Gráficos", "Intel UHD Graphics 617"],
      ["Sistema exibido", "macOS Sonoma 14.8.7"],
      ["Cor", "Cinza-espacial"],
      ["Acompanha", "Carregador e capa de proteção"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "microfone-zealsound-k66-prata",
    "slug": "microfone-zealsound-k66-prata",
    "name": "Microfone Condensador USB ZealSound K66 Prata",
    "type": "single",
    "category": "Áudio",
    "categoryId": "tecnologia",
    "price": 149,
    "newPrice": 286,
    "newPriceLabel": "Novo importado com tributos",
    "newPriceSource": {
      "label": "Referência no Mercado Livre",
      "url": "https://www.mercadolivre.com.br/microfone-usb-condensador-para-jogos-de-pc-ps4-ps5-podcast/p/MLB2097046982?pdp_filters=item_id%3AMLB7715527312"
    },
    "image": "assets/produtos/microfone-zealsound-k66-prata/capa-estudio-podcast.jpg",
    "alt": "Microfone condensador USB ZealSound K66 prata em uma mesa de gravação — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/microfone-zealsound-k66-prata/capa-estudio-podcast.jpg",
        "alt": "Microfone condensador USB ZealSound K66 prata em uma mesa de gravação — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/microfone-zealsound-k66-prata/foto-real-angulo.jpg",
        "alt": "Microfone ZealSound K66 prata anunciado sobre sua base, visto em ângulo — foto real"
      },
      {
        "src": "assets/produtos/microfone-zealsound-k66-prata/foto-real-frente.jpg",
        "alt": "Vista frontal do microfone ZealSound K66 anunciado, mostrando seus controles — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · com cabo USB-C",
    "tag": "Avulso · USB",
    "meta": "Condensador · controles integrados",
    "conditionSummary": "Produto usado e acompanhado de cabo USB-C.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As duas imagens seguintes mostram o microfone anunciado.",
    "description": "Microfone condensador USB ZealSound K66 na cor prata, indicado para podcasts, chamadas, aulas, jogos, transmissões e gravações de voz. Possui botão de mute, controles físicos de ganho do microfone, volume de monitoramento e eco, além de saída para fones de ouvido.",
    "conditionNotes": "Produto usado, com sinais de uso visíveis nas fotos reais. Acompanha cabo USB-C.",
    "details": [
      ["Marca", "ZealSound"],
      ["Modelo", "K66"],
      ["Tipo", "Microfone condensador de mesa"],
      ["Conexão", "USB"],
      ["Controles", "Mute, ganho, monitoramento e eco"],
      ["Saída para fone", "3,5 mm"],
      ["Cor", "Prata"],
      ["Acompanha", "Cabo USB-C"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hd-externo-seagate-backup-plus-4tb-prata",
    "slug": "hd-externo-seagate-backup-plus-4tb-prata",
    "name": "HD Externo Seagate Backup Plus Portable 4 TB Prata",
    "type": "single",
    "category": "Armazenamento",
    "categoryId": "tecnologia",
    "price": 690,
    "newPrice": 1357,
    "newPriceLabel": "Novo encontrado",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://tendinfo.com.br/seagate"
    },
    "image": "assets/produtos/seagate-backup-plus-4tb-prata/capa-estudio-criativo.jpg",
    "alt": "HD externo Seagate Backup Plus Portable prata em uma mesa de trabalho criativo — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/seagate-backup-plus-4tb-prata/capa-estudio-criativo.jpg",
        "alt": "HD externo Seagate Backup Plus Portable prata em uma mesa de trabalho criativo — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/seagate-backup-plus-4tb-prata/foto-real-angulo.jpg",
        "alt": "HD externo Seagate Backup Plus Portable de 4 TB anunciado, visto em ângulo — foto real"
      },
      {
        "src": "assets/produtos/seagate-backup-plus-4tb-prata/foto-real-superior.jpg",
        "alt": "Vista superior do HD externo Seagate Backup Plus Portable prata anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado",
    "tag": "Avulso · 4 TB",
    "meta": "USB 3.0 · acabamento prata",
    "conditionSummary": "Produto usado.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As duas imagens seguintes mostram o HD anunciado.",
    "description": "HD externo portátil Seagate Backup Plus Portable com capacidade de 4 TB, acabamento metálico prata e conexão USB 3.0. Uma opção compacta para armazenar arquivos, fotos, vídeos e cópias de segurança.",
    "conditionNotes": "As fotos reais da galeria mostram o estado atual do produto.",
    "details": [
      ["Marca", "Seagate"],
      ["Linha", "Backup Plus Portable"],
      ["Tipo", "HD externo portátil"],
      ["Capacidade", "4 TB"],
      ["Conexão", "USB 3.0"],
      ["Cor", "Prata"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hd-externo-wd-elements-2tb",
    "slug": "hd-externo-wd-elements-2tb",
    "name": "HD Externo WD Elements 2 TB",
    "type": "single",
    "category": "Armazenamento",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 1200,
    "newPriceLabel": "Novo encontrado",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://www.kabum.com.br/produto/93575/hd-externo-wd-elements-2tb-usb-3-0-preto-wdbu6y0020bbk"
    },
    "image": "assets/produtos/wd-elements-2tb/capa-media-console.png",
    "alt": "HD externo WD Elements preto sobre um móvel de mídia em pedra clara — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/wd-elements-2tb/capa-media-console.png",
        "alt": "HD externo WD Elements preto sobre um móvel de mídia em pedra clara — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/wd-elements-2tb/foto-real.jpg",
        "alt": "HD externo WD Elements de 2 TB anunciado, mostrando as marcas de uso — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando perfeitamente",
    "tag": "Avulso · 2 TB",
    "meta": "USB 3.0 · formatado · pronto para uso",
    "conditionSummary": "Usado, com marcas de uso, formatado e pronto para uso.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. A segunda imagem mostra o HD anunciado e suas marcas de uso.",
    "description": "HD externo portátil Western Digital da linha WD Elements, com capacidade de 2 TB e conexão USB 3.0. Uma opção compacta para armazenar arquivos, fotos, vídeos e cópias de segurança.",
    "conditionNotes": "Produto usado, com marcas de uso visíveis na foto real. Está formatado e pronto para uso.",
    "details": [
      ["Marca", "Western Digital"],
      ["Linha", "WD Elements"],
      ["Tipo", "HD externo portátil"],
      ["Capacidade", "2 TB"],
      ["Conexão", "USB 3.0"],
      ["Estado do disco", "Formatado e pronto para uso"],
      ["Condição", "Usado, com marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "apple-iphone-8-64gb-preto",
    "slug": "apple-iphone-8-64gb-preto",
    "name": "Apple iPhone 8 64 GB Preto",
    "type": "single",
    "category": "Smartphones",
    "categoryId": "tecnologia",
    "price": 390,
    "image": "assets/produtos/iphone-8-64gb-preto/capa-valet-tray.png",
    "alt": "iPhone 8 preto sobre uma bandeja de couro em um aparador — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/iphone-8-64gb-preto/capa-valet-tray.png",
        "alt": "iPhone 8 preto sobre uma bandeja de couro em um aparador — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/iphone-8-64gb-preto/foto-real-frente.jpg",
        "alt": "Parte frontal do iPhone 8 anunciado com a tela ligada — foto real"
      },
      {
        "src": "assets/produtos/iphone-8-64gb-preto/foto-real-traseira.jpg",
        "alt": "Parte traseira quebrada do iPhone 8 anunciada, protegida com silver tape — foto real"
      },
      {
        "src": "assets/produtos/iphone-8-64gb-preto/foto-real-bateria.jpg",
        "alt": "Tela de saúde da bateria do iPhone 8 mostrando capacidade máxima de 100% — foto real"
      },
      {
        "src": "assets/produtos/iphone-8-64gb-preto/foto-real-modelo.jpg",
        "alt": "Tela de informações mostrando iPhone 8 e iOS 16.7.16, com identificadores ocultos — foto real"
      },
      {
        "src": "assets/produtos/iphone-8-64gb-preto/foto-real-capacidade.jpg",
        "alt": "Tela de informações mostrando capacidade de 64 GB e ausência de bloqueio de operadora, com identificadores ocultos — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · traseira quebrada",
    "tag": "Avulso · 64 GB",
    "meta": "iOS 16.7.16 · bateria exibida em 100%",
    "conditionSummary": "Usado, com a parte traseira quebrada e protegida com silver tape.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As cinco imagens seguintes mostram o aparelho anunciado. Número de série, IMEI e demais identificadores foram ocultos por privacidade.",
    "description": "Apple iPhone 8 preto com 64 GB de armazenamento, tela de 4,7 polegadas e botão de início com Touch ID. O aparelho liga e as telas de ajustes registradas nas fotos mostram iOS 16.7.16, capacidade de 64 GB e bateria indicando 100%.",
    "conditionNotes": "A parte traseira está quebrada e foi coberta com silver tape, como mostra a foto real. A tela está ligada e acessível nas fotos. O preço de R$ 390 já considera essa condição.",
    "details": [
      ["Marca", "Apple"],
      ["Modelo", "iPhone 8"],
      ["Número do modelo", "MQ6G2BZ/A"],
      ["Armazenamento", "64 GB"],
      ["Sistema exibido", "iOS 16.7.16"],
      ["Saúde da bateria exibida", "100%"],
      ["Bloqueio de operadora", "Sem restrições"],
      ["Cor", "Preto"],
      ["Condição da traseira", "Quebrada e protegida com silver tape"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hd-externo-seagate-portable-drive-5tb",
    "slug": "hd-externo-seagate-portable-drive-5tb",
    "name": "HD Externo Seagate Portable Drive 5 TB",
    "type": "single",
    "category": "Armazenamento",
    "categoryId": "tecnologia",
    "price": 890,
    "newPrice": 1163,
    "newPriceLabel": "Novo equivalente",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://sp.olx.com.br/sao-paulo-e-regiao/informatica/armazenamento/hd-externo-portatil-seagate-expansion-5tb-usb-3-0-pc-e-mac-1544961588"
    },
    "image": "assets/produtos/seagate-portable-drive-5tb/capa-arquivo.png",
    "alt": "HD externo Seagate Portable Drive preto em uma área organizada para arquivamento — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/seagate-portable-drive-5tb/capa-arquivo.png",
        "alt": "HD externo Seagate Portable Drive preto em uma área organizada para arquivamento — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/seagate-portable-drive-5tb/foto-real-frente.jpg",
        "alt": "HD externo Seagate Portable Drive de 5 TB anunciado visto pela frente — foto real"
      },
      {
        "src": "assets/produtos/seagate-portable-drive-5tb/foto-real-etiqueta.jpg",
        "alt": "Etiqueta do HD Seagate anunciado mostrando capacidade de 5 TB e modelo, com número de série borrado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · estado excelente",
    "tag": "Avulso · 5 TB",
    "meta": "USB 3.0 · funcionando perfeitamente",
    "conditionSummary": "Usado, em estado excelente e funcionando perfeitamente.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As duas imagens seguintes mostram o HD anunciado. O número de série foi borrado por privacidade.",
    "description": "HD externo portátil Seagate Portable Drive com capacidade de 5 TB e conexão USB 3.0. Compacto e com amplo espaço para arquivos, fotos, vídeos, backups e expansão de armazenamento.",
    "conditionNotes": "Produto usado, em estado excelente e funcionando perfeitamente.",
    "details": [
      ["Marca", "Seagate"],
      ["Linha", "Portable Drive"],
      ["Modelo", "SRD0NF1"],
      ["Tipo", "HD externo portátil"],
      ["Capacidade", "5 TB"],
      ["Conexão", "USB 3.0"],
      ["Ano de fabricação", "2023"],
      ["Condição", "Usado, em estado excelente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hd-externo-wd-my-passport-ultra-2tb",
    "slug": "hd-externo-wd-my-passport-ultra-2tb",
    "name": "HD Externo WD My Passport Ultra 2 TB",
    "type": "single",
    "category": "Armazenamento",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 599,
    "newPriceLabel": "Novo equivalente",
    "newPriceSource": {
      "label": "Referência de mercado",
      "url": "https://www.ecomdesconto.com.br/produto/hd-externo-portatil-wd-my-passport-2-tb-usb-3-2-preto"
    },
    "image": "assets/produtos/wd-my-passport-ultra-2tb/capa-viagem.png",
    "alt": "HD externo WD My Passport Ultra preto acomodado em uma mala de viagem — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/wd-my-passport-ultra-2tb/capa-viagem.png",
        "alt": "HD externo WD My Passport Ultra preto acomodado em uma mala de viagem — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/wd-my-passport-ultra-2tb/foto-real.jpg",
        "alt": "HD externo WD My Passport Ultra de 2 TB anunciado, mostrando os sinais de uso — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando perfeitamente",
    "tag": "Avulso · 2 TB",
    "meta": "USB 3.0 · formatado · pronto para uso",
    "conditionSummary": "Usado, com sinais de uso, funcionando perfeitamente e formatado.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. A segunda imagem mostra o HD anunciado e seus sinais de uso.",
    "description": "HD externo portátil Western Digital My Passport Ultra com capacidade de 2 TB e conexão USB 3.0. Compacto para transportar arquivos, fazer cópias de segurança ou ampliar o armazenamento do computador.",
    "conditionNotes": "Produto usado, com sinais de uso visíveis na foto real. Está funcionando perfeitamente, formatado e pronto para uso.",
    "details": [
      ["Marca", "Western Digital"],
      ["Linha", "My Passport Ultra"],
      ["Tipo", "HD externo portátil"],
      ["Capacidade", "2 TB"],
      ["Conexão", "USB 3.0"],
      ["Estado do disco", "Formatado e pronto para uso"],
      ["Condição", "Usado, funcionando perfeitamente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "macbook-air-m3-13-256gb-meia-noite",
    "slug": "macbook-air-m3-13-256gb-meia-noite",
    "name": "MacBook Air 13” M3 2024 8 GB 256 GB",
    "type": "single",
    "category": "Notebooks",
    "categoryId": "tecnologia",
    "price": 5900,
    "image": "assets/produtos/macbook-air-m3-13-256gb/capa-home-office.png",
    "alt": "MacBook Air de 13 polegadas M3 na cor meia-noite sobre uma mesa de trabalho — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/capa-home-office.png",
        "alt": "MacBook Air de 13 polegadas M3 na cor meia-noite sobre uma mesa de trabalho — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/foto-real-aberto.jpg",
        "alt": "MacBook Air M3 anunciado aberto e ligado — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/foto-real-fechado.jpg",
        "alt": "Tampa do MacBook Air M3 anunciado na cor meia-noite — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/foto-real-base.jpg",
        "alt": "Base do MacBook Air M3 anunciado com o número de série borrado — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/especificacoes.jpg",
        "alt": "Tela de informações do MacBook Air mostrando chip M3, memória de 8 GB e ano 2024, com o número de série borrado — foto real"
      },
      {
        "src": "assets/produtos/macbook-air-m3-13-256gb/saude-bateria.jpg",
        "alt": "Tela de saúde da bateria do MacBook Air mostrando condição normal e capacidade máxima de 97% — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · estado excelente",
    "tag": "Avulso · M3 · 256 GB",
    "meta": "8 GB RAM · bateria com 97% · carregador",
    "conditionSummary": "Em estado excelente, praticamente sem marcas de uso, com 97% de capacidade máxima da bateria.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. As cinco imagens seguintes mostram o computador anunciado. O número de série foi borrado nas fotos por privacidade.",
    "description": "MacBook Air de 13,6 polegadas, modelo 2024, com chip Apple M3, 8 GB de memória unificada e SSD de 256 GB. Leve, silencioso e com tela Liquid Retina, teclado retroiluminado e Touch ID.",
    "conditionNotes": "Produto em estado excelente, extremamente novo e praticamente sem marcas de uso. A bateria está com 97% de capacidade máxima e condição normal. Acompanha carregador.",
    "details": [
      ["Marca", "Apple"],
      ["Modelo", "MacBook Air A3113"],
      ["Ano", "2024"],
      ["Tela", "13,6 polegadas · Liquid Retina"],
      ["Chip", "Apple M3"],
      ["Memória", "8 GB de memória unificada"],
      ["Armazenamento", "SSD de 256 GB"],
      ["Cor", "Meia-noite"],
      ["Saúde da bateria", "Normal · 97% de capacidade máxima"],
      ["Acompanha", "Carregador"],
      ["Condição", "Usado, em estado excelente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "louis-vuitton-organizer-de-poche-monogram-eclipse",
    "slug": "louis-vuitton-organizer-de-poche-monogram-eclipse",
    "name": "Louis Vuitton Organizer de Poche Monogram Eclipse",
    "type": "single",
    "category": "Carteiras e acessórios",
    "categoryId": "acessorios",
    "price": 1490,
    "newPrice": 2810,
    "newPriceLabel": "Novo na Louis Vuitton",
    "newPriceSource": {
      "label": "Louis Vuitton Brasil",
      "url": "https://br.louisvuitton.com/por-br/produtos/pocket-organizer-monogram-eclipse-014391/M61696"
    },
    "image": "assets/produtos/louis-vuitton-organizer-de-poche/capa-fechada-ambientada.jpg",
    "alt": "Organizer de Poche Louis Vuitton fechado sobre uma mesa de madeira em um escritório elegante — ambientação ilustrativa criada com IA",
    "photos": [
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/capa-fechada-ambientada.jpg",
        "alt": "Organizer de Poche Louis Vuitton fechado sobre uma mesa de madeira em um escritório elegante — ambientação ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/capa-em-uso.jpg",
        "alt": "Organizer de Poche Louis Vuitton aberto com cartão realista, mostrando a gravação interna — ambientação ilustrativa criada com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/foto-real-exterior.jpg",
        "alt": "Exterior Monogram Eclipse do Organizer de Poche anunciado — foto real"
      },
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/foto-real-caixa.jpg",
        "alt": "Caixa Louis Vuitton que acompanha o Organizer de Poche anunciado — foto real"
      },
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/foto-real-na-caixa.jpg",
        "alt": "Organizer de Poche anunciado dentro da caixa Louis Vuitton — foto real"
      },
      {
        "src": "assets/produtos/louis-vuitton-organizer-de-poche/foto-real-interior.jpg",
        "alt": "Interior do Organizer de Poche anunciado com compartimentos e gravação Louis Vuitton Paris made in France — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · ótimo estado",
    "tag": "Avulso · Monogram Eclipse",
    "meta": "Canvas Monogram Eclipse · acompanha caixa",
    "conditionSummary": "Em ótimo estado e acompanha a caixa Louis Vuitton mostrada nas fotos.",
    "disclosureNote": "As duas primeiras imagens são ambientações criadas com IA a partir das fotos reais. As quatro imagens seguintes mostram o produto anunciado e a caixa que o acompanha.",
    "description": "Louis Vuitton Organizer de Poche em canvas Monogram Eclipse. Compacto e funcional, possui três espaços para cartões, cinco compartimentos internos e um bolso externo.",
    "conditionNotes": "Produto usado, em ótimo estado de conservação. Acompanha a caixa Louis Vuitton mostrada nas fotos reais.",
    "details": [
      ["Marca", "Louis Vuitton"],
      ["Modelo", "Organizer de Poche"],
      ["Referência", "M61696"],
      ["Linha", "Monogram Eclipse"],
      ["Material", "Canvas Monogram Eclipse"],
      ["Compartimentos", "3 espaços para cartões, 5 internos e 1 externo"],
      ["Dimensões", "7,5 × 11 × 1 cm"],
      ["Gravação interna", "Louis Vuitton Paris · made in France"],
      ["Acompanha", "Caixa Louis Vuitton"],
      ["Condição", "Usado, em ótimo estado"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "motorola-moto-g24-256gb-verde",
    "slug": "motorola-moto-g24-256gb-verde",
    "name": "Motorola Moto G24 256 GB Verde",
    "type": "single",
    "category": "Celulares",
    "categoryId": "tecnologia",
    "price": 590,
    "newPrice": 999,
    "newPriceLabel": "Preço de lançamento",
    "newPriceSource": {
      "label": "Motorola Brasil",
      "url": "https://motorolanews.com/br/motorola-anuncia-a-chegada-dos-novos-moto-g04-e-moto-g24-no-brasil/"
    },
    "image": "assets/produtos/motorola-moto-g24-256gb/capa-em-uso.png",
    "alt": "Frente do Motorola Moto G24 verde com a tela ligada, sendo usado em casa — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/motorola-moto-g24-256gb/capa-em-uso.png",
        "alt": "Frente do Motorola Moto G24 verde com a tela ligada, sendo usado em casa — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/motorola-moto-g24-256gb/foto-real-frente.jpg",
        "alt": "Motorola Moto G24 anunciado com a tela ligada — foto real"
      },
      {
        "src": "assets/produtos/motorola-moto-g24-256gb/foto-real-traseira.jpg",
        "alt": "Traseira verde e câmeras do Motorola Moto G24 anunciado — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado apenas em casa · impecável",
    "tag": "Avulso · 256 GB",
    "meta": "4 GB RAM + 4 GB RAM Boost · câmera de 50 MP",
    "conditionSummary": "Usado apenas em casa, em estado impecável e funcionando perfeitamente.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As duas imagens seguintes mostram o aparelho anunciado.",
    "description": "Motorola Moto G24 com 256 GB de armazenamento, 4 GB de RAM e mais 4 GB via RAM Boost. Conta com tela de 6,6 polegadas e 90 Hz, câmera principal de 50 MP e bateria de 5.000 mAh.",
    "conditionNotes": "Produto usado apenas em casa, nunca levado para uso na rua. Está em estado impecável e funcionando perfeitamente.",
    "details": [
      ["Marca", "Motorola"],
      ["Modelo", "Moto G24"],
      ["Cor", "Verde"],
      ["Armazenamento", "256 GB"],
      ["Memória", "4 GB RAM + 4 GB RAM Boost"],
      ["Tela", "6,6 polegadas · 90 Hz"],
      ["Câmera principal", "50 MP"],
      ["Bateria", "5.000 mAh"],
      ["Condição", "Usado apenas em casa, impecável"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hd-externo-toshiba-500gb",
    "slug": "hd-externo-toshiba-usb-500gb",
    "name": "HD Externo Toshiba USB 500 GB",
    "type": "single",
    "category": "Armazenamento",
    "categoryId": "tecnologia",
    "price": 150,
    "image": "assets/produtos/hd-externo-toshiba-500gb/capa-home-office.png",
    "alt": "HD externo Toshiba de 500 GB conectado a um notebook — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/hd-externo-toshiba-500gb/capa-home-office.png",
        "alt": "HD externo Toshiba de 500 GB conectado a um notebook — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/hd-externo-toshiba-500gb/foto-real-hd.jpg",
        "alt": "HD externo Toshiba de 500 GB anunciado — foto real mostrando as marcas de uso"
      },
      {
        "src": "assets/produtos/hd-externo-toshiba-500gb/foto-real-com-cabo.jpg",
        "alt": "HD externo Toshiba de 500 GB anunciado com cabo USB — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionando perfeitamente",
    "tag": "Avulso · 500 GB",
    "meta": "USB · formatado · pronto para uso",
    "conditionSummary": "Usado, com marcas de uso e funcionando perfeitamente.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As duas imagens seguintes mostram o produto anunciado.",
    "description": "HD externo Toshiba com capacidade de 500 GB e conexão USB. Uma opção compacta para transportar arquivos, criar cópias de segurança e ampliar o espaço de armazenamento do computador.",
    "conditionNotes": "Produto usado, com marcas de uso visíveis nas fotos reais. Está funcionando perfeitamente, formatado e pronto para uso. Acompanha cabo USB.",
    "details": [
      ["Marca", "Toshiba"],
      ["Tipo", "HD externo portátil"],
      ["Capacidade", "500 GB"],
      ["Conexão", "USB"],
      ["Acompanha", "Cabo USB"],
      ["Estado do disco", "Formatado e pronto para uso"],
      ["Condição", "Usado, funcionando perfeitamente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "jabra-evolve-30-ms-stereo",
    "slug": "headset-jabra-evolve-30-ms-stereo-usb-p2",
    "name": "Headset Jabra Evolve 30 MS Stereo",
    "type": "single",
    "category": "Áudio e vídeo",
    "categoryId": "tecnologia",
    "price": 350,
    "newPrice": 514,
    "newPriceLabel": "Valor de referência novo",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/fone-headset-usb-p2-cancelamento-ruido-evolve-30-ms-jabra-du-cor-5/p/MLB21426986"
    },
    "image": "assets/produtos/jabra-evolve-30-ms-stereo/capa-home-office.png",
    "alt": "Profissional usando headset Jabra Evolve 30 MS Stereo em um home office — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/jabra-evolve-30-ms-stereo/capa-home-office.png",
        "alt": "Profissional usando headset Jabra Evolve 30 MS Stereo em um home office — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jabra-evolve-30-ms-stereo/referencia-com-controle.png",
        "alt": "Headset Jabra Evolve 30 MS Stereo com cabo, controle de chamadas e conexão USB — imagem de referência do modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/jabra-evolve-30-ms-stereo/referencia-headset.png",
        "alt": "Headset Jabra Evolve 30 MS Stereo preto com detalhes vermelhos — imagem de referência do modelo",
        "isReference": true
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "referencePhotoSource": {
      "label": "Jabra",
      "url": "https://www.jabra.com/supportpages/jabra-evolve-30-ii"
    },
    "isDemo": false,
    "status": "available",
    "condition": "Usado · quase perfeito",
    "tag": "Avulso · headset estéreo",
    "meta": "USB-A e P2 · microfone com redução de ruído",
    "conditionSummary": "Uso pessoal, em estado quase perfeito.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA. As duas imagens seguintes são referências do modelo.",
    "description": "Headset profissional Jabra Evolve 30 MS Stereo com dois fones, microfone com redução de ruído e controle de chamadas no cabo. A conexão USB-A atende computadores, enquanto o conector P2 de 3,5 mm permite o uso em dispositivos compatíveis.",
    "conditionNotes": "Produto usado para uso pessoal, em estado quase perfeito.",
    "details": [
      ["Marca", "Jabra"],
      ["Linha", "Evolve 30"],
      ["Versão", "MS Stereo · dois fones"],
      ["Formato", "On-ear com fio"],
      ["Conexões", "USB-A e P2 de 3,5 mm"],
      ["Microfone", "Haste com redução de ruído"],
      ["Controle no cabo", "Chamadas, volume e mudo"],
      ["Condição", "Usado, quase perfeito"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "emeet-s600-webcam-4k",
    "slug": "webcam-emeet-s600-4k-autofoco",
    "name": "Webcam EMEET S600 4K",
    "type": "single",
    "category": "Tecnologia",
    "categoryId": "tecnologia",
    "price": 250,
    "newPrice": 386,
    "newPriceLabel": "Valor de referência novo",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/emeet-s600-4k-30fps-webcam-1080p-60fps-camera-para-pc-kit-videoconfercncia-live-streaming-com-tripe-autofoco-microfone/p/MLB28897430"
    },
    "image": "assets/produtos/emeet-s600-webcam-4k/capa-home-office.png",
    "alt": "Webcam EMEET S600 instalada em um monitor durante uma videochamada — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/emeet-s600-webcam-4k/capa-home-office.png",
        "alt": "Webcam EMEET S600 instalada em um monitor durante uma videochamada — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/emeet-s600-webcam-4k/produto-lateral-oficial.png",
        "alt": "Webcam EMEET S600 4K vista de lado com o suporte articulado — foto oficial de referência do modelo",
        "isReference": true
      },
      {
        "src": "assets/produtos/emeet-s600-webcam-4k/produto-oficial.png",
        "alt": "Webcam EMEET S600 4K preta — foto oficial de referência do modelo",
        "isReference": true
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "referencePhotoSource": {
      "label": "EMEET",
      "url": "https://emeet.com/products/webcam-s600"
    },
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente nova",
    "tag": "Avulso · webcam 4K",
    "meta": "4K a 30 fps · 1080p a 60 fps · cabo incluso",
    "conditionSummary": "Praticamente nova e acompanha cabo.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA. As duas imagens seguintes são fotos oficiais de referência do modelo, incluindo a vista lateral.",
    "description": "Webcam EMEET SmartCam S600 com resolução 4K a 30 fps ou Full HD 1080p a 60 fps. Possui foco automático, correção automática de luz e dois microfones integrados com redução de ruído, sendo indicada para videochamadas, aulas, reuniões e transmissões. Acompanha cabo.",
    "conditionNotes": "Produto praticamente novo e acompanha cabo.",
    "details": [
      ["Marca", "EMEET"],
      ["Modelo", "SmartCam S600"],
      ["Resolução máxima", "4K Ultra HD a 30 fps"],
      ["Modo Full HD", "1080p a 60 fps"],
      ["Sensor", "8 megapixels"],
      ["Foco", "Automático"],
      ["Campo de visão", "Ajustável de 40° a 73°"],
      ["Microfones", "2 omnidirecionais com redução de ruído"],
      ["Acompanha", "Cabo"],
      ["Condição", "Praticamente nova"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hollyland-lark-m2-solo-usbc",
    "slug": "microfone-sem-fio-hollyland-lark-m2-solo-usb-c",
    "name": "Microfone Hollyland LARK M2 Combo · 1 pessoa",
    "type": "single",
    "category": "Áudio e vídeo",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 699,
    "newPriceLabel": "Novo na Hollyland",
    "newPriceSource": {
      "label": "Hollyland Brasil",
      "url": "https://br.hollyland.com/pt/products/lark-m2"
    },
    "image": "assets/produtos/hollyland-lark-m2-solo-usbc/capa-criadora.png",
    "alt": "Criadora de conteúdo usando um microfone Hollyland LARK M2 — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/hollyland-lark-m2-solo-usbc/capa-criadora.png",
        "alt": "Criadora de conteúdo usando um microfone Hollyland LARK M2 — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/hollyland-lark-m2-solo-usbc/foto-real-kit-completo.jpg",
        "alt": "Kit Hollyland LARK M2 anunciado com estojo, bolsa, receptores e acessórios — foto real"
      },
      {
        "src": "assets/produtos/hollyland-lark-m2-solo-usbc/transmissor-referencia.jpg",
        "alt": "Transmissor Hollyland LARK M2 preto — foto de referência do modelo",
        "isReference": true
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "referencePhotoSource": {
      "label": "Foto Erhardt",
      "url": "https://www.foto-erhardt.com/video/microphones/other-manufacturers/hollyland-lark-m2-for-usb-c.html"
    },
    "isDemo": false,
    "status": "available",
    "condition": "Novo · kit completo",
    "tag": "Avulso · completo para 1 pessoa",
    "meta": "USB-C · Lightning · câmera",
    "conditionSummary": "Novo, completo e configurado para uma pessoa.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA. A segunda mostra o kit completo anunciado. A terceira é uma foto de referência do transmissor.",
    "description": "Sistema de microfone sem fio Hollyland LARK M2 Combo para uma pessoa. O conjunto permite gravar em celulares USB-C, aparelhos com conexão Lightning e câmeras compatíveis, com estojo de carregamento e acessórios.",
    "conditionNotes": "Produto novo e completo. A foto real mostra todos os itens que acompanham o conjunto.",
    "details": [
      ["Marca", "Hollyland"],
      ["Modelo", "LARK M2"],
      ["Versão", "Combo · para 1 pessoa"],
      ["Composição", "1 transmissor + receptores para USB-C, Lightning e câmera"],
      ["Acompanha", "Estojo de carregamento, bolsa, cabo, protetores de vento e acessórios de fixação"],
      ["Captação", "Omnidirecional"],
      ["Qualidade de áudio", "48 kHz / 24 bits"],
      ["Conectividade", "Sem fio 2,4 GHz"],
      ["Recurso", "Cancelamento de ruído"],
      ["Condição", "Novo e completo"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "torradeira-masterchef-to2004p",
    "slug": "torradeira-masterchef-4-fatias-inox-110v",
    "name": "Torradeira MasterChef 4 fatias",
    "type": "single",
    "category": "Eletroportáteis",
    "categoryId": "casa-cozinha",
    "price": 90,
    "image": "assets/produtos/torradeira-masterchef-to2004p/capa-cozinha.png",
    "alt": "Torradeira MasterChef de quatro fatias em uma cozinha contemporânea — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/torradeira-masterchef-to2004p/capa-cozinha.png",
        "alt": "Torradeira MasterChef de quatro fatias em uma cozinha contemporânea — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/torradeira-masterchef-to2004p/foto-real-frontal.jpg",
        "alt": "Torradeira MasterChef de quatro fatias anunciada — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · funcionando normalmente",
    "tag": "Avulso · 4 fatias",
    "meta": "MasterChef · inox · 110 V",
    "conditionSummary": "Funcionando normalmente, com marcas de uso.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir da foto real. A segunda imagem mostra o produto anunciado.",
    "description": "Torradeira MasterChef em aço inox com capacidade para quatro fatias, dois controles independentes e sete níveis de tostagem. Possui funções para descongelar, reaquecer e cancelar o preparo.",
    "conditionNotes": "Produto usado, funcionando normalmente e com marcas de uso visíveis no acabamento inox. A foto real da galeria mostra o estado atual.",
    "details": [
      ["Marca", "MasterChef"],
      ["Modelo", "TO2004P"],
      ["Capacidade", "4 fatias"],
      ["Níveis de tostagem", "7"],
      ["Funções", "Descongelar, reaquecer e cancelar"],
      ["Material", "Aço inox"],
      ["Voltagem", "110 V"],
      ["Condição", "Usada, funcionando normalmente"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "hamburgueira-picelli-hp112",
    "slug": "hamburgueira-manual-picelli-hp-112",
    "name": "Hamburgueira manual Picelli HP-112",
    "type": "single",
    "category": "Utensílios profissionais",
    "categoryId": "casa-cozinha",
    "price": 490,
    "newPrice": 994,
    "newPriceLabel": "Valor de referência novo",
    "newPriceSource": {
      "label": "Radar do Restaurante",
      "url": "https://radardorestaurante.com.br/produto/picelli-hp-112-modelador-hamburguer-manual/"
    },
    "image": "assets/produtos/hamburgueira-picelli-hp112/capa-hamburgueria.png",
    "alt": "Hamburgueira manual Picelli HP-112 em uma cozinha profissional — ambiente ilustrativo criado com IA",
    "photos": [
      {
        "src": "assets/produtos/hamburgueira-picelli-hp112/capa-hamburgueria.png",
        "alt": "Hamburgueira manual Picelli HP-112 em uma cozinha profissional — ambiente ilustrativo criado com IA",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/hamburgueira-picelli-hp112/foto-real-frontal.jpg",
        "alt": "Hamburgueira manual Picelli HP-112 anunciada — vista frontal real"
      },
      {
        "src": "assets/produtos/hamburgueira-picelli-hp112/foto-real-lateral.jpg",
        "alt": "Hamburgueira manual Picelli HP-112 anunciada — vista lateral real com alavanca"
      },
      {
        "src": "assets/produtos/hamburgueira-picelli-hp112/foto-real-molde.jpg",
        "alt": "Molde de 112 mm da hamburgueira Picelli anunciada — foto real"
      },
      {
        "src": "assets/produtos/hamburgueira-picelli-hp112/foto-real-abafadores.jpg",
        "alt": "Duas tampas abafadoras para derreter queijo — foto real"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usada · manual",
    "tag": "Avulso · uso profissional",
    "meta": "Picelli HP-112 · molde Ø 112 mm",
    "conditionSummary": "Usada, com marcas de uso e pontos de desgaste na pintura.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA a partir das fotos reais. As quatro imagens seguintes mostram o produto anunciado.",
    "description": "Hamburgueira manual Picelli HP-112 para moldar hambúrgueres padronizados de 11,2 cm. Equipamento profissional de bancada com alavanca, corpo robusto e componentes de contato em metal.",
    "conditionNotes": "Produto usado, com marcas de uso e pequenos pontos de desgaste na pintura, visíveis nas fotos reais. Acompanha duas tampas abafadoras usadas para derreter queijo, mostradas na galeria.",
    "details": [
      ["Marca", "Picelli"],
      ["Modelo", "HP-112"],
      ["Tipo", "Hamburgueira manual de bancada"],
      ["Diâmetro do molde", "11,2 cm"],
      ["Material", "Alumínio e aço inox"],
      ["Cor", "Branca"],
      ["Acompanha", "2 tampas abafadoras para derreter queijo"],
      ["Condição", "Usada, com marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
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
        "src": "assets/produtos/kit-2-vestidos-donna-carioca-p/modelos-de-costas-v2.png",
        "alt": "Duas mulheres adultas vistas de costas usando os vestidos Donna Carioca laranja e verde com costas abertas e alças transpassadas — ambiente ilustrativo criado com IA",
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
    "newPrice": 300,
    "newPriceLabel": "Valor de referência novo",
    "newPriceSource": {
      "label": "Netshoes",
      "url": "https://www.netshoes.com.br/fitness-e-musculacao/vestidos/hupi"
    },
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
    "price": 1890,
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
    "newPrice": 6590,
    "newPriceLabel": "Novo na Apple",
    "newPriceSource": {
      "label": "Apple Brasil",
      "url": "https://www.apple.com/br/airpods-max/"
    },
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
    "id": "ubiquiti-unifi-u6-plus-unidade-1",
    "slug": "access-point-ubiquiti-unifi-u6-plus-com-fonte-poe-unidade-1",
    "name": "Access Point Ubiquiti UniFi U6+ — Unidade 1",
    "type": "single",
    "category": "Rede e conectividade",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 982,
    "newPriceLabel": "Novo com fonte PoE",
    "newPriceSource": {
      "label": "Ubiquiti Brasil",
      "url": "https://br.store.ui.com/br/en/products/u6-plus"
    },
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
    "tag": "Avulso · unidade 1",
    "meta": "Wi-Fi 6 · fonte PoE incluída · unidade individual",
    "conditionSummary": "Em perfeito funcionamento e com fonte PoE.",
    "description": "Access point Ubiquiti UniFi U6+ — unidade 1, com Wi-Fi 6 para ampliar a cobertura de redes residenciais ou de pequenos escritórios. A unidade é vendida individualmente por R$ 490 e acompanha sua própria fonte/injetor PoE.",
    "conditionNotes": "Unidade 1 usada e em perfeito funcionamento. Como permanece instalada no momento, a foto principal é uma referência oficial do mesmo modelo e a segunda imagem simula o produto montado no teto.",
    "details": [
      [
        "Marca",
        "Ubiquiti"
      ],
      [
        "Linha",
        "UniFi"
      ],
      [
        "Modelo",
        "U6+"
      ],
      [
        "Padrão Wi-Fi",
        "Wi-Fi 6"
      ],
      [
        "Cobertura indicada pelo fabricante",
        "Até 140 m²"
      ],
      [
        "Alimentação",
        "PoE"
      ],
      [
        "Acompanha",
        "Fonte/injetor PoE"
      ],
      [
        "Condição",
        "Usado, em perfeito funcionamento"
      ],
      [
        "Identificação",
        "Unidade 1 de 2"
      ],
      [
        "Preço",
        "R$ 490"
      ],
      [
        "Formato de venda",
        "Unidade individual"
      ]
    ]
  },
  {
    "id": "ubiquiti-unifi-u6-plus-unidade-2",
    "slug": "access-point-ubiquiti-unifi-u6-plus-com-fonte-poe-unidade-2",
    "name": "Access Point Ubiquiti UniFi U6+ — Unidade 2",
    "type": "single",
    "category": "Rede e conectividade",
    "categoryId": "tecnologia",
    "price": 490,
    "newPrice": 982,
    "newPriceLabel": "Novo com fonte PoE",
    "newPriceSource": {
      "label": "Ubiquiti Brasil",
      "url": "https://br.store.ui.com/br/en/products/u6-plus"
    },
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
    "tag": "Avulso · unidade 2",
    "meta": "Wi-Fi 6 · fonte PoE incluída · unidade individual",
    "conditionSummary": "Em perfeito funcionamento e com fonte PoE.",
    "description": "Access point Ubiquiti UniFi U6+ — unidade 2, com Wi-Fi 6 para ampliar a cobertura de redes residenciais ou de pequenos escritórios. A unidade é vendida individualmente por R$ 490 e acompanha sua própria fonte/injetor PoE.",
    "conditionNotes": "Unidade 2 usada e em perfeito funcionamento. Como permanece instalada no momento, a foto principal é uma referência oficial do mesmo modelo e a segunda imagem simula o produto montado no teto.",
    "details": [
      [
        "Marca",
        "Ubiquiti"
      ],
      [
        "Linha",
        "UniFi"
      ],
      [
        "Modelo",
        "U6+"
      ],
      [
        "Padrão Wi-Fi",
        "Wi-Fi 6"
      ],
      [
        "Cobertura indicada pelo fabricante",
        "Até 140 m²"
      ],
      [
        "Alimentação",
        "PoE"
      ],
      [
        "Acompanha",
        "Fonte/injetor PoE"
      ],
      [
        "Condição",
        "Usado, em perfeito funcionamento"
      ],
      [
        "Identificação",
        "Unidade 2 de 2"
      ],
      [
        "Preço",
        "R$ 490"
      ],
      [
        "Formato de venda",
        "Unidade individual"
      ]
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
    "id": "kit-3-perfumes-importados-dg-tommy-burberry",
    "slug": "kit-3-perfumes-importados-dg-tommy-burberry",
    "name": "Kit 3 Perfumes D&G + Tommy Impact + Burberry London",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 690,
    "image": "assets/produtos/kit-3-perfumes-importados-dg-tommy-burberry/foto-real-kit.jpg",
    "alt": "Dolce & Gabbana Pour Homme, Tommy Hilfiger Impact e Burberry London reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-dg-tommy-burberry/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "D&G Pour Homme · Tommy Impact · Burberry London",
    "conditionSummary": "D&G Pour Homme com 60%, Tommy Impact com 25% e Burberry London com 85%. Valor proporcional estimado do conteúdo: R$ 912,32.",
    "description": "Kit com Dolce & Gabbana Pour Homme, Tommy Hilfiger Impact e Burberry London for Men. Pelos preços atuais dos frascos novos e pelos níveis restantes, o conteúdo representa aproximadamente R$ 912,32. O kit completo é anunciado por R$ 690.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Dolce & Gabbana Pour Homme com 60%, Tommy Hilfiger Impact com 25% e Burberry London com 85%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "D&G Pour Homme",
        "60% · ref. novo R$ 699,90 · conteúdo R$ 419,94"
      ],
      [
        "Tommy Impact",
        "25% · ref. novo R$ 476,90 · conteúdo R$ 119,23"
      ],
      [
        "Burberry London",
        "85% · ref. novo R$ 439 · conteúdo R$ 373,15"
      ],
      [
        "Valor proporcional",
        "R$ 912,32 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.616",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-dg-pour-homme",
      "perfume-tommy-impact",
      "perfume-burberry-london"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-fierce-free-wave-st-barth",
    "slug": "kit-3-perfumes-importados-fierce-free-wave-st-barth",
    "name": "Kit 3 Perfumes A&F Fierce + Hollister Free Wave + Tommy Bahama St. Barts",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 490,
    "image": "assets/produtos/kit-3-perfumes-importados-fierce-free-wave-st-barth/foto-real-kit.jpg",
    "alt": "Perfumes Abercrombie & Fitch Fierce, Hollister Free Wave e Tommy Bahama Set Sail St. Barts reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-fierce-free-wave-st-barth/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "A&F Fierce · Hollister Free Wave · Tommy Bahama St. Barts",
    "conditionSummary": "A&F Fierce com aproximadamente 40%, Hollister Free Wave com aproximadamente 45% e Tommy Bahama Set Sail St. Barts com 95%. Valor proporcional estimado do conteúdo: R$ 645,48.",
    "description": "Kit com Abercrombie & Fitch Fierce Cologne, Hollister Free Wave for Him e Tommy Bahama Set Sail St. Barts for Men. Pelos preços atuais dos frascos novos e pelos níveis restantes, o conteúdo representa aproximadamente R$ 645,48. O kit completo é anunciado por R$ 490.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante: Fierce com cerca de 40%, Free Wave com cerca de 45% e Tommy Bahama Set Sail St. Barts com 95%. Os frascos e o estado externo aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "A&F Fierce Cologne",
        "Aprox. 40% · ref. novo R$ 440 · conteúdo R$ 176"
      ],
      [
        "Hollister Free Wave",
        "Aprox. 45% · ref. novo R$ 299,90 · conteúdo R$ 134,96"
      ],
      [
        "Tommy Bahama St. Barts",
        "95% · ref. novo R$ 352,13 · conteúdo R$ 334,52"
      ],
      [
        "Valor proporcional",
        "R$ 645,48 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.092",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-af-fierce",
      "perfume-hollister-free-wave",
      "perfume-tommy-bahama-st-barts"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-sauvage-lacoste-hollister",
    "slug": "kit-3-perfumes-importados-sauvage-lacoste-hollister",
    "name": "Kit 3 Perfumes Dior Sauvage + Lacoste Match Point + Hollister",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 490,
    "image": "assets/produtos/kit-3-perfumes-importados-sauvage-lacoste-hollister/foto-real-kit.jpg",
    "alt": "Perfumes Hollister, Dior Sauvage Eau de Parfum e Lacoste Match Point reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-sauvage-lacoste-hollister/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Dior Sauvage EDP · Lacoste Match Point · Hollister Wave",
    "conditionSummary": "Dior Sauvage Eau de Parfum com aproximadamente 20%, Lacoste Match Point com 90% e Hollister Wave for Him com 35%. Valor proporcional estimado do conteúdo: R$ 727,35.",
    "description": "Kit com Dior Sauvage Eau de Parfum, Lacoste Match Point Eau de Toilette e Hollister Wave for Him. Pelos preços atuais dos frascos novos e pelos níveis restantes, o conteúdo representa aproximadamente R$ 727,35. O kit completo é anunciado por R$ 490.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante: Dior Sauvage com cerca de 20%, Lacoste Match Point com 90% e Hollister Wave for Him com 35%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Dior Sauvage EDP",
        "Aprox. 20% · ref. novo R$ 904 · conteúdo R$ 180,80"
      ],
      [
        "Lacoste Match Point",
        "90% · ref. novo R$ 491 · conteúdo R$ 441,90"
      ],
      [
        "Hollister Wave for Him",
        "35% · ref. novo R$ 299 · conteúdo R$ 104,65"
      ],
      [
        "Valor proporcional",
        "R$ 727,35 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.694",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-dior-sauvage-edp",
      "perfume-lacoste-match-point",
      "perfume-hollister-wave"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-tiffany-212-mercedes",
    "slug": "kit-3-perfumes-importados-tiffany-212-mercedes",
    "name": "Kit 3 Perfumes Tiffany & Love + 212 Men + Mercedes-Benz",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 690,
    "image": "assets/produtos/kit-3-perfumes-importados-tiffany-212-mercedes/foto-real-kit.jpg",
    "alt": "Perfumes Tiffany & Love for Him, Carolina Herrera 212 Men e Mercedes-Benz Man Grey reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-tiffany-212-mercedes/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Tiffany & Love · 212 Men · Mercedes-Benz Man Grey",
    "conditionSummary": "Tiffany & Love for Him com aproximadamente 85%, Carolina Herrera 212 Men com aproximadamente 40% e Mercedes-Benz Man Grey com aproximadamente 80%. Valor proporcional estimado do conteúdo: R$ 1.088,30.",
    "description": "Kit com Tiffany & Love for Him Eau de Toilette, Carolina Herrera 212 Men NYC Eau de Toilette e Mercedes-Benz Man Grey Eau de Toilette. Pelos preços atuais dos frascos novos e pelos níveis restantes, o conteúdo representa aproximadamente R$ 1.088,30. O kit completo é anunciado por R$ 690.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante: Tiffany & Love com cerca de 85%, 212 Men com cerca de 40% e Mercedes-Benz Man Grey com cerca de 80%. Os frascos e o estado externo aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Tiffany & Love for Him",
        "Aprox. 85% · ref. novo R$ 679 · conteúdo R$ 577,15"
      ],
      [
        "Carolina Herrera 212 Men",
        "Aprox. 40% · ref. novo R$ 577,90 · conteúdo R$ 231,16"
      ],
      [
        "Mercedes-Benz Man Grey",
        "Aprox. 80% · ref. novo R$ 349,99 · conteúdo R$ 279,99"
      ],
      [
        "Valor proporcional",
        "R$ 1.088,30 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.607",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-tiffany-love-him",
      "perfume-ch-212-men",
      "perfume-mercedes-man-grey"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-hugo-man-invictus-boss-number-one",
    "slug": "kit-3-perfumes-importados-hugo-man-invictus-boss-number-one",
    "name": "Kit 3 Perfumes Hugo Man + Invictus + Boss Number One",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 290,
    "image": "assets/produtos/kit-3-perfumes-importados-hugo-man-invictus-boss-number-one/foto-real-kit.jpg",
    "alt": "Hugo Man, Rabanne Invictus e Hugo Boss Number One reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-hugo-man-invictus-boss-number-one/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Hugo Man · Invictus · Boss Number One",
    "conditionSummary": "Hugo Man com 35%, Rabanne Invictus com 40% e Hugo Boss Number One com 40%. Valor proporcional estimado do conteúdo: R$ 463,38.",
    "description": "Kit com Hugo Man Eau de Toilette, Rabanne Invictus Eau de Toilette e Hugo Boss Number One Eau de Toilette. Pelas referências atuais e pelos níveis restantes, o conteúdo representa aproximadamente R$ 463,38. O kit completo é anunciado por R$ 290.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Hugo Man com 35%, Invictus com 40% e Boss Number One com 40%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Hugo Man 125 ml",
        "35% · ref. novo R$ 363,84 · conteúdo R$ 127,34"
      ],
      [
        "Rabanne Invictus 100 ml",
        "40% · ref. novo R$ 380,90 · conteúdo R$ 152,36"
      ],
      [
        "Hugo Boss Number One 100 ml",
        "40% · ref. novo R$ 459,20 · conteúdo R$ 183,68"
      ],
      [
        "Valor proporcional",
        "R$ 463,38 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.204",
    "newPriceLabel": "Três frascos novos somados",
    "newPriceSource": {
      "url": "https://bula.com.br/preco/hugo-man-eau-de-toilette-masculino-hugo-boss-125ml-125ml-3614229823806",
      "label": "Hugo Man"
    },
    "inventoryUnitIds": [
      "perfume-hugo-man-125ml",
      "perfume-invictus-edt-100ml",
      "perfume-boss-number-one-100ml"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-acqua-essenziale-blu-ck-one-first-instinct",
    "slug": "kit-3-perfumes-importados-acqua-essenziale-blu-ck-one-first-instinct",
    "name": "Kit 3 Perfumes Acqua Essenziale Blu + CK One + A&F First Instinct",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 390,
    "image": "assets/produtos/kit-3-perfumes-importados-acqua-essenziale-blu-ck-one-first-instinct/foto-real-kit.jpg",
    "alt": "Acqua Essenziale Blu, Calvin Klein CK One e Abercrombie & Fitch First Instinct reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-acqua-essenziale-blu-ck-one-first-instinct/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Acqua Essenziale Blu · CK One · A&F First Instinct",
    "conditionSummary": "Acqua Essenziale Blu com 90%, Calvin Klein CK One com 90% e Abercrombie & Fitch First Instinct Man com 15%. Valor proporcional estimado do conteúdo: R$ 652,47.",
    "description": "Kit com Salvatore Ferragamo Acqua Essenziale Blu Eau de Toilette, Calvin Klein CK One Eau de Toilette e Abercrombie & Fitch First Instinct Man Eau de Toilette. Pelas referências atuais e pelos níveis restantes, o conteúdo representa aproximadamente R$ 652,47. O kit completo é anunciado por R$ 390.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Acqua Essenziale Blu com 90%, CK One com 90% e A&F First Instinct Man com 15%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Acqua Essenziale Blu 100 ml",
        "90% · ref. novo R$ 345,30 · conteúdo R$ 310,77"
      ],
      [
        "Calvin Klein CK One 200 ml",
        "90% · ref. novo R$ 321 · conteúdo R$ 288,90"
      ],
      [
        "A&F First Instinct Man 100 ml",
        "15% · ref. novo R$ 352 · conteúdo R$ 52,80"
      ],
      [
        "Valor proporcional",
        "R$ 652,47 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.018",
    "newPriceLabel": "Três frascos novos somados",
    "newPriceSource": {
      "url": "https://aromizebrasil.com/produto/perfume-salvatore-ferragamo-acqua-essenziale-blu-eau-de-toilette-masculino-100ml-45457",
      "label": "Acqua Essenziale Blu"
    },
    "inventoryUnitIds": [
      "perfume-acqua-essenziale-blu-100ml",
      "perfume-ck-one-200ml",
      "perfume-af-first-instinct-man-100ml"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-hollister-wave-burberry-touch-bvlgari-black",
    "slug": "kit-3-perfumes-importados-hollister-wave-burberry-touch-bvlgari-black",
    "name": "Kit 3 Perfumes Hollister Wave + Burberry Touch + Bvlgari Black",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 390,
    "image": "assets/produtos/kit-3-perfumes-importados-hollister-wave-burberry-touch-bvlgari-black/foto-real-kit.jpg",
    "alt": "Hollister Wave for Him, Burberry Touch for Men e Bvlgari Black reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-hollister-wave-burberry-touch-bvlgari-black/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Hollister Wave · Burberry Touch · Bvlgari Black",
    "conditionSummary": "Hollister Wave for Him com 100%, Burberry Touch for Men com 30% e Bvlgari Black com 30%. Valor proporcional estimado do conteúdo: R$ 683,30.",
    "description": "Kit com Hollister Wave for Him Eau de Toilette, Burberry Touch for Men Eau de Toilette e Bvlgari Black Eau de Toilette. O Bvlgari Black é uma fragrância descontinuada e valorizada no mercado internacional. Pelas referências atuais e pelos níveis restantes, o conteúdo representa aproximadamente R$ 683,30. O kit completo é anunciado por R$ 390.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Hollister Wave com 100%, Burberry Touch com 30% e Bvlgari Black com 30%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Hollister Wave for Him 100 ml",
        "100% · ref. novo R$ 299 · conteúdo R$ 299"
      ],
      [
        "Burberry Touch for Men 100 ml",
        "30% · ref. novo R$ 345 · conteúdo R$ 103,50"
      ],
      [
        "Bvlgari Black 75 ml",
        "30% · ref. internacional R$ 936 · conteúdo R$ 280,80"
      ],
      [
        "Valor proporcional",
        "R$ 683,30 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.580",
    "newPriceLabel": "Referências atuais somadas",
    "newPriceSource": {
      "url": "https://www.reddit.com/r/fragranceswap/comments/1v0a7k4/wts_van_cleef_arpels_midnight_in_paris_edp_1998/",
      "label": "Bvlgari Black descontinuado"
    },
    "inventoryUnitIds": [
      "perfume-hollister-wave-full-100ml",
      "perfume-burberry-touch-100ml",
      "perfume-bvlgari-black-75ml"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-hollister-jake-hermes-dior-homme",
    "slug": "kit-3-perfumes-importados-hollister-jake-hermes-dior-homme",
    "name": "Kit 3 Perfumes Hollister Jake + Terre d’Hermès + Dior Homme Eau",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 990,
    "image": "assets/produtos/kit-3-perfumes-importados-hollister-jake-hermes-dior-homme/foto-real-kit.jpg",
    "alt": "Hollister Jake, Terre d’Hermès Eau Intense Vétiver e Dior Homme Eau for Men reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-hollister-jake-hermes-dior-homme/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Hollister Jake · Terre d’Hermès · Dior Homme Eau",
    "conditionSummary": "Hollister Jake com 90%, Terre d’Hermès Eau Intense Vétiver com 35% e Dior Homme Eau for Men com 90%. Valor proporcional estimado do conteúdo: R$ 2.256,40.",
    "description": "Kit com Hollister Jake Eau de Cologne, Terre d’Hermès Eau Intense Vétiver Eau de Parfum e Dior Homme Eau for Men Eau de Toilette. O Dior Homme Eau for Men é uma fragrância descontinuada e valorizada no mercado internacional. Pelas referências atuais e pelos níveis restantes, o conteúdo representa aproximadamente R$ 2.256,40. O kit completo é anunciado por R$ 990.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Hollister Jake com 90%, Terre d’Hermès com 35% e Dior Homme Eau for Men com 90%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Hollister Jake 100 ml",
        "90% · ref. novo R$ 540 · conteúdo R$ 486"
      ],
      [
        "Terre d’Hermès Eau Intense Vétiver 100 ml",
        "35% · ref. novo R$ 1.250 · conteúdo R$ 437,50"
      ],
      [
        "Dior Homme Eau for Men 100 ml",
        "90% · ref. internacional convertido R$ 1.481 · conteúdo R$ 1.332,90"
      ],
      [
        "Valor proporcional",
        "R$ 2.256,40 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 3.271",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-hollister-jake-100ml",
      "perfume-hermes-terre-intense-vetiver-100ml",
      "perfume-dior-homme-eau-for-men-100ml"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-obsession-sauvage-fahrenheit",
    "slug": "kit-3-perfumes-importados-obsession-sauvage-fahrenheit",
    "name": "Kit 3 Perfumes Obsession Night + Sauvage + Fahrenheit",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 790,
    "image": "assets/produtos/kit-3-perfumes-importados-obsession-sauvage-fahrenheit/foto-real-kit.jpg",
    "alt": "Calvin Klein Obsession Night for Men, Dior Sauvage e Dior Fahrenheit reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-obsession-sauvage-fahrenheit/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Obsession Night · Sauvage EDT · Fahrenheit EDT",
    "conditionSummary": "Obsession Night for Men com 100%, Dior Sauvage Eau de Toilette com 30% e Dior Fahrenheit Eau de Toilette com 60%. Valor proporcional estimado do conteúdo: R$ 1.152,50.",
    "description": "Kit com Calvin Klein Obsession Night for Men, Dior Sauvage Eau de Toilette e Dior Fahrenheit Eau de Toilette. Pelos preços atuais dos frascos novos e pelos níveis restantes, o conteúdo representa aproximadamente R$ 1.152,50. O kit completo é anunciado por R$ 790.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Obsession Night com 100%, Sauvage com 30% e Fahrenheit com 60%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "CK Obsession Night for Men",
        "100% · ref. novo R$ 419 · conteúdo R$ 419"
      ],
      [
        "Dior Sauvage EDT 100 ml",
        "30% · ref. novo R$ 869 · conteúdo R$ 260,70"
      ],
      [
        "Dior Fahrenheit EDT 100 ml",
        "60% · ref. novo R$ 788 · conteúdo R$ 472,80"
      ],
      [
        "Valor proporcional",
        "R$ 1.152,50 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 2.076",
    "newPriceLabel": "Três frascos novos somados",
    "inventoryUnitIds": [
      "perfume-ck-obsession-night-men",
      "perfume-dior-sauvage-edt-100ml",
      "perfume-dior-fahrenheit-edt-100ml"
    ]
  },
  {
    "id": "kit-3-perfumes-importados-eternity-mercedes-benz-boss-bottled",
    "slug": "kit-3-perfumes-importados-eternity-mercedes-benz-boss-bottled",
    "name": "Kit 3 Perfumes Eternity + Mercedes-Benz + Boss Bottled",
    "type": "kit",
    "category": "Perfumes",
    "categoryId": "perfumes",
    "price": 390,
    "image": "assets/produtos/kit-3-perfumes-importados-eternity-mercedes-benz-boss-bottled/foto-real-kit.jpg",
    "alt": "Calvin Klein Eternity for Men, Mercedes-Benz for Men e Hugo Boss Boss Bottled reunidos sobre uma mesa de madeira",
    "photos": [
      {
        "src": "assets/produtos/kit-3-perfumes-importados-eternity-mercedes-benz-boss-bottled/foto-real-kit.jpg",
        "alt": "Foto real dos três perfumes que compõem o kit"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Abertos · níveis variados",
    "tag": "Kit · 3 perfumes",
    "meta": "Eternity EDP · Mercedes-Benz for Men · Boss Bottled",
    "conditionSummary": "Calvin Klein Eternity for Men Eau de Parfum com 35%, Mercedes-Benz for Men Eau de Toilette com 40% e Hugo Boss Boss Bottled Eau de Toilette com 60%. Valor proporcional estimado do conteúdo: R$ 593,59.",
    "description": "Kit com Calvin Klein Eternity for Men Eau de Parfum, Mercedes-Benz for Men Eau de Toilette e Hugo Boss Boss Bottled Eau de Toilette. Pelas referências atuais e pelos níveis restantes, o conteúdo representa aproximadamente R$ 593,59. O kit completo é anunciado por R$ 390.",
    "conditionNotes": "Produtos originais e abertos. Conteúdo restante informado: Eternity com 35%, Mercedes-Benz for Men com 40% e Boss Bottled com 60%. Os níveis e o estado dos três frascos aparecem na foto real.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "CK Eternity for Men EDP 100 ml",
        "35% · ref. novo R$ 429,90 · conteúdo R$ 150,47"
      ],
      [
        "Mercedes-Benz for Men EDT 120 ml",
        "40% · ref. novo R$ 433,11 · conteúdo R$ 173,24"
      ],
      [
        "Hugo Boss Boss Bottled EDT 100 ml",
        "60% · ref. novo R$ 449,80 · conteúdo R$ 269,88"
      ],
      [
        "Valor proporcional",
        "R$ 593,59 em conteúdo restante"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "cerca de R$ 1.313",
    "newPriceLabel": "Três frascos novos somados",
    "newPriceSource": {
      "url": "https://www.belezanaweb.com.br/produto/boss-bottled-hugo-boss-eau-de-toilette-perfume-masculino-100ml/",
      "label": "Boss Bottled 100 ml"
    },
    "inventoryUnitIds": [
      "perfume-ck-eternity-for-men-edp-100ml",
      "perfume-mercedes-benz-for-men-edt-120ml",
      "perfume-hugo-boss-boss-bottled-edt-100ml"
    ]
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
  },
  {
    "id": "raqueteira-yonex-vermelha",
    "name": "Raqueteira Yonex Vermelha e Preta",
    "type": "single",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 90,
    "image": "assets/produtos/raqueteira-yonex-vermelha/capa-quadra.jpg",
    "alt": "Raqueteira Yonex vermelha e preta apoiada ao lado de uma quadra de tênis — ambiente ilustrativo criado com IA a partir do produto real",
    "photos": [
      {
        "src": "assets/produtos/raqueteira-yonex-vermelha/capa-quadra.jpg",
        "alt": "Raqueteira Yonex vermelha e preta apoiada ao lado de uma quadra de tênis — ambiente ilustrativo criado com IA a partir do produto real",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raqueteira-yonex-vermelha/foto-real-frente.jpg",
        "alt": "Vista frontal real da raqueteira Yonex vermelha e preta"
      },
      {
        "src": "assets/produtos/raqueteira-yonex-vermelha/foto-real-costas.jpg",
        "alt": "Vista traseira real da raqueteira Yonex com alças de mochila"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · Yonex",
    "meta": "Alças de mochila · bolsos com zíper",
    "conditionSummary": "Usada, com marcas de uso visíveis nas fotos reais.",
    "description": "Raqueteira Yonex vermelha e preta com alças acolchoadas para uso como mochila, alça de mão e bolsos com zíper. Formato alongado próprio para transportar equipamentos de tênis.",
    "conditionNotes": "Peça usada, com manchas, riscos e sinais de desgaste visíveis principalmente na parte frontal. Zíperes, alças e costuras aparecem nas fotos reais do exemplar.",
    "details": [
      [
        "Marca",
        "Yonex"
      ],
      [
        "Cor",
        "Vermelha e preta"
      ],
      [
        "Transporte",
        "Alças de mochila e alça de mão"
      ],
      [
        "Fechamento",
        "Zíper"
      ],
      [
        "Formato de venda",
        "1 raqueteira"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "raquete-squash-karakal-sx-100",
    "name": "Raquete de Squash Karakal SX-100 com Capa",
    "type": "single",
    "category": "Squash",
    "categoryId": "esportes",
    "price": 290,
    "image": "assets/produtos/raquete-squash-karakal-sx-100/capa-quadra-squash.jpg",
    "alt": "Raquete de squash Karakal SX-100 com sua capa ao lado de uma quadra de squash",
    "photos": [
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/capa-quadra-squash.jpg",
        "alt": "Raquete Karakal SX-100 e capa em ambiente de quadra de squash",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/foto-real-raquete-e-capa.jpg",
        "alt": "Foto real da raquete Karakal SX-100 ao lado da capa"
      },
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/foto-real-raquete.jpg",
        "alt": "Foto real da raquete de squash Karakal SX-100"
      },
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/foto-real-capa.jpg",
        "alt": "Foto real da capa Karakal incluída"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · Karakal",
    "meta": "100 g · Nano Graphite Magnesium Gel · com capa",
    "conditionSummary": "Usada, com marcas de uso e grip desgastado. Acompanha capa.",
    "description": "Raquete de squash Karakal SX-100, modelo leve de 100 g produzido com a tecnologia Nano Graphite Magnesium Gel. Acompanha a capa Karakal mostrada nas fotos reais.",
    "conditionNotes": "Peça usada, com riscos e desgaste no aro e grip bastante usado, conforme mostram as fotos reais. A estrutura e as cordas estão apresentadas no estado atual do exemplar.",
    "details": [
      ["Marca", "Karakal"],
      ["Modelo", "SX-100"],
      ["Peso do quadro", "100 g"],
      ["Material", "Nano Graphite Magnesium Gel"],
      ["Padrão de cordas", "14 x 19"],
      ["Acompanha", "Capa Karakal"]
    ],
    "newPriceText": "£ 109,99",
    "newPriceLabel": "Preço original de tabela no exterior",
    "newPriceSource": {
      "url": "https://www.tennisnuts.com/karakal-sx-100-gel-squash-racket-1156962.html",
      "label": "Tennisnuts"
    },
    "illustratedCover": true
  },
  {
    "id": "raquete-squash-dunlop-aerogel-pro",
    "name": "Raquete de Squash Dunlop Aerogel Pro com Capa",
    "type": "single",
    "category": "Squash",
    "categoryId": "esportes",
    "price": 290,
    "image": "assets/produtos/raquete-squash-dunlop-aerogel-pro/capa-quadra-squash.jpg",
    "alt": "Raquete de squash Dunlop Aerogel Pro com sua capa ao lado de uma quadra de squash",
    "photos": [
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/capa-quadra-squash.jpg",
        "alt": "Raquete Dunlop Aerogel Pro e capa em ambiente de quadra de squash",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/foto-real-raquete-e-capa.jpg",
        "alt": "Foto real da raquete Dunlop Aerogel Pro ao lado da capa"
      },
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/foto-real-raquete.jpg",
        "alt": "Foto real da raquete de squash Dunlop Aerogel Pro"
      },
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/foto-real-capa.jpg",
        "alt": "Foto real da capa Dunlop incluída"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · Dunlop",
    "meta": "135 g · cabeça 525 cm² · com capa",
    "conditionSummary": "Usada, com marcas de uso e grip desgastado. Acompanha capa.",
    "description": "Raquete de squash Dunlop Aerogel Pro com quadro de 135 g, cabeça de 525 cm² e padrão de cordas 16 x 19. Acompanha a capa Dunlop mostrada nas fotos.",
    "conditionNotes": "Peça usada, com riscos no aro e sinais de desgaste no grip, todos visíveis nas fotos reais. A estrutura e as cordas estão apresentadas no estado atual do exemplar.",
    "details": [
      ["Marca", "Dunlop"],
      ["Modelo", "Aerogel Pro"],
      ["Peso do quadro", "135 g"],
      ["Cabeça", "525 cm²"],
      ["Padrão de cordas", "16 x 19"],
      ["Acompanha", "Capa Dunlop"]
    ],
    "newPriceText": "US$ 89",
    "newPriceLabel": "Novo encontrado no exterior",
    "newPriceSource": {
      "url": "https://www.eastwestsportsvail.com/product-page/dunlop-aerogel-pro-squash-racquet",
      "label": "East West Sports"
    },
    "illustratedCover": true
  },
  {
    "id": "kit-2-raquetes-squash-karakal-dunlop",
    "name": "Kit 2 Raquetes de Squash Karakal + Dunlop com Capas",
    "type": "kit",
    "category": "Squash",
    "categoryId": "esportes",
    "price": 500,
    "image": "assets/produtos/kit-2-raquetes-squash-karakal-dunlop/capa-quadra-squash.jpg",
    "alt": "Raquetes de squash Karakal SX-100 e Dunlop Aerogel Pro com suas capas em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kit-2-raquetes-squash-karakal-dunlop/capa-quadra-squash.jpg",
        "alt": "Raquetes Karakal SX-100 e Dunlop Aerogel Pro com suas capas em ambiente de quadra de squash",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/foto-real-raquete-e-capa.jpg",
        "alt": "Foto real da raquete Karakal SX-100 e sua capa"
      },
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/foto-real-raquete-e-capa.jpg",
        "alt": "Foto real da raquete Dunlop Aerogel Pro e sua capa"
      },
      {
        "src": "assets/produtos/raquete-squash-karakal-sx-100/foto-real-raquete.jpg",
        "alt": "Foto real da raquete Karakal SX-100"
      },
      {
        "src": "assets/produtos/raquete-squash-dunlop-aerogel-pro/foto-real-raquete.jpg",
        "alt": "Foto real da raquete Dunlop Aerogel Pro"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usadas · marcas de uso",
    "tag": "Kit · 2 raquetes",
    "meta": "Karakal SX-100 + Dunlop Aerogel Pro · com capas",
    "conditionSummary": "Duas raquetes usadas, com marcas de uso e grips desgastados.",
    "description": "Kit com duas raquetes de squash: uma Karakal SX-100 de 100 g e uma Dunlop Aerogel Pro de 135 g. Cada raquete acompanha sua respectiva capa mostrada nas fotos reais.",
    "conditionNotes": "As duas raquetes apresentam riscos e desgaste nos aros e nos grips, conforme as fotos reais. A capa ambientada mostra uma sugestão visual com overgrips pretos novos; o estado entregue é o exibido nas fotos reais.",
    "details": [
      ["Quantidade", "2 raquetes"],
      ["Modelos", "Karakal SX-100 e Dunlop Aerogel Pro"],
      ["Peso Karakal", "100 g"],
      ["Peso Dunlop", "135 g"],
      ["Capas", "2 capas, uma para cada raquete"],
      ["Formato de venda", "Kit completo"]
    ],
    "includesProductIds": [
      "raquete-squash-karakal-sx-100",
      "raquete-squash-dunlop-aerogel-pro"
    ],
    "illustratedCover": true
  },
  {
    "id": "raquete-beach-tennis-ianoni-pr780",
    "name": "Raquete de Beach Tennis IANONI PR780",
    "type": "single",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 90,
    "image": "assets/produtos/raquete-beach-tennis-ianoni-pr780/capa-quadra.jpg",
    "alt": "Raquete preta de beach tennis IANONI PR780 em pé ao lado de uma quadra",
    "photos": [
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/capa-quadra.jpg",
        "alt": "Raquete IANONI PR780 em ambiente de quadra de beach tennis com overgrip branco",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-frente.jpg",
        "alt": "Foto real da frente da raquete preta IANONI PR780"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-duas-raquetes-1.jpg",
        "alt": "Foto real das duas raquetes IANONI, com a PR780 preta em destaque"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-duas-raquetes-2.jpg",
        "alt": "Outra foto real das raquetes IANONI PR780 e PR720"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · IANONI",
    "meta": "Carbono · núcleo EVA · 320 g",
    "conditionSummary": "Usada, com riscos na superfície e grip desgastado.",
    "description": "Raquete de beach tennis IANONI PR780 preta, construída em fibra de carbono com núcleo de EVA. O formato mede aproximadamente 49 x 23 x 2 cm e o peso informado pela fabricante é de 320 g.",
    "conditionNotes": "A raquete apresenta riscos, pequenas perdas no acabamento e grip bastante usado, conforme as fotos reais. A capa ambientada mostra uma sugestão visual com overgrip branco novo; o estado entregue é o exibido nas fotos reais.",
    "details": [
      ["Marca", "IANONI"],
      ["Modelo", "PR780"],
      ["Material", "Fibra de carbono"],
      ["Núcleo", "EVA"],
      ["Medidas", "49 x 23 x 2 cm"],
      ["Peso informado", "320 g"]
    ],
    "newPriceText": "US$ 69,99",
    "newPriceLabel": "Modelo similar novo da fabricante",
    "newPriceSource": {
      "url": "https://www.ianonisports.com/products/ianoni-beach-tennis-racket-carbon-fiber-grit-face-with-eva-memory-foam-core-beach-tennis-racket",
      "label": "IANONI"
    },
    "illustratedCover": true
  },
  {
    "id": "raquete-beach-tennis-ianoni-pr720",
    "name": "Raquete de Beach Tennis IANONI PR720",
    "type": "single",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 90,
    "image": "assets/produtos/raquete-beach-tennis-ianoni-pr720/capa-quadra.jpg",
    "alt": "Raquete branca de beach tennis IANONI PR720 em pé ao lado de uma quadra",
    "photos": [
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr720/capa-quadra.jpg",
        "alt": "Raquete IANONI PR720 em ambiente de quadra de beach tennis com overgrip branco",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr720/foto-real-frente.jpg",
        "alt": "Foto real da frente da raquete branca IANONI PR720"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr720/foto-real-duas-raquetes-1.jpg",
        "alt": "Foto real das duas raquetes IANONI, com a PR720 branca em destaque"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr720/foto-real-duas-raquetes-2.jpg",
        "alt": "Outra foto real das raquetes IANONI PR720 e PR780"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · IANONI",
    "meta": "Carbono · núcleo EVA · 320 g",
    "conditionSummary": "Usada, com riscos na superfície e grip desgastado.",
    "description": "Raquete de beach tennis IANONI PR720 branca, construída em fibra de carbono com núcleo de EVA. O formato mede aproximadamente 49 x 23 x 2 cm e o peso informado pela fabricante é de 320 g.",
    "conditionNotes": "A raquete apresenta riscos, pequenas perdas no acabamento e grip bastante usado, conforme as fotos reais. A capa ambientada mostra uma sugestão visual com overgrip branco novo; o estado entregue é o exibido nas fotos reais.",
    "details": [
      ["Marca", "IANONI"],
      ["Modelo", "PR720"],
      ["Material", "Fibra de carbono"],
      ["Núcleo", "EVA"],
      ["Medidas", "49 x 23 x 2 cm"],
      ["Peso informado", "320 g"]
    ],
    "newPriceText": "US$ 69,99",
    "newPriceLabel": "Modelo similar novo da fabricante",
    "newPriceSource": {
      "url": "https://www.ianoni.com/product/ianoni-sports-oem-odm-pr720-beach-tennis-racket-set-full-carbon-fiber-eva-core/",
      "label": "IANONI"
    },
    "illustratedCover": true
  },
  {
    "id": "kit-2-raquetes-beach-tennis-ianoni-pr780-pr720",
    "name": "Kit 2 Raquetes de Beach Tennis IANONI PR780 + PR720",
    "type": "kit",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 150,
    "image": "assets/produtos/kit-2-raquetes-beach-tennis-ianoni-pr780-pr720/capa-quadra.jpg",
    "alt": "Duas raquetes de beach tennis IANONI PR720 e PR780 juntas ao lado de uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kit-2-raquetes-beach-tennis-ianoni-pr780-pr720/capa-quadra.jpg",
        "alt": "Raquetes IANONI PR720 e PR780 juntas em ambiente de quadra de beach tennis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-duas-raquetes-1.jpg",
        "alt": "Foto real das duas raquetes IANONI incluídas no kit"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-duas-raquetes-2.jpg",
        "alt": "Outra foto real das raquetes IANONI PR720 e PR780"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr780/foto-real-frente.jpg",
        "alt": "Foto real da raquete preta IANONI PR780"
      },
      {
        "src": "assets/produtos/raquete-beach-tennis-ianoni-pr720/foto-real-frente.jpg",
        "alt": "Foto real da raquete branca IANONI PR720"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usadas · marcas de uso",
    "tag": "Kit · 2 raquetes",
    "meta": "IANONI PR780 + PR720 · carbono e EVA",
    "conditionSummary": "Duas raquetes usadas, com riscos e grips desgastados.",
    "description": "Kit com duas raquetes de beach tennis IANONI: uma PR780 preta e uma PR720 branca. Ambas são construídas em fibra de carbono com núcleo de EVA, medem aproximadamente 49 x 23 x 2 cm e pesam cerca de 320 g cada.",
    "conditionNotes": "As duas raquetes apresentam riscos, pequenas perdas no acabamento e grips bastante usados, conforme as fotos reais. A capa ambientada mostra uma sugestão visual com overgrips brancos novos; o estado entregue é o exibido nas fotos reais.",
    "details": [
      ["Marca", "IANONI"],
      ["Modelos", "PR780 preta e PR720 branca"],
      ["Quantidade", "2 raquetes"],
      ["Material", "Fibra de carbono"],
      ["Núcleo", "EVA"],
      ["Medidas", "49 x 23 x 2 cm cada"],
      ["Peso informado", "320 g cada"]
    ],
    "includesProductIds": [
      "raquete-beach-tennis-ianoni-pr780",
      "raquete-beach-tennis-ianoni-pr720"
    ],
    "illustratedCover": true
  },
  {
    "id": "raqueteira-yonex-pro-tripla-92229-x9",
    "name": "Raqueteira Yonex Pro Tripla 92229 X9",
    "type": "single",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 690,
    "newPriceText": "R$ 1.599,99",
    "newPriceLabel": "Yonex Pro X9 nova comparável",
    "newPriceSource": {
      "label": "Zapith Esportes",
      "url": "https://zapithesportes.com.br/produtos/raqueteira-yonex-termica-pro-x9/"
    },
    "image": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/capa-quadra.webp",
    "alt": "Raqueteira Yonex Pro Tripla 92229 X9 preta e rosa apoiada ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/capa-quadra.webp",
        "alt": "Raqueteira Yonex Pro Tripla 92229 X9 preta e rosa ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/foto-real-frente.webp",
        "alt": "Vista frontal real da raqueteira Yonex Pro Tripla X9"
      },
      {
        "src": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/foto-real-lateral.webp",
        "alt": "Vista lateral real da raqueteira Yonex com estampa Smash Pink"
      },
      {
        "src": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/foto-real-costas.webp",
        "alt": "Vista traseira real da raqueteira Yonex e de suas alças acolchoadas"
      },
      {
        "src": "assets/produtos/raqueteira-yonex-pro-tripla-92229-x9/foto-real-horizontal.webp",
        "alt": "Raqueteira Yonex Pro Tripla X9 deitada, mostrando volume e compartimentos"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · marcas de uso",
    "tag": "Avulsa · Yonex · até 9 raquetes",
    "meta": "3 compartimentos · proteção térmica · alças de mochila",
    "conditionSummary": "Usada, com marcas de uso visíveis e estrutura completa nas fotos reais.",
    "description": "Raqueteira Yonex Pro Tripla 92229 X9 na cor Smash Pink, com capacidade para até nove raquetes. Possui três compartimentos principais, sendo um com proteção térmica, espaço para calçados, bolsos para acessórios e alças acolchoadas para transporte como mochila.",
    "conditionNotes": "Peça usada, com riscos, manchas e desgaste visíveis principalmente nas áreas pretas e na estampa branca. As fotos reais mostram as alças, os zíperes e os compartimentos do exemplar anunciado.",
    "details": [
      ["Marca", "Yonex"],
      ["Linha", "Pro Tripla"],
      ["Modelo", "92229 X9"],
      ["Cor", "Preta · rosa · roxa · dourada"],
      ["Capacidade", "Até 9 raquetes sem capa"],
      ["Compartimentos", "3 principais"],
      ["Proteção", "1 compartimento térmico"],
      ["Calçados", "Compartimento dedicado"],
      ["Transporte", "Alças acolchoadas de mochila e alça de mão"],
      ["Formato de venda", "1 raqueteira"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-frescobol-2-raquetes-bola-bolsa",
    "name": "Kit Frescobol com 2 Raquetes, Bola e Bolsa",
    "type": "kit",
    "category": "Esportes de praia",
    "categoryId": "esportes",
    "price": 29,
    "image": "assets/produtos/kit-frescobol-2-raquetes-bola-bolsa/capa-praia.jpg",
    "alt": "Kit de frescobol com duas raquetes, bola e bolsa em ambiente de praia",
    "photos": [
      {
        "src": "assets/produtos/kit-frescobol-2-raquetes-bola-bolsa/capa-praia.jpg",
        "alt": "Duas raquetes de frescobol, bola e bolsa em ambiente de praia",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-frescobol-2-raquetes-bola-bolsa/foto-real-conjunto.jpg",
        "alt": "Foto real do conjunto de frescobol completo"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · boa conservação",
    "tag": "Kit · 2 raquetes",
    "meta": "2 raquetes · 1 bola · bolsa",
    "conditionSummary": "Conjunto usado, completo e em boa conservação aparente.",
    "description": "Kit de frescobol com duas raquetes de madeira decoradas, uma bola e bolsa tipo saco com cordão. O conjunto já fica pronto para levar à praia.",
    "conditionNotes": "Itens usados, com sinais leves de uso visíveis na foto real. A venda inclui exatamente as duas raquetes, a bola e a bolsa mostradas.",
    "details": [
      ["Material das raquetes", "Madeira"],
      ["Raquetes", "2 unidades"],
      ["Bola", "1 unidade"],
      ["Bolsa", "1 bolsa com cordão"],
      ["Formato de venda", "Kit completo"]
    ],
    "newPriceText": "R$ 59,90",
    "newPriceLabel": "Kit novo comparável",
    "newPriceSource": {
      "url": "https://www.gianninisports.com.br/kit-frescobol-giannini-sports-2-raquetes-1-bola-1729",
      "label": "Giannini Sports"
    },
    "illustratedCover": true
  },
  {
    "id": "kit-2-gamma-tacky-towel-1",
    "name": "Kit 2 GAMMA Tacky Towel — Unidade 1",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 179,
    "newPriceText": "US$ 19,99 cada",
    "newPriceLabel": "Versão anterior nos EUA",
    "newPriceSource": {
      "label": "Amazon Estados Unidos",
      "url": "https://www.amazon.com/Gamma-Tacky-Towel/dp/B00CXXGH6S"
    },
    "image": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
    "alt": "Duas toalhas aderentes GAMMA Tacky Towel da versão anterior ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
        "alt": "Kit com duas GAMMA Tacky Towel ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-kit-2.webp",
        "alt": "Foto real das duas GAMMA Tacky Towel incluídas no kit"
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-unidade.webp",
        "alt": "Detalhe real da embalagem individual GAMMA Tacky Towel"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Embaladas · versão anterior",
    "tag": "Kit · versão anterior · 2 unidades",
    "meta": "2 toalhas · grip enhancer · fórmula anterior",
    "conditionSummary": "Duas unidades em suas embalagens individuais, conforme as fotos reais.",
    "description": "Kit com duas GAMMA Tacky Towel da versão anterior, um acessório aderente para melhorar a firmeza das mãos, grips e luvas em dias quentes ou úmidos. Esta é a geração antiga mostrada no anúncio norte-americano de US$ 19,99 por unidade, diferente da versão nova e menor de 8 x 5 polegadas.",
    "conditionNotes": "As duas unidades permanecem em suas embalagens individuais resseláveis. A foto real identifica a embalagem da versão anterior; a capa apenas apresenta o mesmo kit em um ambiente de quadra.",
    "details": [
      ["Marca", "GAMMA"],
      ["Produto", "Tacky Towel Grip Enhancer"],
      ["Versão", "Anterior"],
      ["Quantidade", "2 unidades"],
      ["Aplicação", "Mãos · grips · luvas"],
      ["Esportes indicados", "Tênis · pickleball · golfe · beisebol"],
      ["Embalagem", "Individual e resselável"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-2-gamma-tacky-towel-2",
    "name": "Kit 2 GAMMA Tacky Towel — Unidade 2",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 179,
    "newPriceText": "US$ 19,99 cada",
    "newPriceLabel": "Versão anterior nos EUA",
    "newPriceSource": {
      "label": "Amazon Estados Unidos",
      "url": "https://www.amazon.com/Gamma-Tacky-Towel/dp/B00CXXGH6S"
    },
    "image": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
    "alt": "Duas toalhas aderentes GAMMA Tacky Towel da versão anterior ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
        "alt": "Kit com duas GAMMA Tacky Towel ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-kit-2.webp",
        "alt": "Foto real de duas unidades GAMMA Tacky Towel da versão anterior"
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-unidade.webp",
        "alt": "Detalhe real da embalagem individual GAMMA Tacky Towel"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Embaladas · versão anterior",
    "tag": "Kit · versão anterior · 2 unidades",
    "meta": "2 toalhas · grip enhancer · fórmula anterior",
    "conditionSummary": "Duas unidades em suas embalagens individuais, conforme as fotos reais.",
    "description": "Kit com duas GAMMA Tacky Towel da versão anterior, um acessório aderente para melhorar a firmeza das mãos, grips e luvas em dias quentes ou úmidos. Esta é a geração antiga mostrada no anúncio norte-americano de US$ 19,99 por unidade, diferente da versão nova e menor de 8 x 5 polegadas.",
    "conditionNotes": "As duas unidades permanecem em suas embalagens individuais resseláveis. A foto real identifica a embalagem da versão anterior; a capa apenas apresenta o mesmo kit em um ambiente de quadra.",
    "details": [
      ["Marca", "GAMMA"],
      ["Produto", "Tacky Towel Grip Enhancer"],
      ["Versão", "Anterior"],
      ["Quantidade", "2 unidades"],
      ["Aplicação", "Mãos · grips · luvas"],
      ["Esportes indicados", "Tênis · pickleball · golfe · beisebol"],
      ["Embalagem", "Individual e resselável"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-2-gamma-tacky-towel-3",
    "name": "Kit 2 GAMMA Tacky Towel — Unidade 3",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 179,
    "newPriceText": "US$ 19,99 cada",
    "newPriceLabel": "Versão anterior nos EUA",
    "newPriceSource": {
      "label": "Amazon Estados Unidos",
      "url": "https://www.amazon.com/Gamma-Tacky-Towel/dp/B00CXXGH6S"
    },
    "image": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
    "alt": "Duas toalhas aderentes GAMMA Tacky Towel da versão anterior ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/capa-kit-2.webp",
        "alt": "Kit com duas GAMMA Tacky Towel ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-kit-2.webp",
        "alt": "Foto real de duas unidades GAMMA Tacky Towel da versão anterior"
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-unidade.webp",
        "alt": "Detalhe real da embalagem individual GAMMA Tacky Towel"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Embaladas · versão anterior",
    "tag": "Kit · versão anterior · 2 unidades",
    "meta": "2 toalhas · grip enhancer · fórmula anterior",
    "conditionSummary": "Duas unidades em suas embalagens individuais, conforme as fotos reais.",
    "description": "Kit com duas GAMMA Tacky Towel da versão anterior, um acessório aderente para melhorar a firmeza das mãos, grips e luvas em dias quentes ou úmidos. Esta é a geração antiga mostrada no anúncio norte-americano de US$ 19,99 por unidade, diferente da versão nova e menor de 8 x 5 polegadas.",
    "conditionNotes": "As duas unidades permanecem em suas embalagens individuais resseláveis. A foto real identifica a embalagem da versão anterior; a capa apenas apresenta o mesmo kit em um ambiente de quadra.",
    "details": [
      ["Marca", "GAMMA"],
      ["Produto", "Tacky Towel Grip Enhancer"],
      ["Versão", "Anterior"],
      ["Quantidade", "2 unidades"],
      ["Aplicação", "Mãos · grips · luvas"],
      ["Esportes indicados", "Tênis · pickleball · golfe · beisebol"],
      ["Embalagem", "Individual e resselável"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-3-gamma-tacky-towel-1",
    "name": "Kit 3 GAMMA Tacky Towel — Unidade 1",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 249,
    "newPriceText": "US$ 19,99 cada",
    "newPriceLabel": "Versão anterior nos EUA",
    "newPriceSource": {
      "label": "Amazon Estados Unidos",
      "url": "https://www.amazon.com/Gamma-Tacky-Towel/dp/B00CXXGH6S"
    },
    "image": "assets/produtos/gamma-tacky-towel-kits/capa-kit-3.webp",
    "alt": "Três toalhas aderentes GAMMA Tacky Towel da versão anterior ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/capa-kit-3.webp",
        "alt": "Kit com três GAMMA Tacky Towel ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-kit-3.webp",
        "alt": "Foto real das três GAMMA Tacky Towel incluídas no kit"
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-unidade.webp",
        "alt": "Detalhe real da embalagem individual GAMMA Tacky Towel"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Embaladas · versão anterior",
    "tag": "Kit · versão anterior · 3 unidades",
    "meta": "3 toalhas · grip enhancer · fórmula anterior",
    "conditionSummary": "Três unidades em suas embalagens individuais, conforme as fotos reais.",
    "description": "Kit com três GAMMA Tacky Towel da versão anterior, um acessório aderente para melhorar a firmeza das mãos, grips e luvas em dias quentes ou úmidos. Esta é a geração antiga mostrada no anúncio norte-americano de US$ 19,99 por unidade, diferente da versão nova e menor de 8 x 5 polegadas.",
    "conditionNotes": "As três unidades permanecem em suas embalagens individuais resseláveis. A foto real identifica a embalagem da versão anterior; a capa apenas apresenta o mesmo kit em um ambiente de quadra.",
    "details": [
      ["Marca", "GAMMA"],
      ["Produto", "Tacky Towel Grip Enhancer"],
      ["Versão", "Anterior"],
      ["Quantidade", "3 unidades"],
      ["Aplicação", "Mãos · grips · luvas"],
      ["Esportes indicados", "Tênis · pickleball · golfe · beisebol"],
      ["Embalagem", "Individual e resselável"]
    ],
    "illustratedCover": true
  }
,
  {
    "id": "kit-3-gamma-tacky-towel-2",
    "name": "Kit 3 GAMMA Tacky Towel — Unidade 2",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 249,
    "newPriceText": "US$ 19,99 cada",
    "newPriceLabel": "Versão anterior nos EUA",
    "newPriceSource": {
      "label": "Amazon Estados Unidos",
      "url": "https://www.amazon.com/Gamma-Tacky-Towel/dp/B00CXXGH6S"
    },
    "image": "assets/produtos/gamma-tacky-towel-kits/capa-kit-3.webp",
    "alt": "Três toalhas aderentes GAMMA Tacky Towel da versão anterior ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/capa-kit-3.webp",
        "alt": "Kit com três GAMMA Tacky Towel ao lado de uma quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-kit-3.webp",
        "alt": "Foto real das três GAMMA Tacky Towel incluídas no kit"
      },
      {
        "src": "assets/produtos/gamma-tacky-towel-kits/foto-real-unidade.webp",
        "alt": "Detalhe real da embalagem individual GAMMA Tacky Towel"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Embaladas · versão anterior",
    "tag": "Kit · versão anterior · 3 unidades",
    "meta": "3 toalhas · grip enhancer · fórmula anterior",
    "conditionSummary": "Três unidades em suas embalagens individuais, conforme as fotos reais.",
    "description": "Kit com três GAMMA Tacky Towel da versão anterior, um acessório aderente para melhorar a firmeza das mãos, grips e luvas em dias quentes ou úmidos. Esta é a geração antiga mostrada no anúncio norte-americano de US$ 19,99 por unidade, diferente da versão nova e menor de 8 x 5 polegadas.",
    "conditionNotes": "As três unidades permanecem em suas embalagens individuais resseláveis. A foto real identifica a embalagem da versão anterior; a capa apenas apresenta o mesmo kit em um ambiente de quadra.",
    "details": [
      ["Marca", "GAMMA"],
      ["Produto", "Tacky Towel Grip Enhancer"],
      ["Versão", "Anterior"],
      ["Quantidade", "3 unidades"],
      ["Aplicação", "Mãos · grips · luvas"],
      ["Esportes indicados", "Tênis · pickleball · golfe · beisebol"],
      ["Embalagem", "Individual e resselável"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-1",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 1",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-1.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 1 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-1.webp",
        "alt": "Kit 1 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-1.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 1"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-2",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 2",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-2.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 2 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-2.webp",
        "alt": "Kit 2 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-2.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 2"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-3",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 3",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-3.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 3 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-3.webp",
        "alt": "Kit 3 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-3.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 3"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-4",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 4",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-4.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 4 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-4.webp",
        "alt": "Kit 4 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-4.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 4"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-5",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 5",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-5.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 5 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-5.webp",
        "alt": "Kit 5 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-5.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 5"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-6",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 6",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-6.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 6 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-6.webp",
        "alt": "Kit 6 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-6.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 6"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-4-antivibradores-tenis-sortidos-7",
    "name": "Kit 4 Antivibradores de Tênis Sortidos — Unidade 7",
    "type": "kit",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 54,90 a R$ 99,00 (2 unidades)",
    "newPriceLabel": "Pares novos comparáveis",
    "newPriceSource": {
      "label": "Rakkas",
      "url": "https://www.rakkas.com.br/acessorios/antivibradores"
    },
    "image": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-7.webp",
    "alt": "Quatro antivibradores de tênis sortidos do kit 7 sobre uma raquete em uma quadra",
    "photos": [
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/capa-kit-7.webp",
        "alt": "Kit 7 com quatro antivibradores sortidos sobre uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kits-antivibradores-tenis-4-unidades/foto-real-kit-7.webp",
        "alt": "Foto real dos quatro antivibradores incluídos no kit 7"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · boa conservação",
    "tag": "Kit · 4 unidades · sortidos",
    "meta": "4 antivibradores · modelos variados",
    "conditionSummary": "Quatro peças usadas em boa conservação, exatamente como aparecem na foto real.",
    "description": "Kit com quatro antivibradores sortidos para instalar entre as cordas da raquete de tênis. Eles ajudam a reduzir a vibração das cordas durante o jogo e também personalizam a raquete com modelos variados.",
    "conditionNotes": "Itens usados, com sinais leves de uso e variações de cor visíveis na foto real. A venda inclui exatamente as quatro peças mostradas; a capa apenas apresenta o kit instalado em uma raquete.",
    "details": [
      [
        "Produto",
        "Antivibradores para raquete"
      ],
      [
        "Quantidade",
        "4 unidades"
      ],
      [
        "Uso",
        "Cordas de raquete de tênis"
      ],
      [
        "Modelos",
        "Sortidos, conforme a foto real"
      ],
      [
        "Material",
        "Borracha ou silicone flexível"
      ],
      [
        "Formato de venda",
        "Kit independente"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "corda-gosen-polylon-16-129-200m",
    "name": "Corda Gosen Polylon 16 1,29 mm — Rolo 200 m",
    "type": "avulso",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 290,
    "newPriceText": "R$ 299,99",
    "newPriceLabel": "Rolo novo comparável no Brasil",
    "newPriceSource": {
      "label": "Bottcher Tênis",
      "url": "https://www.bottchertenis.com.br/cordas"
    },
    "image": "assets/produtos/corda-gosen-polylon-16-129-200m/capa-quadra.webp",
    "alt": "Rolo novo de corda Gosen Polylon 16 transparente ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/corda-gosen-polylon-16-129-200m/capa-quadra.webp",
        "alt": "Rolo novo Gosen Polylon 16 em ambiente de quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/corda-gosen-polylon-16-129-200m/foto-real-rolo.webp",
        "alt": "Foto real do rolo novo de corda Gosen Polylon 16 anunciado"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Nova · nunca usada",
    "tag": "Avulso · nova · 200 m",
    "meta": "200 m · 1,29 mm · poliéster",
    "conditionSummary": "Rolo completo com 200 metros, novo e nunca utilizado.",
    "description": "Rolo novo e completo de corda Gosen Polylon 16, calibre 1,29 mm, na cor Ice. Corda monofilamento de poliéster voltada a jogadores que procuram durabilidade, resposta firme e controle nas batidas.",
    "conditionNotes": "Carretel completo com os 200 metros originais. A corda nunca foi utilizada; a foto real mostra exatamente o rolo e sua embalagem.",
    "details": [
      [
        "Marca",
        "Gosen"
      ],
      [
        "Linha",
        "Polylon"
      ],
      [
        "Código",
        "TS1522C"
      ],
      [
        "Calibre",
        "16 · 1,29 mm"
      ],
      [
        "Material",
        "Poliéster monofilamento"
      ],
      [
        "Cor",
        "Ice · transparente"
      ],
      [
        "Metragem",
        "200 m · 660 ft"
      ],
      [
        "Estado",
        "Nova · nunca utilizada"
      ],
      [
        "Origem indicada no rótulo",
        "Japão"
      ],
      [
        "Formato de venda",
        "1 rolo completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "corda-kirschbaum-synthetic-gut-130-200m",
    "name": "Corda Kirschbaum Synthetic Gut 1,30 mm — Rolo 200 m",
    "type": "avulso",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 350,
    "newPriceText": "R$ 369,99 a R$ 475,72",
    "newPriceLabel": "Rolos novos comparáveis no Brasil",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://lista.mercadolivre.com.br/corda-synthetic-gut"
    },
    "image": "assets/produtos/corda-kirschbaum-synthetic-gut-130-200m/capa-quadra.webp",
    "alt": "Rolo novo de corda Kirschbaum Synthetic Gut preta ao lado de uma quadra de tênis",
    "photos": [
      {
        "src": "assets/produtos/corda-kirschbaum-synthetic-gut-130-200m/capa-quadra.webp",
        "alt": "Rolo novo Kirschbaum Synthetic Gut em ambiente de quadra de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/corda-kirschbaum-synthetic-gut-130-200m/foto-real-rolo.webp",
        "alt": "Foto real do rolo novo de corda Kirschbaum Synthetic Gut anunciado"
      }
    ],
    "imageFit": "contain",
    "isDemo": false,
    "status": "available",
    "condition": "Nova · nunca usada",
    "tag": "Avulso · nova · 200 m",
    "meta": "200 m · 1,30 mm · preta",
    "conditionSummary": "Rolo completo com 200 metros, novo e nunca utilizado.",
    "description": "Rolo novo e completo de corda Kirschbaum Synthetic Gut, calibre 1,30 mm, na cor preta. Construção sintética de uso versátil, com equilíbrio entre conforto, potência, durabilidade e controle para jogadores recreativos ou montagem híbrida.",
    "conditionNotes": "Carretel completo com os 200 metros originais. A corda nunca foi utilizada; a foto real mostra exatamente o rolo e sua embalagem.",
    "details": [
      [
        "Marca",
        "Kirschbaum"
      ],
      [
        "Linha",
        "Synthetic Gut"
      ],
      [
        "Calibre",
        "1,30 mm"
      ],
      [
        "Construção",
        "Núcleo sintético com filamentos externos"
      ],
      [
        "Cor",
        "Preta"
      ],
      [
        "Metragem",
        "200 m · 660 ft"
      ],
      [
        "Estado",
        "Nova · nunca utilizada"
      ],
      [
        "Origem indicada no rótulo",
        "Taiwan"
      ],
      [
        "Formato de venda",
        "1 rolo completo"
      ]
    ],
    "illustratedCover": true
  },
  {
    "id": "jogo-5-facas-com-cepo-madeira-vinho",
    "slug": "jogo-5-facas-com-cepo-madeira-vinho",
    "name": "Jogo com 5 Facas e Cepo de Madeira Vinho",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 90,
    "newPriceText": "R$ 499,90",
    "newPriceLabel": "Conjunto novo comparável de marca conhecida",
    "newPriceSource": {
      "label": "Oxford",
      "url": "https://listas.oxfordporcelanas.com.br/jogo-de-5-facas-com-cepo-de-madeira-wood/p"
    },
    "image": "assets/produtos/jogo-5-facas-com-cepo-madeira-vinho/capa-cozinha.jpg",
    "alt": "Jogo com cinco facas de cabo vinho em cepo de madeira sobre bancada de cozinha",
    "photos": [
      {
        "src": "assets/produtos/jogo-5-facas-com-cepo-madeira-vinho/capa-cozinha.jpg",
        "alt": "Jogo com cinco facas e cepo em uma cozinha contemporânea",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jogo-5-facas-com-cepo-madeira-vinho/foto-real-conjunto.jpg",
        "alt": "Foto real do jogo completo com as facas guardadas no cepo"
      },
      {
        "src": "assets/produtos/jogo-5-facas-com-cepo-madeira-vinho/foto-real-facas-1.jpg",
        "alt": "Foto real das cinco facas ao lado do cepo"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · marcas de uso",
    "tag": "Avulso · conjunto completo",
    "meta": "5 facas · cepo de madeira · cabos vinho",
    "conditionSummary": "Conjunto usado, com marcas normais nas lâminas, nos cabos e no cepo, conforme mostram as fotos reais.",
    "description": "Jogo de cozinha com cinco facas de tamanhos e funções diferentes, acompanhado de cepo com parte superior em madeira e base na cor vinho. Uma solução prática para manter as facas organizadas e ao alcance na bancada.",
    "conditionNotes": "Peça usada e sem marca identificada. As fotos reais mostram sinais de uso nas lâminas e pequenos desgastes no cepo. O anúncio inclui exatamente as cinco facas e o suporte exibidos.",
    "details": [
      ["Conteúdo", "5 facas e 1 cepo"],
      ["Tipos", "Chef · fatiadora · pão · utilitária · legumes"],
      ["Lâminas", "Aço inox"],
      ["Cor dos cabos", "Vinho com detalhes metálicos"],
      ["Cepo", "Topo em madeira e base vinho"],
      ["Marca", "Não identificada"],
      ["Estado", "Usado · com marcas de uso"]
    ],
    "illustratedCover": true
  },
  {
    "id": "moedor-krups-silent-vortex-gx332",
    "slug": "moedor-krups-silent-vortex-gx332",
    "name": "Moedor Krups Silent Vortex GX332 3 em 1",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 190,
    "newPriceText": "US$ 29,99",
    "newPriceLabel": "Novo no fabricante nos EUA",
    "newPriceSource": {
      "label": "Krups USA",
      "url": "https://www.krupsusa.com/COFFEE-APPLIANCES/Silent-Vortex-Electric-Grinder/p/8010000905?superCategoryCode=breakfast-appliances"
    },
    "image": "assets/produtos/moedor-krups-silent-vortex-gx332/capa-cafe.jpg",
    "alt": "Moedor Krups Silent Vortex GX332 cinza em uma bancada de café",
    "photos": [
      {
        "src": "assets/produtos/moedor-krups-silent-vortex-gx332/capa-cafe.jpg",
        "alt": "Moedor Krups Silent Vortex GX332 em um espaço de café",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/moedor-krups-silent-vortex-gx332/foto-real-frente.jpg",
        "alt": "Foto real frontal do moedor Krups"
      },
      {
        "src": "assets/produtos/moedor-krups-silent-vortex-gx332/foto-real-aberto.jpg",
        "alt": "Foto real do recipiente removível e da tampa de armazenamento"
      },
      {
        "src": "assets/produtos/moedor-krups-silent-vortex-gx332/foto-real-etiqueta.jpg",
        "alt": "Etiqueta real do moedor com modelo, tensão e potência"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · perfeito funcionamento",
    "tag": "Avulso · Krups · 120 V",
    "meta": "175 W · café, ervas e especiarias · recipiente removível",
    "conditionSummary": "Usado, muito bem conservado e funcionando perfeitamente. Acompanha recipiente removível e tampa de armazenamento.",
    "description": "Moedor Krups Silent Vortex GX332 3 em 1 para grãos de café, ervas secas e especiarias. A tecnologia Vortex Spin permite moagem rápida com operação mais silenciosa, e o recipiente removível facilita o uso e a limpeza.",
    "conditionNotes": "Produto usado e em perfeito funcionamento, com excelente estado de conservação. As fotos reais mostram o aparelho, o recipiente, a tampa e a etiqueta original.",
    "details": [
      ["Marca", "Krups"],
      ["Modelo", "GX332"],
      ["Linha", "Silent Vortex"],
      ["Aplicações", "Café · ervas secas · especiarias"],
      ["Capacidade indicada", "Até 12 xícaras de café"],
      ["Potência", "175 W"],
      ["Tensão", "120 V · 60 Hz"],
      ["Acessórios", "Recipiente removível e tampa de armazenamento"],
      ["Estado", "Usado · funcionando perfeitamente"]
    ],
    "illustratedCover": true
  },
  {
    "id": "relogio-invicta-pro-diver-scuba-0075",
    "slug": "relogio-invicta-pro-diver-scuba-chronograph-0075",
    "name": "Relógio Invicta Pro Diver Scuba Chronograph 0075",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 790,
    "newPriceText": "R$ 1.299",
    "newPriceLabel": "Mesmo modelo novo no Brasil",
    "newPriceSource": {
      "label": "Empório 18K",
      "url": "https://www.emporio18k.com/invicta/pro-diver/"
    },
    "image": "assets/produtos/relogio-invicta-pro-diver-0075/capa-luxo.jpg",
    "alt": "Relógio Invicta Pro Diver Scuba 0075 dourado com mostrador verde em ambiente sofisticado",
    "photos": [
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/capa-luxo.jpg",
        "alt": "Relógio Invicta Pro Diver Scuba 0075 dourado sobre bandeja de couro verde",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/foto-real-frente.jpg",
        "alt": "Foto real frontal do relógio Invicta Pro Diver 0075 anunciado"
      },
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/foto-real-caixa.jpg",
        "alt": "Foto real do mostrador verde, cronógrafo e pulseira dourada do Invicta 0075"
      },
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/foto-real-verso.jpg",
        "alt": "Foto real do verso gravado do relógio Invicta Pro Diver 0075"
      },
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/foto-real-conjunto.jpg",
        "alt": "Foto real do relógio Invicta com caixa, almofada e cartão"
      },
      {
        "src": "assets/produtos/relogio-invicta-pro-diver-0075/foto-real-estojo.jpg",
        "alt": "Foto real da caixa Invicta fechada que acompanha o relógio"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado duas vezes · funcionamento perfeito",
    "tag": "Avulso · original · completo",
    "meta": "48 mm · cronógrafo · mostrador verde · dourado",
    "conditionSummary": "Usado apenas duas vezes e funcionando perfeitamente. Completo com caixa, cartão e elos extras da pulseira.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do relógio real.<br>As cinco imagens seguintes mostram exatamente o produto e a caixa anunciados.",
    "disclosureNote": "O link da Amazon EUA enviado como referência identifica o mesmo modelo Invicta 0075. O valor de R$ 1.299 corresponde a uma referência brasileira do mesmo modelo novo.",
    "description": "Invicta Pro Diver Scuba Chronograph 0075 original, com caixa de 48 mm, mostrador verde, acabamento dourado e movimento a quartzo. O relógio possui cronógrafo com três submostradores, calendário, bezel giratório e resistência à água indicada pelo fabricante de até 200 metros.",
    "conditionNotes": "Relógio usado somente duas vezes e funcionando perfeitamente, inclusive hora, data e cronógrafo. Apresenta leves marcas superficiais de manuseio visíveis nas fotos reais. Acompanha caixa Invicta, almofada, cartão e elos extras da pulseira.",
    "details": [
      ["Marca", "Invicta"],
      ["Coleção", "Pro Diver Scuba"],
      ["Modelo", "0075"],
      ["Movimento", "Quartzo"],
      ["Funções", "Hora · data · cronógrafo"],
      ["Caixa", "48 mm · aço inoxidável · acabamento dourado"],
      ["Mostrador", "Verde com três submostradores"],
      ["Pulseira", "Aço inoxidável dourado · com elos extras"],
      ["Resistência indicada", "Até 200 m"],
      ["Acompanha", "Caixa · almofada · cartão · elos extras"],
      ["Funcionamento", "Perfeito · hora, data e cronógrafo"],
      ["Condição", "Usado somente duas vezes"],
      ["Referência internacional", "Amazon EUA · ASIN B00075U5IA"]
    ]
  },
  {
    "id": "relogio-invicta-specialty-14876",
    "slug": "relogio-invicta-specialty-14876-cronografo-bicolor",
    "name": "Relógio Invicta Specialty 14876 Cronógrafo Bicolor",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 490,
    "newPriceText": "R$ 1.899",
    "newPriceLabel": "Mesmo modelo novo no Brasil",
    "newPriceSource": {
      "label": "Clock Society",
      "url": "https://clocksociety.com.br/produtos/relogio-invicta-specialty-quartzo-cronografo-preto-45mm-14876/"
    },
    "image": "assets/produtos/relogio-invicta-specialty-14876/capa-luxo.jpg",
    "alt": "Relógio Invicta Specialty 14876 bicolor com mostrador preto sobre uma bandeja de couro",
    "photos": [
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/capa-luxo.jpg",
        "alt": "Relógio Invicta Specialty 14876 bicolor com mostrador preto sobre uma bandeja de couro",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-caixa.jpg",
        "alt": "Foto real frontal do Invicta Specialty 14876 sobre a almofada e a caixa original"
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-angulo.jpg",
        "alt": "Foto real em ângulo do mostrador preto e do acabamento bicolor do relógio"
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-na-caixa.jpg",
        "alt": "Foto real do Invicta Specialty 14876 acomodado em sua caixa original"
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-pulseira.jpg",
        "alt": "Foto real do relógio aberto mostrando a pulseira de aço bicolor"
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-verso.jpg",
        "alt": "Foto real do verso gravado com a identificação do modelo Invicta 14876"
      },
      {
        "src": "assets/produtos/relogio-invicta-specialty-14876/foto-real-caixa-fechada.jpg",
        "alt": "Foto real da caixa Invicta original fechada"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · lindo estado · funcionamento perfeito",
    "tag": "Avulso · original · com caixa",
    "meta": "45 mm · cronógrafo · mostrador preto · aço bicolor",
    "conditionSummary": "Usado, muito bem conservado, sem riscos aparentes e com poucos sinais de uso. Tudo funciona perfeitamente. Acompanha caixa original e elos extras da pulseira.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do relógio real.<br>As seis imagens seguintes mostram exatamente o relógio, a pulseira e a caixa anunciados.",
    "disclosureNote": "O valor de referência corresponde ao mesmo modelo Invicta Specialty 14876 novo anunciado no Brasil.",
    "description": "Invicta Specialty 14876 original com caixa de 45 mm, mostrador preto, pulseira de aço inoxidável bicolor e movimento a quartzo. O visual esportivo reúne cronógrafo com três submostradores, calendário, escala taquimétrica e marcadores com detalhes dourados.",
    "conditionNotes": "Relógio usado, lindo e muito bem conservado, sem riscos aparentes e com poucos sinais de uso. Hora, data, cronógrafo e botões estão funcionando perfeitamente. Acompanha caixa Invicta original, almofada e elos extras da pulseira.",
    "details": [
      ["Marca", "Invicta"],
      ["Coleção", "Specialty"],
      ["Modelo", "14876"],
      ["Movimento", "Quartzo japonês"],
      ["Funções", "Hora · data · cronógrafo · taquímetro"],
      ["Caixa", "45 mm · aço inoxidável"],
      ["Mostrador", "Preto com três submostradores"],
      ["Pulseira", "Aço inoxidável bicolor · com elos extras"],
      ["Vidro", "Cristal mineral"],
      ["Resistência indicada", "Até 50 m"],
      ["Acompanha", "Caixa original · almofada · elos extras"],
      ["Funcionamento", "Perfeito · hora, data, cronógrafo e botões"],
      ["Condição", "Usado · poucos sinais · sem riscos aparentes"]
    ]
  },
  {
    "id": "relogio-casio-g-shock-ga-150-7a",
    "slug": "relogio-casio-g-shock-ga-150-7a-branco",
    "name": "Relógio Casio G-Shock GA-150-7A Branco",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 190,
    "image": "assets/produtos/relogio-casio-g-shock-ga-150-7a/capa-esportiva.png",
    "alt": "Relógio Casio G-Shock GA-150 branco e limpo sobre pedestal de concreto",
    "photos": [
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-150-7a/capa-esportiva.png",
        "alt": "Relógio Casio G-Shock GA-150 branco em ambiente esportivo minimalista",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-150-7a/foto-real-frente.jpg",
        "alt": "Foto real frontal do Casio G-Shock GA-150 branco anunciado"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-150-7a/foto-real-almofada.jpg",
        "alt": "Foto real do G-Shock branco apoiado sobre almofada"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-150-7a/foto-real-angulo.jpg",
        "alt": "Foto real em ângulo mostrando a caixa e a pulseira branca do relógio"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-150-7a/foto-real-verso.jpg",
        "alt": "Foto real do verso gravado do Casio G-Shock GA-150 módulo 5140"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · será entregue higienizado",
    "tag": "Avulso · original · branco",
    "meta": "Analógico-digital · resina branca · módulo 5140",
    "conditionSummary": "Relógio usado com sinais de uso. Será limpo e entregue branquinho, higienizado e pronto para o novo dono.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA mostrando o relógio após a limpeza.<br>As quatro imagens seguintes mostram exatamente o produto anunciado antes da higienização.",
    "description": "Casio G-Shock GA-150-7A branco, relógio analógico-digital com construção resistente a impactos, caixa grande e pulseira de resina. O modelo reúne hora mundial, cronômetro, temporizador, alarmes, calendário automático e iluminação em um visual esportivo marcante.",
    "conditionNotes": "Produto usado com sinais de uso e marcas naturais na resina branca. As fotos reais foram feitas antes da limpeza; o relógio será higienizado e entregue branquinho.",
    "details": [
      ["Marca", "Casio"],
      ["Linha", "G-Shock"],
      ["Modelo", "GA-150-7A"],
      ["Módulo", "5140"],
      ["Movimento", "Quartzo · analógico-digital"],
      ["Funções", "Hora mundial · cronômetro · temporizador · alarmes · calendário · iluminação"],
      ["Caixa e pulseira", "Resina branca"],
      ["Resistência indicada", "Até 200 m · não testada recentemente"],
      ["Condição", "Usado · será entregue higienizado"]
    ]
  },
  {
    "id": "relogio-casio-g-shock-ga-110hc-1ajf",
    "slug": "relogio-casio-g-shock-ga-110hc-1ajf-hyper-colors",
    "name": "Relógio Casio G-Shock GA-110HC-1AJF Hyper Colors",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 290,
    "newPriceText": "Modelo raro · edição japonesa",
    "newPriceLabel": "Referência internacional do modelo",
    "newPriceSource": {
      "label": "Amazon",
      "url": "https://www.amazon.com/Casio-G-shock-Japanese-Limited-Ga-110hc-1ajf/dp/B004XUDHQM"
    },
    "image": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/capa-urbana-luz-natural.png",
    "alt": "Relógio Casio G-Shock GA-110HC-1AJF preto, roxo e azul sobre pedestal de concreto em ambiente urbano",
    "photos": [
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/capa-urbana-luz-natural.png",
        "alt": "Casio G-Shock GA-110HC-1AJF Hyper Colors em ambiente urbano com luz natural",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/foto-real-frente-angulo.jpg",
        "alt": "Foto real em ângulo do G-Shock GA-110HC-1AJF anunciado"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/foto-real-mostrador.jpg",
        "alt": "Foto real frontal do mostrador roxo e azul do G-Shock GA-110HC-1AJF"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/foto-real-pulseira.jpg",
        "alt": "Foto real da pulseira, fecho e parte interna do relógio"
      },
      {
        "src": "assets/produtos/relogio-casio-g-shock-ga-110hc-1ajf/foto-real-verso.jpg",
        "alt": "Foto real do verso gravado GA-110HC do relógio Casio G-Shock"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionamento perfeito",
    "tag": "Avulso · edição japonesa · original",
    "meta": "Analógico-digital · 200 m · preto, roxo e azul",
    "conditionSummary": "Relógio usado, com riscos e sinais de uso visíveis na caixa e na pulseira. Está funcionando perfeitamente.",
    "galleryDisclosure": "Capa: ambientação ilustrativa criada com IA a partir do relógio real.<br>As quatro imagens seguintes mostram exatamente o produto anunciado.",
    "disclosureNote": "A referência da Amazon identifica o mesmo GA-110HC-1AJF Hyper Colors de edição japonesa. A venda inclui somente o relógio mostrado nas fotos reais.",
    "description": "Casio G-Shock GA-110HC-1AJF da coleção Hyper Colors, edição japonesa com caixa e pulseira pretas, mostrador roxo e detalhes azul-turquesa. O modelo combina indicação analógica e digital, resistência a impactos e o visual grande e marcante da linha GA-110.",
    "conditionNotes": "Relógio usado e funcionando perfeitamente. Há riscos, marcas superficiais e desgaste natural de uso na resina preta, todos visíveis nas fotos reais. Mostrador, pulseira, fecho e tampa traseira estão registrados em detalhes.",
    "details": [
      ["Marca", "Casio"],
      ["Linha", "G-Shock Hyper Colors"],
      ["Modelo", "GA-110HC-1AJF"],
      ["Módulo", "5146"],
      ["Movimento", "Quartzo · analógico-digital"],
      ["Cores", "Preto · roxo · azul-turquesa"],
      ["Caixa", "55 × 51,2 × 16,9 mm"],
      ["Material", "Caixa e pulseira de resina"],
      ["Resistência indicada", "Até 200 m · não testada recentemente"],
      ["Funções", "Hora mundial · cronômetro 1/1000 s · temporizador · alarmes · calendário · iluminação"],
      ["Funcionamento", "Perfeito"],
      ["Condição", "Usado · sinais de uso visíveis"],
      ["Conteúdo", "1 relógio"]
    ]
  },
  {
    "id": "relogio-diesel-armbar-dz1819",
    "slug": "relogio-diesel-armbar-dz1819-preto-vermelho",
    "name": "Relógio Diesel Armbar DZ1819 Preto com Mostrador Vermelho",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 390,
    "newPriceText": "R$ 899",
    "newPriceLabel": "Mesmo modelo novo no Brasil",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/relogio-masculino-diesel-preto-dz1819bi-p1px/p/MLB27158893?pdp_filters=item_id%3AMLB6482929702"
    },
    "image": "assets/produtos/relogio-diesel-armbar-dz1819/capa-luxo.png",
    "alt": "Relógio Diesel Armbar DZ1819 preto com mostrador vermelho em ambiente sofisticado",
    "photos": [
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/capa-luxo.png",
        "alt": "Relógio Diesel Armbar DZ1819 preto com mostrador vermelho sobre pedestal escuro",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/foto-real-angulo.jpg",
        "alt": "Foto real em ângulo do Diesel Armbar DZ1819 anunciado"
      },
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/foto-real-almofada.jpg",
        "alt": "Foto real frontal do relógio Diesel sobre a almofada original"
      },
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/foto-real-verso.jpg",
        "alt": "Foto real do verso gravado do Diesel DZ1819"
      },
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/foto-real-caixa-aberta.jpg",
        "alt": "Foto real do relógio Diesel acomodado na caixa original aberta"
      },
      {
        "src": "assets/produtos/relogio-diesel-armbar-dz1819/foto-real-caixa-fechada.jpg",
        "alt": "Foto real da caixa Diesel original fechada"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado · com caixa original",
    "tag": "Avulso · original · com caixa",
    "meta": "45 mm · quartzo · silicone preto · mostrador vermelho",
    "conditionSummary": "Relógio usado com sinais de uso visíveis nas fotos reais. Acompanha caixa Diesel original com almofada.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do relógio real.<br>As cinco imagens seguintes mostram exatamente o relógio e a caixa anunciados.",
    "disclosureNote": "O valor de referência corresponde ao mesmo modelo Diesel DZ1819 novo anunciado no Brasil.",
    "description": "Diesel Armbar DZ1819 com caixa preta de 45 mm, mostrador vermelho em degradê e pulseira de silicone preta. O design grande e esportivo combina movimento a quartzo, leitura analógica e resistência à água indicada pelo fabricante de até 10 ATM.",
    "conditionNotes": "Relógio usado com sinais de uso aparentes na caixa e na pulseira, todos registrados nas fotos reais. Acompanha a caixa Diesel original com almofada.",
    "details": [
      ["Marca", "Diesel"],
      ["Coleção", "Armbar"],
      ["Modelo", "DZ1819"],
      ["Movimento", "Quartzo · analógico"],
      ["Caixa", "45 mm · policarbonato preto"],
      ["Mostrador", "Vermelho em degradê"],
      ["Pulseira", "Silicone preto"],
      ["Vidro", "Cristal mineral"],
      ["Resistência indicada", "10 ATM · 100 m · não testada recentemente"],
      ["Acompanha", "Caixa Diesel original · almofada"],
      ["Condição", "Usado · sinais de uso"]
    ]
  },
  {
    "id": "oculos-esportivo-importado-vermelho-espelhado",
    "slug": "oculos-esportivo-importado-vermelho-lente-espelhada",
    "name": "Óculos Esportivo Importado Vermelho com Lente Espelhada",
    "type": "single",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 67",
    "newPriceLabel": "Óculos esportivo importado comparável novo",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://lista.mercadolivre.com.br/oculos-vermelho-ciclismo"
    },
    "image": "assets/produtos/oculos-esportivo-importado-vermelho/capa-beach-tennis.jpg",
    "alt": "Jogadora de beach tennis usando óculos esportivo importado vermelho com lente espelhada",
    "photos": [
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/capa-beach-tennis.jpg",
        "alt": "Jogadora usando óculos esportivo vermelho durante uma partida de beach tennis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-com-estojo.jpg",
        "alt": "Foto real do óculos esportivo vermelho anunciado ao lado do estojo"
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-frente.jpg",
        "alt": "Foto real frontal da lente única espelhada do óculos esportivo"
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-lateral.jpg",
        "alt": "Foto real lateral da armação vermelha e das hastes do óculos"
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-interno.jpg",
        "alt": "Foto real da parte interna e do apoio nasal preto do óculos esportivo"
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-no-estojo.jpg",
        "alt": "Foto real do óculos esportivo vermelho acomodado no estojo rígido"
      },
      {
        "src": "assets/produtos/oculos-esportivo-importado-vermelho/foto-real-estojo-fechado.jpg",
        "alt": "Foto real do estojo rígido fechado que acompanha o óculos"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado um dia · excelente estado",
    "tag": "Avulso · importado · esportivo",
    "meta": "Lente espelhada · armação vermelha · com estojo",
    "conditionSummary": "Usado apenas um dia e em excelente estado de conservação. Acompanha estojo rígido.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do óculos real.<br>As seis imagens seguintes mostram exatamente o produto e o estojo anunciados.",
    "disclosureNote": "Produto importado da China, sem marca ou modelo informados. Não há confirmação documental de polarização ou classificação de proteção UV.",
    "description": "Óculos esportivo importado com armação vermelha, lente única espelhada e formato envolvente. O design oferece ampla cobertura visual para beach tennis, corrida, ciclismo e outras atividades ao ar livre. Acompanha estojo rígido para transporte e proteção.",
    "conditionNotes": "Produto usado somente um dia e em excelente estado de conservação. A lente, a armação, as hastes e o apoio nasal estão muito bem preservados, como mostram as fotos reais.",
    "details": [
      ["Tipo", "Óculos de sol esportivo"],
      ["Procedência", "Importado da China"],
      ["Marca", "Não informada"],
      ["Cor", "Vermelha com detalhes pretos"],
      ["Lente", "Única · espelhada · tonalidade vermelho e rosa"],
      ["Indicação", "Beach tennis · corrida · ciclismo · atividades ao ar livre"],
      ["Acompanha", "Estojo rígido"],
      ["Condição", "Usado somente um dia · excelente estado"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "oculos-mormaii-athlon-iv-m0042-aab11",
    "slug": "oculos-sol-mormaii-athlon-iv-m0042-aab11-espelhado",
    "name": "Óculos de Sol Mormaii Athlon IV Espelhado",
    "type": "single",
    "category": "Beach tennis",
    "categoryId": "esportes",
    "price": 190,
    "newPriceText": "R$ 399",
    "newPriceLabel": "Mesmo modelo novo",
    "newPriceSource": {
      "label": "Rafael Ótica e Relojoaria",
      "url": "https://www.rafaeloticaerelojoaria.com.br/produtos.php?codigo=7792+%2C10783+%2C7528+%2C10786&produto=oculos-de-sol-mormaii-m0042-aab11-athlon-iv"
    },
    "image": "assets/produtos/oculos-mormaii-athlon-iv/capa-beach-tennis.jpg",
    "alt": "Atleta usando óculos esportivo Mormaii Athlon IV espelhado em uma quadra de beach tennis",
    "photos": [
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/capa-beach-tennis.jpg",
        "alt": "Atleta usando óculos Mormaii Athlon IV durante uma partida de beach tennis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-com-estojo.jpg",
        "alt": "Foto real do óculos Mormaii Athlon IV anunciado ao lado do estojo"
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-frente.jpg",
        "alt": "Foto real frontal da lente espelhada do óculos Mormaii Athlon IV"
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-lateral.jpg",
        "alt": "Foto real lateral da armação preta com detalhes vermelhos e verdes"
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-interno.jpg",
        "alt": "Foto real da parte interna, hastes e apoio nasal do óculos Mormaii"
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-no-estojo.jpg",
        "alt": "Foto real do óculos Mormaii acomodado no estojo rígido"
      },
      {
        "src": "assets/produtos/oculos-mormaii-athlon-iv/foto-real-estojo-fechado.jpg",
        "alt": "Foto real do estojo rígido fechado que acompanha o óculos"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Usado duas vezes · excelente estado",
    "tag": "Avulso · Mormaii · esportivo",
    "meta": "Athlon IV · lente espelhada · com estojo",
    "conditionSummary": "Usado aproximadamente duas vezes e em excelente estado, sem marcas relevantes aparentes. Acompanha estojo rígido.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do óculos real.<br>As seis imagens seguintes mostram exatamente o produto e o estojo anunciados.",
    "description": "Óculos de sol esportivo Mormaii Athlon IV M0042 AAB11, com lente única espelhada e design envolvente para beach tennis, corrida, ciclismo e outras atividades ao ar livre. A armação preta combina detalhes vermelhos e verdes e acompanha estojo rígido.",
    "conditionNotes": "Produto usado aproximadamente duas vezes e em excelente estado de conservação. Armação, hastes, apoio nasal e lente estão muito bem preservados, como mostram as fotos reais.",
    "details": [
      ["Marca", "Mormaii"],
      ["Linha", "Athlon IV"],
      ["Modelo", "M0042 AAB11"],
      ["Tipo", "Óculos de sol esportivo"],
      ["Armação", "Preta com detalhes vermelhos e verdes"],
      ["Lente", "Única · espelhada · policarbonato"],
      ["Indicação", "Beach tennis · corrida · ciclismo · atividades ao ar livre"],
      ["Acompanha", "Estojo rígido"],
      ["Condição", "Usado aproximadamente duas vezes · excelente estado"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "joelheira-ortopedica-procorpus-tiras-cruzadas",
    "slug": "joelheira-ortopedica-procorpus-compressao-tiras-cruzadas",
    "name": "Joelheira Ortopédica Procorpus com Tiras Cruzadas",
    "type": "single",
    "category": "Fitness",
    "categoryId": "esportes",
    "price": 49,
    "newPriceText": "R$ 199,90",
    "newPriceLabel": "Joelheira ortopédica comparável nova",
    "newPriceSource": {
      "label": "Ativa Esportes",
      "url": "https://www.ativaesportes.com.br/joelheira-ortopedica-kestal-articular-ajustavel-unissex-ksn004-pto/p/5498428"
    },
    "image": "assets/produtos/joelheira-ortopedica-procorpus/capa-tenis.jpg",
    "alt": "Tenista usando joelheira ortopédica preta com abertura frontal e tiras cruzadas",
    "photos": [
      {
        "src": "assets/produtos/joelheira-ortopedica-procorpus/capa-tenis.jpg",
        "alt": "Tenista usando joelheira ortopédica preta com tiras cruzadas durante uma partida",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/joelheira-ortopedica-procorpus/foto-real-frente.jpg",
        "alt": "Foto real da frente da joelheira Procorpus anunciada"
      },
      {
        "src": "assets/produtos/joelheira-ortopedica-procorpus/foto-real-verso.jpg",
        "alt": "Foto real do verso e das tiras ajustáveis da joelheira Procorpus"
      }
    ],
    "imageFit": "cover",
    "illustratedCover": true,
    "isDemo": false,
    "status": "available",
    "condition": "Pouco uso · ótima condição",
    "tag": "Avulso · compressão · ajustável",
    "meta": "Tiras cruzadas · abertura frontal · velcro",
    "conditionSummary": "Pouco usada e em ótima condição, com tiras, costuras e fechos preservados.",
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir da joelheira real.<br>As duas imagens seguintes mostram exatamente o produto anunciado.",
    "disclosureNote": "A referência da Ativa Esportes é de uma joelheira ortopédica semelhante, de outra marca e outro modelo, usada apenas para comparação de categoria e valor.",
    "description": "Joelheira ortopédica Procorpus de compressão, com abertura frontal para a patela e tiras cruzadas ajustáveis. O sistema de velcro permite regular a compressão e manter a peça firme durante tênis, academia, caminhadas e outras atividades físicas.",
    "conditionNotes": "Produto com pouco uso e em ótima condição. O tecido, as costuras, as tiras cruzadas e os fechos de velcro estão preservados, como mostram as duas fotos reais.",
    "details": [
      ["Marca", "Procorpus"],
      ["Tipo", "Joelheira ortopédica de compressão"],
      ["Cor", "Preta"],
      ["Abertura", "Frontal para a patela"],
      ["Ajuste", "Tiras cruzadas com velcro"],
      ["Indicação", "Tênis · academia · caminhadas · atividades físicas"],
      ["Condição", "Pouco uso · ótima condição"],
      ["Formato de venda", "Produto avulso"]
    ]
  },
  {
    "id": "par-halteres-4kg-cada-cinza",
    "slug": "par-halteres-4kg-cada-cinza",
    "name": "Par de Halteres Sextavados de 4 kg Cada",
    "type": "single",
    "category": "Fitness",
    "categoryId": "esportes",
    "price": 90,
    "newPriceText": "R$ 154,79",
    "newPriceLabel": "Par novo comparável",
    "newPriceSource": {
      "label": "Decathlon",
      "url": "https://www.decathlon.com.br/par-de-halteres-emborrachado-para-musculacao-4kg-preto-2145250871/p"
    },
    "image": "assets/produtos/par-halteres-4kg-cada-cinza/capa-academia.jpg",
    "alt": "Par de halteres sextavados cinza de 4 kg sobre tapete de exercícios",
    "photos": [
      {
        "src": "assets/produtos/par-halteres-4kg-cada-cinza/capa-academia.jpg",
        "alt": "Par de halteres cinza de 4 kg em um espaço de treino",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/par-halteres-4kg-cada-cinza/foto-real-par.jpg",
        "alt": "Foto real do par de halteres anunciado"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · marcas de uso",
    "tag": "Par · 8 kg no total",
    "meta": "4 kg cada · formato sextavado · cinza",
    "conditionSummary": "Par usado e plenamente funcional, com riscos e marcas de uso visíveis no revestimento.",
    "description": "Par de halteres sextavados com 4 kg cada, totalizando 8 kg. O formato evita que rolem no chão e atende treinos de braços, ombros, peito, costas e exercícios funcionais em casa.",
    "conditionNotes": "Halteres usados, firmes e prontos para treino. O revestimento apresenta riscos e marcas estéticas, mostrados com clareza na foto real.",
    "details": [
      ["Conteúdo", "2 halteres"],
      ["Peso por unidade", "4 kg"],
      ["Peso total", "8 kg"],
      ["Formato", "Sextavado"],
      ["Cor", "Cinza"],
      ["Estado", "Usados · com marcas estéticas"]
    ],
    "illustratedCover": true
  },
  {
    "id": "quadro-decorativo-coruja-moldura-branca-60x65",
    "slug": "quadro-decorativo-coruja-moldura-branca-60x65",
    "name": "Quadro Decorativo de Coruja com Moldura Branca 60 × 65 cm",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 90,
    "newPriceText": "R$ 140,82",
    "newPriceLabel": "Quadro novo comparável com moldura",
    "newPriceSource": {
      "label": "Magazine Luiza",
      "url": "https://www.magazineluiza.com.br/quadros-decorativos-com-moldura-sala-quarto-abstrato-moderno-grande-hall-art-in-decor/p/hg8d91a501/de/qdec/"
    },
    "image": "assets/produtos/quadro-decorativo-coruja-moldura-branca-60x65/capa-quarto-menina.jpg",
    "alt": "Quadro colorido de coruja com moldura branca em uma parede rosa de quarto de menina",
    "photos": [
      {
        "src": "assets/produtos/quadro-decorativo-coruja-moldura-branca-60x65/capa-quarto-menina.jpg",
        "alt": "Quadro de coruja ambientado em um quarto de menina",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/quadro-decorativo-coruja-moldura-branca-60x65/foto-real-quadro.jpg",
        "alt": "Foto real do quadro decorativo de coruja anunciado"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · bem conservado",
    "tag": "Avulso · decoração",
    "meta": "60 × 65 cm · moldura branca · arte colorida",
    "conditionSummary": "Quadro usado e bem conservado, com a moldura branca e a arte colorida mostradas na foto real.",
    "description": "Quadro decorativo com estampa de coruja em composição floral, combinando tons de verde, rosa, vinho e azul. A moldura branca deixa a peça leve e fácil de usar em quartos infantis, juvenis ou outros ambientes coloridos.",
    "conditionNotes": "A foto real mostra exatamente o quadro anunciado. A imagem principal apresenta a peça ambientada em um quarto de menina e preserva suas proporções de 60 cm de largura por 65 cm de altura.",
    "details": [
      ["Tema", "Coruja com composição floral"],
      ["Largura", "60 cm"],
      ["Altura", "65 cm"],
      ["Moldura", "Branca"],
      ["Formato", "Vertical"],
      ["Estado", "Usado · bem conservado"]
    ],
    "illustratedCover": true
  },
  {
    "id": "keurig-k-cafe-special-edition-nickel",
    "slug": "keurig-k-cafe-special-edition-nickel",
    "name": "Cafeteira Keurig K-Café Special Edition com Espumador",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 990,
    "newPriceText": "US$ 241,99",
    "newPriceLabel": "Nova nos EUA",
    "newPriceSource": {
      "label": "Home Depot",
      "url": "https://www.homedepot.com/p/Keurig-K-Cafe-Special-Edition-Nickel-Single-Serve-Coffee-Maker-5000200558/307727052"
    },
    "image": "assets/produtos/keurig-k-cafe-special-edition-nickel/capa-cantinho-cafe.jpg",
    "alt": "Cafeteira Keurig K-Café Special Edition Nickel com espumador em um cantinho de café",
    "photos": [
      {
        "src": "assets/produtos/keurig-k-cafe-special-edition-nickel/capa-cantinho-cafe.jpg",
        "alt": "Keurig K-Café Special Edition ambientada em uma cozinha contemporânea",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/keurig-k-cafe-special-edition-nickel/foto-real-frente.jpg",
        "alt": "Foto real frontal da cafeteira Keurig e do espumador"
      },
      {
        "src": "assets/produtos/keurig-k-cafe-special-edition-nickel/foto-real-lateral.jpg",
        "alt": "Foto real lateral da Keurig K-Café Special Edition"
      },
      {
        "src": "assets/produtos/keurig-k-cafe-special-edition-nickel/foto-real-reservatorio.jpg",
        "alt": "Foto real do reservatório removível e do espumador de leite"
      },
      {
        "src": "assets/produtos/keurig-k-cafe-special-edition-nickel/foto-real-superior.jpg",
        "alt": "Foto real da parte superior e do compartimento para cápsulas K-Cup"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente nova · menos de 10 usos",
    "tag": "Avulso · K-Cup · com espumador",
    "meta": "K-Café Special Edition · 120 V · espumador integrado",
    "conditionSummary": "Praticamente nova, utilizada menos de dez vezes e funcionando perfeitamente. Completa, sem a caixa original.",
    "description": "Keurig K-Café Special Edition Nickel para cafés, lattes e cappuccinos preparados com cápsulas K-Cup. Reúne quatro tamanhos de café, dose concentrada para bebidas especiais, modo Strong e espumador integrado para leite quente ou frio.",
    "conditionNotes": "A cafeteira foi utilizada menos de dez vezes e está em excelente estado de conservação. Acompanha o reservatório removível, o espumador com tampa e a bandeja mostrados nas fotos reais. Não acompanha a caixa original.",
    "details": [
      ["Marca", "Keurig"],
      ["Modelo", "K-Café Special Edition Nickel · 5000200558"],
      ["Compatibilidade", "Cápsulas K-Cup"],
      ["Tamanhos de café", "6 · 8 · 10 · 12 oz"],
      ["Dose especial", "Shot concentrado de 2 oz"],
      ["Espumador", "Integrado · leite quente ou frio"],
      ["Reservatório", "Removível · 60 oz · aproximadamente 1,77 L"],
      ["Tensão", "120 V"],
      ["Acabamento", "Dark Charcoal com detalhes Nickel"],
      ["Estado", "Praticamente nova · menos de 10 usos"],
      ["Embalagem", "Sem a caixa original"]
    ],
    "illustratedCover": true
  },
  {
    "id": "maleta-invicta-dc8yel-8-relogios-amarela",
    "slug": "maleta-invicta-dc8yel-8-relogios-amarela",
    "name": "Maleta Invicta DC8YEL para 8 Relógios",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 590,
    "newPriceText": "R$ 1.239,02",
    "newPriceLabel": "Nova comparável no Brasil",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/maleta-para-relogios-invicta-dive-impact-8-slots-amarelo/up/MLBU3016320867"
    },
    "image": "assets/produtos/maleta-invicta-dc8yel-8-relogios-amarela/capa-colecionador.jpg",
    "alt": "Maleta Invicta DC8YEL amarela para oito relógios aberta em um espaço de colecionador",
    "photos": [
      {
        "src": "assets/produtos/maleta-invicta-dc8yel-8-relogios-amarela/capa-colecionador.jpg",
        "alt": "Maleta Invicta DC8YEL para oito relógios ambientada em um espaço de colecionador",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/maleta-invicta-dc8yel-8-relogios-amarela/foto-real-fechada.jpg",
        "alt": "Foto real da maleta Invicta DC8YEL fechada"
      },
      {
        "src": "assets/produtos/maleta-invicta-dc8yel-8-relogios-amarela/foto-real-aberta.jpg",
        "alt": "Foto real da maleta Invicta DC8YEL aberta com os oito espaços vazios"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Sem uso · nenhum sinal",
    "tag": "Avulso · original · 8 espaços",
    "meta": "DC8YEL · rígida e impermeável · espuma anti-impacto",
    "conditionSummary": "Maleta sem uso, sem qualquer sinal e em perfeito estado de conservação.",
    "description": "Maleta original Invicta DC8YEL para guardar e transportar até oito relógios. A estrutura rígida amarela combina vedação, duas travas frontais e interior em espuma moldada para proteger as peças contra impactos, poeira e umidade.",
    "conditionNotes": "A maleta está sem uso e não apresenta qualquer sinal. As fotos reais mostram exatamente a peça anunciada, fechada e aberta, com os oito compartimentos vazios. Relógios não acompanham o produto.",
    "details": [
      ["Marca", "Invicta"],
      ["Modelo", "DC8YEL"],
      ["Capacidade", "Até 8 relógios"],
      ["Estrutura", "Plástico rígido impermeável"],
      ["Interior", "Espuma cinza contra impacto e poeira"],
      ["Fechamento", "Duas travas frontais"],
      ["Alça", "Emborrachada"],
      ["Dimensões aproximadas", "40,6 × 30,5 × 17,8 cm"],
      ["Cor", "Amarela com detalhes cinza"],
      ["Estado", "Sem uso · nenhum sinal"],
      ["Conteúdo", "Somente a maleta vazia"]
    ],
    "illustratedCover": true
  },
  {
    "id": "bolsa-viagem-replica-estilo-monograma-marrom",
    "slug": "bolsa-viagem-replica-estilo-monograma-marrom",
    "name": "Bolsa de Viagem Réplica Estilo Monograma",
    "type": "single",
    "category": "Carteiras e acessórios",
    "categoryId": "acessorios",
    "price": 190,
    "image": "assets/produtos/bolsa-viagem-replica-estilo-monograma-marrom/capa-hotel-nova-york.jpg",
    "alt": "Bolsa de viagem réplica marrom com estampa monograma ambientada em hotel de Nova York",
    "photos": [
      {
        "src": "assets/produtos/bolsa-viagem-replica-estilo-monograma-marrom/capa-hotel-nova-york.jpg",
        "alt": "Bolsa de viagem réplica estilo monograma ambientada em hotel de Nova York",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/bolsa-viagem-replica-estilo-monograma-marrom/foto-real-frente.jpg",
        "alt": "Foto real frontal da bolsa de viagem réplica anunciada"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "isReplica": true,
    "status": "available",
    "condition": "Nova · sem uso",
    "tag": "Avulsa · réplica declarada · comprada em NY",
    "meta": "Bolsa de viagem · monograma marrom · alças caramelo",
    "conditionSummary": "Réplica comprada em Nova York, nos Estados Unidos, em bom estado visual.",
    "description": "Bolsa de viagem ampla em material marrom com estampa estilo monograma, alças duplas caramelo, ferragens douradas e bolso externo. Trata-se de uma réplica comprada em Nova York, nos Estados Unidos, anunciada com essa condição de forma expressa.",
    "conditionNotes": "Produto usado e visualmente bem conservado, conforme mostra a foto real. Esta peça é uma réplica e não é um produto original da Louis Vuitton. O anúncio inclui somente a bolsa exibida nas imagens.",
    "details": [
      ["Tipo", "Bolsa de viagem"],
      ["Autenticidade", "Réplica · não original"],
      ["Origem informada", "Comprada em Nova York · EUA"],
      ["Cor", "Marrom com detalhes caramelo"],
      ["Estampa", "Estilo monograma"],
      ["Alças", "Duplas"],
      ["Fechamento", "Zíper superior"],
      ["Bolso", "Externo frontal"],
      ["Estado", "Usada · bom estado visual"],
      ["Conteúdo", "Somente a bolsa"]
    ],
    "illustratedCover": true
  },
  {
    "id": "caixa-organizadora-12-relogios-visor",
    "slug": "caixa-organizadora-12-relogios-visor",
    "name": "Caixa Organizadora para 12 Relógios com Visor",
    "type": "single",
    "category": "Relógios",
    "categoryId": "relogios",
    "price": 49,
    "image": "assets/produtos/caixa-organizadora-12-relogios-visor/capa-closet.jpg",
    "alt": "Caixa organizadora preta para doze relógios, aberta e vazia, em um closet",
    "photos": [
      {
        "src": "assets/produtos/caixa-organizadora-12-relogios-visor/capa-closet.jpg",
        "alt": "Caixa organizadora para doze relógios aberta e vazia em ambiente de closet",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/caixa-organizadora-12-relogios-visor/foto-real-fechada-vazia.jpg",
        "alt": "Foto real da caixa organizadora fechada e vazia"
      },
      {
        "src": "assets/produtos/caixa-organizadora-12-relogios-visor/foto-real-aberta-vazia.jpg",
        "alt": "Foto real da caixa organizadora aberta com os doze espaços vazios"
      },
      {
        "src": "assets/produtos/caixa-organizadora-12-relogios-visor/foto-ilustrativa-fechada-com-relogios.jpg",
        "alt": "Imagem ilustrativa da caixa fechada com relógios para demonstrar a capacidade; relógios não inclusos",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/caixa-organizadora-12-relogios-visor/foto-ilustrativa-aberta-com-relogios.jpg",
        "alt": "Imagem ilustrativa da caixa aberta com relógios para demonstrar a capacidade; relógios não inclusos",
        "isIllustrative": true
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Nova · sem uso",
    "tag": "Avulso · somente a caixa · 12 espaços",
    "meta": "12 nichos · visor transparente · interior claro",
    "conditionSummary": "Caixa zero, sem uso e sem sinais. Venda somente da caixa, sem relógios.",
    "description": "Caixa organizadora preta para armazenar e exibir até doze relógios. Possui tampa com visor transparente, acabamento com costura branca, fecho metálico e interior claro com doze almofadas individuais. A venda inclui somente a caixa; os relógios mostrados nas imagens ilustrativas não estão inclusos.",
    "conditionNotes": "Caixa zero, sem uso e sem sinais. O anúncio inclui somente a caixa organizadora vazia; os relógios não acompanham o produto. A segunda e a terceira imagens da galeria mostram a caixa real vazia; a quarta e a quinta imagens, com relógios, são apenas ilustrativas para demonstrar sua capacidade.",
    "details": [
      ["Capacidade", "Até 12 relógios"],
      ["Organização", "2 fileiras com 6 nichos cada"],
      ["Tampa", "Visor transparente"],
      ["Exterior", "Preto com costura branca"],
      ["Interior", "Claro com almofadas individuais"],
      ["Fechamento", "Fecho metálico frontal"],
      ["Estado", "Nova · sem uso · sem sinais"],
      ["Conteúdo", "Somente a caixa vazia"],
      ["Relógios", "Não inclusos"]
    ],
    "illustratedCover": true
  },
  {
    "id": "kit-2-cadeiras-dobraveis-camping-azuis",
    "slug": "kit-2-cadeiras-dobraveis-camping-azuis-porta-copos",
    "name": "Kit 2 Cadeiras Dobráveis de Camping Azuis",
    "type": "kit",
    "category": "Camping e lazer",
    "categoryId": "esportes",
    "price": 90,
    "image": "assets/produtos/kit-2-cadeiras-dobraveis-camping-azuis/capa-lago.jpg",
    "alt": "Duas cadeiras dobráveis azuis de camping ambientadas à beira de um lago",
    "photos": [
      {
        "src": "assets/produtos/kit-2-cadeiras-dobraveis-camping-azuis/capa-lago.jpg",
        "alt": "Duas cadeiras dobráveis azuis de camping ambientadas à beira de um lago",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-2-cadeiras-dobraveis-camping-azuis/foto-real-duas-cadeiras-abertas.jpg",
        "alt": "Foto real das duas cadeiras dobráveis azuis abertas"
      },
      {
        "src": "assets/produtos/kit-2-cadeiras-dobraveis-camping-azuis/foto-real-duas-bolsas.jpg",
        "alt": "Foto real das duas bolsas de transporte azuis que acompanham as cadeiras"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usadas · com sinais de uso",
    "tag": "Kit · 2 cadeiras · com bolsas",
    "meta": "Dobráveis · porta-copos · estrutura metálica",
    "conditionSummary": "Usadas, com sinais de uso, mas sem avarias ou rasgos.",
    "description": "Kit com duas cadeiras dobráveis para camping, praia, pesca, eventos e momentos de lazer. As duas têm tecido azul-turquesa, estrutura metálica preta, braços com porta-copos e fechamento compacto para facilitar o transporte. Acompanham duas bolsas individuais.",
    "conditionNotes": "As duas cadeiras são usadas e apresentam sinais normais de uso, visíveis nas fotos reais. Não possuem avarias nem rasgos. O anúncio inclui as duas cadeiras e suas duas bolsas de transporte.",
    "details": [
      ["Quantidade", "2 cadeiras"],
      ["Tipo", "Dobráveis e portáteis"],
      ["Cor", "Azul-turquesa com estrutura preta"],
      ["Estrutura", "Metálica dobrável"],
      ["Braços", "Com porta-copos em tela"],
      ["Transporte", "2 bolsas individuais inclusas"],
      ["Indicação", "Camping · praia · pesca · eventos · lazer"],
      ["Estado", "Usadas · sinais de uso · sem rasgos ou avarias"],
      ["Referência comparável", "SAILARY Folding Camping Chair 2PCS · Amazon EUA"]
    ],
    "newPriceSource": {
      "label": "Modelo semelhante na Amazon EUA",
      "url": "https://www.amazon.com/SAILARY-Chair-Portable-Foldable-Backpacking/dp/B0FFGKSFN1"
    },
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir das cadeiras reais.<br>As duas imagens seguintes mostram exatamente o kit anunciado.",
    "disclosureNote": "A referência da Amazon é de um modelo semelhante e não identifica a marca das cadeiras anunciadas.",
    "illustratedCover": true
  },
  {
    "id": "kit-som-nca-sa20-jbl-c521b",
    "slug": "kit-som-ambiente-nca-sa20-2-caixas-jbl-c521b",
    "name": "Kit Som Ambiente LL Audio NCA SA 20 + 2 Caixas JBL C521B",
    "type": "kit",
    "category": "Áudio e vídeo",
    "categoryId": "tecnologia",
    "price": 890,
    "newPriceText": "R$ 1.394",
    "newPriceLabel": "Equivalente novo a partir de",
    "newPriceSource": {
      "label": "Referências somadas no Mercado Livre",
      "url": "https://lista.mercadolivre.com.br/amplificador-sa20-jbl-c521b"
    },
    "image": "assets/produtos/kit-som-nca-sa20-jbl-c521b/capa-sala.jpg",
    "alt": "Amplificador NCA SA 20 preto com duas caixas JBL C521B brancas em uma sala",
    "photos": [
      {
        "src": "assets/produtos/kit-som-nca-sa20-jbl-c521b/capa-sala.jpg",
        "alt": "Amplificador NCA SA 20 com duas caixas JBL C521B ambientados em uma sala",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-som-nca-sa20-jbl-c521b/foto-real-conjunto-frente.jpg",
        "alt": "Foto real da frente do amplificador NCA SA 20 com as duas caixas JBL C521B"
      },
      {
        "src": "assets/produtos/kit-som-nca-sa20-jbl-c521b/foto-real-caixas-frente.jpg",
        "alt": "Foto real da frente das duas caixas JBL C521B brancas"
      },
      {
        "src": "assets/produtos/kit-som-nca-sa20-jbl-c521b/foto-real-caixas-traseira.jpg",
        "alt": "Foto real da traseira, suportes e etiquetas das duas caixas JBL C521B"
      },
      {
        "src": "assets/produtos/kit-som-nca-sa20-jbl-c521b/foto-real-amplificador-traseira.jpg",
        "alt": "Foto real das conexões traseiras e da alimentação do amplificador NCA SA 20"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · funcionamento perfeito",
    "tag": "Kit · amplificador + 2 caixas JBL",
    "meta": "100 W RMS · USB/SD/FM · caixas 8 Ω",
    "conditionSummary": "Caixas impecáveis e amplificador funcionando perfeitamente, com sinais de uso apenas na parte superior.",
    "description": "Sistema completo para som ambiente composto por um amplificador compacto NCA/LL Audio SA 20 e um par de caixas passivas JBL C521B brancas. O amplificador oferece 100 W RMS, equalização de três bandas, entradas para microfone e áudio auxiliar, player USB/SD e rádio FM. As caixas JBL possuem duas vias, impedância de 8 Ω e potência de 40 W RMS por unidade, com 80 W de programa musical.",
    "conditionNotes": "As duas caixas JBL estão impecáveis, sem riscos ou avarias. O amplificador apresenta sinais de uso na parte superior, mas a frente está conservada e sem riscos, e todo o conjunto funciona perfeitamente. A pequena marca de silver tape no controle de volume foi colocada somente como referência visual para facilitar seu uso; o botão está inteiro e funciona normalmente.",
    "details": [
      ["Conteúdo", "1 amplificador NCA SA 20 · 2 caixas JBL C521B"],
      ["Potência do amplificador", "100 W RMS"],
      ["Recursos", "USB · cartão SD · rádio FM · display"],
      ["Equalização", "Graves · médios · agudos"],
      ["Entradas", "Microfone P10 · 2 auxiliares RCA"],
      ["Saídas", "Terminais para caixas passivas · line out RCA"],
      ["Modelo das caixas", "JBL C521B · brancas"],
      ["Sistema das caixas", "2 vias · woofer 5¼″ · tweeter ¾″"],
      ["Potência das caixas", "40 W RMS cada · 80 W programa musical"],
      ["Impedância", "8 Ω"],
      ["Instalação", "Suportes orientáveis inclusos nas caixas"],
      ["Alimentação", "127/220 V com chave seletora"],
      ["Estado", "Usado · funcionamento perfeito"]
    ],
    "galleryDisclosure": "Capa: ambiente ilustrativo criado com IA a partir do conjunto real.<br>As quatro imagens seguintes mostram exatamente o amplificador e as caixas anunciados.",
    "disclosureNote": "O valor do equivalente novo corresponde à soma das menores referências encontradas para os mesmos modelos no Mercado Livre em 30/10/2026.",
    "illustratedCover": true
  },
  {
    "id": "vestido-john-john-preto-texturizado-p",
    "slug": "vestido-john-john-preto-texturizado-costas-abertas-tamanho-p",
    "name": "Vestido John John Preto Texturizado com Costas Abertas",
    "type": "single",
    "category": "Moda feminina",
    "categoryId": "moda-feminina",
    "price": 390,
    "newPriceText": "R$ 990",
    "newPriceLabel": "Valor pago na loja",
    "image": "assets/produtos/vestido-john-john-preto-texturizado-p/capa-costas-noite.jpg",
    "alt": "Mulher usando vestido John John preto texturizado tamanho P de costas em ambiente noturno elegante",
    "photos": [
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/capa-costas-noite.jpg",
        "alt": "Mulher usando vestido John John preto texturizado de costas em ambiente noturno elegante",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/foto-ilustrativa-frente-noite.jpg",
        "alt": "Mulher usando vestido John John preto texturizado de frente em ambiente noturno elegante",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/foto-real-frente.jpg",
        "alt": "Foto real da frente do vestido John John preto tamanho P anunciado"
      },
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/foto-real-costas.jpg",
        "alt": "Foto real das costas abertas e do fecho do vestido John John anunciado"
      },
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/foto-real-fecho.jpg",
        "alt": "Foto real aproximada do recorte e do fecho nas costas do vestido John John"
      },
      {
        "src": "assets/produtos/vestido-john-john-preto-texturizado-p/foto-real-textura.jpg",
        "alt": "Foto real aproximada da textura croco aveludada do vestido John John"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado uma vez · sem marcas de uso",
    "tag": "Avulso · John John · tamanho P",
    "meta": "Preto · manga longa · costas abertas · textura croco",
    "conditionSummary": "Usado apenas uma vez, em perfeito estado e sem nenhuma marca de uso.",
    "description": "Vestido John John preto tamanho P, com modelagem curta e ajustada, mangas longas e marcante recorte aberto nas costas. O tecido tem toque camurçado e aveludado, com textura croco em relevo que valoriza a peça e ganha destaque sob a luz.",
    "conditionNotes": "Vestido usado somente uma vez e mantido em perfeito estado de conservação, sem marcas de uso, manchas, fios puxados ou avarias aparentes. As fotos reais mostram a frente, as costas, o fecho e a textura do tecido.",
    "details": [
      ["Marca", "John John"],
      ["Tamanho", "P"],
      ["Cor", "Preta"],
      ["Modelagem", "Curta e ajustada"],
      ["Mangas", "Longas"],
      ["Costas", "Abertas com recorte e fecho"],
      ["Acabamento", "Toque camurçado e aveludado · textura croco"],
      ["Valor pago", "R$ 990"],
      ["Condição", "Usado uma vez · sem marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "As duas primeiras imagens são ambientações noturnas ilustrativas criadas com IA a partir do vestido real.<br>As quatro imagens seguintes mostram exatamente a peça anunciada.",
    "disclosureNote": "As duas primeiras imagens são ilustrativas. Cor, textura, recorte das costas e demais características foram baseados nas fotos reais da peça.",
    "illustratedCover": true
  },
  {
    "id": "conjunto-mesa-rustica-2-bancos-250x100",
    "slug": "conjunto-mesa-rustica-madeira-250x100-2-bancos",
    "name": "Conjunto Mesa Rústica de Madeira 2,5 m + 2 Bancos",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 2900,
    "image": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/capa-area-lazer-piscina.jpg",
    "alt": "Mesa rústica de madeira de 2,5 metros com dois bancos em uma área de lazer próxima à piscina",
    "photos": [
      {
        "src": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/capa-area-lazer-piscina.jpg",
        "alt": "Mesa rústica de madeira e dois bancos em uma área de lazer coberta próxima à piscina",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/foto-real-conjunto-luz.jpg",
        "alt": "Foto real do conjunto completo com iluminação corrigida"
      },
      {
        "src": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/foto-real-frontal-luz.jpg",
        "alt": "Foto real frontal da mesa rústica de 2,5 metros e dos dois bancos com iluminação corrigida"
      },
      {
        "src": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/foto-real-lateral-luz.jpg",
        "alt": "Foto real lateral mostrando o tampo espesso e a estrutura robusta do conjunto com iluminação corrigida"
      },
      {
        "src": "assets/produtos/conjunto-mesa-rustica-2-bancos-250x100/foto-real-tampo-luz.jpg",
        "alt": "Foto real aproximada do tampo rústico de madeira com iluminação corrigida"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usado · perfeito estado de conservação",
    "tag": "Conjunto · mesa + 2 bancos",
    "meta": "2,50 × 1,00 m · madeira · robusto e pesado",
    "conditionSummary": "Conjunto em perfeito estado de conservação, com estrutura firme e acabamento rústico preservado.",
    "description": "Conjunto de jantar rústico composto por uma mesa grande de madeira, com 2,50 m de comprimento por 1,00 m de largura, e dois bancos longos no mesmo acabamento. É uma peça imponente, pesada e resistente, com tampo espesso, pés robustos e textura natural que valoriza o estilo rústico.",
    "conditionNotes": "Mesa e bancos em perfeito estado de conservação, sem avarias estruturais. As fotos reais mostram o conjunto completo, o tampo, os pés e o acabamento preservado. Por ser um móvel grande e pesado, a retirada exige transporte adequado.",
    "details": [
      ["Conteúdo", "1 mesa + 2 bancos"],
      ["Comprimento da mesa", "2,50 m"],
      ["Largura da mesa", "1,00 m"],
      ["Material", "Madeira"],
      ["Estilo", "Rústico"],
      ["Estrutura", "Pesada, firme e resistente"],
      ["Tampo", "Espesso com acabamento rústico"],
      ["Bancos", "2 bancos longos no mesmo acabamento"],
      ["Estado", "Usado · perfeito estado de conservação"],
      ["Retirada", "Requer transporte adequado ao tamanho e ao peso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real.<br>As quatro imagens seguintes foram produzidas a partir das fotos reais, com correções de iluminação e balanço de branco, sem alteração intencional do estado do móvel.",
    "disclosureNote": "A ambientação da capa é ilustrativa. As demais imagens preservam o produto real e receberam somente ajustes fotográficos de luz, cor e contraste.",
    "illustratedCover": true
  },
  {
    "id": "tripe-iluminacao-greika-fc-s288l-280m",
    "slug": "tripe-iluminacao-greika-fc-s288l-280m-aco-inox",
    "name": "Tripé de Iluminação Greika FC-S288L 2,80 m em Aço Inox",
    "type": "single",
    "category": "Fotografia",
    "categoryId": "tecnologia",
    "price": 190,
    "newPriceText": "R$ 230–300",
    "newPriceLabel": "Mesmo modelo novo no Brasil",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/tripe-de-iluminacao-greika-fc-s288l-280m-aco-inox/p/MLB30158809?pdp_filters=item_id:MLB6188617204&sid=purchases"
    },
    "image": "assets/produtos/tripe-iluminacao-greika-fc-s288l-280m/capa-estudio.png",
    "alt": "Tripé de iluminação Greika FC-S288L em aço inox montado em um estúdio fotográfico",
    "photos": [
      {
        "src": "assets/produtos/tripe-iluminacao-greika-fc-s288l-280m/capa-estudio.png",
        "alt": "Tripé Greika FC-S288L com softbox em um estúdio fotográfico",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/tripe-iluminacao-greika-fc-s288l-280m/foto-real-aberto.jpg",
        "alt": "Foto real do tripé Greika FC-S288L aberto mostrando os pés, travas e seções telescópicas"
      },
      {
        "src": "assets/produtos/tripe-iluminacao-greika-fc-s288l-280m/foto-real-estendido.jpg",
        "alt": "Foto real do tripé Greika FC-S288L totalmente estendido"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente sem uso · sem sinais",
    "tag": "Avulso · Greika · aço inox",
    "meta": "Até 2,80 m · telescópico · iluminação e fotografia",
    "conditionSummary": "Praticamente sem uso, em estado de novo e sem nenhum sinal de uso.",
    "description": "Tripé de iluminação Greika FC-S288L em aço inox, com estrutura telescópica e altura regulável de aproximadamente 1,00 a 2,80 metros. É indicado para flashes, refletores, sombrinhas, softboxes e outros acessórios de estúdio, oferecendo uma base ampla e resistente para produções fotográficas e de vídeo.",
    "conditionNotes": "Produto praticamente sem uso, em estado de novo e sem nenhum sinal de uso. As fotos reais mostram o tripé aberto e totalmente estendido, incluindo pés, travas, seções telescópicas e encaixe superior.",
    "details": [
      ["Marca", "Greika"],
      ["Modelo", "FC-S288L"],
      ["Tipo", "Tripé de iluminação"],
      ["Material", "Aço inox"],
      ["Altura regulável", "Aproximadamente 1,00 a 2,80 m"],
      ["Estrutura", "Telescópica com três seções e travas"],
      ["Base", "Três pés com hastes de reforço"],
      ["Compatibilidade", "Flashes · refletores · sombrinhas · softboxes"],
      ["Encaixe superior", "Adaptável a acessórios de estúdio"],
      ["Condição", "Praticamente sem uso · sem nenhum sinal de uso"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do tripé real.<br>As duas imagens seguintes mostram exatamente o produto anunciado, aberto e totalmente estendido.",
    "disclosureNote": "O softbox e os demais equipamentos vistos na ambientação não acompanham o produto. O anúncio inclui somente o tripé mostrado nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "escultura-centro-mesa-vidro-artistico-soprado",
    "slug": "escultura-centro-de-mesa-vidro-artistico-soprado",
    "name": "Escultura Centro de Mesa em Vidro Artístico Soprado",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 150,
    "image": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/capa-sala.png",
    "alt": "Escultura de centro de mesa em vidro artístico transparente com detalhes rosados e verdes em uma sala elegante",
    "photos": [
      {
        "src": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/capa-sala.png",
        "alt": "Escultura de vidro artístico soprado ambientada sobre uma mesa em sala contemporânea",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/foto-real-4869.jpg",
        "alt": "Foto real frontal da escultura de vidro artístico anunciada"
      },
      {
        "src": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/foto-real-4870.jpg",
        "alt": "Foto real em ângulo da escultura de vidro mostrando as formas orgânicas"
      },
      {
        "src": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/foto-real-4871.jpg",
        "alt": "Foto real superior mostrando os detalhes rosados, verdes e marfim no vidro"
      },
      {
        "src": "assets/produtos/escultura-centro-mesa-vidro-artistico-soprado/foto-real-4872.jpg",
        "alt": "Foto real lateral mostrando a base e o perfil da escultura de vidro"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · perfeito estado",
    "tag": "Avulsa · vidro artístico",
    "meta": "Vidro soprado · formas orgânicas · base com pé",
    "conditionSummary": "Peça usada em perfeito estado de conservação, sem trincas, lascas ou avarias aparentes.",
    "description": "Escultura decorativa e centro de mesa em vidro artístico soprado, com desenho orgânico formado por curvas e alças transparentes. O interior recebe delicados veios em tons de rosa, verde e marfim, enquanto a base elevada valoriza a peça sobre mesas, aparadores e estantes.",
    "conditionNotes": "Peça em perfeito estado de conservação. As fotos reais mostram a frente, as laterais, a parte superior, a base e os detalhes coloridos do vidro. Não há marca ou assinatura visível, por isso o anúncio não atribui fabricante ou procedência específica.",
    "details": [
      ["Tipo", "Escultura decorativa · centro de mesa"],
      ["Material", "Vidro artístico soprado"],
      ["Cor", "Transparente com detalhes rosa, verde e marfim"],
      ["Formato", "Orgânico com curvas e alças"],
      ["Base", "Elevada com pé de vidro"],
      ["Uso sugerido", "Mesa · aparador · estante"],
      ["Marca", "Não identificada"],
      ["Condição", "Usada · perfeito estado"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da peça real.<br>As quatro imagens seguintes mostram exatamente a escultura de vidro anunciada.",
    "disclosureNote": "A ambientação da capa é ilustrativa. O anúncio inclui somente a peça de vidro mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "fruteira-vidro-lapidado-com-pe",
    "slug": "fruteira-de-vidro-lapidado-com-pe",
    "name": "Fruteira de Vidro Lapidado com Pé",
    "type": "single",
    "category": "Casa e cozinha",
    "categoryId": "casa-cozinha",
    "price": 150,
    "image": "assets/produtos/fruteira-vidro-lapidado-com-pe/capa-mesa.png",
    "alt": "Fruteira de vidro lapidado com pé contendo frutas sobre uma mesa de jantar elegante",
    "photos": [
      {
        "src": "assets/produtos/fruteira-vidro-lapidado-com-pe/capa-mesa.png",
        "alt": "Fruteira de vidro lapidado com pé ambientada com frutas sobre mesa posta",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/fruteira-vidro-lapidado-com-pe/foto-real-4873.jpg",
        "alt": "Foto real em ângulo da fruteira de vidro lapidado anunciada"
      },
      {
        "src": "assets/produtos/fruteira-vidro-lapidado-com-pe/foto-real-4874.jpg",
        "alt": "Foto real frontal mostrando o desenho geométrico e o pé da fruteira"
      },
      {
        "src": "assets/produtos/fruteira-vidro-lapidado-com-pe/foto-real-4875.jpg",
        "alt": "Foto real superior mostrando o interior e a borda trabalhada da fruteira"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · perfeito estado",
    "tag": "Avulsa · vidro lapidado",
    "meta": "Padrão geométrico · borda trabalhada · pedestal",
    "conditionSummary": "Peça usada em perfeito estado de conservação, sem trincas, lascas ou avarias aparentes.",
    "description": "Fruteira de vidro lapidado com pé, borda trabalhada e padrão geométrico em relevo que reflete a luz por toda a peça. O pedestal eleva a apresentação e permite usá-la com frutas, doces, sobremesas ou como centro decorativo em mesas e aparadores.",
    "conditionNotes": "Peça em perfeito estado de conservação. As fotos reais mostram o desenho externo, o interior, a borda e o pedestal. O material foi descrito como vidro, sem atribuição de cristal ou fabricante não identificados nas imagens.",
    "details": [
      ["Tipo", "Fruteira · taça de mesa"],
      ["Material", "Vidro lapidado"],
      ["Cor", "Transparente"],
      ["Acabamento", "Padrão geométrico em relevo"],
      ["Borda", "Trabalhada"],
      ["Base", "Pedestal com detalhes radiais"],
      ["Uso sugerido", "Frutas · doces · sobremesas · decoração"],
      ["Marca", "Não identificada"],
      ["Condição", "Usada · perfeito estado"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da peça real.<br>As três imagens seguintes mostram exatamente a fruteira de vidro anunciada.",
    "disclosureNote": "As frutas e os demais elementos vistos na capa são ilustrativos e não acompanham o produto. O anúncio inclui somente a fruteira mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "vestido-fashion-nova-angel-baby-mini-dress-preto-s",
    "slug": "vestido-fashion-nova-angel-baby-mini-dress-preto-tamanho-s",
    "name": "Vestido Fashion Nova Angel Baby Mini Dress Preto",
    "type": "single",
    "category": "Moda feminina",
    "categoryId": "moda-feminina",
    "price": 90,
    "image": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/capa-adolescente.png",
    "alt": "Adolescente loira usando vestido preto Fashion Nova Angel Baby Mini Dress em ambiente externo",
    "photos": [
      {
        "src": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/capa-adolescente.png",
        "alt": "Adolescente loira usando o vestido Fashion Nova Angel Baby Mini Dress preto com tênis brancos",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/foto-real-cabide-passado.png",
        "alt": "Foto do vestido Fashion Nova Angel Baby preto no cabide com os amassados removidos digitalmente"
      },
      {
        "src": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/foto-real-frente-passado.png",
        "alt": "Foto frontal do vestido Fashion Nova preto estendido e com os amassados removidos digitalmente"
      },
      {
        "src": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/foto-real-costas-passado.png",
        "alt": "Foto das costas do vestido Fashion Nova preto com os amassados removidos digitalmente"
      },
      {
        "src": "assets/produtos/vestido-fashion-nova-angel-baby-mini-dress-preto-s/foto-real-etiqueta.jpg",
        "alt": "Foto real da etiqueta Fashion Nova Angel Baby Mini Dress tamanho S e código FND2212"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Com etiqueta · sem sinais de uso",
    "tag": "Avulso · Fashion Nova · tamanho S",
    "meta": "Mini dress · preto · manga curta · estampa Angel",
    "conditionSummary": "Vestido com etiqueta, sem sinais de uso aparentes e em excelente estado de conservação.",
    "description": "Vestido curto Fashion Nova Angel Baby Mini Dress, modelo FND2212, na cor preta e tamanho S. A modelagem ajustada de manga curta tem gola redonda e estampa frontal Angel em branco e rosa, acompanhada de auréola e pequenas estrelas coloridas.",
    "conditionNotes": "Peça com etiqueta e sem sinais de uso aparentes. Para apresentar melhor a modelagem, os amassados do tecido foram removidos digitalmente nas três fotos da peça inteira, sem alteração intencional de cor, corte, estampa ou condição. A última imagem mostra a etiqueta real e a identificação do modelo.",
    "details": [
      ["Marca", "Fashion Nova"],
      ["Modelo", "Angel Baby Mini Dress"],
      ["Código", "FND2212"],
      ["Tamanho", "S"],
      ["Cor", "Preta"],
      ["Comprimento", "Curto · mini dress"],
      ["Mangas", "Curtas"],
      ["Gola", "Redonda"],
      ["Estampa", "Angel em branco e rosa com auréola e estrelas"],
      ["Modelagem", "Ajustada"],
      ["Condição", "Com etiqueta · sem sinais de uso"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do vestido real.<br>As três imagens seguintes foram criadas a partir das fotos reais, com remoção digital apenas dos amassados do tecido. A última imagem é a foto original da etiqueta.",
    "disclosureNote": "A modelo e o ambiente da capa são ilustrativos. O anúncio inclui somente o vestido mostrado nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "conjunto-livre-e-leve-rosa-p",
    "slug": "conjunto-livre-e-leve-rosa-top-e-shorts-tamanho-p",
    "name": "Conjunto Livre e Leve Rosa — Top e Shorts",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 90,
    "image": "assets/produtos/conjunto-livre-e-leve-rosa-p/capa-academia.png",
    "alt": "Mulher adulta magra usando conjunto fitness Livre e Leve rosa tamanho P em academia",
    "photos": [
      {
        "src": "assets/produtos/conjunto-livre-e-leve-rosa-p/capa-academia.png",
        "alt": "Mulher adulta magra usando o top e o shorts Livre e Leve rosa em academia",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-livre-e-leve-rosa-p/foto-real-frente.jpg",
        "alt": "Foto real da frente do top e do shorts fitness Livre e Leve rosa anunciados"
      },
      {
        "src": "assets/produtos/conjunto-livre-e-leve-rosa-p/foto-real-costas.jpg",
        "alt": "Foto real das costas do top e do shorts fitness Livre e Leve rosa anunciados"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca usado",
    "tag": "Conjunto · Livre e Leve · tamanho P",
    "meta": "Top nadador · shorts curto · bolsos laterais",
    "conditionSummary": "Conjunto novo, nunca usado e sem sinais de uso.",
    "description": "Conjunto fitness feminino Livre e Leve, tamanho P, formado por top nadador e shorts curto de cintura alta. As duas peças têm tecido rosa-magenta com textura geométrica em relevo; o shorts possui bolsos laterais para celular, chave ou pequenos objetos.",
    "conditionNotes": "As duas peças estão novas, nunca foram usadas e não apresentam sinais de uso. As fotos reais mostram a frente e as costas do conjunto, incluindo os bolsos laterais e o emblema metálico da marca.",
    "details": [
      ["Marca", "Livre e Leve"],
      ["Tamanho", "P"],
      ["Cor", "Rosa-magenta"],
      ["Conteúdo", "Top nadador + shorts fitness"],
      ["Top", "Texturizado · alças largas · sustentação média"],
      ["Shorts", "Curto · cintura alta · modelagem justa"],
      ["Bolsos", "Bolsos laterais"],
      ["Tecido principal", "Poliamida com elastano"],
      ["Textura", "Geométrica em relevo"],
      ["Condição", "Novo · nunca usado"],
      ["Formato de venda", "Conjunto completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real.<br>As duas imagens seguintes mostram exatamente a frente e as costas do conjunto anunciado.",
    "disclosureNote": "A modelo, os tênis e o ambiente da capa são ilustrativos. O anúncio inclui somente o top e o shorts mostrados nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "vestido-preto-rodado-p",
    "slug": "vestido-preto-rodado-costas-abertas-tamanho-p",
    "name": "Vestido Preto Rodado com Costas Abertas — Tamanho P",
    "type": "single",
    "category": "Moda feminina",
    "categoryId": "moda-feminina",
    "price": 90,
    "image": "assets/produtos/vestido-preto-rodado-p/capa-boutique.png",
    "alt": "Vestido preto rodado tamanho P exposto em manequim de boutique",
    "photos": [
      {
        "src": "assets/produtos/vestido-preto-rodado-p/capa-boutique.png",
        "alt": "Vestido preto rodado tamanho P em ambientação de boutique",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-preto-rodado-p/foto-real-frente-cabide.jpg",
        "alt": "Foto real do vestido preto rodado tamanho P visto de frente no cabide"
      },
      {
        "src": "assets/produtos/vestido-preto-rodado-p/foto-real-frente.jpg",
        "alt": "Foto real da frente do vestido preto rodado anunciado"
      },
      {
        "src": "assets/produtos/vestido-preto-rodado-p/foto-real-costas.jpg",
        "alt": "Foto real das costas abertas com amarração do vestido preto anunciado"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca usado",
    "tag": "Avulso · tamanho P",
    "meta": "Preto · saia rodada · costas abertas",
    "conditionSummary": "Vestido novo, nunca usado e sem sinais de uso.",
    "description": "Vestido preto curto tamanho P, com alças finas, decote em V, cintura marcada e saia rodada. As costas abertas recebem amarração central, dando acabamento delicado à peça.",
    "conditionNotes": "Peça nova, nunca usada e sem sinais de uso. As três fotos reais mostram a frente, o caimento da saia e o detalhe de amarração nas costas.",
    "details": [
      ["Tamanho", "P"],
      ["Cor", "Preta"],
      ["Comprimento", "Curto"],
      ["Modelagem", "Cintura marcada · saia rodada"],
      ["Decote", "V"],
      ["Alças", "Finas"],
      ["Costas", "Abertas · com amarração"],
      ["Condição", "Novo · nunca usado"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do vestido real.<br>As três imagens seguintes mostram exatamente o vestido anunciado.",
    "disclosureNote": "O manequim e o ambiente da capa são ilustrativos. O anúncio inclui somente o vestido mostrado nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "jaqueta-tommy-hilfiger-laranja-m",
    "slug": "jaqueta-tommy-hilfiger-laranja-forrada-tamanho-m",
    "name": "Jaqueta Tommy Hilfiger Laranja Forrada — Tamanho M",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 490,
    "newPriceText": "R$ 749",
    "newPriceLabel": "Jaqueta Tommy Hilfiger laranja nova similar",
    "newPriceSource": {
      "label": "VV Miami",
      "url": "https://vvmiami.com.br/produtos/jaqueta-velejador-tommy-hilfiger-masculina-laranja-g9gg3/"
    },
    "image": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/capa-luz-natural.png",
    "alt": "Homem adulto usando jaqueta Tommy Hilfiger laranja tamanho M em ambiente urbano com luz natural",
    "photos": [
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/capa-luz-natural.png",
        "alt": "Homem adulto usando a jaqueta Tommy Hilfiger laranja em ambiente urbano com luz natural",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/foto-real-frente.jpg",
        "alt": "Foto real da frente da jaqueta Tommy Hilfiger laranja anunciada"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/foto-real-costas.jpg",
        "alt": "Foto real das costas da jaqueta Tommy Hilfiger laranja anunciada"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/foto-real-aberta.jpg",
        "alt": "Foto real da jaqueta Tommy Hilfiger aberta mostrando o forro interno escuro"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/foto-real-logo.jpg",
        "alt": "Detalhe real do bordado Tommy Hilfiger no peito da jaqueta"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-laranja-m/foto-real-etiqueta.jpg",
        "alt": "Etiqueta real Tommy Hilfiger tamanho M da jaqueta anunciada"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usada uma vez · sem marcas de uso",
    "tag": "Avulso · tamanho M",
    "meta": "Laranja queimado · forro interno · gola alta",
    "conditionSummary": "Usada apenas uma vez, sem nenhuma marca de uso e em estado de nova.",
    "description": "Jaqueta Tommy Hilfiger masculina tamanho M em tom laranja queimado, com gola alta, fechamento frontal por zíper protegido por vista, dois bolsos frontais e forro interno escuro macio. O logo aparece bordado de forma discreta no peito e a bandeira da marca está aplicada nas costas.",
    "conditionNotes": "Peça usada apenas uma vez. Está impecável, sem manchas, riscos, furos, desgaste ou qualquer marca de uso aparente. As fotos reais mostram a frente, as costas, o forro, o bordado e a etiqueta tamanho M.",
    "details": [
      ["Marca", "Tommy Hilfiger"],
      ["Tamanho", "M"],
      ["Cor", "Laranja queimado"],
      ["Gola", "Alta"],
      ["Fechamento", "Zíper frontal com vista"],
      ["Forro", "Interno escuro e macio"],
      ["Bolsos", "Dois bolsos frontais"],
      ["Punhos e barra", "Elásticos"],
      ["Condição", "Usada uma vez · sem marcas de uso"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da jaqueta real, usando luz natural neutra.<br>As cinco imagens seguintes mostram exatamente a peça anunciada.",
    "disclosureNote": "O modelo e o ambiente da capa são ilustrativos. O anúncio inclui somente a jaqueta mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "jaqueta-tommy-hilfiger-vermelha-m",
    "slug": "jaqueta-tommy-hilfiger-vermelha-forrada-tamanho-m",
    "name": "Jaqueta Tommy Hilfiger Vermelha Forrada — Tamanho M",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 290,
    "newPriceText": "R$ 699,90",
    "newPriceLabel": "Jaqueta Tommy Hilfiger nova comparável",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://lista.mercadolivre.com.br/jaqueta-hilfiger"
    },
    "image": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/capa-luz-natural.png",
    "alt": "Homem adulto usando jaqueta Tommy Hilfiger vermelha tamanho M em ambiente externo com luz natural",
    "photos": [
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/capa-luz-natural.png",
        "alt": "Homem adulto usando a jaqueta Tommy Hilfiger vermelha em ambiente externo com luz natural",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/foto-real-frente.jpg",
        "alt": "Foto real da frente da jaqueta Tommy Hilfiger vermelha anunciada"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/foto-real-costas.jpg",
        "alt": "Foto real das costas da jaqueta Tommy Hilfiger vermelha anunciada"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/foto-real-aberta.jpg",
        "alt": "Foto real da jaqueta Tommy Hilfiger vermelha aberta mostrando o forro preto acolchoado"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/foto-real-logo.jpg",
        "alt": "Detalhe real do bordado Tommy Hilfiger no peito da jaqueta vermelha"
      },
      {
        "src": "assets/produtos/jaqueta-tommy-hilfiger-vermelha-m/foto-real-etiqueta.jpg",
        "alt": "Etiqueta real Tommy Hilfiger tamanho M da jaqueta vermelha anunciada"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usada · bom estado",
    "tag": "Avulso · tamanho M",
    "meta": "Vermelha · forro acolchoado · gola alta",
    "conditionSummary": "Jaqueta usada, em bom estado de conservação aparente nas fotos.",
    "description": "Jaqueta Tommy Hilfiger masculina tamanho M na cor vermelha, com gola alta revestida, fechamento frontal por zíper protegido por vista, dois bolsos frontais e forro interno preto acolchoado. Possui bordado discreto no peito, bandeira da marca nas costas e acabamento preto nos punhos e na barra.",
    "conditionNotes": "Peça usada. As cinco fotos reais mostram a frente, as costas, o interior acolchoado, o bordado e a etiqueta tamanho M, permitindo conferir o estado atual da jaqueta.",
    "details": [
      ["Marca", "Tommy Hilfiger"],
      ["Tamanho", "M"],
      ["Cor", "Vermelha com detalhes pretos"],
      ["Gola", "Alta · revestida"],
      ["Fechamento", "Zíper frontal com vista"],
      ["Forro", "Preto acolchoado"],
      ["Bolsos", "Dois bolsos frontais"],
      ["Acabamento", "Punhos e barra com viés preto"],
      ["Condição", "Usada · bom estado aparente"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da jaqueta real, usando luz natural neutra.<br>As cinco imagens seguintes mostram exatamente a peça anunciada.",
    "disclosureNote": "O modelo e o ambiente da capa são ilustrativos. O anúncio inclui somente a jaqueta mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "par-halteres-3kg-cada-azul",
    "slug": "par-halteres-sextavados-3kg-cada-azul",
    "name": "Par de Halteres Sextavados de 3 kg Cada",
    "type": "single",
    "category": "Fitness",
    "categoryId": "esportes",
    "price": 60,
    "newPriceText": "R$ 92,99",
    "newPriceLabel": "Par novo comparável",
    "newPriceSource": {
      "label": "2M Fitness",
      "url": "https://www.2mfitness.com.br/kit-de-halteres/sextavados-emborrachados/par-de-halteres-sextavado-emborrachado-3-kg"
    },
    "image": "assets/produtos/par-halteres-3kg-cada-azul/capa-academia-luz-natural.png",
    "alt": "Par de halteres sextavados azul-petróleo de 3 kg sobre tapete de exercícios em academia doméstica",
    "photos": [
      {
        "src": "assets/produtos/par-halteres-3kg-cada-azul/capa-academia-luz-natural.png",
        "alt": "Par de halteres azul-petróleo de 3 kg ambientado em academia doméstica com luz natural",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/par-halteres-3kg-cada-azul/foto-real-par-1.jpg",
        "alt": "Foto real do par de halteres azul-petróleo de 3 kg anunciado"
      },
      {
        "src": "assets/produtos/par-halteres-3kg-cada-azul/foto-real-par-2.jpg",
        "alt": "Segunda foto real do par de halteres mostrando a marcação de 3 kg"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Usados · marcas de uso",
    "tag": "Par · 6 kg no total",
    "meta": "3 kg cada · formato sextavado · azul-petróleo",
    "conditionSummary": "Par usado e plenamente funcional, com marcas superficiais no revestimento.",
    "description": "Par de halteres sextavados com 3 kg cada, totalizando 6 kg. O formato ajuda a evitar que rolem no chão e é indicado para treinos de braços, ombros, peito, costas, exercícios funcionais e atividades em casa.",
    "conditionNotes": "Halteres usados, firmes e prontos para treino. O revestimento azul-petróleo apresenta riscos e marcas estéticas superficiais, mostrados nas duas fotos reais.",
    "details": [
      ["Conteúdo", "2 halteres"],
      ["Peso por unidade", "3 kg"],
      ["Peso total", "6 kg"],
      ["Formato", "Sextavado"],
      ["Cor", "Azul-petróleo"],
      ["Estado", "Usados · com marcas estéticas"],
      ["Formato de venda", "Par completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir dos halteres reais, usando luz natural neutra.<br>As duas imagens seguintes mostram exatamente o par anunciado.",
    "disclosureNote": "O ambiente e os acessórios da capa são ilustrativos. O anúncio inclui somente os dois halteres mostrados nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "mala-ogio-rig-9800-azul-preta",
    "slug": "mala-ogio-rig-9800-com-rodas-azul-preta",
    "name": "Mala OGIO Rig 9800 com Rodas Azul e Preta",
    "type": "single",
    "category": "Esportes e viagem",
    "categoryId": "esportes",
    "price": 1900,
    "newPriceText": "R$ 2.999,90",
    "newPriceLabel": "Nova na loja oficial",
    "newPriceSource": {
      "label": "OGIO Brasil",
      "url": "https://www.ogio.com.br/products/bolsa-de-equipamentos-ogio-rig-9800-wheeled-123l-dark-static"
    },
    "image": "assets/produtos/mala-ogio-rig-9800-azul-preta/capa-paddock-luz-natural.png",
    "alt": "Mala OGIO Rig 9800 azul e preta em pé em uma área de embarque esportiva com luz natural",
    "photos": [
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/capa-paddock-luz-natural.png",
        "alt": "Mala OGIO Rig 9800 azul e preta ambientada em área esportiva com luz natural",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/foto-real-0971.jpg",
        "alt": "Foto real da mala OGIO Rig 9800 anunciada vista de frente"
      },
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/foto-real-0972.jpg",
        "alt": "Foto real da mala OGIO Rig 9800 mostrando a estrutura, alças e compartimentos"
      },
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/foto-real-interior.jpg",
        "alt": "Foto real do interior amplo, das divisórias e dos compartimentos da mala OGIO Rig 9800 anunciada"
      },
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/foto-real-0974.jpg",
        "alt": "Foto real da lateral e da base rígida da mala OGIO Rig 9800 anunciada"
      },
      {
        "src": "assets/produtos/mala-ogio-rig-9800-azul-preta/foto-real-0975.jpg",
        "alt": "Foto real da base moldada e das rodas da mala OGIO Rig 9800 anunciada"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente nova · pouquíssimos sinais",
    "tag": "Avulsa · 123 L · com rodas",
    "meta": "Chassi SLED · rodas grandes · alta capacidade",
    "conditionSummary": "Mala muito nova, muito bem conservada e com pouquíssimos sinais superficiais de uso.",
    "description": "OGIO Rig 9800, mala premium de equipamentos com 123 litros de capacidade. O chassi rígido SLED protege a base contra impactos, enquanto as rodas grandes, a abertura ampla, os compartimentos internos e as cintas de compressão facilitam transportar roupas e equipamentos esportivos em viagens.",
    "conditionNotes": "Produto praticamente novo e em excelente estado de conservação. As fotos reais mostram a frente, os compartimentos, as alças, a estrutura rígida, a base e as rodas. Há apenas sinais superficiais muito leves na parte inferior, compatíveis com pouco uso.",
    "details": [
      ["Marca", "OGIO"],
      ["Linha", "Rig"],
      ["Modelo", "9800 Wheeled"],
      ["Capacidade", "123 litros"],
      ["Estrutura", "Chassi rígido SLED"],
      ["Compartimento principal", "Abertura ampla com divisórias ajustáveis"],
      ["Organização", "Compartimentos multiuso e cintas de compressão"],
      ["Transporte", "Rodas grandes · múltiplas alças"],
      ["Material", "Poliéster com base estrutural em ABS/PVC"],
      ["Dimensões aproximadas", "86,3 × 41,9 × 38,7 cm"],
      ["Peso aproximado", "6,4 kg"],
      ["Cor", "Azul e preta"],
      ["Condição", "Praticamente nova · pouquíssimos sinais"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da mala real, usando luz natural neutra.<br>As cinco imagens seguintes mostram exatamente a mala anunciada.",
    "disclosureNote": "O ambiente da capa é ilustrativo. O anúncio inclui somente a mala mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "cushion-grip-perfurado-verde-agua",
    "slug": "cushion-grip-perfurado-raquete-tenis-verde-agua",
    "name": "Cushion Grip Perfurado para Raquete de Tênis",
    "type": "single",
    "category": "Tênis",
    "categoryId": "esportes",
    "price": 30,
    "image": "assets/produtos/cushion-grip-perfurado-verde-agua/capa-raquete-quadra.png",
    "alt": "Cushion grip perfurado verde-água instalado no cabo de uma raquete de tênis ao lado da quadra",
    "photos": [
      {
        "src": "assets/produtos/cushion-grip-perfurado-verde-agua/capa-raquete-quadra.png",
        "alt": "Cushion grip perfurado verde-água instalado corretamente em uma raquete de tênis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/cushion-grip-perfurado-verde-agua/foto-real-4884.jpg",
        "alt": "Foto real aproximada do cushion grip perfurado verde-água anunciado"
      },
      {
        "src": "assets/produtos/cushion-grip-perfurado-verde-agua/foto-real-4885.jpg",
        "alt": "Foto real do cushion grip verde-água com sua embalagem e instruções de aplicação"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Sem sinais aparentes de aplicação",
    "tag": "Avulso · cushion grip",
    "meta": "Perfurado · verde-água · absorção de suor",
    "conditionSummary": "Cushion grip guardado na embalagem, sem sinais aparentes de aplicação em raquete.",
    "description": "Cushion grip perfurado para envolver o cabo de raquetes de tênis e outros esportes de raquete. O material macio ajuda a aumentar o conforto e a espessura da empunhadura, enquanto as perfurações favorecem a ventilação e a absorção do suor.",
    "conditionNotes": "Produto guardado em sua embalagem original aberta. As duas fotos reais mostram a fita completa, a superfície perfurada, a cor e as instruções impressas na embalagem.",
    "details": [
      ["Tipo", "Cushion grip / overgrip"],
      ["Indicação", "Raquetes de tênis e outros esportes de raquete"],
      ["Acabamento", "Perfurado"],
      ["Cor", "Verde-água / turquesa"],
      ["Função", "Conforto, aumento de espessura e absorção de suor"],
      ["Aplicação", "Enrolado em espiral sobre o cabo da raquete"],
      ["Conteúdo", "1 fita cushion grip"],
      ["Condição", "Sem sinais aparentes de aplicação"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do cushion real, mostrando como ele fica instalado numa raquete.<br>As duas imagens seguintes mostram exatamente o produto anunciado.",
    "disclosureNote": "A raquete e a quadra da capa são ilustrativas e não acompanham o produto. O anúncio inclui somente o cushion grip mostrado nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "vestido-alto-giro-beach-tennis-roxo-p",
    "slug": "vestido-alto-giro-beach-tennis-roxo-com-shorts-tamanho-p",
    "name": "Vestido Alto Giro Thássia Naves Bodytex II Roxo com Shorts — Tamanho P",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 190,
    "newPriceText": "Aprox. R$ 449",
    "newPriceLabel": "Vestidos similares",
    "newPriceSource": {
      "label": "Alto Giro",
      "url": "https://altogiro.com.br/collections/vestido-feminino"
    },
    "image": "assets/produtos/vestido-alto-giro-beach-tennis-roxo-p/capa-beach-tennis-v3.png",
    "alt": "Mulher adulta ruiva de porte P usando vestido Alto Giro roxo com detalhes laranja e shorts em uma quadra de beach tennis",
    "photos": [
      {
        "src": "assets/produtos/vestido-alto-giro-beach-tennis-roxo-p/capa-beach-tennis-v3.png",
        "alt": "Mulher adulta ruiva de porte P usando o vestido Alto Giro roxo durante uma partida de beach tennis",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/vestido-alto-giro-beach-tennis-roxo-p/foto-real-5454.jpg",
        "alt": "Foto real da frente do vestido Alto Giro roxo e laranja anunciado"
      },
      {
        "src": "assets/produtos/vestido-alto-giro-beach-tennis-roxo-p/foto-real-5455.jpg",
        "alt": "Foto real das costas nadador e dos recortes do vestido Alto Giro anunciado"
      },
      {
        "src": "assets/produtos/vestido-alto-giro-beach-tennis-roxo-p/foto-real-5456.jpg",
        "alt": "Foto real do vestido Alto Giro e do shorts avulso tamanho P incluído"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · sem uso",
    "tag": "Conjunto · tamanho P",
    "meta": "Thássia Naves Bodytex II · vestido + shorts · roxo e laranja",
    "conditionSummary": "Conjunto novo, sem uso e sem marcas, composto pelo vestido e pelo shorts avulso.",
    "description": "Vestido esportivo Alto Giro da linha Thássia Naves Bodytex II Recortes 2022, indicado para tênis, beach tennis e outros esportes de raquete. A modelagem curta combina costas nadador, recortes que acompanham o corpo e frisos laranja contrastantes. Acompanha shorts avulso roxo para proporcionar liberdade de movimento e segurança durante o jogo.",
    "conditionNotes": "Produto novo e sem uso. As três fotos reais mostram a frente, as costas nadador, os recortes, o símbolo da Alto Giro e o shorts tamanho P que acompanha o vestido.",
    "details": [
      ["Marca", "Alto Giro"],
      ["Linha", "Thássia Naves · Bodytex II Recortes"],
      ["Tamanho", "P"],
      ["Conteúdo", "Vestido + shorts avulso"],
      ["Cor", "Roxo / fúcsia com detalhes laranja"],
      ["Modelagem", "Curta · levemente ajustada"],
      ["Costas", "Nadador"],
      ["Vestido", "76% poliamida · 24% elastano"],
      ["Shorts", "84% poliamida · 16% elastano"],
      ["Indicação", "Tênis · beach tennis · padel"],
      ["Condição", "Novo · sem uso"],
      ["Formato de venda", "Conjunto completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real, usando luz natural neutra.<br>As três imagens seguintes mostram exatamente o vestido e o shorts anunciados.",
    "disclosureNote": "A modelo, a raquete e a quadra da capa são ilustrativas. O anúncio inclui somente o vestido e o shorts mostrados nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "calca-morena-rosa-sarja-branca",
    "slug": "calca-morena-rosa-sarja-branca",
    "name": "Calça Morena Rosa de Sarja Branca — Tamanho 34",
    "type": "single",
    "category": "Moda feminina",
    "categoryId": "moda-feminina",
    "price": 150,
    "image": "assets/produtos/calca-morena-rosa-sarja-branca/capa-modelo-luz-natural.png",
    "alt": "Mulher adulta usando calça Morena Rosa de sarja branca tamanho 34 bem passada em ambiente urbano com luz natural",
    "photos": [
      {
        "src": "assets/produtos/calca-morena-rosa-sarja-branca/capa-modelo-luz-natural.png",
        "alt": "Mulher adulta usando a calça Morena Rosa branca tamanho 34 com caimento ajustado e tecido bem passado",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/calca-morena-rosa-sarja-branca/foto-real-4886.jpg",
        "alt": "Foto real da calça Morena Rosa de sarja branca anunciada vista por inteiro"
      },
      {
        "src": "assets/produtos/calca-morena-rosa-sarja-branca/foto-real-4887.jpg",
        "alt": "Foto real aproximada da cintura, dos bolsos e dos metais da calça Morena Rosa anunciada"
      },
      {
        "src": "assets/produtos/calca-morena-rosa-sarja-branca/foto-real-4888.jpg",
        "alt": "Foto real da frente e da etiqueta interna Morena Rosa Jeans da calça anunciada"
      },
      {
        "src": "assets/produtos/calca-morena-rosa-sarja-branca/foto-real-4889.jpg",
        "alt": "Foto real do bolso traseiro e da placa metálica Morena Rosa da calça anunciada"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Nova · nunca usada",
    "tag": "Avulsa · Morena Rosa · tamanho 34",
    "meta": "Tamanho 34 · sarja branca · modelagem ajustada",
    "conditionSummary": "Peça nova, nunca usada e sem sinais de uso.",
    "description": "Calça feminina Morena Rosa Jeans tamanho 34 em sarja branca, com modelagem ajustada e corte versátil. Possui cintura com passantes, fechamento frontal, cinco bolsos e pequenos metais dourados que dão acabamento discreto à peça.",
    "conditionNotes": "Peça nova, nunca usada e sem sinais de uso. As quatro fotos reais mostram a calça inteira, a cintura, os bolsos, as costuras e as identificações da Morena Rosa.",
    "details": [
      ["Marca", "Morena Rosa"],
      ["Linha", "Morena Rosa Jeans"],
      ["Tamanho", "34"],
      ["Cor", "Branca"],
      ["Material", "Sarja"],
      ["Modelagem", "Ajustada"],
      ["Bolsos", "Cinco bolsos"],
      ["Fechamento", "Botão e zíper frontal"],
      ["Acabamentos", "Metais dourados"],
      ["Condição", "Nova · nunca usada"],
      ["Formato de venda", "Produto avulso"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir da calça real, mostrando a peça bem passada no corpo e com luz natural neutra.<br>As quatro imagens seguintes mostram exatamente a calça anunciada.",
    "disclosureNote": "A modelo, a blusa, os calçados e o ambiente da capa são ilustrativos. O anúncio inclui somente a calça mostrada nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "conjunto-john-john-gym-rocks-verde-neon-p",
    "slug": "conjunto-fitness-john-john-gym-rocks-verde-neon-tamanho-p",
    "name": "Conjunto Fitness John John Gym Rocks Verde Neon — Tamanho P",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 190,
    "image": "assets/produtos/conjunto-john-john-gym-rocks-verde-neon-p/capa-academia-luz-natural.png",
    "alt": "Mulher adulta de porte P usando conjunto fitness John John Gym Rocks verde neon em academia com luz natural",
    "photos": [
      {
        "src": "assets/produtos/conjunto-john-john-gym-rocks-verde-neon-p/capa-academia-luz-natural.png",
        "alt": "Mulher adulta usando top cropped e legging John John Gym Rocks verde neon em uma academia",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-john-john-gym-rocks-verde-neon-p/foto-real-conjunto.jpg",
        "alt": "Foto real do conjunto John John Gym Rocks verde neon completo, com top e legging"
      },
      {
        "src": "assets/produtos/conjunto-john-john-gym-rocks-verde-neon-p/foto-real-legging.jpg",
        "alt": "Foto real da legging canelada John John Gym Rocks verde neon vista por inteiro"
      },
      {
        "src": "assets/produtos/conjunto-john-john-gym-rocks-verde-neon-p/foto-real-detalhes.jpg",
        "alt": "Foto real do top e da legging John John Gym Rocks dobrados, mostrando logotipos e textura"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca usado",
    "tag": "Conjunto · John John · tamanho P",
    "meta": "Gym Rocks · top cropped + legging · verde neon",
    "conditionSummary": "Conjunto novo, nunca usado e sem sinais de uso.",
    "description": "Conjunto fitness feminino John John da linha Gym Rocks, tamanho P, composto por top cropped de alças finas e legging de cintura alta. As duas peças têm malha canelada verde neon e faixas com a identificação John John Gym Rocks em contraste.",
    "conditionNotes": "Conjunto novo, nunca usado e sem sinais de uso. As três fotos reais mostram as duas peças completas, a textura canelada, os acabamentos e as identificações da linha Gym Rocks.",
    "details": [
      ["Marca", "John John"],
      ["Linha", "Gym Rocks"],
      ["Tamanho", "P"],
      ["Conteúdo", "Top cropped + legging"],
      ["Cor", "Verde neon / verde-limão"],
      ["Tecido", "Malha canelada elástica"],
      ["Top", "Cropped · alças finas · faixa larga"],
      ["Legging", "Cintura alta · comprimento total"],
      ["Detalhes", "Logotipo John John Gym Rocks em contraste"],
      ["Condição", "Novo · nunca usado"],
      ["Formato de venda", "Conjunto completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real, usando luz natural neutra.<br>As três imagens seguintes mostram exatamente o top e a legging anunciados.",
    "disclosureNote": "A modelo, os tênis e o ambiente da capa são ilustrativos. O anúncio inclui somente o top e a legging mostrados nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "kit-fogareiro-portatil-3-cartuchos-ntk",
    "slug": "kit-fogareiro-portatil-gas-3-cartuchos-ntk",
    "name": "Kit Fogareiro Portátil a Gás com Maleta + 3 Cartuchos NTK",
    "type": "kit",
    "category": "Camping e lazer",
    "categoryId": "esportes",
    "price": 79,
    "newPriceText": "Aprox. R$ 111",
    "newPriceLabel": "Conjunto equivalente novo",
    "newPriceSource": {
      "label": "Mercado Livre",
      "url": "https://www.mercadolivre.com.br/p/MLB77875124?pdp_filters=item_id%3AMLB5101792381&sid=cart"
    },
    "image": "assets/produtos/kit-fogareiro-portatil-3-cartuchos-ntk/capa-camping.png",
    "alt": "Fogareiro portátil preto com maleta e três cartuchos de gás NTK em uma mesa de camping",
    "photos": [
      {
        "src": "assets/produtos/kit-fogareiro-portatil-3-cartuchos-ntk/capa-camping.png",
        "alt": "Fogareiro portátil com maleta e exatamente três cartuchos NTK em ambiente de camping",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/kit-fogareiro-portatil-3-cartuchos-ntk/fogareiro-referencia.jpg",
        "alt": "Imagem de referência do fogareiro portátil automático e de sua maleta"
      },
      {
        "src": "assets/produtos/kit-fogareiro-portatil-3-cartuchos-ntk/fogareiro-com-maleta.jpg",
        "alt": "Segunda imagem de referência do fogareiro portátil com maleta"
      },
      {
        "src": "assets/produtos/kit-fogareiro-portatil-3-cartuchos-ntk/cartuchos-ntk.webp",
        "alt": "Imagem de referência dos cartuchos NTK Campgás; o anúncio inclui três unidades lacradas"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Praticamente novo · cartuchos lacrados",
    "tag": "Kit · fogareiro + maleta + 3 cartuchos",
    "meta": "1 boca · acendimento automático · 3 refis NTK de 227 g",
    "conditionSummary": "Fogareiro praticamente novo, acompanhado da maleta e de três cartuchos NTK lacrados.",
    "description": "Kit completo para camping, pesca, viagens e emergências. Reúne um fogareiro portátil de uma boca com acendimento automático e controle de chama, a maleta rígida para transporte e três cartuchos NTK Campgás de 227 g ainda lacrados.",
    "conditionNotes": "O fogareiro está praticamente novo. Os três cartuchos que acompanham o conjunto permanecem lacrados e prontos para uso.",
    "details": [
      ["Conteúdo", "1 fogareiro + maleta + 3 cartuchos"],
      ["Tipo", "Fogareiro portátil de 1 boca"],
      ["Acendimento", "Automático"],
      ["Controle", "Regulagem de chama"],
      ["Combustível", "Cartucho Campgás de 227 g"],
      ["Cartuchos", "3 unidades NTK lacradas"],
      ["Transporte", "Maleta rígida inclusa"],
      ["Indicação", "Camping · pesca · viagens · emergências"],
      ["Condição", "Fogareiro praticamente novo · cartuchos lacrados"],
      ["Formato de venda", "Kit completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir de imagens de referência dos modelos.<br>As imagens seguintes são referências do fogareiro, da maleta e dos cartuchos. O conjunto anunciado inclui três cartuchos lacrados.",
    "disclosureNote": "O ambiente de camping da capa é ilustrativo. As fotos de referência podem mostrar quatro cartuchos, mas o kit anunciado e entregue contém exatamente três unidades lacradas.",
    "illustratedCover": true
  },
  {
    "id": "conjunto-livre-e-leve-degrade-p",
    "slug": "conjunto-fitness-livre-e-leve-degrade-top-legging-tamanho-p",
    "name": "Conjunto Fitness Livre e Leve Degradê — Top e Legging Tamanho P",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 120,
    "newPriceText": "Consulte os valores atuais",
    "newPriceLabel": "Produtos na loja oficial",
    "newPriceSource": {
      "label": "Livre e Leve",
      "url": "https://www.livreeleve.com.br/collections/conjuntos-fitness?sort_by=price-descending"
    },
    "image": "assets/produtos/conjunto-livre-e-leve-degrade-p/capa-academia-luz-natural.png",
    "alt": "Mulher adulta magra usando conjunto fitness Livre e Leve degradê tamanho P em academia",
    "photos": [
      {
        "src": "assets/produtos/conjunto-livre-e-leve-degrade-p/capa-academia-luz-natural.png",
        "alt": "Mulher adulta de porte P usando top e legging Livre e Leve degradê em academia",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-livre-e-leve-degrade-p/foto-real-conjunto.jpg",
        "alt": "Foto real do conjunto Livre e Leve degradê completo com top e legging"
      },
      {
        "src": "assets/produtos/conjunto-livre-e-leve-degrade-p/foto-real-legging.jpg",
        "alt": "Foto real da legging Livre e Leve degradê vista por inteiro com etiqueta"
      },
      {
        "src": "assets/produtos/conjunto-livre-e-leve-degrade-p/foto-real-detalhes.jpg",
        "alt": "Foto real do top e da legging Livre e Leve mostrando o degradê e as etiquetas"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca usado · com etiqueta",
    "tag": "Conjunto · Livre e Leve · tamanho P",
    "meta": "Top fitness + legging · degradê azul, lilás e rosa",
    "conditionSummary": "Conjunto novo, nunca usado e ainda com as etiquetas originais.",
    "description": "Conjunto fitness feminino Livre e Leve, tamanho P, composto por top de alças largas e legging de cintura alta com comprimento total. As duas peças combinam um degradê marcante que parte do azul, passa pelo lilás e termina em rosa, com textura tonal delicada.",
    "conditionNotes": "O conjunto nunca foi usado e permanece com as etiquetas originais. As três fotos reais mostram o top, a legging, o degradê do tecido, o emblema da marca e as etiquetas presentes nas peças.",
    "details": [
      ["Marca", "Livre e Leve"],
      ["Tamanho", "P"],
      ["Conteúdo", "Top fitness + legging"],
      ["Cores", "Azul · lilás · rosa"],
      ["Estampa", "Degradê com textura tonal"],
      ["Top", "Alças largas · faixa inferior larga"],
      ["Legging", "Cintura alta · comprimento total"],
      ["Modelagem", "Ajustada"],
      ["Condição", "Novo · nunca usado · com etiqueta"],
      ["Formato de venda", "Conjunto completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real, usando luz natural neutra.<br>As três imagens seguintes mostram exatamente o top e a legging anunciados, ainda com suas etiquetas.",
    "disclosureNote": "A modelo, os tênis e o ambiente da capa são ilustrativos. O anúncio inclui somente o top e a legging mostrados nas fotos reais.",
    "illustratedCover": true
  },
  {
    "id": "conjunto-labellamafia-coral-p",
    "slug": "conjunto-fitness-labellamafia-coral-top-legging-tamanho-p",
    "name": "Conjunto Fitness Labellamafia Coral — Top e Legging Tamanho P",
    "type": "single",
    "category": "Moda fitness",
    "categoryId": "moda-fitness",
    "price": 120,
    "newPriceText": "R$ 494,99",
    "newPriceLabel": "Conjunto Labellamafia similar novo",
    "newPriceSource": {
      "label": "Shopee",
      "url": "https://shopee.com.br/CONJUNTO-TOP-E-LEGGING-BOXER-LABELLAMAFIA-i.696381777.23492475496"
    },
    "image": "assets/produtos/conjunto-labellamafia-coral-p/capa-pista-luz-natural.png",
    "alt": "Mulher adulta ruiva de porte P usando conjunto fitness Labellamafia coral em pista de corrida",
    "photos": [
      {
        "src": "assets/produtos/conjunto-labellamafia-coral-p/capa-pista-luz-natural.png",
        "alt": "Mulher adulta de porte P usando top e legging Labellamafia coral em ambiente esportivo externo",
        "isIllustrative": true
      },
      {
        "src": "assets/produtos/conjunto-labellamafia-coral-p/foto-real-conjunto.jpg",
        "alt": "Foto real do conjunto Labellamafia coral completo com top e legging"
      },
      {
        "src": "assets/produtos/conjunto-labellamafia-coral-p/foto-real-legging.jpg",
        "alt": "Foto real da legging Labellamafia coral tamanho P vista por inteiro"
      },
      {
        "src": "assets/produtos/conjunto-labellamafia-coral-p/foto-real-detalhes.jpg",
        "alt": "Foto real dos detalhes e identificações Labellamafia no top e na legging"
      }
    ],
    "imageFit": "cover",
    "isDemo": false,
    "status": "available",
    "condition": "Novo · nunca usado",
    "tag": "Conjunto · Labellamafia · tamanho P",
    "meta": "Top nadador + legging · coral e azul-marinho",
    "conditionSummary": "Conjunto novo, nunca usado e sem sinais de uso.",
    "description": "Conjunto fitness feminino Labellamafia, tamanho P, formado por top nadador e legging de cintura alta com comprimento total. O visual coral ganha contraste com o forro azul-marinho do top, faixas laterais e identificações marcantes da marca.",
    "conditionNotes": "As duas peças nunca foram usadas e não apresentam sinais de uso. As três fotos reais mostram o conjunto completo, o caimento das peças, as faixas laterais e as identificações Labellamafia.",
    "details": [
      ["Marca", "Labellamafia"],
      ["Tamanho", "P"],
      ["Conteúdo", "Top fitness + legging"],
      ["Cores", "Coral · azul-marinho"],
      ["Top", "Nadador · faixa larga · forro em contraste"],
      ["Legging", "Cintura alta · comprimento total"],
      ["Detalhes", "Faixas laterais e identificação Labellamafia"],
      ["Modelagem", "Ajustada"],
      ["Condição", "Novo · nunca usado"],
      ["Formato de venda", "Conjunto completo"]
    ],
    "galleryDisclosure": "A capa é uma ambientação ilustrativa criada com IA a partir do conjunto real, usando luz natural neutra.<br>As três imagens seguintes mostram exatamente o top e a legging anunciados.",
    "disclosureNote": "A modelo, os tênis e o ambiente da capa são ilustrativos. O anúncio inclui somente o top e a legging mostrados nas fotos reais.",
    "illustratedCover": true
  }
];

// Cada produto consome uma ou mais unidades físicas de estoque. Um anúncio
// avulso consome a própria unidade; um kit consome as unidades indicadas em
// includesProductIds. Assim, vender uma unidade avulsa indisponibiliza os kits
// que a contêm, e vender um kit indisponibiliza todos os seus anúncios avulsos.
function applyInventoryAvailability(catalogProducts) {
  const knownIds = new Set(catalogProducts.map(product => product.id));
  const inventoryUnits = product => {
    const explicit = Array.isArray(product.inventoryUnitIds)
      ? [...new Set(product.inventoryUnitIds.filter(id => typeof id === 'string' && id.trim()))]
      : [];
    if (explicit.length) return explicit;
    const included = Array.isArray(product.includesProductIds)
      ? [...new Set(product.includesProductIds.filter(id => knownIds.has(id)))]
      : [];
    return included.length ? included : [product.id];
  };
  const soldUnits = new Set(
    catalogProducts
      .filter(product => product.status === 'sold')
      .flatMap(inventoryUnits)
  );

  catalogProducts.forEach(product => {
    product.inventoryUnitIds = inventoryUnits(product);
    if (product.inventoryUnitIds.some(id => soldUnits.has(id))) product.status = 'sold';
  });
  return catalogProducts;
}

applyInventoryAvailability(products);
