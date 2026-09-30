export function Countdown({ time }) {
  const values = [
    [time.days, "DIAS"],
    [time.hours, "HORAS"],
    [time.minutes, "MINUTOS"],
    [time.seconds, "SEGUNDOS"],
  ];
  return (
    <section
      id="contagem"
      className="countdown-section"
      aria-label="Contagem regressiva para nosso aniversário"
    >
      <div className="countdown-heading">
        <span className="eyebrow">
          {time.released
            ? "O NOSSO DIA CHEGOU"
            : "FALTA POUCO PARA MAIS UM NÓS"}
        </span>
        <span className="fine-print">Horário de Brasília</span>
      </div>
      <div className="countdown" role="timer" aria-live="off">
        {values.map(([value, label]) => (
          <div className="countdown-unit" key={label}>
            <span className="countdown-value">
              {String(value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
      <p className="sr-only" role="status">
        {time.released
          ? "Chegou o nosso aniversário de 2 anos. A surpresa está liberada."
          : ""}
      </p>
    </section>
  );
}
