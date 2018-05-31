import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav
            className="navbar navbar-default navbar-fixed-side-left"
            role="navigation"
          >
            <div className="navbar-header">
              <button
                type="button"
                className="pull-left navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Desplegar navegacion</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="navbar-logobox">
                <a href="/">
                  <img
                    className="navbar-logo"
                    alt="Logo"
                    src="http://artsy.github.io/images/react-native/artsy_react_logo.svg"
                  />
                </a>
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="navbar-listitem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navbar-listitem">
                  <Link to="/bio">Bio</Link>
                </li>
                <li className="navbar-listitem">
                  <Link to="/description">Description</Link>
                </li >
                <li className="navbar-listitem">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
