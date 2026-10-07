export function TimelineMarker({ chapter, index, selected, onSelect }) {
  return (
    <li className={`timeline-stop${chapter.featured ? " is-featured" : ""}`}>
      <button
        type="button"
        className={`timeline-marker${selected ? " is-selected" : ""}`}
        aria-label={`Capítulo ${index + 1}: ${chapter.title}`}
        aria-pressed={selected}
        aria-controls="timeline-content"
        onClick={onSelect}
      >
        <span className="timeline-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="timeline-dot" aria-hidden="true" />
        <span className="timeline-label">{chapter.shortTitle}</span>
      </button>
    </li>
  );
}
