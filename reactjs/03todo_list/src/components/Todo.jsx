import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  //* Add todo
  //   const handleAddTodo = () => {
  //     if (inputValue.trim() != "") {
  //       setTodos([...todos, { id: Date.now(), item: inputValue }]);
  //       setInputValue("");
  //     }
  //   };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editId !== null) {
        // If in edit mode, update the existing todo
        const updatedTodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, item: inputValue } : todo
        );
        setTodos(updatedTodos);
        setEditId(null);
      } else {
        // If not in edit mode, add a new todo
        setTodos([...todos, { id: Date.now(), item: inputValue }]);
      }

      setInputValue("");
    }
  };

  //* Delete todo
  const handleDelete = (id) => {
    const updatedTodo = todos.filter((todo) => id != todo.id);
    setTodos(updatedTodo);
  };

  //* Edit todo
  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => id === todo.id);
    setInputValue(editTodo.item);
    setEditId(id);
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
            todos.map((todo) => (
              <ul key={todo.id}>
                <li>{todo.item}</li>
                <div className="btns">
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                  <button onClick={() => handleEdit(todo.id)}>Edit</button>
                </div>
              </ul>
            ))}
        </div>
      </section>
    </>
  );
};
export default Todo;
