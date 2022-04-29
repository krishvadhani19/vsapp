import React from "react";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Mode = () => {
  const context = useContext(vsContext);
  const { toggleMode, mode } = context;
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={toggleMode}
      />
      <label
        className={`form-check-label text-${
          mode === "light" ? "dark" : "light"
        }`}
        htmlFor="flexSwitchCheckDefault"
      >
        {mode === "light" ? "Enable" : "Disable"} Dark Mode
      </label>
    </div>
  );
};

export default Mode;
