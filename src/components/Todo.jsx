import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo() {
  const [list, setList] = useState([]);
  const [showcompleted, setShowCompleted] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  const style1 = {
    margin: "24px",
    backgroundColor: "red",
    color: "white",
    marginLeft: "40px"
  };
  const handleDelete = (id) => {
    const updlist = list.filter((item) => item.id !== id);
    setList(updlist);
  };
  return (
    <div>
      <h4>List, keys and conditional rendering</h4>
      <TodoInput onSubmit={handleSubmit} />

      <TodoList
        data={list.filter((item) => !item.status)}
        handleDelete={handleDelete}
      />

      <button
        style={style1}
        onClick={() => {
          setShowCompleted(!showcompleted);
        }}
      >
        Show toggle complete
      </button>

      {showcompleted && (
        <TodoList
          data={list.filter((item) => item.status)}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Todo;
