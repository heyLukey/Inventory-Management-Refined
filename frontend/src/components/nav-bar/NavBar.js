// Npm libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Util function
import { getJwt } from "../../utils/getJwt";

// CSS
import "./NavBar.css";

// Website navbar than renders differently depending on if user is logged in
class NavBar extends Component {
  constructor(props) {
    super();

    this.state = {
      loggedIn: undefined,
    };

    this.toRegister = this.toRegister.bind(this);
    this.toLogin = this.toLogin.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  // Check if Logged In
  componentDidMount() {
    const loggedIn = getJwt();
    if (!loggedIn) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  // Push user to /register
  toRegister() {
    this.props.history.push("/register");
  }

  // Push user to /login
  toLogin() {
    this.props.history.push("/login");
  }

  // Remove token and push user to /login
  Logout() {
    localStorage.removeItem("auth-token");
    this.props.history.push("/login");
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <nav className="nav-bar">
            {/* WEBSITE TITLE */}
            <div className="title">
              <Link to="/">
                <h1>INVENTORY</h1>
              </Link>
            </div>
            {/* CONDITIONAL RENDER BASED ON LOGIN */}
            <div className="auth-options">
              {this.state.loggedIn ? (
                <button className="logout" onClick={() => this.Logout()}>
                  Log out
                </button>
              ) : (
                <React.Fragment>
                  <button
                    className="register"
                    onClick={() => this.toRegister()}
                  >
                    Register
                  </button>
                  <button className="login" onClick={() => this.toLogin()}>
                    Login
                  </button>
                </React.Fragment>
              )}
            </div>
          </nav>
        </div>
        <div className="padded-top"></div>
      </React.Fragment>
    );
  }
}

export default withRouter(NavBar);
