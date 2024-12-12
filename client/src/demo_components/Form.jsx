import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const apiKey = process.env.GROCODE_API_KEY;
  const [place, setPlace] = useState("");

  function handleChanged(event) {
    setPlace(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const apiURL = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}`;
    try {
      const response = await axios.get(apiURL);
      const { lat, lng } = response.data.results[0].geometry;
      props.sendCoord(lat, lng);
    } catch (error) {
      console.error("Error fetching coordinate data:", error);
    }
  }

  return (
    <div>
      <h2>By Place:</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="place"
          type="text"
          value={place}
          onChange={handleChanged}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
