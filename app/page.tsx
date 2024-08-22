import React from 'react'
import Navbar from './Navbar/page'
import FirstSection from './FirstSection/page'
import SecondSection from './SecondSection/page'
import Carousel from '@/components/Logos'
export default function page() {
  return (
      <div>
        <Navbar/>
        <FirstSection/>
        <Carousel/>
        <SecondSection/>
      </div>
  )
}
