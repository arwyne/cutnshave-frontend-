import React from "react";

const NavBar = () => {
  const logout = () => {
    localStorage.clear();
  };

  let logged = "";
  if (localStorage.token != null) {
    logged = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/login" onClick={() => logout()}>
            Logout
          </a>
        </li>
      </ul>
    );
  } else {
    logged = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Barber
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {logged}
      </div>
    </nav>
  );
};

export default NavBar;
