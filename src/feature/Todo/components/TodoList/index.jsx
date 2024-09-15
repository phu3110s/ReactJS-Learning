import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
ToDoList.propTypes = {
  todoList: PropTypes.array,
};
ToDoList.defaultProps = {
  todoList: [],
};
function ToDoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
