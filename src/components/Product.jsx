import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2">
          {this.props.product.quantity}
        </button>
        <button className="btn btn-secondary m-2">+</button>
        <button className="btn btn-secondary m-2">-</button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger m-2"
        >
          X
        </button>
      </div>
    );
  }
}

export default Product;
