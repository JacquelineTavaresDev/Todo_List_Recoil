import { selector } from "recoil";
import { tarefasAtom } from "../state/tarefaAtom";
import { filtroAtom } from "../state/filtroAtom";

export const tarefasFiltradas = selector({
  key: "tarefasFiltradas",
  get: ({ get }) => {
    const tarefas = get(tarefasAtom);
    const filtro = get(filtroAtom);

    if (filtro === "concluidas") return tarefas.filter((t) => t.done);
    if (filtro === "pendentes") return tarefas.filter((t) => !t.done);
    return tarefas;
  },
});

