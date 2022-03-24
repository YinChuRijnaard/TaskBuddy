import React, { useState } from "react";

import Input from "./components/Input";
import Overview from "./components/Overview";

import { Todo } from "./Modal";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); // adds to array
      setTodo(""); // empties the input field
    }
  };

  return (
    <>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Overview todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
