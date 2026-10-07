// Ordem editorial oficial. Datas e textos serão preenchidos posteriormente.
// Os caminhos são relativos à pasta public; 1.jpg é sempre a primeira imagem.
const chapter = (id, title, shortTitle, folder, count, featured = false) => ({
  id,
  title,
  shortTitle,
  featured,
  date: "",
  description: "",
  quote: "",
  images: Array.from(
    { length: count },
    (_, index) => `timeline/${folder}/${index + 1}.jpg`,
  ),
});

export const timeline = [
  chapter("comeco", "O começo de tudo", "O começo", "01-comeco", 3),
  chapter("pedido", "Dia do pedido", "O pedido", "02-pedido", 1, true),
  chapter(
    "apresentacao",
    "Primeira Apresentação Sua Que Eu Vi",
    "Apresentação",
    "03-apresentacao",
    2,
  ),
  chapter(
    "natal",
    "Nosso Primeiro Natal Juntos",
    "Primeiro Natal",
    "04-natal",
    1,
  ),
  chapter(
    "ano-novo",
    "Nosso Primeiro Ano Novo Juntos",
    "Primeiro Ano Novo",
    "05-ano-novo",
    2,
  ),
  chapter("formatura", "Sua Formatura", "Formatura", "06-formatura", 4, true),
  chapter(
    "viagem",
    "Nossa Primeira Viagem Juntos",
    "Primeira viagem",
    "07-viagem",
    3,
    true,
  ),
  chapter("copa", "Nossa Primeira Copa", "Primeira Copa", "08-copa", 2),
  chapter(
    "aniversario",
    "Seu aniversário surpresa",
    "Aniversário surpresa",
    "09-aniversario",
    1,
    true,
  ),
];
