import React, { useEffect } from 'react'
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {RiLinkedinFill,RiFacebookFill,RiTwitterFill} from 'react-icons/ri'
const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[]);
  return (
    <div className='Contact' id='contact' data-aos='fade-up'>
        <div className='Contact1'>
          <div className='ContactContent'>
            <div className='Contactheading'>
                 <div className='Contactheading1'>
                   <p><span className='head'> CONTACT </span><br />
                   <b> Let's Work Together</b></p>
                  </div>
     
                  <div className='Contactdetails'>
                      <p>500 Terry Francine St. San Francisco, CA 94158<br/> info@mysite.com<br/>Tel: 123-456-7890</p>

                  </div>
                  <div className='ContactIcon'>
                    <div className='linkedin'>
                       <RiLinkedinFill/>
                    </div>
                  <div className='facebook'>
                      <RiFacebookFill/>
                  </div>
                  <div className='twitter'>
                     <RiTwitterFill/>
                  </div>
             </div>
            </div>
          </div>
   
          <div className='ContactForm'>
            <div className='buttoncontainer'>
                  <div className='Formbutton'>
                     <div className='FormNames'>
  
                        <div className='firstname'>
                         <p> First Name</p>
                         <input type="text" />
                        </div>
                        <div className='firstname'>
                          <p> Last Name</p>
                            <input type="text" name="name" />
                       </div>
                      </div>
                      <div className='email'>
                        <p> Email *</p>
                         <input type="email" />
                       </div>
                       <div className='message'>
                          <p>Leave us a message</p>
                            <input type="text" />
                       </div>

                  </div>
                  <div className='btn1'>
                     <div className='submitbutton'>
                          <button>submit</button>
                      </div>
                  </div>
            </div>
         </div>   
      </div>
     
     <div className='Map'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21577796.480099823!2d-117.87564747913818!3d45.61798518330418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88542778b0675b8f%3A0xa1efa47c70e302ff!2sBizbud!5e0!3m2!1sen!2sin!4v1692197740458!5m2!1sen!2sin" title='map' ></iframe>
     </div>
    </div>
  )
}

export default Contact
