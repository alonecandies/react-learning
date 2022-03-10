import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import './RandomPhoto.scss'
import getRandomImageUrl from 'utils/getRandomImageUrl'

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = await getRandomImageUrl()
      onImageUrlChange(randomImageUrl)
    }
  }

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button outline name={name} color="primary" onBlur={onRandomButtonBlur} onClick={handleRandomPhotoClick}>
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img src={imageUrl} alt="random mg" onError={e => e.target.src = getRandomImageUrl()} />
        )}
      </div>
    </div>
  )
}

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: () => {},
  onRandomButtonBlur: () => {},
}

export default RandomPhoto
