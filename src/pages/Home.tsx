import React from 'react'
import Slider from '../Components/Slider'
import InfoCards from '../Components/InfoCards'
import OurFounder from '../Sections/OurFounder'
import ContactSection from '../Sections/ContactSection '
import ImageSlider from '../Sections/SliderSection'
import ServiceSection from '../Sections/ServiceSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <InfoCards/>
      <ServiceSection/>
      <OurFounder/>
      <ContactSection/>
    </div>
  )
}

export default Home