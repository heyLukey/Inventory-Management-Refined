// Npm libraries
import React from "react";
import { useHistory } from "react-router-dom";

// Components
import NavBar from "../nav-bar/NavBar";

// CSS
import "./HomePage.css";

// Website homepage [public]
const HomePage = () => {
  const history = useHistory();

  const go2Inventory = () => {
    history.push("/inventory");
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-home">
          <h1>HOME</h1>
          <h4>This is a temporary home page.</h4>
          <h4>
            If you want to use the inventory application click the button below!
          </h4>
          <button className="go-inventory" onClick={go2Inventory}>
            To Inventory!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
