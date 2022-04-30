import React from "react";
import vsContext from "../context/vsContext";
import { useContext } from "react";
import "../css/Navbar.css";

const Mode = () => {
  const context = useContext(vsContext);
  const { toggleMode, mode } = context;
  return (
    <div className="form-check form-switch mx-2">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={toggleMode}
      />
      <label
        className={`form-check-label mx-1 text-${
          mode === "light" ? "light" : ""
        }`}
        htmlFor="flexSwitchCheckDefault"
      >
        {mode === "light" ? "Enable" : "Disable"} Dark Mode
      </label>
    </div>
  );
};

export default Mode;
