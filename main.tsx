import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createRoot} from 'react-dom/client'
import "@fontsource/dancing-script"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";


function Server() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
     <h6>  {message}      </h6>
  );

  
}
createRoot(
  document.getElementById('server')
).render(<Server />)
  



 


interface FlowProps{
 message:string;
 
                      }

  function Flow ({message}:FlowProps)  {
  return (
    <div>
      
      <p className="social-container">
        <a 
          href="https://www.youtube.com"
          className="youtube social"
        >  {message}
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
        </a> {message}
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
  );
}

createRoot(
  document.getElementById('flow')
).render(<Flow message={''}  />);






      
    
    
interface AppProps{
  message:string;
  
                       }


function App({message}:AppProps) {
  return(

    <div>
    {message}
  <img className='background'  src='https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg'></img>

     </div>
  );
}


createRoot(
  document.getElementById('root')
).render(<App message={''}/>)





// Setting up the Variables

var bars : HTMLElement | null
var nav:    HTMLElement | null
var bars = document.getElementById("nav-action");
var nav= document.getElementById("nav");


//setting up the listener
bars:  null
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked(  ) {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}



let cursor = document.querySelector(".cursor");
cursor : null

document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});






interface MainProps{
  message:string;
  
                       }




function  Main ({message}:MainProps)  {
  return (
    <article className="container">
    
    <h1 className='coffeeshop'>{message} COFFE SHOP & </h1 >
    <h1 className='strawberry'>{message}     Strawberry      Gardens</h1>
    <h1 className='bakerry'>{message} Bakerry</h1> 
    <h1 className= "openweek">{message}We're passionate about serving the Best Cup of Coffee. </h1>

      <p className='inspired'>{message} Inspired by Taste</p>
  </article>
  
  );

}

createRoot(
  document.getElementById('main')
).render(<Main message={''}/>)


function Menu()  {
  return(
    
    <ul>
    <li className="shape-circle circle-one"><a href="./src/nested/contact.html">Contact</a></li>
    <li className="shape-circle circle-two"><a href="./src/nested/menu.html">Menu</a></li>
    <li className="shape-circle circle-three"><a href="./src/nested/about.html">About Us</a></li>
    <li className="shape-circle circle-five">
      <a href="./index.html"></a>
    </li>
  </ul>
    
  
      );
  } 
 

createRoot(
  document.getElementById('nav')
).render(<Menu/>)


