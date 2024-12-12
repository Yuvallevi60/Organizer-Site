import React, { useState } from "react";

function CoordForm(props) {
  const [coord, setCoord] = useState({ lat: "", lng: "" });

  function handleChangeCoord(event) {
    const { name, value } = event.target;
    setCoord((prevsValue) => ({ ...prevsValue, [name]: value }));
  }

  // Fetch data based on current coordinates
  function submitCoord(event) {
    event.preventDefault(); // Prevent page reload on form submission
    props.onSubmit(coord.lat, coord.lng);
  }

  return (
    <div>
      <h2>By Coordinates</h2>
      <form>
        <input
          onChange={handleChangeCoord}
          name="lat"
          placeholder="lat"
          type="text"
          value={coord.lat}
        />
        <input
          onChange={handleChangeCoord}
          name="lng"
          placeholder="lng"
          type="text"
          value={coord.lng}
        />
        <button onClick={submitCoord}>Submit</button>
      </form>
    </div>
  );
}

export default CoordForm;
