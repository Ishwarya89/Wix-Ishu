import React, { useEffect } from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import circle from '../Assets/circle.jpg'
import tick from '../Assets/tick.jpg'
import square from '../Assets/square.jpg'
import {BsDot} from 'react-icons/bs'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
const Services = () => {
  useEffect(()=>{
    AOS.init({duration:3000});
  },[]);
  return (
    <div className='Services' id='Services' data-aos='fade-up'>
      <div className='Serviceheading'>
      <p>SERVICES</p>
      <h1>Taking Your Business to <br />the Next Level </h1>
      </div> 
      <div className='images'>
        <div className='image1'>
<img src={circle} alt="circle" />
 <p> <b>Business Plans</b> </p>
<p>I'm a paragraph. Click here to add <br />your own text and edit me.</p>
</div>
 <div className='image1'>
      <img src={tick} alt="tick" />
      <p> <b>Accounting services</b> </p>
<p>I'm a paragraph. Click here to add  <br />your own text and edit me.</p>
      </div>
      <div className='image1'> 
      <img src={square} alt="square" />
      <p><b>Finance optimization</b> </p>
<p>I'm a paragraph. Click here to add <br /> your own text and edit me.</p>
      </div>
      </div>
      <div className='Numbers'>
        <h3>We’re Good with Numbers</h3>
        <div className='Count'>
          <div className='Count1'>
          <p> <span>15 </span> <br />Years of Experience</p>
          </div><BsDot/>
          <div className='Count1'>
          <p><span>36</span> <br/>
            Qualified Experts</p>
          </div><BsDot/>
          <div className='Count1'>
          <p><span>120</span><br/>
            Clients every year</p>
          </div><BsDot/>
          <div className='Count1'>
          <p> <span>9</span> <br/>
            Intl. partners</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
