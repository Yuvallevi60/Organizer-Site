// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SunriseData from "./SunriseData";
// import Form from "./Form";
// import AlarmList from "./AlarmList";

// function App() {
//   const [sunriseData, setSunriseTime] = useState(null);

//   async function fetchSunriseData(lat, lng) {
//     const apiUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;

//     try {
//       const response = await axios.get(apiUrl);
//       setSunriseTime(response.data.results);
//     } catch (error) {
//       console.error("Error fetching sunrise data:", error);
//     } finally {
//     }
//   }

//   return (
//     <div>
//       <h1>Sunrise Alarm</h1>
//       <Form sendCoord={fetchSunriseData} />
//       {!sunriseData && <p>Please enter a place to get sunrise information.</p>}
//       {sunriseData && <SunriseData data={sunriseData} />}
//       <AlarmList />
//     </div>
//   );
// }

// export default App;
