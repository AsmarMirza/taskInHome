import "./index.css";
import { useState } from "react";
import useLocalStorage from "../../hook/useLocalStorage";

function Todo() {
  const [myInp, setMyInp] = useState("");
  const [todo, setTodo] = useLocalStorage("arr", []);

  function onChange(e) {
    setMyInp(e.target.value);
  }

  function handleTodoList() {
    setTodo([...todo, myInp]);
    setMyInp("");
  }
  return (
    <div>
      <input type="text" name="" id="" value={myInp} onChange={onChange} />
      <button onClick={handleTodoList}>Add</button>
      {todo.map((x, i) => (
        <h3 key={i}>{x}</h3>
      ))}
    </div>
  );
}

export default Todo;
