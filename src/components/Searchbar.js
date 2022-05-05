import React from "react";
import { useState } from "react";

const Searchbar = ({ handleFormSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(searchText);
  };
  return (
    <form
      className="d-flex videoSearch mx-2 my-2 container"
      onSubmit={handleSubmit}
    >
      <input
        className="videoSearchInput-dark form-control my-2 "
        type="search"
        name="videoSearch"
        id="videoSearch"
        value={searchText}
        onChange={onChange}
        placeholder="Search"
        aria-label="Search"
      />
      <button type="submit" className="btn btn-color " onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
