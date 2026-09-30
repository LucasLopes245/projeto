import { Icon } from "./Icons.jsx";
export function SurpriseButton({ buttonRef, onClick }) {
  return (
    <button
      className="primary-button surprise-button"
      ref={buttonRef}
      onClick={onClick}
    >
      <span>Abrir surpresa</span>
      <Icon name="arrow" />
    </button>
  );
}
