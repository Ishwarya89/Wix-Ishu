import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Clients from './Components/Clients/Clients'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    
    <div>
      
     
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Testimonials/>
      <Clients/>
      <Contact/>
    </div>
    
  )
}

export default App
