import React from "react";

const NavBar = () => {
  const logout = () => {
    localStorage.clear();
  };

  let logged = "";
  if (localStorage.token != null) {
    if (localStorage.role === "1") {
      logged = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/addservice">
                Add Service
              </a>
              <a className="dropdown-item" href="/editservice">
                Update Services
              </a>
              <a className="dropdown-item" href="/transaction">
                Transactions
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={() => logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      logged = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/service">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={() => logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    }
  } else {
    logged = (
      <ul className="navbar-nav ml-auto">
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <a className="navbar-brand" href="/">
        <img className="logo" src="/images/logo-white.png" alt="" />
        Cut 'N' Shave
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
        <span>
          <i className="fas fa-angle-double-down toggler-icon"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {logged}
      </div>
    </nav>
  );
};

export default NavBar;
