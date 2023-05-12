import React from 'react'
import Header from "./components/Header/Header"
import bg from "../../public/photographer.jpg"
import Text from './components/Text'
import Arrow from './components/Arrow'

export default function page() {
  return (
    <div className="flex wrap bg-contain bg-right bg-no-repeat absolute inset-0 bg-gray-200 bg-opacity-50" 
    style={{backgroundImage: `url(${"photographer.jpg"})`, height:"120vh", width:"100%", backgroundSize:"60%" }} >
    <Header/>
    <Text/>
    <Arrow/>
    </div>
    
  )
}
