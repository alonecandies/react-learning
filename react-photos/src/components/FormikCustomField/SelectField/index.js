import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props
  const { name, value, onChange } = field
  const selectedOption = options.find(option => option.value === value)
  let handleSelectedOptionChange = selectedOption => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    }
    onChange(changeEvent)
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        className={`${form.touched[name] && form.errors[name] ? 'is-invalid' : ''}`}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
}

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
}

export default SelectField
