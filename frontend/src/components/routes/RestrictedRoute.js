// Npm libraries
import React, { Component } from "react";
import Axios from "axios";
import { Redirect, Route } from "react-router-dom";

// Util functions
import { getJwt } from "../../utils/getJwt";

// Route that requires user to be logged out
class RestrictedRoute extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };
  }

  // When mounted check if token is valid (if yes then user is logged in)
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
        }
      });
  }

  // Used to prevent memory leaks
  componentWillUnmount() {
    this._isMounted = false;
  }

  // If logged in then redirect to 'logged in homepage' else render desired component
  render() {
    return this.state.isLoading ? null : this.state.isLoggedIn &&
      this.props.restricted ? (
      <Redirect
        to={{ pathname: "/inventory", state: { from: this.props.location } }}
      />
    ) : (
      <Route
        path={this.props.path}
        component={this.props.component}
        exact={this.props.exact}
      />
    );
  }
}

export default RestrictedRoute;
