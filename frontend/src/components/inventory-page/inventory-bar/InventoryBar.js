import React from "react";
import DownloadCSV from "./DownloadCSV";

import "./InventoryBar.css";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";

const InventoryBar = ({
  query,
  setQuery,
  isAsc,
  setIsAsc,
  search,
  setSearch,
}) => {
  return (
    <React.Fragment>
      <div className="inventory-bar">
        {/* <StatusSelect query={query} setQuery={setQuery} /> */}
        <SortButton isAsc={isAsc} setIsAsc={setIsAsc} />
        <SearchBar search={search} setSearch={setSearch} />
        <DownloadCSV />
      </div>
    </React.Fragment>
  );
};

export default InventoryBar;
