import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [list, setList] = useState([]);

  function addTask(task) {
    setList((prevItems) => [...prevItems, task]);
    console.log(list);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <p>Here you can manage your tasks.</p>
      <ToDoForm onAdd={addTask} />
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
