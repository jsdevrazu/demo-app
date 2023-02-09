import React, { useState, useEffect } from "react";

interface Props {}

const Timer: React.FC<Props> = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let hour = Math.floor(time / 3600);
  let minute = Math.floor((time - hour * 3600) / 60);
  let second = time - hour * 3600 - minute * 60;

  return (
    <div style={{ fontSize: "32px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      {hour.toString().padStart(2, "0")}:{minute
        .toString()
        .padStart(2, "0")}:{second.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
