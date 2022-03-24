import React, { useState, useRef, useEffect } from "react";

import { Todo } from "../Modal";
import Overview from "./Overview";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// TODO:
// - create 2 column grid layout for larger screens

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form
      className="mt-4 mr-16 ml-16 flex items-center justify-between rounded-md bg-rose-200 p-4"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="pl-2"
          onChange={(e) => setEditTodo(e.target.value)}
          value={editTodo}
        />
      ) : todo.isDone ? (
        <s className="text-lg">{todo.todo}</s>
      ) : (
        <span className="text-lg">{todo.todo}</span>
      )}

      <div className="flex w-24 items-center justify-between text-2xl">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="cursor-pointer" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
