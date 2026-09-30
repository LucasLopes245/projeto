import { useEffect, useRef } from "react";
import { DINNER_OPTIONS, EVENT_LABEL } from "../config.js";
import { Botanical, Icon } from "./Icons.jsx";
export function AccessModal({ onClose, returnFocusRef }) {
  const dialogRef = useRef(null);
  function keepFocusInside(event) {
    if (event.key !== "Tab") return;
    const buttons = dialogRef.current.querySelectorAll(
      "button:not([disabled])",
    );
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  useEffect(() => {
    const dialog = dialogRef.current;
    const returnTarget = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      returnTarget?.focus();
    };
  }, [returnFocusRef]);
  return (
    <dialog
      ref={dialogRef}
      className="access-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={keepFocusInside}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const box = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose();
        }
      }}
    >
      <div className="modal-content">
        <Botanical className="modal-flower" />
        <button
          className="close-button"
          aria-label="Fechar acesso restrito"
          onClick={onClose}
          autoFocus
        >
          <Icon name="close" />
        </button>
        <div className="ornament lock-ornament">
          <span />
          <div className="icon-circle">
            <Icon name="lock" />
          </div>
          <span />
        </div>
        <span className="eyebrow">CALMA, CURIOSA.</span>
        <h2 id="modal-title">ACESSO RESTRITO</h2>
        <div className="modal-details">
          <p>
            <strong>Usuária identificada:</strong>
            <br />
            Dra. Michelly Almeida de Carvalho
          </p>
          <p>
            <strong>Motivo:</strong> tentativa de acesso antecipado à surpresa
            de 2 anos.
          </p>
          <p>
            <strong>Acesso autorizado somente em:</strong>
            <br />
            <span className="release-date">{EVENT_LABEL}</span>
          </p>
          <p className="attempts">
            Tentativas adicionais serão devidamente ignoradas pelo
            administrador.
          </p>
        </div>
        <div className="dinner-note">
          <Icon name="info" />
          <p>
            <strong>Observação:</strong> favor informar ao administrador se o
            jantar será no dia {DINNER_OPTIONS[0]} ou {DINNER_OPTIONS[1]}.
          </p>
        </div>
        <div className="administrator">
          <div className="ornament">
            <span />
            <Icon name="heart" />
            <span />
          </div>
          <p>
            <em>Administrador: Lucas Vieira Lopes</em>
          </p>
          <span>Lindo • Sensual • Gostoso • Esbelto • Cheiroso</span>
        </div>
        <button className="primary-button modal-confirm" onClick={onClose}>
          Entendido, administrador 🙄
          <Icon name="arrow" />
        </button>
      </div>
    </dialog>
  );
}
