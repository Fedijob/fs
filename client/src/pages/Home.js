import React from 'react'
import CarouselFadeExample from '../components/CarouselFadeExample'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
const Home = () => {
  return (
  
    <>
    {/* <CarouselFadeExample /> */}
    <video src="\video.mp4" width="100%" controls="true" autoplay="true"></video>
    <Gallery/>
    <Footer /></>

  )
}

export default Home