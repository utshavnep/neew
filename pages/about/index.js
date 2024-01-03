import React from 'react'
import Herosection from '@/components/Herosection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function About() {
  return (
    <>
    <Header/>
      <Herosection title ={'OUR STORY'} imageUrl = {'/about1.svg'}/>
    <Footer/>
    </>
  )
}

export default About