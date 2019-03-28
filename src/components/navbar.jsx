import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalCounter}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
