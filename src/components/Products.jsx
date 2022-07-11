import { getProduct } from "../Services/fakeProducts";
import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = { products: getProduct() };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.products.map((product) => (
                <Product product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
