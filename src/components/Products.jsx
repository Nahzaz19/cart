import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const {
      getClasses,
      onDelete,
      onIncrement,
      onDecrement,
      formatButtonText,
      onDeleteOrAdd,
      resetButton,
      products,
    } = this.props;

    return (
      <div className="ms-5">
        {resetButton()}

        <button onClick={() => onDeleteOrAdd()} className={getClasses()}>
          {formatButtonText()}
        </button>

        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            formatButtonText={formatButtonText}
            onDeleteOrAdd={onDeleteOrAdd}
            resetButton={resetButton}
          />
        ))}
      </div>
    );
  }
}

export default Products;
