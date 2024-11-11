import React from 'react'
import { Container } from 'react-bootstrap';
import MasonryGallery from '../components/MasonryGallery/MasonryGallery';

const Gallery = () => {
  window.scrollTo(0, 0);
  return (
    <div className='my_gallery'>
      <Container>
        <div className="subheading text-center mb-5">
          <h2><span>Gallery</span></h2>
          <div className="line m-auto"></div>
        </div>
        <MasonryGallery />
      </Container>
    </div>
  )
}

export default Gallery