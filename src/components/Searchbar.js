import React from "react";
import { useState } from "react";
import "../css/youtube.css";
import vsContext from "../context/vsContext";
import { useContext } from "react";

const Searchbar = ({ handleFormSubmit }) => {
  const context = useContext(vsContext);
  const { mode, selectedVideo } = context;
  const [searchText, setSearchText] = useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(searchText);
  };
  return (
    <form className="d-flex videoSearch mx-2 my-2 container">
      <input
        className="videoSearchInput-dark form-control me-2 "
        type="search"
        name="videoSearch"
        id="videoSearch"
        value={searchText}
        onChange={onChange}
        placeholder="Search"
        aria-label="Search"
      />
      <button
        type="submit"
        className={`btn btn-color${mode === "light" ? "" : "-dark"}`}
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
