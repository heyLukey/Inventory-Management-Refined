// Npm Libraries
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

// Components
import ErrorNotice from "../error-notice/ErrorNotice";

// Context
import UserContext from "../../context/User.context";

// Style sheet
import "./register-page.css";

const RegisterPage = () => {
  // Get setUserData from context
  const { setUserData } = useContext(UserContext);

  // Get history
  const history = useHistory();

  // Create error state
  const [errorMsg, setErrorMsg] = useState();

  const registerSubmit = async (event) => {
    try {
      // Prevent refresh
      event.preventDefault(event);

      const userSubmission = {
        email: event.target.register_email.value,
        username: event.target.register_username.value,
        password: event.target.register_password.value,
        passwordCheck: event.target.register_passwordCheck.value,
      };

      await Axios.post(
        "http://localhost:5000/user/register",
        userSubmission
      ).then(function () {
        console.log("User created!");
      });

      console.log("user");
      const loginData = {
        email: userSubmission.email,
        password: userSubmission.password,
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
    } catch (error) {
      error.response.data.error && setErrorMsg(error.response.data.error);
    }
  };

  const login = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <div className="page-register">
        <h1 className="page-title">Register</h1>
        {errorMsg && <ErrorNotice errorMsg={errorMsg} />}
        <form className="form-register" onSubmit={registerSubmit}>
          <h2 className="form-title">New Users</h2>
          {/* Email input */}
          <label className="email-label">Email Address*</label>
          <input id="register_email" type="email" />
          {/* Username input */}
          <label className="username-label">Username*</label>
          <input id="register_username" type="text" />
          {/* Password input */}
          <label className="password-label">Password*</label>
          <input id="register_password" type="password" />
          {/* Password Check input */}
          <label className="passwordCheck-label">Confirm Password*</label>
          <input id="register_passwordCheck" type="password" />
          {/* Submit */}
          <button type="submit" value="Sign In">
            Sign In
          </button>
        </form>
        <div className="go-login">
          <h2>Already have an account?</h2>
          <p>
            I think its hilarious u guys talk shit about lucas. u wouldnt say
            this shit to him at lan, hes jacked. not only that but he wears the
            freshest clothes, eats at the chillest restaurants and hangs out
            with the hottest dudes. yall are pathetic lol.
          </p>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
