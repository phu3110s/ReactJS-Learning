import React from "react";
import ToDoList from "../components/TodoList";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
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
