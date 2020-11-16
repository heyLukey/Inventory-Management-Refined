// Npm libraries
import React, { Component } from "react";
import Axios from "axios";
import { Redirect, Route } from "react-router-dom";

// Util functions
import { getJwt } from "../../utils/getJwt";

// Route that requires user to be logged in with valid token
class PrivateRoute extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };
  }

  // When mounted check if token is valid
  componentDidMount() {
    this._isMounted = true;

    // Check if token exists
    const jwt = getJwt();
    if (!jwt) {
      if (this._isMounted) {
        this.setState(() => ({ isLoading: false, isLoggedIn: false }));
      }
    }

    // Verify token using backend
    Axios.get("http://localhost:5000/user/data", {
      headers: { "x-auth-token": jwt },
    })
      .then((res) => {
        if (this._isMounted) {
          this.setState(() => ({ isLoading: false, isLoggedIn: true }));
        }
      })
      .catch((error) => {
        if (this._isMounted) {
          this.setState(() => ({ isLoading: false, isLoggedIn: false }));
          // Remove local storage
          localStorage.removeItem("auth-token");
          console.log(`PrivateRoute: ${error.response.data.error}`);
        }
      });
  }

  // Used to prevent memory leaks
  componentWillUnmount() {
    this._isMounted = false;
  }

  // If logged in then render desired component, otherwise redirect to login
  render() {
    return this.state.isLoading ? null : this.state.isLoggedIn ? (
      <Route
        path={this.props.path}
        component={this.props.component}
        exact={this.props.exact}
      />
    ) : (
      <Redirect
        to={{ pathname: "/login", state: { from: this.props.location } }}
      />
    );
  }
}

export default PrivateRoute;
