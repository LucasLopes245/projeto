import { useRef, useState } from "react";
import { PhotoImage, photoUrl } from "./PhotoImage.jsx";
import { PhotoLightbox } from "./PhotoLightbox.jsx";

export function PhotoGallery({ chapter }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const expandRef = useRef(null);
  const touchStart = useRef(null);
  const multiple = chapter.images.length > 1;
  function swipe(event) {
    if (!touchStart.current || !multiple) return;
    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
      setIndex((current) =>
        Math.max(
          0,
          Math.min(chapter.images.length - 1, current + (dx < 0 ? 1 : -1)),
        ),
      );
    touchStart.current = null;
  }
  return (
    <section
      className="photo-gallery"
      aria-label={`Fotografias: ${chapter.title}`}
    >
      <div
        className="gallery-frame"
        onTouchStart={(event) => {
          if (event.touches.length === 1)
            touchStart.current = {
              x: event.touches[0].clientX,
              y: event.touches[0].clientY,
            };
        }}
        onTouchEnd={swipe}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        <PhotoImage
          key={index}
          chapter={chapter}
          index={index}
          className="gallery-main-image"
        />
        <button
          type="button"
          className="gallery-expand"
          ref={expandRef}
          aria-label="Ampliar foto"
          onClick={() => setExpanded(true)}
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
          </svg>
          <span>Ampliar</span>
        </button>
      </div>
      {multiple && (
        <>
          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-icon-button"
              aria-label="Foto anterior"
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <span className="gallery-count" role="status" aria-live="polite">
              {index + 1} / {chapter.images.length}
            </span>
            <button
              type="button"
              className="gallery-icon-button"
              aria-label="Próxima foto"
              disabled={index === chapter.images.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div
            className="gallery-thumbnails"
            aria-label="Selecionar fotografia"
          >
            {chapter.images.map((path, photoIndex) => (
              <button
                type="button"
                key={path}
                aria-label={`Ver foto ${photoIndex + 1} de ${chapter.images.length}`}
                aria-pressed={index === photoIndex}
                onClick={() => setIndex(photoIndex)}
              >
                <img
                  src={photoUrl(path)}
                  alt={`${chapter.title} — miniatura ${photoIndex + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </>
      )}
      {expanded && (
        <PhotoLightbox
          chapter={chapter}
          index={index}
          setIndex={setIndex}
          onClose={() => setExpanded(false)}
          returnFocusRef={expandRef}
        />
      )}
    </section>
  );
}
