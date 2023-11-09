import React from "react";

const ToDos = ({ todos }) => {
  return (
    <div className="to-dos">
      <h2>To-Dos</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
