import React from "react";
import Mode from "./Mode";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(vsContext);
  const { handleSubmit, mode } = context;
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
          vsApp
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
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>{<Searchbar handleFormSubmit={handleSubmit} />}</li>
          </ul>

          <Mode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
