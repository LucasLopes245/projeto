import { useState } from "react";
import { PHOTO_URL, EVENT_EDITORIAL } from "../config.js";
import { Botanical, Icon } from "./Icons.jsx";
export function Hero() {
  // O glob detecta a foto durante o desenvolvimento/build e evita uma requisição 404.
  const photos = import.meta.glob("/public/images/*", {
    query: "?url",
    import: "default",
  });
  const [missingPhoto, setMissingPhoto] = useState(
    !Object.hasOwn(photos, `/public${PHOTO_URL}`),
  );
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">NOSSO PRÓXIMO CAPÍTULO</span>
        <h1 id="hero-title">
          2 anos
          <br />
          <em>de nós</em>
          <Icon name="heart" />
        </h1>
        <div className="small-rule" />
        <p className="hero-description">
          Contagem regressiva para o evento mais aguardado do seu ano.
        </p>
        <a className="text-link" href="#contagem">
          Já pode contar os dias <span aria-hidden="true">↓</span>
        </a>
        <Botanical />
      </div>
      <div className={`hero-photo ${missingPhoto ? "photo-placeholder" : ""}`}>
        {!missingPhoto && (
          <img
            src={`${import.meta.env.BASE_URL}${PHOTO_URL.replace(/^\//, "")}`}
            alt="Lucas e Michelly juntos em um momento espontâneo"
            onError={() => setMissingPhoto(true)}
          />
        )}
        {missingPhoto && (
          <div className="placeholder-art">
            <Botanical />
            <span>um lugar para</span>
            <em>
              a nossa
              <br />
              melhor foto.
            </em>
            <span className="placeholder-caption">LUCAS & MICHELLY</span>
          </div>
        )}
        <div className="photo-caption">
          <span>EU, VOCÊ E TUDO O QUE VEM.</span>
          <span>{EVENT_EDITORIAL}</span>
        </div>
      </div>
    </section>
  );
}
