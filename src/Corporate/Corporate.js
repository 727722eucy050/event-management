import React from 'react'
import './Corporate.css'
import img from './Images/corpbg3.jpeg';
import img1 from'./Images/corphall1.jpg';
import img2 from './Images/corpbg1.jpeg';
import img3 from './Images/corpimg2.jpeg';
import img4 from './Images/corphall.jpeg';
import img5 from './Images/corpflo.jpeg';
import img6 from './Images/corpsound.jpeg';
import img7 from './Images/corppho.jpg';
import img8 from './Images/corpcatering.jpg';
import img9 from './Images/corpaccomodation.jpg';

const App = () => {
  return (
    <div  style={{backgroundImage:`url(${img})`}}>
      <div className='toolbar'></div>
      <div>
           <h1 className='quote' style={{textAlign:'center'}}> To achieve great things, two things are needed: a plan and not quite enough time.</h1>
           <img src={img1} alt=" " className='corporateimg'></img>
      </div>
      <div className='events'style={{backgroundImage:`url(${img2})`,color:'white'}}>
           <h1 style={{textAlign:'center'}}>CORPORATE EVENT MAAGEMENT SERVICE</h1>
           <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img4} alt=" " className='cimg'></img>
               <h2>Hall Arrangement</h2>
               <p>We select best hall suited for your budget, provided with perfect seating arrangements. </p>
            </div>
            <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img5} alt=" " className='cimg'></img>
               <h2>Gifts And Bouquet</h2>
               <p>We arrange useful gifts and attractive bouquets for the guests and employees.</p>
            </div>
            <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img6} alt=" " className='cimg'></img>
               <h2>Sound effects</h2>
               <p>. We offer microphones, speakers, mike systems, podiums, mixer, amplifier, signal processors etc</p>
            </div>
            <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img7} alt=" " className='cimg'></img>
               <h2>Photograpy</h2>
               <p>We arrange photograpers and videographers to capture yuor day at the best way and make that day memorable to you. </p>
            </div>
            <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img8} alt=" " className='cimg'></img>
               <h2>Catering Supply</h2>
               <p>Our caterers can deliver the party food. We can also make necessary plates, cups, napkins delivered to your hall. </p>
            </div>
            <div className='corp' style={{backgroundImage:`url(${img3})`}}>
               <img src={img9} alt=" " className='cimg'></img>
               <h2>Accomodation</h2>
               <p>The hotel has luxurious rooms or suites, meeting space, trendy restaurants & bars, free WiFi and a rooftop pool minutes from the airport. </p>
            </div>
      </div>
    </div>
  )
}

export default App