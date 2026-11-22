# Dima Iluminação — site

Site institucional estático (HTML + CSS + JS puro, sem dependências nem build), publicado pelo GitHub Pages.

## Arquivos
- `index.html` — página única, com as seções: abertura, Sobre (`#sobre`), Soluções (`#solucoes`), Tela tensionada (`#destaque`), Ambientes (`#ambientes`), Arquitetos e reforma (`#processo`), Marcas (`#marcas`) e Showroom/contato (`#contato`)
- `styles.css` — linguagem visual e responsividade
- `script.js` — links de WhatsApp com mensagem pronta, menu mobile e envio do formulário pelo WhatsApp
- `assets/monograma-preto.svg` — logo usada no site: **sempre apenas o "dm" em preto** (extraída do manual de identidade visual)
- `assets/favicon.svg`, `assets/logo-quadrado.png`, `assets/og-image.jpg` — ícone da aba, logo para o Google e imagem de prévia ao compartilhar
- `assets/marcas/` — logos dos fornecedores, baixadas dos sites oficiais (Usina e Incanto Luce na versão preta)

## Linguagem visual
- Paleta: branco quente `#F7F5F1` (fundo), pedra `#EBE6DE` / `#D9D2C6`, grafite `#1C1D1F` (texto forte, botões e seções escuras)
- Fundo escuro só onde valoriza a luz: a abertura e a seção de tela tensionada
- Laranja da marca `#F1502B` apenas no contorno de foco do teclado
- Fontes: Cormorant Garamond (títulos) e Inter (textos), do Google Fonts
- Cantos retos (2px), sem sombras pesadas e sem animações que atrasem o conteúdo

## Links de WhatsApp
Qualquer link com `data-whatsapp="mensagem"` abre a conversa com essa mensagem pronta. Sem JavaScript, o link leva à seção de contato.
O número fica na constante `WHATSAPP_NUMBER`, no topo de `script.js`.

## Foto da abertura
Hoje a abertura mostra um "estudo de luz" desenhado em CSS (identificado como ilustração).
Para usar uma foto real, salve-a como `assets/hero.jpg`: ela substitui a ilustração automaticamente.
Ideal: foto vertical ou quadrada de um ambiente com a luz acesa, com pelo menos 1600 px no lado maior, comprimida para menos de 300 KB.

## Dados de contato
- WhatsApp (83) 99370-6527 · dimailuminacao@gmail.com · @dimailuminacao
- Av. João Câncio da Silva, 1867 — Manaíra, João Pessoa/PB · CEP 58038-342
- Segunda a sexta, das 9h às 18h

## Ver localmente
Abra `index.html` no navegador.

## Publicar
Cada merge na branch `main` atualiza o site em https://diego235xi.github.io/site-dima-/ em um ou dois minutos.
