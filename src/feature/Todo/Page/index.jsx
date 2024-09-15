import React from "react";
import ToDoList from "../components/TodoList";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h3 className="centerHeadline">Todo List</h3>
      <ToDoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
