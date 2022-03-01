import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function ConditionalComponent(props) {
  const [display, setDisplay] = useState(false);
  let output =
    display ? <h3>ConditionalComponent</h3> : <h3>Nothing</h3>;
  return output;
}

ConditionalComponent.propTypes = {};

export default ConditionalComponent;
