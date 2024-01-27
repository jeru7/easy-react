import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleSetTodo = (e) => {
    e.preventDefault();
    if (todoInput !== "") {
      setTodoList([...todoList, todoInput]);
      setTodoInput("");
    }
  };

  const handleDelete = (index) => {
    let newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  const handleEdit = () => {};

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__input">
          <input
            type="text"
            id="todoInput"
            placeholder="Enter your todo..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button id="addTaskBtn" onClick={handleSetTodo}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <div className="todo__display">
          {todoList.map((todo, index) => (
            <div key={index} className="todo__display-item">
              <p className="todo-name">{todo}</p>
              <div className="todo-icons">
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={handleEdit}
                  className="icons"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(index)}
                  className="icons"
                ></FontAwesomeIcon>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
