// Npm Libraries
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

// Components
import ErrorNotice from "../error-notice/ErrorNotice";

// Context
import UserContext from "../../context/User.context";

// Style sheet
import "./login-page.css";

const LoginPage = () => {
  // Get setUserData from context
  const { setUserData } = useContext(UserContext);

  // Get history
  const history = useHistory();

  // Create error state
  const [errorMsg, setErrorMsg] = useState();

  // Log user in
  const loginSubmit = async (event) => {
    try {
      // Prevent refresh
      event.preventDefault(event);

      const loginData = {
        email: event.target.login_email.value,
        password: event.target.login_password.value,
      };

      await Axios.post("http://localhost:5000/user/login", loginData).then(
        function (response) {
          console.log("User logged in!");
          setUserData({
            token: response.data.token,
            user: response.data.user,
          });
          localStorage.setItem("auth-token", response.data.token);
        }
      );
      history.push("/inventory");
      console.log(loginData);
    } catch (error) {
      error.response.data.error && setErrorMsg(error.response.data.error);
    }
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <React.Fragment>
      <div className="page-login">
        <h1 className="page-title">Login</h1>
        {errorMsg && <ErrorNotice errorMsg={errorMsg} />}
        <form className="form-login" onSubmit={loginSubmit}>
          <h2 className="form-title">Existing Users</h2>
          {/* Email input */}
          <label className="email-label">Email Address*</label>
          <input id="login_email" type="email" />
          {/* Password input */}
          <label className="password-label">Password*</label>
          <input id="login_password" type="password" />
          {/* Submit */}
          <button type="submit" value="Sign In">
            Sign In
          </button>
        </form>
        <div className="go-register">
          <h2>Don't have an account?</h2>
          <p>
            I think its hilarious u guys talk shit about lucas. u wouldnt say
            this shit to him at lan, hes jacked. not only that but he wears the
            freshest clothes, eats at the chillest restaurants and hangs out
            with the hottest dudes. yall are pathetic lol.
          </p>
          <button onClick={register}>Register</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
