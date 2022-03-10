import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import './PhotoCard.scss'
import { useDispatch } from 'react-redux'
import { removePhotoById } from 'features/Photo/photoSlice'
import { useNavigate } from 'react-router-dom'

PhotoCard.propTypes = {
  photo: PropTypes.object,
}

PhotoCard.defaultProps = {
  photo: {},
}

function PhotoCard(props) {
  const { photo } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEditClick = () => {
    navigate(photo.id)
  }

  const handleRemoveClick = () => {
    dispatch(removePhotoById(photo.id))
  }

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
