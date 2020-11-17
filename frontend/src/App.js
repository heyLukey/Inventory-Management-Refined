// Npm libraries
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages to render
import HomePage from "./components/home-page/HomePage";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import InventoryPage from "./components/inventory-page/InventoryPage";
import Page404 from "./components/page-404/Page404";

// Website footer
import Footer from "./components/footer/Footer";

// Custom routes
import PrivateRoute from "./components/routes/PrivateRoute";
import RestrictedRoute from "./components/routes/RestrictedRoute";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            {/* PUBLIC ROUTES */}
            <Route exact path="/" component={HomePage} />
            {/* PRIVATE ROUTES */}
            <PrivateRoute
              exact={true}
              path="/inventory"
              component={InventoryPage}
            />
            {/* RESTRICTED ROUTES */}
            <RestrictedRoute
              exact={true}
              path="/register"
              component={RegisterPage}
              restricted={true}
            />
            <RestrictedRoute
              exact={true}
              path="/login"
              component={LoginPage}
              restricted={true}
            />
            <Route path="*" component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
