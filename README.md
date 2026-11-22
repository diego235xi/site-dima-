# Dima Iluminação — site

Site institucional estático (HTML + CSS + JS puro, sem dependências).

## Arquivos
- `index.html` — conteúdo das seções (Sobre, Soluções, Ambientes, Como trabalhamos, Contato)
- `styles.css` — visual e responsividade
- `script.js` — menu mobile, animações e envio do formulário pelo WhatsApp
- `assets/monograma-preto.svg` — logo usada no site: **sempre apenas o "dm" em preto** (extraída do manual de identidade visual)
- `assets/favicon.svg`, `assets/logo-quadrado.png`, `assets/og-image.jpg` — ícone da aba, logo para o Google e imagem de prévia ao compartilhar

## Identidade visual
- Tema claro: fundo `#F6F4F0`, textos e superfícies (botões, cartões, formulário) em preto `#050606`
- Laranjas da marca: `#F1502B` (principal) e `#F68623` (secundário); `#C63D1A` para textos pequenos no fundo claro
- Fontes: Cormorant Garamond (títulos grandes), Cinzel (fonte da marca, rótulos curtos) e Inter (textos) — todas do Google Fonts

## Foto do topo
Salve a foto como `assets/hero.jpg` (de preferência vertical, ~1200 px de altura). Sem o arquivo, o topo aparece só com texto.

## Dados de contato
- **WhatsApp:** constante `WHATSAPP_NUMBER` no topo de `script.js` e o número exibido em `index.html`
- **E-mail e endereço:** seção `#contato` em `index.html`
- **Marcas:** seção `#marcas` em `index.html`; logos em `assets/marcas/`, baixadas dos sites oficiais e exibidas nas cores originais (as feitas para fundo escuro ficam em quadro preto)

## Ver localmente
Abra `index.html` no navegador.

## Publicar no GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → escolha a branch e a pasta `/ (root)`.
