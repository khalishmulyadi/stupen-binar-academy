import React, { useState } from "react";
// import { button, Container, nav, navbar, navDropdown } from "react-bootstrap";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavbarDefault.css";

export const NavbarDefault = (props) => {
  const [isActive, setActive] = useState("false");
  const sideBarControl = () => {
    setActive(!isActive);
  };
  return (
    <div className="wrapper">
      <nav id="sidebar" className={isActive ? "active" : ""}>
        <div className="sidebar-header">
          <h3>Binar Car Rental</h3>
          <strong>BCR</strong>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a href="dashboard">
              <i className="bi bi-house-fill"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a href="cars">
              <i className="bi bi-truck"></i>
              Cars
            </a>
          </li>
        </ul>
      </nav>

      <div id="content" className={isActive ? "active" : ""}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid top_navbar">
            <button type="button" id="sidebarCollapse" className="btn btn-light" onClick={sideBarControl}>
              <i className="bi bi-list"></i>
            </button>
            <form className="d-flex ms-auto">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle me-4 text-dark" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-fill"></i>
                  <span>Admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-dashboard">{props.content}</div>
      </div>
    </div>
  );
};
