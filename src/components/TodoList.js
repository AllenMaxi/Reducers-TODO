import React from "react";
import List from "./List";

const TodoList = ({ todos, handleToggle, handleRemove }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <List
            todo={todo}
            i={i}
            key={todo.id}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
