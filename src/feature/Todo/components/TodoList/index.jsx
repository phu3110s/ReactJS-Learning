import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";
ToDoList.propTypes = {
  todoList: PropTypes.array,
};
ToDoList.defaultProps = {
  todoList: [],
};
function ToDoList({ todoList }) {
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={classnames({
              "todo-item": true,
              completed: todo.status === "completed",
            })}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
