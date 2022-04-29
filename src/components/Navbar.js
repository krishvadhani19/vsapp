import React from "react";
import Mode from "./Mode";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(vsContext);
  const { mode } = context;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          mode === "light" ? "light" : "dark"
        } bg-${mode === "light" ? "light" : "dark"}`}
      >
        <div className="container-fluid" style={{ fontSize: "20px" }}>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <Mode />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
