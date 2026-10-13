// Ordem editorial oficial. Datas e citações permanecem disponíveis para preenchimento posterior.
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
  {
    ...chapter("comeco", "O começo de tudo", "O começo", "01-comeco", 3),
    description:
      "Foi aqui que eu percebi que te amava de verdade e que queria te pedir em namoro. O único problema é que eu nunca tinha feito isso antes e não fazia a menor ideia de como começar KKKKK. Mesmo sem saber exatamente o que fazer, eu já sabia que queria tentar tudo isso com você.",
  },
  {
    ...chapter("pedido", "Dia do pedido", "O pedido", "02-pedido", 1, true),
    description:
      "O dia em que eu me tremi todinho pra te levar pra comer sushi e depois deixar uma caixa em cima da cama KKKKKKK. Eu tava nervoso pra caramba, mas no fim deu tudo certo. E, olhando pra trás, foi facilmente uma das melhores decisões que eu já tomei.",
  },
  {
    ...chapter(
      "apresentacao",
      "Primeira Apresentação Sua Que Eu Vi",
      "Apresentação",
      "03-apresentacao",
      2,
    ),
    description:
      "Esse momento é muito importante pra mim porque foi uma das primeiras vezes que eu pude te ver falando sobre algo que você realmente gosta. Foi muito bom estar ali, te ouvindo, vendo você explicar tudo e conhecendo um pouco mais desse seu lado. Acho que foi uma das primeiras vezes em que pensei o quanto eu tinha orgulho de você.",
  },
  {
    ...chapter(
      "natal",
      "Nosso Primeiro Natal Juntos",
      "Primeiro Natal",
      "04-natal",
      1,
    ),
    description:
      "Eu lembro desse dia com muito carinho porque foi quando você começou a se aproximar ainda mais da minha família. Você conheceu minhas tias malucas, sobreviveu a todas elas e, de alguma forma, continuou querendo fazer parte disso tudo KKKKK. Foi muito bom ver você entrando cada vez mais na minha vida.",
  },
  {
    ...chapter(
      "ano-novo",
      "Nosso Primeiro Ano Novo Juntos",
      "Primeiro Ano Novo",
      "05-ano-novo",
      2,
    ),
    description:
      "Esse dia marcou muito pra mim porque foi quando eu também comecei a me aproximar mais da sua família. Seu pai tentando me embebedar ajudou bastante nesse processo, inclusive KKKKK. Além disso, foi nosso primeiro Ano-Novo juntos e você estava bizarramente linda nesse dia. Sério, sem condições.",
  },
  {
    ...chapter(
      "formatura",
      "Sua Formatura",
      "Formatura",
      "06-formatura",
      4,
      true,
    ),
    description:
      "Esse foi, sem dúvida, um dos dias mais importantes de todos. Foi o encerramento de uma fase muito marcante da sua vida e praticamente o começo da sua carreira, depois de tudo que você viveu durante a faculdade. Ver você tão feliz naquele dia foi muito especial pra mim. E, além de tudo isso: obrigado, Deus, porque nesse dia você tava... NOSSA SENHORA.",
  },
  {
    ...chapter(
      "viagem",
      "Nossa Primeira Viagem Juntos",
      "Primeira viagem",
      "07-viagem",
      3,
      true,
    ),
    description:
      "Uma viagem meio às pressas pra gente ir ver o show de um DJ que você nem conhecia direito KKKKK. Mesmo assim, foi incrível. Foi muito bom viajar com você, viver algo diferente juntos e guardar mais uma história nossa. Espero que venham muitas outras e, só pra deixar registrado oficialmente: a próxima tem que ser só nós dois.",
  },
  {
    ...chapter("copa", "Nossa Primeira Copa", "Primeira Copa", "08-copa", 2),
    description:
      "Esse também foi um momento muito divertido pra mim. Aos poucos eu fui vendo você começar a torcer pro Brasil de verdade, se envolver nos jogos e talvez — TALVEZ — começar a gostar um pouquinho de futebol. Nunca achei que veria esse dia. E, como registro histórico obrigatório: pau no cu do Bellingham.",
  },
  {
    ...chapter(
      "aniversario",
      "Seu aniversário surpresa",
      "Aniversário surpresa",
      "09-aniversario",
      1,
      true,
    ),
    description:
      "Mesmo você já sabendo de praticamente tudo, esse dia entra fácil no meu top 3. Com tudo que vem acontecendo com você ultimamente, foi muito reconfortante poder te ver sendo lembrada do quanto você é especial e do quanto é amada pelas pessoas ao seu redor. Ver você sorrindo daquele jeito fez tudo valer a pena. Seu sorriso naquele dia ficou muito marcado em mim, e acho que foi um daqueles momentos em que eu fiquei feliz simplesmente por ver você feliz.",
  },
];
