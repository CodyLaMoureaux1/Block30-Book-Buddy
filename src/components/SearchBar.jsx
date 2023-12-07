import React, { useState } from "react";
import "../../src/App.css";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSearch(e);
  };

  return (
    <div className="search-bar-container">
      {" "}
      <div className="search-bar">
        <h2>Search for book here!</h2>
        <input
          type="text"
          className="bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Search</button>
        <h3></h3>
      </div>
    </div>
  );
}
