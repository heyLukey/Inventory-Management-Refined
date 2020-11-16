// Npm libraries
import React from "react";

// Components
import NavBar from "../nav-bar/NavBar";

// CSS
import "./InventoryPage.css";

// Display inventory on this page [protected]
const InventoryPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-inventory">
          <h1>Inventory will go here!</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InventoryPage;
