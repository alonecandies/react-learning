import React from 'react'
import './styles.scss'
import Banner from 'components/Banner'
import PhotoForm from 'features/Photo/components/PhotoForm'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, updatePhotoById } from 'features/Photo/photoSlice'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getPhotoById } from 'features/Photo/photoSlice'

function AddEdit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { photoId } = useParams()
  const editPhoto = useSelector(state => getPhotoById(state, photoId))

  let handleSubmit = values => {
    if (!photoId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(addPhoto(values))
          navigate('/photos')
        }, 1500)
      })
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(
            updatePhotoById({
              id: photoId,
              ...values,
            })
          )
          navigate('/photos')
        }, 1000)
      })
    }
  }
  return (
    <div className="photo-edit">
      <Banner title={photoId?"Edit this photo":"Pick a amazing photo"}></Banner>
      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} initialPhotoValue={editPhoto?editPhoto:{}} />
      </div>
    </div>
  )
}

AddEdit.propTypes = {}

export default AddEdit
