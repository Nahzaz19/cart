import { getProduct } from "../Services/fakeProducts";
import React, { Component } from "react";
import Product from "./Product";
class Products extends Component {
  state = getProduct;

  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default Products;
