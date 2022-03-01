import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

function Child(props) {
   console.log('Child render')
  return (
    <div>Child: {props.childCount}</div>
  )
}

Child.propTypes = {}

export default React.memo(Child);
