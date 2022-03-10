import React from 'react'
import Banner from 'components/Banner'
import Images from 'constants/images'
import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import PhotoList from 'features/Photo/components/PhotoList'

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Awesome Photos" backgroundUrl={Images.BG1} />
      <Container className="text-center">
        <Link to="add">
          <Button color="primary" className="mt-3">
            Add a photo
          </Button>
        </Link>
      </Container>
      <PhotoList/>
    </div>
  )
}

export default Main
