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
    "id": "ubiquiti-unifi-u6-plus",
    "slug": "access-point-ubiquiti-unifi-u6-plus-com-fonte-poe",
    "name": "Access Point Ubiquiti UniFi U6+",
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
    "conditionNotes": "Produtos abertos. Conteúdos aproximados: Abercrombie & Fitch com 15%, Hollister com 100% e Tommy Hilfiger Impact com 20%. Confira os frascos, níveis e sinais de uso nas fotos reais. Este anúncio é um teste e a venda é somente do kit completo.",
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
