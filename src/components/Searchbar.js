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
    <div
      className="container"
      style={{ padding: "10px", borderRadius: "5px", boxShadow: "1px 1px 4px" }}
    >
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="videoSearch"
          className="mx-2"
          style={{ fontSize: "20px" }}
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
            borderRadius: "5px",
            padding: "5px",
            width: "400px",
            boxShadow: "1px 1px 4px",
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
