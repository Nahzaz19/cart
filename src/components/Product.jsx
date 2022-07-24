import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, product, onDecrement, onDelete } = this.props;

    return (
      <div>
        <div className="ms-2">
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses()}>
                {this.formatQuantity()}
              </span>
            </div>
            <div className="col-2 ps-3">
              <button
                onClick={() => onIncrement(product)}
                className="btn btn-secondary fw-bold me-2"
              >
                +
              </button>
              <button
                onClick={() => onDecrement(product)}
                className={this.getDisabledClasses()}
              >
                -
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="btn btn-danger fw-bold m-2"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getDisabledClasses() {
    let classes = "btn btn-secondary m-2 ";
    classes += this.props.product.quantity === 0 ? "disabled" : "fw-bold";
    return classes;
  }

  getBadgeClasses() {
    let classes = "m-2 badge fw-bold btn btn-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    return this.props.product.quantity === 0
      ? "Zero"
      : this.props.product.quantity;
  }
}

export default Product;
