// Npm libraries
import React, { Component } from "react";
import axios from "axios";

// Components
import ErrorNotice from "../error-notice/ErrorNotice";
import NavBar from "../nav-bar/NavBar";

// CSS
import "./RegisterPage.css";

// Register user on this page [restricted]
class RegisterPage extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      username: "",
      password: "",
      passwordCheck: "",
      errorMsg: undefined,
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  // On input field change update corresponding state
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // On submit attempt registration
  submit(e) {
    // Prevent refresh
    e.preventDefault();

    const registerData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      passwordCheck: this.state.passwordCheck,
    };

    // Register on backend
    axios
      .post("http://localhost:5000/user/register", registerData)
      .then((res) => {
        console.log("User created!");

        const loginData = {
          email: this.state.email,
          password: this.state.password,
        };

        // If we successfully registered then attempt login on backend
        axios
          .post("http://localhost:5000/user/login", loginData)
          .then((res) => {
            console.log("User logged in!");
            localStorage.setItem("auth-token", res.data.token);
            this.props.history.push("/inventory");
          })
          .catch((error) => {
            console.log(error.response.data.error);
            return;
          });
      })
      .catch((error) => {
        // If register failed then set erroMsg so we can display ErrorNotice
        error.response.data.error &&
          this.setState({ errorMsg: error.response.data.error });
      });
  }

  // Push user to /login
  toLogin() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="page">
          <div className="page-register">
            <h1 className="page-title">Register</h1>
            {/* IF WE GOT AN ERROR DURING REGISTRATION THEN RENDER ErrorNotice */}
            <div className="register-error-div">
              {this.state.errorMsg && (
                <ErrorNotice errorMsg={this.state.errorMsg} />
              )}
            </div>
            {/* SUBMISSION FORM */}
            <form className="form-register" onSubmit={(e) => this.submit(e)}>
              <h2 className="form-title">New Users</h2>
              {/* USERNAME INPUT */}
              <label className="username-label">Username*</label>
              <input
                className="username-input"
                type="text"
                name="username"
                onChange={(e) => this.change(e)}
                value={this.state.username}
                autoComplete="new-email"
              />
              {/* EMAIL INPUT */}
              <label className="email-label">Email*</label>
              <input
                className="email-input"
                type="email"
                name="email"
                onChange={(e) => this.change(e)}
                value={this.state.email}
                autoComplete="new-email"
              />
              {/* PASSWORD INPUT */}
              <label className="password-label">Password*</label>
              <input
                className="password-input"
                type="password"
                name="password"
                onChange={(e) => this.change(e)}
                value={this.state.password}
                autoComplete="new-password"
              />
              {/* CONFIRM PASSWORD INPUT */}
              <label className="passwordCheck-label">Confirm password*</label>
              <input
                className="passwordCheck-input"
                type="password"
                name="passwordCheck"
                onChange={(e) => this.change(e)}
                value={this.state.passwordCheck}
                autoComplete="new-passwordCheck"
              />
              <button type="submit">Submit</button>
            </form>
            {/* IF USER WANTS TO LOGIN INSTEAD */}
            <div className="go-login">
              <h2>Already have an account?</h2>
              <p>
                I think its hilarious u guys talk shit about lucas. u wouldnt
                say this shit to him at lan, hes jacked. not only that but he
                wears the freshest clothes, eats at the chillest restaurants and
                hangs out with the hottest dudes. yall are pathetic lol.
              </p>
              <button onClick={() => this.toLogin()}>Login</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
