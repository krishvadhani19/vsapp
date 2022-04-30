import React from "react";
import Mode from "./Mode";
import vsContext from "../context/vsContext";
import { useContext } from "react";
import "../css/Navbar.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          mode === "light" ? "dark" : ""
        } bg-${mode === "light" ? "dark" : ""}`}
      >
        <div className="container-fluid" style={{ fontSize: "21px" }}>
          <a className="navbar-brand" href="/">
            vsApp
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          {/* Toggle Mode */}
          <Mode />
          {/* Buttons */}
          {!localStorage.getItem("token") ? (
            <form className="d-flex mx-2">
              <Link type="button" className="btn btn-primary mx-1" to="/login">
                Login
              </Link>
              <Link type="button" className="btn btn-primary mx-1" to="/signup">
                Signup
              </Link>
            </form>
          ) : (
            <form className="d-flex mx-2">
              <Link
                type="button"
                className="btn btn-primary mx-1"
                to="/login"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
