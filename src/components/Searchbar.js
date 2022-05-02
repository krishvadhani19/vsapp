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
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="videoSearch"
          className="mx-2"
          style={{ fontSize: "1.3rem" }}
        >
          <strong>Video Search:</strong>
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
            padding: "0.5rem",
            width: "60vw",
          }}
        />
        <button type="button" className="btn btn-danger mx-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
