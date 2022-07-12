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

  //HEJ ALADIN! Vilken metod för handleDeleteAll är en bättre lösning enligt dig, lösning 1 elle 2? Detta om vi utgår från att jag hade gjort uppgiften precis enligt instruktionerna utan att lägga till de extra metoderna som handleAddAll o.s.v

  //LÖSNING 1
  // handleDeleteAll = () => {
  //   const products = [];
  //   this.setState({ products });
  // };

  //LÖSNING 2
  handleDeleteAll = () => {
    let products = this.state.products.map((product) => ({
      ...product,
    }));
    products.length = 0;
    this.setState({ products });
  };

  //-------------------------------------------------------------------------------------------------------
  handleAddAll = () => {
    const products = getProduct();
    this.setState({ products });
  };

  handleDeleteOrAdd = () => {
    return this.state.products.length === 0
      ? this.handleAddAll()
      : this.handleDeleteAll();
  };

  getDeleteorAddButtonClasses() {
    let classes = "fw-bold m-2 btn btn-";
    classes += this.state.products.length === 0 ? "success" : "danger";
    return classes;
  }

  formatButtonText() {
    return this.state.products.length === 0 ? "Add all" : "Delete all";
  }

  render() {
    if (this.state.products.length === 0) return;

    return (
      <div>
        <button
          onClick={() => this.handleReset()}
          className="fw-bold  btn btn-primary m-3"
        >
          Reset
        </button>
        <button
          onClick={() => this.handleDeleteOrAdd()}
          className={this.getDeleteorAddButtonClasses()}
        >
          {this.formatButtonText()}
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
