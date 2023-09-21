import React from "react";
import { useTimer } from "react-timer-hook";
import "./style.css";
function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <span className="div-timer12">{days}d</span>{" "}
        <span className="div-timer12">:</span>
        <span className="div-timer12">{hours}h</span>
        <span className="div-timer12">:</span>
        <span className="div-timer12">{minutes}m</span>
        <span className="div-timer12">:</span>
        <span className="div-timer12">{seconds}s</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
