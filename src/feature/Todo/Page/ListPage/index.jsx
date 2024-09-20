import React, { useState } from "react";
import ToDoList from "../../components/TodoList";
ListPage.propTypes = {};
function ListPage(props) {
  const initTodoList = [
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
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };
  const handleShowNew = () => {
    setFilterStatus("new");
  };
  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  // console.log(renderTodoList);
  return (
    <div>
      <h3 className="centerHeadline">Todo List</h3>
      <ToDoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button className="todoList-button" onClick={handleShowAllClick}>
          Show All
        </button>
        <button className="todoList-button" onClick={handleShowNew}>
          Show new
        </button>
        <button className="todoList-button" onClick={handleShowCompleted}>
          Show completed
        </button>
      </div>
    </div>
  );
}

export default ListPage;
