import React from 'react'
import "./home.css"
import Hero from '../../components/hero/hero'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import About from '../../components/about/about'
import Slide from '../../components/slide/slide'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home;
