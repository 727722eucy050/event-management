import React from 'react'
//import './App.css'
import img from './images/bdaymain.png';
import img1 from './images/bdayinvi.jpg';
import img2 from './images/Bdayhall.webp';
import img3 from './images/bdaycake.jpeg';
import img4 from './images/bdaygift.webp';
import img5 from './images/bdayphoto.avif';
import img6 from './images/bdayfood.jpeg';
import img7 from './images/bdaybg3.jpg';
import img8 from './images/bdaybg1.jpg';
import img9 from './images/bdaybg2.jpg';
import './Bday.css';
const App = () => {
  return (
    <div>

      <div style={{backgroundImage:`url(${img7})`}}>
           <h1 className='bdayquote' style={{textAlign:'center',color:'black'}}>A BIRTHDAY IS A REMINDER TO CELEBRATE LIFE AS WELL AS TO UPDATE THE LIFE</h1>
           <img src={img} alt=" " className='Bdayimg'></img>
      </div>
      <div className='events'  style={{backgroundImage:`url(${img9})`}}>
           <h1 style={{textAlign:'center', color:'black'}}>BIRTHDAY PARTY SERVICES</h1>
           <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img1} alt=" " className='cakeimg'></img>
               <h2>INVITATION CARDS</h2>
               <p>We design attractive and warm invitation cards for every occasion you plan to celebrate. </p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img2} alt=" " className='cakeimg' ></img>
               <h2>PARTY HALL</h2>
               <p>We select best hall suited for your budget, provided with traditional seating arrangements.  </p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img3} alt=" " className='cakeimg'></img>
               <h2>CAKE ARRANGEMENT</h2>
               <p>We provide freshly made mouth-watering cakes. You can choose your favourite flavour cake from our menu.</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img4} alt=" " className='cakeimg'></img>
               <h2>RETURN GIFTS</h2>
               <p>the best way to say "thank you" in a memorable way to your guests for coming, and sharing a special occasion.</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img5} alt=" " className='cakeimg'></img>
               <h3>PHOTO AND VIDEO SHOOT</h3>
               <p>Our professional photographer capture every feeling, action, love and gives touch to every single pic.</p>
            </div>
            <div className='cake' style={{backgroundImage:`url(${img8})`}}>
               <img src={img6} alt=" " className='cakeimg'></img>
               <h2>CATERING SUPPLY</h2>
               <p>We create a unique taste in your heart with our catering service and food is served with love.</p>
            </div>

      </div>
    </div>
  )
}

export default App