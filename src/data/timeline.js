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
      "Foi aqui que eu percebi que te amava de verdade e que queria te pedir em namoro. Eu nunca tinha feito isso antes e não fazia a menor ideia de como começar. Hoje eu acho graça desse meu nervosismo, mas também guardo muito carinho por ele: eu queria que fosse especial pra você. Mesmo sem saber direito como fazer o pedido, de uma coisa eu já tinha certeza: queria estar com você e descobrir, aos poucos, o que a gente poderia viver juntos.",
  },
  {
    ...chapter("pedido", "Dia do pedido", "O pedido", "02-pedido", 1, true),
    description:
      "O dia em que eu me tremi todinho pra te levar pra comer sushi e depois deixar uma caixa em cima da cama. Só eu sei o nervoso que passei pra executar esse plano aparentemente simples kkk. Eu queria muito que você gostasse e que aquele momento fosse uma lembrança boa pra nós dois. No fim, deu tudo certo. Olhando pra trás e pensando em tudo que a gente viveu desde então, te pedir em namoro foi uma das melhores decisões que eu já tomei.",
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
      "Eu lembro desse dia com muito carinho porque foi quando você começou a se aproximar ainda mais da minha família. Você conheceu minhas tias malucas, sobreviveu a todas elas e ainda quis ficar por perto — o que eu considero uma bela prova de amor. Brincadeiras à parte, foi muito bom ter você ali e dividir esse Natal com você. Ver você fazendo parte desses momentos em família me deixou muito feliz. Eu quero que você se sinta querida e à vontade entre as pessoas que são importantes pra mim.",
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
      "Esse dia marcou muito pra mim porque foi quando eu também comecei a me aproximar mais da sua família. Seu pai tentando me embebedar foi uma maneira bem particular de ajudar nessa aproximação. Mas o que eu guardo com mais carinho é ter passado nosso primeiro Ano-Novo ao seu lado e participado um pouquinho mais da sua vida. Gostei muito de começar o ano com você por perto. E você estava tão linda naquele dia que, mesmo agora, olhando as fotos, eu ainda fico meio sem saber o que dizer.",
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
      "Esse foi, sem dúvida, um dos dias mais importantes de todos. Depois de tudo que você viveu durante a faculdade, poder estar ao seu lado no encerramento dessa fase e no começo da sua carreira significou muito pra mim. Eu tenho muito orgulho de você e da sua dedicação, e foi muito especial te ver feliz, comemorando uma conquista tão sua. Quero estar por perto pra celebrar muitas outras e também pra te apoiar nos dias em que as coisas forem mais difíceis. E preciso manter registrado: você tava linda demais. NOSSA SENHORA.",
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
      "Uma viagem meio às pressas pra gente ir ver o show de um DJ que você nem conhecia direito. Ainda acho engraçado esse ter sido o motivo da nossa primeira viagem, mas fico muito feliz por você ter ido comigo. Foi muito bom sair um pouco da rotina, ter sua companhia e viver algo diferente juntos. Quando eu penso nessa viagem, é esse tempo com você que eu mais gosto de lembrar. Espero que venham muitas outras e já deixo aqui meu pedido: a próxima só nós dois, pra aproveitar bastante a companhia um do outro.",
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
