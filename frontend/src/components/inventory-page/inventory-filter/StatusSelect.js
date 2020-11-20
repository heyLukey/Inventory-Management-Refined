import React from "react";

import "./StatusSelect.css";

const StatusSelect = ({ query, setQuery }) => {
  const changeSelect = (e) => {
    const newQuery = Object.assign({}, query);
    if (e.target.value === "Active") {
      // ACTIVE: active: 'true', recycled: 'false'
      newQuery.active = "true";
      newQuery.recycled = "false";
    } else if (e.target.value === "Archived") {
      // ARCHIVED: active: 'false', recycled: 'false'
      newQuery.active = "false";
      newQuery.recycled = "false";
    } else if (e.target.value === "All") {
      // All: active: 'all', recycled: 'false'
      newQuery.active = "all";
      newQuery.recycled = "false";
    } else if (e.target.value === "Recycled") {
      // Recycled: active: 'all', recycled: 'true'
      newQuery.active = "all";
      newQuery.recycled = "true";
    }

    setQuery(newQuery);
  };

  return (
    <div className="status-div">
      <select onChange={changeSelect} className="status-select">
        <option>Active</option>
        <option>Archived</option>
        <option>All</option>
        <option>Recycled</option>
      </select>
    </div>
  );
};

export default StatusSelect;
