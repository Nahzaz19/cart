import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <div className="container">
        {this.ResetButton()}
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
