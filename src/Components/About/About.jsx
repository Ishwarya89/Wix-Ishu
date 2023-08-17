import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Sono:wght@200&display=swap');
</style>
const About = () => {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[]);
  return (
    <div>
    <div className='About' id='about' data-aos='fade-up'>
       <div className='AboutContent'>
        <div className='content'>
        <div className='Aboutheading1'>
        <p><span> ABOUT </span><br />Our Experts Are the Finest</p>
        </div>
        <div className='Aboutpara'>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. </p>
       <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
        </div>
        </div>
        </div>
       <div className='Aboutimg'>
        
       </div>
       
    </div>
    
    </div>
  )
}

export default About
