import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

function FunctionEvent(props) {
   const [count,setCount] = useState(0);
   const handleClick = () => {
      setCount(count + 1);
      console.log("Clicked")
   }
  return (
    <React.Fragment>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </React.Fragment>
  );
}

FunctionEvent.propTypes = {}

export default FunctionEvent
