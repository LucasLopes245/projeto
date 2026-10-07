import { useEffect, useRef } from "react";
import { TimelineMarker } from "./TimelineMarker.jsx";

export function TimelineNavigation({ chapters, selectedIndex, onSelect }) {
  const listRef = useRef(null);
  useEffect(() => {
    if (selectedIndex === null) return;
    const list = listRef.current;
    const marker = list.children[selectedIndex];
    const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth";
    list.scrollTo({
      left:
        marker.offsetLeft -
        list.offsetLeft -
        (list.clientWidth - marker.offsetWidth) / 2,
      behavior,
    });
  }, [selectedIndex]);
  function moveFocus(event) {
    const buttons = [...listRef.current.querySelectorAll("button")];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    const next = {
      ArrowRight: Math.min(index + 1, buttons.length - 1),
      ArrowLeft: Math.max(index - 1, 0),
      Home: 0,
      End: buttons.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    buttons[next].focus({ preventScroll: true });
    buttons[next].scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "instant",
    });
  }
  return (
    <nav
      className="timeline-navigation"
      aria-label="Capítulos da nossa história"
    >
      <div className="timeline-nav-caption">
        <span>NOSSOS CAPÍTULOS</span>
        <span className="timeline-swipe-hint">
          Deslize para explorar <span aria-hidden="true">↔</span>
        </span>
      </div>
      <ol className="timeline-track" ref={listRef} onKeyDown={moveFocus}>
        {chapters.map((chapter, index) => (
          <TimelineMarker
            key={chapter.id}
            chapter={chapter}
            index={index}
            selected={selectedIndex === index}
            onSelect={() => onSelect(index)}
          />
        ))}
      </ol>
    </nav>
  );
}
