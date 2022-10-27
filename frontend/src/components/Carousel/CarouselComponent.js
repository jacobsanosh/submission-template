import React from 'react'
import baseUrl from '../../utils/urls';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import {useEffect,useState} from 'react'

function CarouselComponent() {

  const [carousel,setCarousel]=useState([]);

  useEffect(()=>{
    axios.get(`${baseUrl}/trending/`).then((response)=>{
      console.log(response)
      setCarousel(response.data)
    })
  },[])

  return (
    <Carousel>
    { carousel.map((item)=>{
      return(
      <Carousel.Item key={item.id}>
        <img
          className="d-block w-100"
          src={item.org_image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })}
    </Carousel>
  )
}

export default CarouselComponent;