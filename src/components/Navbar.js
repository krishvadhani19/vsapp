import React from "react";
import Mode from "./Mode";
import vsContext from "../context/vsContext";
import { useContext } from "react";
import "../css/Navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(vsContext);
  const { mode } = context;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        fontSize: "21px",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                vsApp
              </a>
            </li>
          </ul>

          <Mode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
