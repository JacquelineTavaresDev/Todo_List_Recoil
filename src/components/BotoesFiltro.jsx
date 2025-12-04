import { useRecoilState } from "recoil";
import { filtroAtom } from "../state/filtroAtom";

export default function BotoesFiltro() {
  const [filtro, setFiltro] = useRecoilState(filtroAtom);

  return (
    <div className="filters">
      <button
        className={filtro === "todas" ? "active" : ""}
        onClick={() => setFiltro("todas")}
      >
        Todas
      </button>

      <button
        className={filtro === "pendentes" ? "active" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        Pendentes
      </button>

      <button
        className={filtro === "concluidas" ? "active" : ""}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas
      </button>
    </div>
  );
}
