import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Responsive.css";

const Responsive = ({ loggedIn }) => {
  const history = useHistory();
  const needHamburger = useMediaQuery({ maxWidth: 800 });
  const [showMenu, setShowMenu] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("hello");
  };

  // Push user to /register
  const toRegister = () => {
    history.push("/register");
  };

  // Push user to /login
  const toLogin = () => {
    history.push("/login");
  };

  // Remove token and push user to /login
  const Logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/login");
  };

  return (
    <React.Fragment>
      {needHamburger ? (
        <div className="hamburger-div">
          <button onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          {showMenu ? <div>MENU</div> : null}
        </div>
      ) : (
        <div className="auth-options">
          {loggedIn ? (
            <button className="logout" onClick={Logout}>
              Log out
            </button>
          ) : (
            <React.Fragment>
              <button className="register" onClick={toRegister}>
                Register
              </button>
              <button className="login" onClick={toLogin}>
                Login
              </button>
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Responsive;
