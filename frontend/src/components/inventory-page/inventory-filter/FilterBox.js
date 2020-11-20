import React from "react";

import "./FilterBox.css";

const FilterBox = ({ filterTarget, query, setQuery }) => {
  const checked = (e) => {
    const newQuery = Object.assign({}, query);

    if (e.target.checked) {
      newQuery.todo[filterTarget] = "true";
    } else if (!e.target.checked) {
      newQuery.todo[filterTarget] = "false";
    }

    setQuery(newQuery);
  };

  return (
    <React.Fragment>
      <div className="checkbox-filter">
        <input className="checkbox-box" type="checkbox" onClick={checked} />
        <label className="checkbox-label">
          {filterTarget.charAt(0).toUpperCase() + filterTarget.slice(1)}
        </label>
      </div>
    </React.Fragment>
  );
};

export default FilterBox;
