import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <Product
          productId={product.productId}
          productName={product.productName}
          productPrice={product.productPrice}
          key={product.productId}
        ></Product>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      productName: PropTypes.string,
      productPrice: PropTypes.number,
    })
  ),
};

export default ProductList;
