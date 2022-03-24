import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // function doesn't return anything, why?
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="mt-4 font-sans" onSubmit={handleAdd}>
      <h1 className="text-center text-3xl font-bold text-neutral-100">
        TaskBuddy
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <input
          className="mr-1 rounded-3xl p-2 pr-4 pl-4 focus:placeholder-transparent"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="input"
          placeholder="Add a task"
        />
        <button
          className="ml-1 rounded-3xl bg-white p-2 pl-4 pr-4 font-bold text-blue-500"
          type="submit"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default Input;
