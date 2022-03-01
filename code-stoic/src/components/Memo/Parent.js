import React from "react";
import PropTypes from "prop-types";
import Child from "./Child";
import {useState} from "react";

function Parent(props) {
   const [parentCount, setParentCount] = useState(0);

   const [childCount, setChildCount] = useState(0);

  return (
    <div>
      Parent: {parentCount}
      <Child childCount={childCount} setChildCount={setChildCount}/>
      <button onClick={()=>{setParentCount(parentCount+1)} }>P+</button>
      <button onClick={()=>{setChildCount(childCount+1)} }>C+</button>
    </div>
  );
}

Parent.propTypes = {};

export default Parent;
