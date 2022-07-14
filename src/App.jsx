import Products from "./components/Products";
import { getProduct } from "./Services/fakeProducts";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
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

  //HEJ ALADIN! Vilken metod för handleDeleteAll är en bättre lösning enligt dig, lösning 1 (som är kommenterad) elle lösning 2?

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

  getDeleteorAddButtonClasses = () => {
    let classes = "fw-bold m-2 btn btn-";
    classes += this.state.products.length === 0 ? "success" : "danger";
    return classes;
  };

  formatButtonText = () => {
    return this.state.products.length === 0 ? "Add all" : "Delete all";
  };

  resetButton = () => {
    if (this.state.products.length === 0) return;
    return (
      <button
        onClick={() => this.handleReset()}
        className="fw-bold btn btn-primary m-3"
      >
        Reset
      </button>
    );
  };
  render() {
    return (
      <>
        <Navbar productCount={this.state.products.length} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onDeleteOrAdd={this.handleDeleteOrAdd}
          getClasses={this.getDeleteorAddButtonClasses}
          resetButton={this.resetButton}
          onIncrement={this.handelIncrement}
          onDecrement={this.handelDecrement}
          formatButtonText={this.formatButtonText}
        />
        ;
      </>
    );
  }
}

export default App;
