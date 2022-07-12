import { getProduct } from "../Services/fakeProducts";
import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = { products: getProduct() };

  handleDelete = (id) => {
    const products = this.state.products.filter((product) => product.id !== id);
    this.setState({ products });
  };

  handelIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handelDecrement = (product) => {
    if (product.quantity === 0) return;
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleReset()}
          className="btn btn-primary m-3"
        >
          Reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
