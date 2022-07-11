import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-1">
              <button className="btn btn-primary badge fw-bold m-2">
                {this.props.product.quantity}
              </button>
            </div>
            <div class="col">
              <button
                onClick={() => this.props.onIncrement(this.props.product)}
                className="btn btn-secondary fw-bold m-2"
              >
                +
              </button>
              <button className="btn btn-secondary fw-bold m-">-</button>
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
}

export default Product;
