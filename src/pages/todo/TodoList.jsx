import todo from "./todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [todos, setTodos] = useState("");

  const handleInputChange = (e) => {
    setTodos(e.target.value);
  };

  const handleEdit = (index) => {
    // todo
  };

  const handleAddTodo = () => {
    if (todos.trim() !== "") {
      setTodoList([...todoList, todos]);
      setTodos("");
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
    if (newTodoList.length === 0) {
      setIsEmpty(true);
    }
  };
  return (
    <div className={todo.todoWrapper}>
      <div className={todo.todoContainer}>
        <h1 className={todo.todoTitle}>ToDoList</h1>
        <div className={todo.todoInput}>
          <input
            type="text"
            placeholder="Enter your todo here..."
            onChange={handleInputChange}
          />
          <button onClick={handleAddTodo}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={todo.todos}>
          {isEmpty && (
            <p className={todo.errorMsg}>Todo list is currently empty.</p>
          )}
          <ul>
            {todoList.map((todoItem, index) => (
              <li key={index}>
                {todoItem}
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleEdit(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
