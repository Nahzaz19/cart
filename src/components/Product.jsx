import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <button className={this.getBadgeClasses()}>
                {this.props.product.quantity}
              </button>
            </div>
            <div className="col">
              <button
                onClick={() => this.props.onIncrement(this.props.product)}
                className="btn btn-secondary fw-bold m-2"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.product)}
                className={this.getDisabledClasses()}
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.product.id)}
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
    classes += this.props.product.quantity === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Product;
