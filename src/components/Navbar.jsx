import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light mb-2">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 fs-3 h1">
              Navbar
              <span className="badge rounded-pill bg-secondary m-2">
                {this.props.productCount}
              </span>
            </span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
