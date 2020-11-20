import React from "react";
import FilterBox from "./FilterBox";

import "./InventoryFilter.css";
import StatusSelect from "./StatusSelect";

const InventoryFilter = ({ query, setQuery }) => {
  return (
    <React.Fragment>
      <div className="inventory-filter">
        <h3>Filter</h3>
        <StatusSelect query={query} setQuery={setQuery} />
        <div>
          <FilterBox
            filterTarget="polishing"
            query={query}
            setQuery={setQuery}
          />
          <FilterBox filterTarget="sizing" query={query} setQuery={setQuery} />
          <FilterBox filterTarget="lazer" query={query} setQuery={setQuery} />
          <FilterBox
            filterTarget="engraving"
            query={query}
            setQuery={setQuery}
          />
          <FilterBox filterTarget="plating" query={query} setQuery={setQuery} />
          <FilterBox filterTarget="rhodium" query={query} setQuery={setQuery} />
          <FilterBox
            filterTarget="cleaning"
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InventoryFilter;
