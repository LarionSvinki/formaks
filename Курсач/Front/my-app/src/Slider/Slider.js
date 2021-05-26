import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider1 from '../img/slider1.jpg';

export function SliderOne() {
    return(
<div style= {{left: '0', right:'0', margin: '0 0 0 0'}}>
<Carousel>
  <Carousel.Item>
    <img style={{maxHeight: '40rem'}}
      className="d-block w-100 h-100"
      src={Slider1}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{maxHeight: '40rem'}}
      className="d-block w-100"
      src={require('../img/slider2.jpg')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{maxHeight: '40rem'}}
      className="d-block w-100"
      src={require('../img/slider3.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}