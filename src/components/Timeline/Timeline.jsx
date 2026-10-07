import { useEffect, useRef, useState } from "react";
import { timeline } from "../../data/timeline.js";
import { Icon } from "../Icons.jsx";
import { TimelineNavigation } from "./TimelineNavigation.jsx";
import { TimelineChapter } from "./TimelineChapter.jsx";
import "../../styles/timeline.css";

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const contentRef = useRef(null);
  const focusChapter = useRef(false);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Nossa linha do tempo · 2 anos de nós";
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => {
      document.title = previousTitle;
    };
  }, []);
  useEffect(() => {
    if (selectedIndex === null) return;
    if (focusChapter.current)
      contentRef.current.querySelector("h2")?.focus({ preventScroll: true });
    const bounds = contentRef.current.getBoundingClientRect();
    if (bounds.top < 0 || bounds.top > window.innerHeight * 0.6)
      contentRef.current.scrollIntoView({
        block: "start",
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }, [selectedIndex]);
  function selectChapter(index, shouldFocus = false) {
    focusChapter.current = shouldFocus;
    setSelectedIndex(index);
  }
  return (
    <div className="timeline-page">
      <a
        className="skip-link"
        href="#timeline-content"
        onClick={(event) => {
          event.preventDefault();
          contentRef.current.focus();
        }}
      >
        Pular para o capítulo
      </a>
      <header className="timeline-site-header">
        <a
          className="brand"
          href="#/"
          aria-label="Lucas e Michelly, voltar ao início"
        >
          <Icon name="heart" />
          <span>L & M</span>
        </a>
        <span className="timeline-header-label">NOSSA HISTÓRIA</span>
        <a className="timeline-back" href="#/">
          Voltar ao início <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>
        <header className="timeline-intro">
          <p className="chapter-counter">2 ANOS DE NÓS</p>
          <h1>
            Nossa linha <em>do tempo</em>
          </h1>
          <p className="timeline-subtitle">
            Cada capítulo guarda um pedacinho do que vivemos juntos.
          </p>
          <p className="timeline-instruction">
            Clique em um momento para reviver essa parte da nossa história.
          </p>
        </header>
        <TimelineNavigation
          chapters={timeline}
          selectedIndex={selectedIndex}
          onSelect={selectChapter}
        />
        <div
          id="timeline-content"
          ref={contentRef}
          className="timeline-content"
          tabIndex={-1}
        >
          {selectedIndex === null ? (
            <section className="timeline-empty">
              <div className="timeline-empty-mark">
                <Icon name="heart" />
              </div>
              <h2>Escolha um capítulo</h2>
              <p>Clique em um marco da linha do tempo para começar.</p>
              <span className="timeline-empty-line" aria-hidden="true" />
            </section>
          ) : (
            <TimelineChapter
              key={timeline[selectedIndex].id}
              chapter={timeline[selectedIndex]}
              index={selectedIndex}
              count={timeline.length}
              onSelect={selectChapter}
            />
          )}
        </div>
      </main>
      <footer className="timeline-footer">
        <span>LUCAS & MICHELLY</span>
        <Icon name="heart" />
        <span>2 ANOS DE NÓS</span>
      </footer>
    </div>
  );
}
