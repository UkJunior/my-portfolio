import react from "react"
import "./App.css"
import Home from "./page/home/home"

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
   <Home/> 
  </div>
)}

export default App;
