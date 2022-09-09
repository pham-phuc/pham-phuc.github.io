import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  function active() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(10);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <h1>TIMING CLOCK</h1>
      <div className="timing-clock">
        <div className="time">{seconds <= 0 ? 'Hết Giờ' : seconds}</div>
        <div className="control">
          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={active}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
