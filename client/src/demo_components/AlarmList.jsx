import React, { useState } from "react";
import Alarm from "./Alarm";

function AlarmList() {
  const [hours, setHours] = useState([8, 12, 20]);
  const [hour, setHour] = useState("");

  function saveHour(event) {
    const val = event.target.value;
    setHour(val);
  }

  function addHour(event) {
    event.preventDefault();
    setHours((prevValues) => {
      return [...prevValues, hour];
    });
    console.log(hours);
  }

  return (
    <div>
      <h2>List Alarms</h2>
      <form onSubmit={addHour}>
        <input type="text" onChange={saveHour} value={hour} />
        <button type="submit">Add</button>
      </form>

      {hours.map((item, index) => (
        <Alarm key={index} hour={item} />
      ))}
    </div>
  );
}

export default AlarmList;
