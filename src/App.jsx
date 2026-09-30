import { useEffect, useRef, useState } from "react";
import { getCountdown } from "./countdown.js";
import { EVENT_EDITORIAL, SURPRISE_URL } from "./config.js";
import { Hero } from "./components/Hero.jsx";
import { Countdown } from "./components/Countdown.jsx";
import { Announcement } from "./components/Announcement.jsx";
import { SurpriseButton } from "./components/SurpriseButton.jsx";
import { AccessModal } from "./components/AccessModal.jsx";
import { Footer } from "./components/Footer.jsx";
import { Botanical, Icon } from "./components/Icons.jsx";
export default function App() {
  const [time, setTime] = useState(() => getCountdown());
  const [modalOpen, setModalOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const surpriseRef = useRef(null);
  useEffect(() => {
    const interval = window.setInterval(() => setTime(getCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    if (time.released) setModalOpen(false);
  }, [time.released]);
  function openSurprise() {
    // Recalcula no clique, inclusive se a aba estava suspensa em segundo plano.
    const current = getCountdown();
    setTime(current);
    if (!current.released) {
      setModalOpen(true);
      return;
    }
    if (SURPRISE_URL) window.location.assign(SURPRISE_URL);
    else
      setNotice(
        "O nosso dia chegou! O endereço da surpresa será disponibilizado aqui em breve.",
      );
  }
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="page-shell">
        <header className="site-header">
          <a href="#" className="brand" aria-label="Lucas e Michelly, início">
            <Icon name="heart" />
            <span>L & M</span>
          </a>
          <span className="header-note">uma data. uma história. nós.</span>
          <a href="#comunicado" className="header-date">
            {EVENT_EDITORIAL}
            <span aria-hidden="true"> ↗</span>
          </a>
        </header>
        <main id="conteudo">
          <Hero />
          <Countdown time={time} />
          <section id="comunicado" className="letter-section">
            <Botanical className="letter-flower" />
            <div className="letter-card">
              <Announcement released={time.released} />
              <SurpriseButton buttonRef={surpriseRef} onClick={openSurprise} />
              <p className="under-button">
                {time.released
                  ? "O próximo capítulo começa agora."
                  : "As melhores coisas merecem um pouquinho de espera."}
              </p>
              {notice && (
                <p className="surprise-notice" role="status">
                  {notice}
                </p>
              )}
            </div>
            <Botanical className="letter-flower right" />
          </section>
        </main>
        <Footer />
      </div>
      {modalOpen && (
        <AccessModal
          onClose={() => setModalOpen(false)}
          returnFocusRef={surpriseRef}
        />
      )}
    </>
  );
}
