import React from "react";
import { Categories, IToDo, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      {text}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onclick}>
          Todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onclick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onclick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
