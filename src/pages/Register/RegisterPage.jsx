import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar";

/* Mutations */
import { graphql } from "react-apollo";
import { addUserMutation } from "../../graphql/mutations";

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  if (redirectToLogin) {
    return <Redirect to="/login?register=true" />;
  }

  const registerNewUser = (e) => {
    // alert(firstName);
    e.preventDefault();

    props
      .addUserMutation({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          username: username,
          password: password,
          mobileNo: mobileNo,
        },
      })
      .then((response) => {
        // this is the callback query of addUser from graphql addUserMutation
        const userAdded = response.data.addUser;

        if (userAdded) {
          Swal.fire({
            title: "Registration Successful",
            text: "You will now be redirected to the login.",
            icon: "success",
          }).then(() => {
            setRedirectToLogin(true);
          });
        } else {
          Swal.fire({
            title: "Registration Failed",
            text: "The server encountered an error.",
            icon: "error",
          });
        }
      });
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid register-main-container">
        <div className="row mt-4 justify-content-md-center">
          <div className="col-lg-4 col-md-6 register-container">
            <div className="row register-header">
              <h3>Register</h3>
            </div>
            <div className="hr-black"></div>
            <form
              onSubmit={(e) => registerNewUser(e)}
              className="register-form"
            >
              <div className="form-group">
                First Name:
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                Last Name:
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                Email:
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                Username:
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                Mobile No.:
                <input
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  name="fullname"
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                Password:
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
              </div>
              <div className="register-btn-container">
                <button type="submit" className="btn form-btn register-btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default graphql(addUserMutation, { name: "addUserMutation" })(
  RegisterPage
);
