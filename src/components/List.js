import React from "react";

const List = ({ todo, i, handleToggle, handleRemove }) => {
  return (
    <>
      <li
        key={todo.id}
        className={`${todo.done ? "bg-primary" : "bg-secondary"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
        <div className="mt-1">
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(todo.id)}
          >
            Borrar
          </button>
        </div>
      </li>
    </>
  );
};

export default List;
