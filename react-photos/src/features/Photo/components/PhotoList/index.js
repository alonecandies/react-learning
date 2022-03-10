import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import PhotoCard from '../PhotoCard'
import { useSelector } from 'react-redux'
import { getAllPhotos } from 'features/Photo/photoSlice'

function PhotoList() {
  const photos = useSelector(getAllPhotos)

  return (
    <Container className='mt-4'>
      <Row>
        {photos.map(photo => (
          <Col key={photo.id} xs="12" md="6" lg="3">
            <PhotoCard photo={photo}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PhotoList