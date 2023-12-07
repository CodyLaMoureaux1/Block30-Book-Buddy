import React, { useState } from "react";
import "../../src/App.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call onSearch with the updated query
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <h2>Search for a book here!</h2>
        <input
          type="text"
          className="bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
