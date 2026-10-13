import { useEffect, useRef, useState } from "react";
import { favoriteMoments, favoritesAlbum } from "../../data/favorites.js";
import { Icon } from "../Icons.jsx";
import { PhotoLightbox } from "../Timeline/PhotoLightbox.jsx";
import { PolaroidPhoto } from "./PolaroidPhoto.jsx";
import "../../styles/timeline.css";
import "../../styles/favorites.css";

export default function FavoriteMoments() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const returnFocusRef = useRef(null);
  const muralRef = useRef(null);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Momentos favoritos · 2 anos de nós";
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => {
      document.title = previousTitle;
    };
  }, []);
  function openPhoto(photoIndex, target) {
    returnFocusRef.current = target;
    setIndex(photoIndex);
    setIsOpen(true);
  }
  return (
    <div className="favorites-page">
      <a
        className="skip-link"
        href="#favorites-mural"
        onClick={(event) => {
          event.preventDefault();
          muralRef.current.focus();
        }}
      >
        Pular para as fotografias
      </a>
      <header className="favorites-site-header">
        <a
          className="brand"
          href="#/"
          aria-label="Lucas e Michelly, voltar ao início"
        >
          <Icon name="heart" />
          <span>L & M</span>
        </a>
        <a className="favorites-back" href="#/timeline">
          Voltar à timeline <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>
        <header className="favorites-intro">
          <h1>
            Momentos <em>favoritos</em>
          </h1>
          <p>Nem tudo precisa de uma data para ser importante.</p>
        </header>
        <ol
          id="favorites-mural"
          className="favorites-mural"
          ref={muralRef}
          tabIndex={-1}
          aria-label="Fotografias dos momentos favoritos"
        >
          {favoriteMoments.map((photo, photoIndex) => (
            <PolaroidPhoto
              key={photo.id}
              photo={photo}
              index={photoIndex}
              total={favoriteMoments.length}
              onOpen={openPhoto}
            />
          ))}
        </ol>
      </main>
      <footer className="favorites-footer">
        <a href="#/timeline">Voltar à timeline</a>
        <span>LUCAS & MICHELLY</span>
      </footer>
      {isOpen && (
        <PhotoLightbox
          chapter={favoritesAlbum}
          index={index}
          setIndex={setIndex}
          onClose={() => setIsOpen(false)}
          returnFocusRef={returnFocusRef}
        />
      )}
    </div>
  );
}
