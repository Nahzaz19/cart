import Products from "./components/Products";
import { getProduct } from "./Services/fakeProducts";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  state = { products: getProduct() };

  render() {
    const {
      handelDecrement,
      handelIncrement,
      handleDelete,
      handleDeleteOrAdd,
      formatButtonText,
      resetButton,
      getDeleteorAddButtonClasses,
    } = this;

    const { products } = this.state;

    return (
      <>
        <Navbar
          productCount={
            products.filter((product) => product.quantity > 0).length
          }
        />
        <Products
          products={products}
          onDelete={handleDelete}
          onDeleteOrAdd={handleDeleteOrAdd}
          getClasses={getDeleteorAddButtonClasses}
          resetButton={resetButton}
          onIncrement={handelIncrement}
          onDecrement={handelDecrement}
          formatButtonText={formatButtonText}
        />
      </>
    );
  }

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

  handleDeleteAll = () => {
    const products = [];
    this.setState({ products });
  };

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
    let classes = "fw-bold ms-3  btn btn-";
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
}

export default App;
