import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';


function CarouselFadeExample() {
  return (
    <Container className='carousel'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://m.media-amazon.com/images/I/41NPDYvJJ-L.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://m.media-amazon.com/images/I/41NPDYvJJ-L.jpg'
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/41NPDYvJJ-L.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default CarouselFadeExample;