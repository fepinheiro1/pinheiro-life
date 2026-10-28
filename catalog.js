'use strict';
// Catálogo editado pela conversa. Fotos, descrição, observações e preço pertencem a cada item.
const categories = [
  { id: 'acessorios', label: 'Acessórios' },
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
    "meta": "4K a 30 fps · 1080p a 60 fps",
    "conditionSummary": "Praticamente nova.",
    "disclosureNote": "A primeira imagem é uma ambientação criada com IA. As duas imagens seguintes são fotos oficiais de referência do modelo, incluindo a vista lateral.",
    "description": "Webcam EMEET SmartCam S600 com resolução 4K a 30 fps ou Full HD 1080p a 60 fps. Possui foco automático, correção automática de luz e dois microfones integrados com redução de ruído, sendo indicada para videochamadas, aulas, reuniões e transmissões.",
    "conditionNotes": "Produto praticamente novo.",
    "details": [
      ["Marca", "EMEET"],
      ["Modelo", "SmartCam S600"],
      ["Resolução máxima", "4K Ultra HD a 30 fps"],
      ["Modo Full HD", "1080p a 60 fps"],
      ["Sensor", "8 megapixels"],
      ["Foco", "Automático"],
      ["Campo de visão", "Ajustável de 40° a 73°"],
      ["Microfones", "2 omnidirecionais com redução de ruído"],
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
    "newPriceLabel": "Três frascos novos somados"
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
    "newPriceLabel": "Três frascos novos somados"
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
    "newPriceLabel": "Três frascos novos somados"
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
    "conditionSummary": "Três perfumes importados abertos, com os níveis de conteúdo mostrados na foto real.",
    "description": "Kit com Tiffany & Love for Him, Carolina Herrera 212 Men e Mercedes-Benz Man Grey. Os três frascos são vendidos juntos.",
    "conditionNotes": "Produtos abertos e com níveis variados. A foto real permite conferir os frascos, o estado externo e os níveis aparentes antes da compra.",
    "details": [
      [
        "Composição",
        "3 perfumes"
      ],
      [
        "Conteúdo",
        "Níveis visíveis na foto real"
      ],
      [
        "Formato de venda",
        "Somente o kit completo"
      ]
    ],
    "newPriceText": "R$ 546,75",
    "newPriceLabel": "212 Men NYC 100 ml novo na marca",
    "newPriceSource": {
      "label": "Carolina Herrera",
      "url": "https://www.carolinaherrera.com/br/pt/c/212-range"
    }
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
  }
];

// Cada produto consome uma ou mais unidades físicas de estoque. Um anúncio
// avulso consome a própria unidade; um kit consome as unidades indicadas em
// includesProductIds. Assim, vender uma unidade avulsa indisponibiliza os kits
// que a contêm, e vender um kit indisponibiliza todos os seus anúncios avulsos.
function applyInventoryAvailability(catalogProducts) {
  const knownIds = new Set(catalogProducts.map(product => product.id));
  const inventoryUnits = product => {
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
