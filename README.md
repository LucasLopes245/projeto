# 2 anos de nós

Landing page local em React + Vite, em português, com contador real e modal acessível.

## Publicação

Repositório: https://github.com/LucasLopes245/projeto

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages após cada push em `main`, usando o caminho `/projeto/`. Ele executa `npm ci`, os testes e o build. As permissões de publicação ficam limitadas ao job de deploy; não são necessários tokens salvos no código.

Para reproduzir o build do Pages: `npm run build -- --base /projeto/`. Para hospedagem na raiz, incluindo Vercel, use `npm run build`.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Abra o endereço informado pelo Vite. Produção: `npm run build`; conferir a versão compilada: `npm run preview`. Testes da data e contagem: `npm test`.

## Personalizar

- **Fotografia:** a foto enviada já está em `public/images/foto-principal.png`. Substitua esse arquivo ou altere `PHOTO_URL` em `src/config.js` para outro nome/formato dentro de `public/images/`. Se o arquivo não existir, aparece uma composição botânica provisória. Ajuste `object-position` de `.hero-photo > img` nos CSS para o enquadramento. Faça um novo build após trocar a imagem.
- **Data oficial:** `EVENT_DATE` em `src/config.js`. Está configurada para 19/10/2026 às 00:00 de Brasília, com deslocamento explícito `-03:00`; não depende do fuso do dispositivo. Rótulos e contador usam a mesma configuração.
- **Jantar:** `DINNER_OPTIONS` no mesmo arquivo. Essas opções não alteram a liberação.
- **Endereço da surpresa:** `SURPRISE_URL` no mesmo arquivo. Está vazio. Após a data, o clique exibe apenas uma mensagem de disponibilidade futura. Ao preencher com uma URL ou rota existente, o botão passa a navegar para ela após o horário oficial.

## Estrutura

`src/components/` contém Hero, Countdown, Announcement, SurpriseButton, AccessModal, Footer e ícones SVG. `src/App.jsx` reúne a página e os estados; `src/countdown.js` calcula a contagem; `src/styles/` contém estilos gerais e responsivos; `tests/` verifica a data e seus limites.

O diálogo nativo mantém foco dentro do modal, impede interação com o fundo, fecha por Escape/X/botão/clique externo, bloqueia rolagem e devolve o foco ao botão. O contador não faz anúncios a cada segundo para leitores de tela. As animações respeitam movimento reduzido. Fontes Google possuem fallback local.

A liberação no frontend é uma interação visual baseada no relógio do dispositivo. Caso a surpresa precise de sigilo real, sua futura página deverá validar a data também no servidor.

Não há ESLint configurado. Use o build e os testes disponíveis para verificar o projeto.
