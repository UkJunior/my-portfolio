import react from "react"
import "./App.css"
import Home from "./page/home/home"

import Hero from "./components/hero/hero"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Banner from "./components/banner/banner"
import Skill from "./components/skill/skill"
import About from "./components/about/about"
import Slide from "./components/slide/slide"
import Project from "./components/project/project"


const App = () => {
  const carousal_img = [
    {
        id: 1,
        img: "https://source.unsplash.com/random/800x600"
    },
    {
        id: 2,
        img: "https://source.unsplash.com/random/800x600"
    },{
        id: 3,
        img: "https://source.unsplash.com/random/800x600"
    },{
        id: 4,
        img: "https://source.unsplash.com/random/800x600"
    },
    ]

          
return (
  <div className="App">
    <div className="App-header">

    <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  </div>
)}

export default App;
