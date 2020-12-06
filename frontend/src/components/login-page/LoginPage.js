// Npm libraries
import React, { Component } from "react";
import axios from "axios";

// Components
import ErrorNotice from "../error-notice/ErrorNotice";
import NavBar from "../nav-bar/NavBar";

// CSS
import "./LoginPage.css";

// Login user on this page [restricted]
class LoginPage extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      errorMsg: undefined,
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.toRegister = this.toRegister.bind(this);
  }

  // On input field change update corresponding state
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // On submit attempt login
  submit(e) {
    // Prevent refresh
    e.preventDefault();

    const data = { email: this.state.email, password: this.state.password };

    // Attempt login on backend
    axios
      .post("http://localhost:5000/user/login", data)
      .then((res) => {
        localStorage.setItem("auth-token", res.data.token);
        this.props.history.push("/inventory");
      })
      .catch((error) => {
        // If login failed then set erroMsg so we can display ErrorNotice
        error.response.data.error &&
          this.setState({ errorMsg: error.response.data.error });
        return;
      });
  }

  // Push user to /register
  toRegister() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="page">
          <div className="page-login">
            <h1 className="page-title">Login</h1>
            {/* IF WE GOT AN ERROR DURING REGISTRATION THEN RENDER ErrorNotice */}
            <div className="login-error-div">
              {this.state.errorMsg && (
                <ErrorNotice errorMsg={this.state.errorMsg} />
              )}
            </div>
            {/* SUBMISSION FORM */}
            <form className="form-login" onSubmit={(e) => this.submit(e)}>
              <h2 className="form-title">Existing Users</h2>
              {/* EMAIL INPUT */}
              <label className="email-label">Email*</label>
              <input
                className="email-input"
                type="email"
                name="email"
                onChange={(e) => this.change(e)}
                value={this.state.email}
              />
              {/* PASSWORD INPUT */}
              <label className="password-label">Password*</label>
              <input
                className="password-input"
                type="password"
                name="password"
                onChange={(e) => this.change(e)}
                value={this.state.password}
              />
              <button type="submit">Submit</button>
            </form>
            {/* IF USER WANTS TO REGISTER INSTEAD */}
            <div className="go-register">
              <h2>Don't have an account?</h2>
              <p>
                I think its hilarious u guys talk shit about lucas. u wouldnt
                say this shit to him at lan, hes jacked. not only that but he
                wears the freshest clothes, eats at the chillest restaurants and
                hangs out with the hottest dudes. yall are pathetic lol.
              </p>
              <button onClick={() => this.toRegister()}>Register</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
