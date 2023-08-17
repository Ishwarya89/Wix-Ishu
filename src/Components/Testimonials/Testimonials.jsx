import React, { useEffect } from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  useEffect(()=>{
    AOS.init({duration: 3000});
   },[]);
  return (
   
    <div className='Testimonialcontainer' id='Testimonials' data-aos='fade-up'>
        <div className='Testimonials'>
        <p>TESTIMONIALS <br />
        <h1>“I'm a testimonial. Click to <br /> edit me and add text”</h1>
        </p>
        <div className='Names'>
            
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Names"
      >
        <SwiperSlide> <p><b> Louise Maxwell </b></p>  <p>company name</p><br /> <br /></SwiperSlide>
        <SwiperSlide> <p> <b> Louise Maxwell </b></p> <p>company name</p> </SwiperSlide>
        <SwiperSlide> <p> <b> Louise Maxwell </b></p> <p>company name</p> </SwiperSlide>
        
      </Swiper>
     
           
          
        </div>
     </div>
    </div>
  )
}

export default Testimonials
