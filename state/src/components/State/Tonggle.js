import React, { useState } from "react";
import "./Tonggle.css";
const Tonggle = () => {
  const [on, setOn] = useState(false);
  const handleTonggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`tonggle ${on ? "active" : ""}`} onClick={handleTonggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Tonggle;
