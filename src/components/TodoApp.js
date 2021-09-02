import React, { useEffect, useReducer } from "react";
import { todoReducer, TYPES } from "../reducer/todoReducer";
import ToDoAdd from "./ToDoAdd";
import TodoList from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleRemove = (id) => {
    dispatch({
      type: TYPES.REMOVE,
      payload: id,
    });
  };

  const handleToggle = (todoID) => {
    dispatch({
      type: TYPES.TOGGLE,
      payload: todoID,
    });
  };
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: TYPES.ADD,
      payload: newTodo,
    });
  };

  return (
    <div>
      <h2>
        Todo App <small>{todos.length}</small>
      </h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          Agregar TODO
          <hr />
          <ToDoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
