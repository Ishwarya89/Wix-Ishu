import React, { useEffect } from "react";
import "./Clients.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
<style>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
</style>
const Clients = () => {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[]);
  return (
    <div className="ClientsContainer" id="client" data-aos='fade-up'>
        <div className="Clientheading">
     <p className="clint">OUR HAPPY CLIENTS</p>
     <br />
     <p className="line"></p>
     </div>
     <div className="Clients">
        <div className="Client1">
            <p className="p">Bar</p><p className="p1"> 121</p>
        </div>
        <div className="Client2">
            <p>HUNTER</p>
        </div>
        <div className="Client3">
            <p>Loco Graphix</p>
        </div>
        <div className="Client4">
            <p>Mid Dreams</p>
        </div>
        <div className="Client5">
            <p>DAVE JONES</p>
        </div>
     </div>
    </div>

  );
};

export default Clients;
