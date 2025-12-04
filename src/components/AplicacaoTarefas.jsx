import { useRecoilState } from "recoil";
import { temaAtom } from "../state/temaAtom";
import FormularioNovaTarefa from "./FormularioNovaTarefa";
import BotoesFiltro from "./BotoesFiltro";
import ListaTarefas from "./ListaTarefas";

export default function AplicacaoTarefas() {
  const [tema, setTema] = useRecoilState(temaAtom);

  function alternarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app-container ${tema}`}>
      <button className="tema-btn" onClick={alternarTema}>
        Tema: {tema === "light" ? "🌞 Claro" : "🌙 Escuro"}
      </button>

      <h1>Gerenciador de Tarefas</h1>

      <FormularioNovaTarefa />
      <BotoesFiltro />
      <ListaTarefas />
    </div>
  );
}
