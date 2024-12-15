import React from "react";

function ToDoItem(props) {
  function deleteItem() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <p>{props.item}</p>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default ToDoItem;
