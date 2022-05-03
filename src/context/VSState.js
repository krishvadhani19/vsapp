import React from "react";
import vsContext from "./vsContext";
import { useState } from "react";

const VSState = (props) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "vsApp - Dark Mode";
      document.body.style.backgroundColor = "#000613";
      document.body.style.color = "white";
    } else {
      document.title = "vsApp - Light Mode";
      document.body.style.backgroundColor = "";
      document.body.style.color = "black";
      setMode("light");
    }
  };
  return (
    <vsContext.Provider value={{ toggleMode, mode }}>
      {props.children}
    </vsContext.Provider>
  );
};

export default VSState;
