import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './about.css'
import {createRoot} from 'react-dom/client'
import "@fontsource/dancing-script"
import YouTube from "react-youtube"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

interface FlowProps{
  href:string;
  
                       }



  function Flow({href}:FlowProps) {
  return (
    <div>
      
      <p className="social-container">
        <a
          href="https://www.youtube.com"
          className="youtube social"
        > {href}
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
        >{href}
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com"
          className="instagram social"
        > {href}
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          {href}
        </a>
      </p>
    </div>
  );
}

createRoot(
  document.getElementById('media')
).render(<Flow href={''} />);








let cursor:HTMLElement|null = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});







interface HelloProps{
  message:string;
  
                       }



function Hello({message}:HelloProps) {
    return(
      
        
        <a className='home'  href="/./index.html">
         {message}    Home
       </a>
      
      
    );
  }
  
  
  createRoot(
    document.getElementById('root')
  ).render(<Hello message={''} />)



  
  // Setting up the Variables
var bars:HTMLElement| null = document.getElementById("nav-action");
var nav:HTMLElement|null = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);



function barClicked(): void {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}



  interface ApsProps{
  videoId:string;
  videoOptions:number;
                       }




    function App({videoId}:ApsProps) {
       

       const videoOptions = {
        playerVars: {
       autoplay:  1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        loop: 1,
      }
    };
    return (
      
      <div className="video">
        {videoId}
        <YouTube videoId="HgfjZ4SWJxk" opts={videoOptions} />
        
      </div>
      
    );
  }
  
  createRoot(
    document.getElementById('video')
  ).render(<App videoId={''} videoOptions={0}    />)


  interface VoucherProps{
    message:string;
                         }
  
  
  
  
  function Voucher({message}:VoucherProps)  {
    return (
         
        <div>
          {message}
      <button className="snipcart-add-item"
      
  data-item-id="GIFT CARD £100" 
    data-item-price="100"
  data-item-url="/paintings/starry-night"
  data-item-description="Our Gift Coffee Subscriptions make awesome gifts for veterans of the bean just as much as for total newbies just starting to discover coffee."
  data-item-image="data:image/png;base64,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"
  data-item-name="Gift Card - £100"
  data-item-custom1-name="Gift"
  data-item-custom1-type="checkbox"/>
     
   </div>


    );
}

createRoot(
    document.getElementById('voucher')
  ).render(<Voucher message={''} />)


    
  
    window.SnipcartSettings = {
    publicApiKey: 'YjJmZWRiNTctNjA4NC00OWY3LTgzOWYtMjU1MmFmYjVkMmI4NjM3OTMyNDg0MDI3ODgwNDU1',
    loadStrategy: 'on-user-interaction',
    modalStyle: "side",
    
}   ,

    




(()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),n=document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`,t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();


       
interface AboutProps{
  message:string;
                       }




     function  About({message}:AboutProps)  {
      return(
      <section className="about-section">
        
        <div className="container">
             
            <div className="row"> 
                             
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    
                    <div className="inner-column">
                        
                        <div className="sec-title">
                            <span className="aboutcoffee">{message}-- About Our Coffee Shop --</span>
                        </div>
                        <h2 className="since">{message}"Since 2015 we have been serving  coffe of the best quality"</h2>

                        <div className="text">{message}Strawberry Gardens is a specialist coffee shop on the corner of Ebury Street. We have a very good reputation for producing one of the finest cups of coffee in the West End. Our drinks are made freshly from Allpress roast beans, using the best equipment on the market and by our expert Barista. Strawberry Gardens House is at 114 Ebury Street, London, SW1W 9NZ.</div>
                      <div className="text">{message}Our following in Belgravia has grown steadily since we opened. Beautifully made espresso based cappuccinos, flat whites and lattes can be ordered or, for the varietal enthusiast, customers can drink any of our list coffees; which we make as an individual ground filter drinks. Our coffee beans come from Brazil, Columbia, Guatemala, Peru, Nicaragua, Costa Rica, Dominican Republic, Ethiopia, Kenya, India, Sumatra… and Cuba!
                      </div>
                        <div className="btn-box">
                            <a href="/../src/nested/contact.html" className="theme-btn btn-style-one">{message}Contact Us</a>
                        </div>
                    </div>
                </div>

                
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>{message}We are open 7 days a week</h2>
                        <span>{message}Call Us For Booking</span>
                      </div>
                      {message}
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img   className='shop'   src="https://i.pinimg.com/originals/47/f1/1b/47f11b2977b2ae8be02f001cb503f1e9.jpg" alt=""></img></a></figure>
                     
                    </div>
                </div>
              
            </div>
           <div className='section bg1'>
                            <span className="title">{message}Looking for pefect gift for any occasion ?</span>
                            <p className="title2">{message}-- Click on card to buy --</p>
                           
                              
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div className="text1">{message}
          Freshness is the key to our coffee, and often to ensure that all coffee in stock is less than two weeks away from the roaster – the optimum time in which to enjoy the coffee, although it will keep for much longer.

And our loose teas are of the finest quality, perfectly brewed and served as tea should be. Best enjoyed with our home baked cakes, loafs, muffins and more.

Delicious food is offered all day, from breakfast boiled eggs, to lunchtime pies, to afternoon cakes and summertime early evening nibbles. Choose from a range of freshly baked cakes, brownies and flapjacks along with our delicious homemade Poilâne toasties; prepared on the premises throughout the day.

                 </div>
              
              </div>
       </div>
    </section>
 );
}
  
createRoot(
  document.getElementById('about')
).render(<About message={''}/>)



interface BaristasProps{
  message:string;
                       }




function Baristas({message}:BaristasProps)  {
  return(
      <div>
     <h2 className='baristas'>{message}Our Baristas are highly trained </h2>
     <section >
      <h3 className='openinghours'>{message}Opening Hours</h3>
      <h6 className='openinghours1'>{message}Mon. - Thurs.  6 a.m - 9 p.m</h6>
      <h6 className='openinghours1'>{message}Fri. - Sat.  6 a.m - 11 p.m</h6>
      <h6 className='openinghours1'>{message} Sunday 8 a.m - 2p.m  </h6>
      

     </section>
     </div>
  );

}
createRoot(
  document.getElementById('baristas')
).render(<Baristas message={''}/>)


    

interface FooterProps{
  message:string;
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
    
    
    <ul>
    <li className="shape-circle circle-one"><a href="/../src/nested/contact.html">Contact</a></li>
    <li className="shape-circle circle-two"><a href="/../src/nested/menu.html">Menu</a></li>
    <li className="shape-circle circle-three"><a href="/../src/nested/about.html">About Us</a></li>
    <li className="shape-circle circle-five">
      <a href="/./index.html">Home</a>
    </li>
  </ul>
  
      );
  } 
 

createRoot(
  document.getElementById('nav')
).render(<Menu/>)



