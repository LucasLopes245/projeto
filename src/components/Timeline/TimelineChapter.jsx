import { PhotoGallery } from "./PhotoGallery.jsx";

export function TimelineChapter({ chapter, index, count, onSelect }) {
  return (
    <article className="timeline-chapter" aria-labelledby="chapter-title">
      <header className="chapter-heading">
        <p className="chapter-counter">
          CAPÍTULO {index + 1} DE {count}
        </p>
        <h2 id="chapter-title" tabIndex={-1}>
          {chapter.title}
        </h2>
        {chapter.date && <p className="chapter-date">{chapter.date}</p>}
      </header>
      <PhotoGallery chapter={chapter} />
      {(chapter.description || chapter.quote) && (
        <div className="chapter-story">
          {chapter.description && <p>{chapter.description}</p>}
          {chapter.quote && <blockquote>{chapter.quote}</blockquote>}
        </div>
      )}
      <nav className="chapter-pagination" aria-label="Navegar entre etapas">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => onSelect(index - 1, true)}
        >
          <span aria-hidden="true">←</span> Etapa anterior
        </button>
        <button
          type="button"
          disabled={index === count - 1}
          onClick={() => onSelect(index + 1, true)}
        >
          Próxima etapa <span aria-hidden="true">→</span>
        </button>
      </nav>
    </article>
  );
}
