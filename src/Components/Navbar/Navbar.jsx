import React from 'react'
import './Navbar.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
// import graph1 from '../Assets/graph1.webp'
const Navbar = () => {
  return (
    <div className='Homepage'>
    <div className='Navbar'>
       
    <div className='Navbar1'>
        <p><b> BizBud</b></p>

    </div>
    <div className='Navbar2'>
 
        <ul><a href="#home"><li>Home</li></a></ul>
        <ul><a href="#Services" ><li>Services</li></a></ul>
        <ul><a href="#about"><li>About</li></a></ul>
        <ul><a href="#Testimonials"><li>Testimonials</li></a></ul>
        <ul><a href="#client"><li>Client</li></a></ul>
        <ul><a href="#contact"><li>Contact</li></a></ul>
        
    </div>
    <div className='Navbar3'>
        <button>Call now</button>
    </div>
    
    </div>

    </div>
  )
}

export default Navbar
