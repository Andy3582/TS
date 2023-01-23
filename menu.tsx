import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import './menu.css'
import YouTube from "react-youtube";
import VideoPlayer from "react-background-video-player";


interface VideoProps{
	message:string;
	autoPlay : boolean;
    muted: boolean;
  }
  



function Video({message,autoPlay,muted}:VideoProps) {
  return (
    <div className='video' >

		<h4 className='withcoffee'>{message} Day is better with coffee </h4>
      <div>
		{autoPlay}{muted}
      <VideoPlayer
        
        src={
          "https://player.vimeo.com/external/348727902.sd.mp4?s=63efcb965da235a74984f641ebce548640279d52&profile_id=164&oauth2_token_id=57447761"
        
        }
        autoPlay={true}
        muted={true}  />
       </div>
    </div>
  );
}

createRoot(
  document.getElementById('video')
).render(<Video message={''} autoPlay={true} muted={true}/>)





interface HomeProps{
	message:string;
  }

function Home({message}:HomeProps) {
  return(
    
     <a className='home' href="/./index.html" >{message}Home</a>
    
    
  );
}


createRoot(
  document.getElementById('root2')
).render(<Home message={''}/>)








  // Setting up the Variables
  
var bars: HTMLElement| null = document.getElementById("nav-action");
var nav: HTMLElement | null = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}




interface MenuProps{
	message:string;
  }

  


function  Menu({message}:MenuProps )   {
  return(

  <div className="content">
   {message}
	<h1 className='strawberrygardens'>Strawberry Gardens</h1>

	<address>
		{message}
			
		<a href="4125550100">
			<svg viewBox="-200 50 600 600" width="20" title="phone-alt">
				<path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" transform="rotate(25)" />
			</svg>
			020 7730 1771
		</a>
	</address>

	<ul className="boxes">
		{message}

		<li className="box">
			<h2>Coffee</h2>
			<p className="prices"><span>Small<em>£2</em></span> <span>Large<em>£4</em></span></p>
			<dl>
				<dt>House Blend</dt>
				<dd className="description">
					<p>Smoky, strong, and assertive, just like us.</p>
				</dd>
				<dt>Organic French Roast</dt>
				<dd className="description">
					<p>Smooth and mellow with hints of molasses.</p>
				</dd>
				<dt>Organic Decaf</dt>
				<dd className="description">
					<p>Full bodied and rich, we promise you won't miss the caffiene.</p>
				</dd>
			</dl>
		</li>
    
		<li className="box">
			<h2>Espresso Drinks</h2>
			<p className="prices"><span>Small<em>£3</em></span> <span>Large<em>£5</em></span></p>
			<dl>
				<dt>Machiatto </dt>
				<dd className="description">
					<p>Espressso and steamed milk, served in a demitasse cup. <span className="note">(Size Small Only)</span></p>
				</dd>
				<dt>Latte</dt>
				<dd className="description">
					<p>Espresso with steamed milk, and sometimes a little art on top. </p>
				</dd>
				<dt>Mocha</dt>
				<dd className="description">
					<p>Espresso with steamed chocolate milk and whipped cream. Also available with white chocolate milk.</p>
				</dd>
				<dt>Americano</dt>
				<dd className="description">
					<p>1 shot espresso, two shots hot water.</p>
				</dd>
			</dl>
		</li>

		<li className="box">
			<h2>Tea</h2>
			<p className="tip">Served to brave people in our notorious antique tea cups.</p>
			<p className="prices"><span>Per Cup<em>£2</em></span> <span className="note"><em>£200</em>if you break the cup</span></p>
			<dl>
				<dt>Earl Grey </dt>
				<dd className="description">
					<p>Black tea fragranced with bergamot.</p>
				</dd>
				<dt>Ginger Hibiscus</dt>
				<dd className="description">
					<p>Floral, tart, and spicy. Caffeine free.</p>
				</dd>
				<dt>Cascade Green</dt>
				<dd className="description">
					<p>A blend of green teas hand selected by our master teamaker.</p>
				</dd>
				<dt>Chamomile</dt>
				<dd className="description">
					<p>Soothing and slightly sweet. Try it with honey! Caffeine free.</p>
				</dd>
			</dl>
		</li>

		<li className="box">
			<h2>From the Bakery</h2>
			<p className="prices"><span>Cookies<em>£2</em></span> <span>Muffins &amp; Pastries<em>£3</em></span></p>
			<dl>
				<dt>Mallory's Famous Snickerdoodles </dt>
				<dd className="description">
					<p>Creamy cinnamony goodness made from scratch with our founder Mallory's prizewinning recipe.</p>
				</dd>
				<dt>Oatmeal Cookie</dt>
				<dd className="description">
					<p>Packed with rolled oats, raisins, and cranberries, these monster cookies are (almost) good for ya!</p>
				</dd>
				<dt>Mixed Berry Muffins</dt>
				<dd className="description">
					<p>Filled with the best berries of the season and topped with a crumb crust. </p>
				</dd>
				<dt>Croissant</dt>
				<dd className="description">
					<p>Our oversized croissants are buttery, flaky, and usually all sold out by 7 a.m.</p>
				</dd>
			</dl>
		</li>

	</ul>

	<table className="hours">
		<thead>
			{message}
			<tr>
				<th >
					<svg width="40" viewBox="0 0 800 800">
						
									
							
					</svg>
					Hours
				</th>
			</tr>
		</thead>
		<tbody>
			{message}
			<tr>
				<td>Mon. - Thurs.</td>
				<td>6 a.m. - 9 p.m.</td>
			</tr>
			<tr>
				<td>Fri. - Sat.</td>
				<td>6 a.m. - 11 p.m.</td>
			</tr>
			<tr>
				<td>Sunday</td>
				<td>8 a.m. - 2 p.m.</td>
			</tr>
		</tbody>
	</table>

</div>  


  );

}

createRoot(
  document.getElementById('menu')
).render(<Menu message={''}/>)


let cursor:Element|null = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});




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
  

   
   interface LoyaltyProps{
	message:string;
  }

 
     function Loyalty({message}:LoyaltyProps)  {
	return( 

          
           <h4 className='loyaltycard'>{message} Don't  forget to pick up a <br/>  loyalty card <br/>Buy 9 hot drinks and get <br/> the 10th FREE !   </h4>
		   
          );

       }
	   createRoot(
		document.getElementById('loyalty')
	  ).render(<Loyalty message={''}/>)


	  function Nav()  {
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
	  ).render(<Nav/>)


	 
	  
	  


	  