import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar";

/* Mutations */
import { graphql } from "react-apollo";
import { loginMutation } from "../../graphql/mutations";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRedirected, setIsRedirected] = useState(false);

  if (isRedirected) {
    return <Redirect to="/" />;
  }

  const login = (e) => {
    e.preventDefault();
    props
      .loginMutation({
        variables: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        console.log(response);

        let data = response.data.login;

        if (data != null) {
          localStorage.setItem("id", data.id);
          localStorage.setItem("role", data.role);
          localStorage.setItem("token", data.token);
          // console.log(localStorage)

          setIsRedirected(true);
        } else {
          Swal.fire({
            title: "Login Failed",
            text:
              "Either your email or password is incorrect, please try again.",
            type: "error",
          });
        }
      });
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid login-main-container">
        <div className="row mt-4 justify-content-md-center">
          <div className="col-lg-4 col-md-6">
            <div className="row register-header">
              <h3>Login</h3>
            </div>
            <div className="hr-black"></div>
            <form onSubmit={(e) => login(e)} className="login-form">
              <div className="form-group">
                Email
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="fullname"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                Password
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>
              <div>
                Don't have an account? <a href="/register">Register here</a>
              </div>
              <div className="text-center">
                <button className="btn form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default graphql(loginMutation, { name: "loginMutation" })(LoginPage);
