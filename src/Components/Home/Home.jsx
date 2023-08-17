import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
const Home = () => {
 useEffect(()=>{
  AOS.init({duration: 3000});
 },[]);
  return (
    
    <div className='container' id='home' data-aos='fade-up'>
        <div className='Content'>
    <div className='Homecontent' >
        <p><span> The Power <br /> of Good Advice <br /></span> <br />
        I'm a paragraph. Click here to add your <br />own text and edit me.</p><br />
        <button>Learn More</button></div>
    <div className='content1'><p></p></div>
    </div>

      </div>
    
  )
}

export default Home
