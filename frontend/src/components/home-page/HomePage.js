// Npm libraries
import React from "react";

// Components
import NavBar from "../nav-bar/NavBar";

// CSS
import "./HomePage.css";

// Website homepage [public]
const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <NavBar />
        <div className="page">
          <h1>HOME</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
