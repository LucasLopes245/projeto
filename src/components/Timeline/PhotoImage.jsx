import { useState } from "react";

export function photoUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
export function PhotoImage({ chapter, index, className = "", onClick }) {
  const [failed, setFailed] = useState(false);
  const alt = `${chapter.title} — foto ${index + 1} de ${chapter.images.length}`;
  return failed ? (
    <div className="timeline-photo-error" role="status">
      Não foi possível carregar esta foto.
    </div>
  ) : (
    <img
      className={className}
      src={photoUrl(chapter.images[index])}
      alt={alt}
      onError={() => setFailed(true)}
      onClick={onClick}
      draggable="false"
    />
  );
}
