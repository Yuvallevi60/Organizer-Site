import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div className="note">
      <input type="checkbox" />
      {props.item}
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
