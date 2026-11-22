# Dima Iluminação — site

Site institucional estático (HTML + CSS + JS puro, sem dependências).

## Arquivos
- `index.html` — conteúdo das seções (Sobre, Soluções, Ambientes, Como trabalhamos, Contato)
- `styles.css` — visual e responsividade
- `script.js` — menu mobile, animações e envio do formulário pelo WhatsApp
- `assets/logo.svg`, `assets/monograma.svg`, `assets/favicon.svg` — marca extraída do manual de identidade visual

## Identidade visual
- Cores: laranja `#F1502B` (principal), laranja `#F68623` (secundário), pretos `#050606`, `#151617`, `#28292B`
- Fontes: Cormorant Garamond (títulos grandes), Cinzel (fonte da marca, rótulos curtos) e Inter (textos) — todas do Google Fonts

## Foto do topo
Salve a foto como `assets/hero.jpg` (de preferência vertical, ~1200 px de altura). Sem o arquivo, o topo aparece só com texto.

## Dados de contato
- **WhatsApp:** constante `WHATSAPP_NUMBER` no topo de `script.js` e o número exibido em `index.html`
- **E-mail e endereço:** seção `#contato` em `index.html`
- **Marcas:** seção `#marcas` em `index.html`

## Ver localmente
Abra `index.html` no navegador.

## Publicar no GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → escolha a branch e a pasta `/ (root)`.
