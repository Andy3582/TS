import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import './contact.css'
import { useState } from "react"
import emailjs from '@emailjs/browser';
import {MdAddLocation} from  'react-icons/Md';
import  { MdOutlinePhoneAndroid    } from  'react-icons/Md';


import {MdAlternateEmail} from 'react-icons/Md';
import { IconContext } from "react-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";import { Component } from "react";
import { ContactUs } from './Form'

     
      






interface FlowProps{
  message:string;
  
                       }
 

      




    function Flow({message}:FlowProps) {
     return (
    <div  >
      <h1 className='media'>{message}Social Media:</h1>
      <p className="social-container">
        <a
          href="https://www.youtube.com"
          className="youtube social"
        > {message}
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
        > {message}
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com"
          className="instagram social"
        > {message}
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />{message}
        </a>
      </p>
    </div>
  );
}

createRoot(
  document.getElementById('flow2')
).render(<Flow message={''} />);







         
  
  
  
           

interface HelloProps{
  message:string;
  
                       }
 


function Hello({message}:HelloProps) {
    return(
      
       <a className='home'  href="/./index.html">{message}Home</a>
      
    
    );
  }
  
  
  createRoot(
    document.getElementById('root2')
  ).render(<Hello message={''} />)


  // Setting up the Variables
var bars: HTMLElement|null = document.getElementById("nav-action");
var nav: HTMLElement|null = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


let cursor :Element| null = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});


interface LocationProps{
  message:string;
  
                       }

function Location({message}:LocationProps) {
  return(
    
     <div className='contacts'>
      <h1 className='contacts2'>{message}Contact Us</h1>
      <IconContext.Provider value={{ size:"3.3rem", }}>
    <div>
      < MdOutlinePhoneAndroid className='phone'/>
      <h2 className='phone2'>{message}PHONE :</h2>
      <h3 className='phone3'>{message} 020 7730 1771</h3>
    <MdAlternateEmail className='mail'   />
      <h2 className='mail2'>{message}EMAIL :</h2>
      <h3 className='mail3'>{message} Coffee@Coffee.com </h3>
    <MdAddLocation  className='location'/>
      <h2 className='location2'>{message}ADRRESS :</h2>
      <h3  className='location3'>{message}114 Ebury St <br/> London <br/>SW1W 9NZ</h3>
     </div>
     </IconContext.Provider>
     </div>

      );
}


createRoot(
  document.getElementById('card')
).render(<Location message={''} />);








interface FooterProps{
  message:string

   }
  function Footer ({message}:FooterProps) {
  return (

       
       <footer className='footer'>
        {message}
        <text className='strawberryfooter'> &copy;2023 Strawberry Gardens.</text>
  
        <img className="way-to-pay-us"    src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/paypal_border.svg"></img>
       <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/mastercard.svg"    ></img>
         <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/visa.svg"   ></img>
        <img className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/maestro.svg"    ></img>
          <img  className="way-to-pay-us"    src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/klarna.svg"   ></img>
          <img  className="way-to-pay-us"     src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/discover.svg"></img>
          <img  className="way-to-pay-us"      src="https://cdn.getyourguide.com/tf/assets/static/payment-methods/googlepay.svg"></img>
        
        
         </footer>

       


  );
}
createRoot(
  document.getElementById('footer')
).render(<Footer message={''}/>)



function Menu()  {
  return(
    <div>
    <ul>
    <li className="shape-circle circle-one"><a href="/../src/nested/contact.html">Contact</a></li>
    <li className="shape-circle circle-two"><a href="/../src/nested/menu.html">Menu</a></li>
    <li className="shape-circle circle-three"><a href="/../src/nested/about.html">About Us</a></li>
    <li className="shape-circle circle-five">
      <a href="/./index.html">Home</a>
    </li>
  
  </ul>
    
  </div>
      );
  } 
 

createRoot(
  document.getElementById('nav')
).render(<Menu/>)




function Form() {
  return (
     <ContactUs />

  );
}
createRoot(
  document.getElementById('form')
).render(<Form/>)

