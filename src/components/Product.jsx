import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <>
        <button className="btn btn-secondary m-2">+</button>
        <button className="btn btn-secondary m-2">-</button>
        <button className="btn btn-danger m-2">X</button>
      </>
    );
  }
}

export default Product;
