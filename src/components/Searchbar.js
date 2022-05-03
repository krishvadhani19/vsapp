import React from "react";
import { useState } from "react";

const Searchbar = ({ handleFormSubmit }) => {
  const [searchText, setSearchText] = useState("ipl");
  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(searchText);
  };
  return (
    <div
      className="container"
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "1px 1px 4px",
      }}
    >
      <form className="d-flex videoSearch">
        <div className="mx-2 d-flex">
          <label
            htmlFor="videoSearch"
            className="mx-2"
            style={{ fontSize: "1.3rem" }}
          >
          </label>
          <input
            type="text"
            name="videoSearch"
            id="videoSearch"
            value={searchText}
            onChange={onChange}
            placeholder="Search on Youtube"
            style={{
              borderRadius: "0.5rem",
              padding: "0.1rem",
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger mx-5 my-2"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
