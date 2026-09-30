import { Icon } from "./Icons.jsx";
export function Announcement({ released }) {
  return (
    <div className="announcement">
      <div className="ornament">
        <span />
        <Icon name="mail" />
        <span />
      </div>
      <span className="eyebrow">UMA CORRESPONDÊNCIA ESPECIAL</span>
      <h2>
        Olá, Dra. Michelly
        <br />
        Almeida de Carvalho.
      </h2>
      <p>
        {released
          ? "O evento mais aguardado do seu ano chegou. Feliz 2 anos de nós!"
          : "Gostaríamos de comunicar que o evento mais aguardado do seu ano está cada vez mais próximo."}
      </p>
    </div>
  );
}
