# 🚀 COMO COLOCAR O SITE DA FAMÍLIA FAEDO NO AR GRATUITAMENTE
**Guia Passo a Passo (GitHub Pages, Netlify Drop e Cloudflare Pages)**

O novo site que criamos na pasta `G:\Meu Drive\Arquivos Juh` (`index.html`, `style.css`, `app.js`, `documentos_cidadania/` e `imagens_alta_resolucao/`) foi construído de forma **100% independente e estática**.

Isso significa duas coisas maravilhosas:
1. **Funciona sem internet no computador:** Basta dar dois cliques no arquivo `index.html` dentro da pasta `G:\Meu Drive\Arquivos Juh` para abrir e navegar no site completo agora mesmo!
2. **Pode ser hospedado de graça para sempre na internet:** Sem mensalidade, sem anúncios e com link seguro (`https://...`) para enviar no WhatsApp da família inteira!

---

## Opção 1: GitHub Pages (Recomendado — Gratuito para sempre)

O **GitHub Pages** hospeda sites estáticos gratuitamente e mantém o acervo da família salvo na nuvem com controle de versão.

### Passo a Passo pelo navegador (sem precisar instalar nada):
1. Crie uma conta gratuita em **[github.com](https://github.com)** (ou entre na sua conta).
2. No canto superior direito, clique no botão **`+`** e escolha **"New repository"** (Novo repositório).
3. Em **Repository name**, digite por exemplo: `familia-faedo`
4. Deixe marcado como **Public** (Público) e clique no botão verde **"Create repository"**.
5. Na tela seguinte, clique no link **"uploading an existing file"** (ou arraste os arquivos pelo GitHub Desktop):
   - Suba os arquivos da pasta `G:\Meu Drive\Arquivos Juh`:
     - `index.html`
     - `style.css`
     - `app.js`
     - A pasta `documentos_cidadania`
     - A pasta `imagens_alta_resolucao`
   - *(Dica: como há 80 fotos de alta resolução, o jeito mais rápido de subir pastas inteiras de uma só vez é usando o aplicativo gratuito **GitHub Desktop**: basta clicar em "Add Existing Repository", selecionar a pasta `G:\Meu Drive\Arquivos Juh` e clicar em **Publish repository**!)*
6. Depois que os arquivos estiverem no repositório, clique na aba **Settings** (Configurações) no topo do repositório.
7. No menu lateral esquerdo, clique em **Pages**.
8. Em **Build and deployment** → **Branch**, mude de `None` para **`main`** (pasta `/ (root)`) e clique em **Save**.
9. Aguarde 1 minuto e pronto! Seu site estará no ar gratuitamente no endereço:
   `https://SEU-USUARIO.github.io/familia-faedo/`

---

## Opção 2: Netlify Drop (Mais Rápido do Mundo — Arrastar e Soltar em 30 segundos!)

Se você quiser colocar o site no ar em **30 segundos** sem nem precisar criar repositório Git:

1. Acesse **[app.netlify.com/drop](https://app.netlify.com/drop)** e faça login gratuito (pode usar sua conta Google ou GitHub).
2. Abra o Windows Explorer, crie uma cópia da pasta ou arraste a pasta `Arquivos Juh` inteira para dentro da caixa tracejada na tela do Netlify.
3. Em 15 segundos o site já estará online!
4. Clique em **Site configuration** → **Change site name** e mude o nome para `portal-familia-faedo`.
5. O link gratuito ficará: `https://portal-familia-faedo.netlify.app`!

---

## Opção 3: Cloudflare Pages (Gratuito e Ilimitado)

1. Crie uma conta gratuita em **[dash.cloudflare.com](https://dash.cloudflare.com)**.
2. Vá em **Workers & Pages** → **Create** → aba **Pages** → **Upload assets**.
3. Digite o nome do projeto (`familia-faedo`) e arraste a pasta com o `index.html` e as pastas de imagens.
4. O site ficará disponível gratuitamente em `https://familia-faedo.pages.dev`.
