import { useEffect, useRef } from "react";
import { Icon } from "../Icons.jsx";
import { PhotoImage } from "./PhotoImage.jsx";

export function PhotoLightbox({
  chapter,
  index,
  setIndex,
  onClose,
  returnFocusRef,
}) {
  const dialogRef = useRef(null);
  const multiple = chapter.images.length > 1;
  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.body.style.overflow;
    const returnTarget = returnFocusRef.current;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      returnTarget?.focus({ preventScroll: true });
    };
  }, [returnFocusRef]);
  function onKeyDown(event) {
    if (multiple && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      setIndex((current) =>
        Math.max(
          0,
          Math.min(
            chapter.images.length - 1,
            current + (event.key === "ArrowRight" ? 1 : -1),
          ),
        ),
      );
    }
    if (event.key !== "Tab") return;
    const items = [
      ...dialogRef.current.querySelectorAll("button:not(:disabled)"),
    ];
    const first = items[0],
      last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  return (
    <dialog
      className="timeline-lightbox"
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lightbox-top">
        <h2 id="lightbox-title">{chapter.title}</h2>
        <button
          type="button"
          className="gallery-icon-button"
          onClick={onClose}
          aria-label="Fechar foto ampliada"
          autoFocus
        >
          <Icon name="close" />
        </button>
      </div>
      <div
        className="lightbox-image-space"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <PhotoImage key={index} chapter={chapter} index={index} />
      </div>
      {multiple && (
        <div className="lightbox-controls">
          <button
            type="button"
            className="gallery-icon-button"
            aria-label="Foto anterior"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <span role="status" aria-live="polite">
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
      )}
    </dialog>
  );
}
