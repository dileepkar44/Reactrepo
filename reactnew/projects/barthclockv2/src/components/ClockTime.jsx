import React, { useState, useEffect } from "react";

export default function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("camncelled interval");
    };
  }, []);

  return (
    <div>
      <p className="lead">
        This is current time : {time.toLocaleTimeString()} -{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}
