// Npm libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Context
import UserContext from "../../context/User.context";

// Style sheet
import "./nav-bar.css";

const NavBar = () => {
  // Get userData from context
  const { userData, setUserData } = useContext(UserContext);

  // Get history
  const history = useHistory();

  const register = () => {
    history.push("/register");
  };

  const login = () => {
    history.push("/login");
  };

  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
  };

  return (
    <React.Fragment>
      <div className="header">
        <nav className="nav-bar">
          <Link to="/">
            <h1 className="title">INVENTORY</h1>
          </Link>
          <div className="auth-options">
            {userData.user ? (
              <button onClick={logout}>Log out</button>
            ) : (
              <React.Fragment>
                <button onClick={register}>Register</button>
                <button onClick={login}>Login</button>
              </React.Fragment>
            )}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
