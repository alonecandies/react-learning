import React from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'

function Modal(props) {
  return createPortal(
    <div>Modal</div>,
      document.getElementById('modal')
  )
}

Modal.propTypes = {}

export default Modal
