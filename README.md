# Dima Iluminação — site

Site institucional estático (HTML + CSS + JS puro, sem dependências).

## Arquivos
- `index.html` — conteúdo das seções (Sobre, Soluções, Ambientes, Como trabalhamos, Contato)
- `styles.css` — visual e responsividade
- `script.js` — menu mobile, animações e envio do formulário pelo WhatsApp
- `assets/favicon.svg` — ícone

## Antes de publicar, troque os dados de exemplo
- **WhatsApp:** constante `WHATSAPP_NUMBER` no topo de `script.js` (ex.: `5511987654321`) e o número exibido em `index.html`
- **E-mail, endereço, horário e Instagram:** seção `#contato` em `index.html`

## Ver localmente
Abra `index.html` no navegador.

## Publicar no GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → escolha a branch e a pasta `/ (root)`.
