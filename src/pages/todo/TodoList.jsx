// import { useState } from "react";
import todo from "./todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  // const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className={todo.todoWrapper}>
      <div className={todo.todoContainer}>
        <h1 className={todo.todoTitle}>ToDoList</h1>
        <div className={todo.todoInput}>
          <input type="text" placeholder="Enter your todo here..." />
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={todo.todos}></div>
      </div>
    </div>
  );
};

export default TodoList;
