import React from 'react'
import PropTypes from 'prop-types'
import RandomPhoto from 'features/Photo/components/RandomPhoto'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'

function RandomPhotoField(props) {
  const { field, form, label } = props
  const { name, value, onBlur } = field
  const handleImageUrlChange = newImageUrl => {
    form.setFieldValue(name, newImageUrl)
  }
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className={`${form.touched[name] && form.errors[name] ? 'is-invalid' : ''}`}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
  label: '',
}

export default RandomPhotoField
