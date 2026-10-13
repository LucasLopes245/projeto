# Momentos favoritos

Página: `#/favoritos`. Ao selecionar o último capítulo da timeline, o botão **Continuar** abre esta página. As rotas hash continuam compatíveis com o refresh no GitHub Pages.

## Arquivos

- `src/components/FavoriteMoments/FavoriteMoments.jsx`: página e estado da ampliação.
- `src/components/FavoriteMoments/PolaroidPhoto.jsx`: botão acessível com moldura da foto.
- `src/data/favorites.js`: lista e composição do mural.
- `src/styles/favorites.css`: mural, molduras, responsividade e link de continuação.
- `public/favorites/`: 19 arquivos copiados do ZIP, com seus nomes e bytes originais preservados.
- `tests/favorites.test.js`: verificação dos caminhos, ordem, destaques e dados visuais.

Alterados: `src/Router.jsx`, `Timeline.jsx` (somente link de continuação), `PhotoLightbox.jsx` e `PhotoImage.jsx` (opções de título/alt para reutilizar a ampliação). A timeline mantém o título e os textos alternativos anteriores no seu lightbox. A landing, as fotos e os dados da timeline não foram alterados.

## Editar a composição

A lista `favoriteMoments` em `src/data/favorites.js` controla tudo:

- **Ordem:** mova os objetos dentro do array. As colunas são preenchidas de cima para baixo, da esquerda para a direita; o teclado e o lightbox seguem essa mesma ordem.
- **Destaque:** defina `featured: true`. Há cinco destaques iniciais, distribuídos pelo array.
- **Tamanho:** `size` aceita `small`, `medium` e `large`. Para deixar uma foto pequena, use também `featured: false`, pois o destaque prevalece. No mobile todas aproveitam a largura de sua coluna, preservando as diferentes proporções.
- **Inclinação:** `rotation` aceita valores de -2 a 2 graus; no mobile a inclinação fica limitada a -1, 0 ou 1 grau.
- **Adicionar:** copie o arquivo original para `public/favorites/` e acrescente um objeto com `id` único, `image: "favorites/nome-do-arquivo.jpg"`, dimensões naturais `width`/`height`, `featured`, `size` e `rotation`.
- **Remover:** retire o objeto da lista. Não é necessário apagar o arquivo original.

O total e os textos alternativos são atualizados automaticamente. Não são exibidos nomes de arquivos, datas ou legendas. Ao mudar a quantidade ou os destaques, ajuste também os números documentados no teste.

O lightbox existente é compartilhado: setas, teclado, Escape, X, clique no fundo e retorno do foco. Os botões são a navegação do lightbox no celular. Não há dependências adicionais nem alterações nas imagens. As dimensões reservam o espaço antes do carregamento e as fotos após as primeiras usam carregamento tardio.

Validação: `npm test` e `npm run build -- --base /projeto/`. A publicação continua pelo workflow existente no GitHub Pages.
