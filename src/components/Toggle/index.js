import React from "react";
import { useState, useEffect } from "react";

const Toggle = props => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <button
      style={{ height: "50px", width: "100px" }}
      onClick={() => handleClick()}
    >
      {toggle.toString()}
    </button>
  );
};

export default Toggle;

//return <button onClick={() => setToggle(!isOn)}>{isOn ? "ON" : "OFF"}</button>
