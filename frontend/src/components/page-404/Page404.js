import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./Page404.css";

// If route doesn't exist then this gets rendered [public]
const Page404 = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-404">
          <h1>404</h1>
          <h4>The page you are looking for does not exist!</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page404;
