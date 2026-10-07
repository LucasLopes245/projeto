# Nossa linha do tempo

A página fica em `#/timeline`: https://lucaslopes245.github.io/projeto/#/timeline . O refresh funciona no GitHub Pages porque o caminho servido continua sendo `/projeto/`.

A landing mantém o visual e o modal antecipado. Seu botão abre a timeline após a data oficial. A URL direta fica acessível para revisão desde já; a data da landing não protege as fotografias públicas. Nenhum popup “Antes de começar” existia e nenhum novo foi inventado.

## Arquivos

- `src/Router.jsx`: seleciona a landing ou a timeline usando o hash, sem biblioteca adicional.
- `src/data/timeline.js`: única fonte de ordem, nomes, destaques, fotos e campos futuros.
- `src/components/Timeline/`: página, navegação, marcadores, capítulo, galeria, imagem e lightbox.
- `src/styles/timeline.css`: estilos restritos à timeline, usando cores/fontes existentes.
- `public/timeline/`: 19 fotografias originais, copiadas sem alteração do ZIP em nove pastas.
- `tests/timeline.test.js`: ordem, destaques, campos vazios e integridade dos caminhos das fotos.

Arquivos anteriores alterados: `src/main.jsx` (entrada do Router), `src/config.js` (endereço da surpresa). Nenhum componente da landing foi modificado.

## Cadastrar conteúdo

Em `src/data/timeline.js`, `chapter(id, title, shortTitle, folder, count, featured)` cadastra cada etapa. A ordem do array é a ordem exibida. O parâmetro `count` gera as fotos `1.jpg`, `2.jpg` etc., sempre numericamente; `1.jpg` abre primeiro ao mudar de etapa.

Para adicionar uma foto, coloque o JPG seguinte na pasta da etapa e aumente `count`. Arquivos com outra extensão ou nomes não sequenciais podem ser cadastrados usando um array explícito em `images`, mantendo `1.jpg` em primeiro lugar.

Para incluir datas e textos, substitua uma entrada por um objeto que expande `chapter` e preenche somente os campos desejados:

```js
{
  ...chapter('pedido', 'Dia do pedido', 'O pedido', '02-pedido', 1, true),
  date: '',
  description: '',
  quote: '',
}
```

Preencha `date` com a data que deseja exibir, `description` com o texto e `quote` com a frase. Campos vazios não aparecem; a apresentação da data é textual, sem conversão de fuso ou datas inventadas.

Para criar uma nova etapa, crie uma pasta dentro de `public/timeline/`, inclua `1.jpg` e adicione uma entrada com `id` exclusivo no ponto desejado do array. A interface ajusta os totais e a navegação; atualize os testes que documentam as nove etapas oficiais atuais.

## Conferir e publicar

`npm run dev` inicia a versão local. `npm test` executa os testes; `npm run build -- --base /projeto/` gera a versão do GitHub Pages. O workflow existente publica os pushes para `main`.

Sem autoplay. Galerias com uma foto não têm miniaturas, contador nem setas. As demais aceitam setas, miniaturas e gesto horizontal na foto; no lightbox, também as teclas esquerda/direita. Escape, X ou clique no fundo fecham e restauram o foco. A timeline aceita Tab, Enter/Espaço, setas e Home/End. As fotos são exibidas com `object-fit: contain`, sem recortes ou distorção, e os movimentos respeitam `prefers-reduced-motion`.
