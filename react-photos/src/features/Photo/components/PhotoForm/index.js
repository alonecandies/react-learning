import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { Formik, Form, FastField } from 'formik'
import InputField from 'components/FormikCustomField/InputField'
import SelectField from 'components/FormikCustomField/SelectField'
import RandomPhotoField from 'components/FormikCustomField/RandomPhotoField'
import * as Yup from 'yup'

function PhotoForm(props) {
  const { initialPhotoValue } = props
  const initialValues = {
    title: initialPhotoValue.title||'',
    category: initialPhotoValue.category||null,
    photo: initialPhotoValue.photo||null,
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    category: Yup.number().required('Category is required').nullable(),
    photo: Yup.string().when('category', {
      is: 1,
      then: Yup.string().required('Photo is required').nullable(),
      otherwise: Yup.string().nullable().notRequired(),
    }),
  })

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
      {({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
        <Form>
          <FastField
            name="title"
            component={InputField}
            label="Title"
            placeholder="Enter title"
          />
          <FastField
            name="category"
            component={SelectField}
            label="Category"
            placeholder="Select category"
            options={PHOTO_CATEGORY_OPTIONS}
          />
          <FastField
            name="photo"
            component={RandomPhotoField}
            label="Photo"
          />
          <FormGroup>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              {isSubmitting && <Spinner size="sm" className="me-2" />}
              {initialPhotoValue?"Edit":"Add to album"}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialPhotoValue: PropTypes.object,
}

PhotoForm.defaultProps = {
  onSubmit: () => {},
  initialPhotoValue: {},
}

export default PhotoForm
