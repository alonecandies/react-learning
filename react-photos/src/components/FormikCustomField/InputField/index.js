import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'

function InputField(props) {
  const { field, form, label, type, placeholder, disabled } = props
  const { name } = field
  
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        type={type}
        {...field}
        placeholder={placeholder}
        disabled={disabled}
        id={name}
        invalid={form.touched[name] && form.errors[name] ? true : false}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
}

export default InputField
