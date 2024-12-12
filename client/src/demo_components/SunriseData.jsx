import React from "react";

function SunriseData(props) {
  return (
    <div>
      <h2>Sunrise API's data:</h2>
      <ul>
        <li>date: {props.data.date}</li>
        <li>sunrise: {props.data.sunrise}</li>
        <li>sunset: {props.data.sunset}</li>
        <li>timezone: {props.data.timezone}</li>
      </ul>
    </div>
  );
}

export default SunriseData;
