import React from 'react'
import "./home.css"
import Hero from '../../components/hero/hero'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Skill from '../../components/skill/skill'
import About from '../../components/about/about'
import Slide from '../../components/slide/slide'
import Project from '../../components/project/project'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default Home;
