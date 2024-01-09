import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() != "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
    // console.log(todos);
    // if (inputValue.trim() == "") alert("Todo can't  be empty");
  };

  const handleDelete = (id) => {
    const updatedTodo = todos.filter((todo, i) => {
      return id != i;
    });
    setTodos(updatedTodo);
  };
  return (
    <>
      <section id="container">
        <div className="input-section">
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button className="add-btn" onClick={handleAddTodo}>
            Todo
          </button>
        </div>

        <div className="todo-list-container">
          {todos &&
            todos.map((todo, i) => (
              <ul key={i}>
                <li>{todo}</li>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </ul>
            ))}
        </div>
      </section>
    </>
  );
};
export default Todo;
