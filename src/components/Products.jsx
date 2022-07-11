import { getProduct } from "../Services/fakeProducts";
import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = { products: getProduct() };

  handleDelete = (id) => {
    const products = this.state.products.filter((product) => product.id !== id);
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.products.map((product) => (
                <Product
                  key={this.state.products.id}
                  product={product}
                  onDelete={this.handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
