import React, { useState } from "react";

function ToDoForm(props) {
  const [task, setTask] = useState("");

  function changeTask(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    props.onAdd(task);
    setTask("");
  }

  return (
    <div>
      <h2>Add new:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={changeTask}
          name="task"
          placeholder="New Task"
          value={task}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
