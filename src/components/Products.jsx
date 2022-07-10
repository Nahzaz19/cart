import { getProduct } from "../Services/fakeProducts";
import React, { Component } from "react";

class Products extends Component {
  state = getProduct;

  render() {
    return <div>ds</div>;
  }
}

export default Products;
