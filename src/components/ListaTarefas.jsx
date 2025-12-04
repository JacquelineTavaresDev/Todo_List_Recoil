import { useRecoilValue } from "recoil";
import { tarefasFiltradas } from "../selectors/tarefasFiltradas";
import ItemTarefa from "./ItemTarefa";

export default function ListaTarefas() {
  const tarefas = useRecoilValue(tarefasFiltradas);

  if (tarefas.length === 0) {
    return <p className="empty">Nenhuma tarefa.</p>;
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
