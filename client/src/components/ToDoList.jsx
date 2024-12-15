import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [list, setList] = useState([]);

  function addTask(task) {
    setList((prevItems) => [...prevItems, task]);
  }

  function deleteItem(itemId) {
    setList((prevItems) => prevItems.filter((item, index) => index != itemId));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <p>Here you can manage your tasks.</p>
      <ToDoForm onAdd={addTask} />
      <ul>
        {list.map((item, index) => (
          <li>
            <ToDoItem
              key={index}
              id={index}
              item={item}
              onDelete={deleteItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
