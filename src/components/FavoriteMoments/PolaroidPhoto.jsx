import { photoUrl } from "../Timeline/PhotoImage.jsx";

export function PolaroidPhoto({ photo, index, total, onOpen }) {
  return (
    <li
      className={`favorite-item favorite-size-${photo.size}${photo.featured ? " favorite-featured" : ""}`}
      style={{
        "--photo-rotation": `${photo.rotation}deg`,
        "--mobile-rotation": `${Math.sign(photo.rotation)}deg`,
        "--photo-delay": `${Math.min(index, 5) * 45}ms`,
      }}
    >
      <button
        type="button"
        className="polaroid-photo"
        aria-label={`Ampliar momento favorito ${index + 1} de ${total}`}
        onClick={(event) => onOpen(index, event.currentTarget)}
      >
        <img
          src={photoUrl(photo.image)}
          alt={`Momento favorito ${index + 1} de ${total}`}
          width={photo.width}
          height={photo.height}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          draggable="false"
        />
      </button>
    </li>
  );
}
