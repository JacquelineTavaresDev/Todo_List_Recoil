import { useSetRecoilState } from "recoil";
import { tarefasAtom } from "../state/tarefaAtom";

export default function ItemTarefa({ tarefa }) {
  const setTarefas = useSetRecoilState(tarefasAtom);

  function alternar() {
    setTarefas((lista) =>
      lista.map((t) => (t.id === tarefa.id ? { ...t, done: !t.done } : t))
    );
  }

  function remover() {
    setTarefas((lista) => lista.filter((t) => t.id !== tarefa.id));
  }

  return (
    <li className="task-item">
      <div onClick={alternar} className="task-left">
        <input type="checkbox" checked={tarefa.done} readOnly />
        <span className={tarefa.done ? "done" : ""}>{tarefa.titulo}</span>
      </div>

      <button className="remove-btn" onClick={remover}>
        Remover
      </button>
    </li>
  );
}
