import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tarefasAtom } from "../state/tarefaAtom";

export default function FormularioNovaTarefa() {
  const [texto, setTexto] = useState("");
  const setTarefas = useSetRecoilState(tarefasAtom);

  function adicionar(e) {
    e.preventDefault();
    const titulo = texto.trim();
    if (!titulo) return;

    const nova = {
      id: Date.now(),
      titulo,
      done: false,
    };

    setTarefas((lista) => [nova, ...lista]);
    setTexto("");
  }

  return (
    <form className="new-task-form" onSubmit={adicionar}>
      <input
        placeholder="Digite uma tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
