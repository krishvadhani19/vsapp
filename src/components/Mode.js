import React from "react";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Mode = () => {
  const context = useContext(vsContext);
  const { toggleMode, mode } = context;
  return (
    <div>
      <i
        class={`fa-solid fa-${
          mode === "light" ? "moon" : "sun"
        } text-light mx-2`}
        style={{
          fontSize: "1.5rem",
          border: "1px solid white",
          padding: "0.6rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onClick={toggleMode}
      ></i>
    </div>
  );
};

export default Mode;

// <div className="form-check form-switch">
//       <input
//         className="form-check-input"
//         type="checkbox"
//         role="switch"
//         id="flexSwitchCheckChecked"
//         onClick={toggleMode}
//       />
//       <label
//         className={`form-check-label mx-1 text-${
//           mode === "light" ? "light" : ""
//         }`}
//         htmlFor="flexSwitchCheckChecked"
//       >
//         {mode === "light" ? "Enable" : "Disable"} Dark Mode
//       </label>
//     </div>
