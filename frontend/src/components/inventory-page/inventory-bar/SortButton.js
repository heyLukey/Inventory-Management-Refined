import React from "react";

import "./SortButton.css";

const SortButton = ({ isAsc, setIsAsc }) => {
  const toAsc = () => {
    setIsAsc(true);
  };

  const toDesc = () => {
    setIsAsc(false);
  };

  return (
    <div className="sort-div">
      {isAsc ? (
        <button onClick={toDesc}>
          <i className="fas fa-arrow-up"></i>
        </button>
      ) : (
        <button onClick={toAsc}>
          <i className="fas fa-arrow-down"></i>
        </button>
      )}
    </div>
  );
};

export default SortButton;
