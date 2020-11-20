import React from "react";

import "./SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  const updateInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={updateInput}
          placeholder="Search by title"
        />
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
