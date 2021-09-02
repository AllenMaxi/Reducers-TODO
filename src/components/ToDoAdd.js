import React from "react";
import { useForm } from "../hooks/useForm";

const ToDoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="aprender..."
          onChange={handleInputChange}
          value={description}
        />
        <button className="btn-primary mt-1" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default ToDoAdd;
