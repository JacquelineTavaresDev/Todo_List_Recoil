import { atom } from "recoil";

const STORAGE_KEY = "tarefas-salvas";

export const tarefasAtom = atom({
  key: "tarefasAtom",
  default: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  effects: [
    ({ onSet }) => {
      onSet((novasTarefas) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(novasTarefas));
      });
    },
  ],
});
