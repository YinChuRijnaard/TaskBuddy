import React from "react";

import TodoItem from "./TodoItem";

import { Todo } from "../Modal";

// Workaround to fix issue with not being able to change background color
const bodyElement = document.body.classList.add("bg-pink-400");

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Overview: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </section>
  );
};

export default Overview;
