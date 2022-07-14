import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <div className="container">
        {this.props.resetButton()}
        <button
          onClick={() => this.props.onDeleteOrAdd()}
          className={this.props.getClasses()}
        >
          {this.props.formatButtonText()}
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
