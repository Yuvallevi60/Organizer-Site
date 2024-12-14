import React, { useState } from "react";

function ToDoForm(props) {
  const [task, setTask] = useState("");

  function changeTask(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(task);
    setTask("");
  }

  return (
    <div>
      <h2>Add new:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeTask} name="task" value={task} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoForm;
