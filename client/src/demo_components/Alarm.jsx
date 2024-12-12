import React, { useEffect } from "react";

function Alarm({ hour }) {
  useEffect(() => {
    const checkTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour === hour)
        console.log("It's time! The current hour matches the alarm.");
    };
    const intervalId = setInterval(checkTime, 60 * 1000);
    checkTime();
    return () => clearInterval(intervalId);
  }, [hour]);

  return (
    <div>
      <p>Alarm set for {hour}:00. Check the console for notifications!</p>
    </div>
  );
}

export default Alarm;
