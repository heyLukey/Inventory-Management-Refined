// Npm libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Util function
import { getJwt } from "../../utils/getJwt";

// CSS
import "./NavBar.css";
import Responsive from "./Reponsive";

// Website navbar than renders differently depending on if user is logged in
class NavBar extends Component {
  constructor(props) {
    super();

    this.state = {
      loggedIn: undefined,
    };
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

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <nav className="nav-bar">
            <div className="title">
              <Link to="/">
                <h1>INVENTORY</h1>
              </Link>
            </div>
            <Responsive loggedIn={this.state.loggedIn} />
          </nav>
        </div>
        <div className="padded-top"></div>
      </React.Fragment>
    );
  }
}

export default withRouter(NavBar);
