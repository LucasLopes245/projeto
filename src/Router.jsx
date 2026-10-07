import { lazy, Suspense, useEffect, useState } from "react";
import App from "./App.jsx";

const Timeline = lazy(() => import("./components/Timeline/Timeline.jsx"));
// Rotas hash permitem abrir e atualizar URLs diretamente no GitHub Pages.
// A rota direta também permite revisar a timeline antes da data do aniversário.
export default function Router() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  useEffect(() => {
    if (hash === "#/") window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash]);
  if (hash === "#/timeline" || hash === "#/timeline/")
    return (
      <Suspense
        fallback={
          <p className="route-loading" role="status">
            Carregando nossa linha do tempo…
          </p>
        }
      >
        <Timeline />
      </Suspense>
    );
  return <App />;
}
