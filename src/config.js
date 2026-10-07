// Brasília (America/Sao_Paulo): 19/10/2026 00:00 = 19/10/2026 03:00 UTC.
// Ao mudar para outra época/fuso, confira o deslocamento UTC da data escolhida.
export const EVENT_DATE = "2026-10-19T00:00:00-03:00";
export const EVENT_TIMEZONE = "America/Sao_Paulo";
export const DINNER_OPTIONS = ["17/10/2026", "24/10/2026"];
// Rota hash compatível com GitHub Pages; o botão da landing respeita EVENT_DATE.
// A rota direta permite revisar a timeline antes da data; não é um controle de acesso.
export const SURPRISE_URL = "#/timeline";
export const PHOTO_URL = "/images/foto-principal.png";
export const EVENT_LABEL = new Intl.DateTimeFormat("pt-BR", {
  timeZone: EVENT_TIMEZONE,
}).format(new Date(EVENT_DATE));
export const EVENT_EDITORIAL = EVENT_LABEL.replaceAll("/", ".");
