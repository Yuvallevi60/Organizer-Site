import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("todolist");
    return savedList ? JSON.parse(savedList) : [];
  });

  function addTask(task) {
    const newTask = { id: Date.now(), text: task };
    setList((prevItems) => {
      const updatedList = [...prevItems, newTask];
      localStorage.setItem("todolist", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  function deleteItem(id) {
    setList((prevItems) => {
      const updatedList = prevItems.filter((item) => item.id != id);
      localStorage.setItem("todolist", JSON.stringify(updatedList));
      return updatedList;
    });
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <p>Here you can manage your tasks.</p>
      <ToDoForm onAdd={addTask} />
      {list.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          item={item.text}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
}

export default ToDoList;
