import React, { useState, useEffect } from "react";
// Npm libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

// Context
import UserContext from "./context/User.context";

// Components
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./components/home-page/HomePage";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import Inventory from "./components/inventory-app/Inventory";
import Footer from "./components/footer/Footer";
import Page404 from "./components/page-404/Page404";

// Style sheet
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <React.Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavBar />
          <div className="padded"></div>
          <div className="page">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/inventory" component={Inventory} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
