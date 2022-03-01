import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  return (
    <li>
      <h1>Product{props.productId} </h1>
      <h2>{props.productName}</h2>
      <h3>{props.productPrice}</h3>
    </li>
  );
}

Product.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
};

export default Product;
