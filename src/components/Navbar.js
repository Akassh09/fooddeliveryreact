import React from "react";
import "../css/home.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Food Delivery System
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="http://localhost:3000/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              className="btn btn-danger"
              href="http://localhost:3000/addrestaurant"
            >
              Signup for Restaurant
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <a
            id="nav-btn"
            className="btn btn-outline-success"
            href="http://localhost:3000/login"
          >
            Login
          </a>

          <a
            id="nav-btn"
            className="btn btn-outline-success"
            href="http://localhost:3000/reslogin"
          >
            Restaurant Login
          </a>

          <a
            id="nav-btn"
            className="btn btn-outline-danger"
            href="http://localhost:3000/add"
          >
            Signup
          </a>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
