# Merge Infinity 2048 (PWA)

Plataforma mobile-first de jogos 2048 (sem backend), construída com **Vue 3 + Vite + Quasar + Pinia + PWA**.

## Deploy gratuito recomendado: Netlify

Escolhi **Netlify** porque é o caminho gratuito mais simples para este projeto:
- integração automática com GitHub;
- build de app Vite sem configuração complexa;
- SSL + CDN incluídos;
- plano grátis suficiente para MVP.

### 1) Publicar em 5 minutos
1. Suba este repositório no GitHub.
2. Acesse https://app.netlify.com/ e clique em **Add new site > Import an existing project**.
3. Conecte o GitHub e selecione este repo.
4. Use estas configurações de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **Deploy site**.

### 2) SPA fallback
Este projeto inclui fallback para SPA (`/* -> /index.html`) via `netlify.toml` e `public/_redirects`, evitando erro 404 ao recarregar rotas internas.

### 3) PWA
Após deploy:
- abra o site no celular;
- menu do navegador > **Adicionar à tela inicial**.

## Desenvolvimento local
```bash
npm install
npm run dev
```

## Build local
```bash
npm run build
npm run preview
```
