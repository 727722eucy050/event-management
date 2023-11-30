import React from 'react'
import './Marriage.css'
import img from './images/marriagepic.jpg';
import img1 from './images/mrginvi.jpg';
import img2 from './images/treeimg.webp';
import img3 from './images/stage.jpeg';
import img4 from './images/hall.jpeg';
import img5 from './images/seer.jpeg';
import img6 from './images/dj.jpeg';
import img7 from './images/melam.jpeg';
import img8 from './images/henna.jpeg';
import img9 from './images/beauty.jpeg';
import img10 from './images/food.jpeg';
import img11 from './images/vehi.jpeg';
import img12 from './images/photo.jpeg';
import gold from './images/mrgback.jpg';
import glit from './images/color.jpg';
import bg from './images/bg.jpeg';
const App = () => {
  return (
    <div  style={{backgroundImage:`url(${gold})`}}>
      <div className='toolbar'></div>
      <div>
           <h1 className='mrgquote'>A BIRTHDAY IS A REMINDER TO CELEBRATE LIFE AS WELL AS TO UPDATE THE LIFE</h1>
           <img src={img} alt=" " className='Mrgimg'></img>
      </div>
      <div style={{backgroundImage:`url(${glit})`}}>
      <div className='events' style={{backgroundImage:`url(${glit})`}}>
           <h1  style={{textAlign:'center'}}>Marriage organizer</h1>
           <div className='invi' style={{backgroundImage:`url(${bg})`}}>
               <img src={img1} alt=" " className='invimg'></img>
               <h2>Invitation Cards</h2>
               <p>We design attractive and warm invitation cards for every occasion you plan to celebrate. </p>
            </div>
            <div className='tree' style={{backgroundImage:`url(${bg})`}}>
               <img src={img2} alt=" " className='treeimg'></img>
               <h2>Plantain Tree Arrangement</h2>
               <p>We arrange banana leaf arrangements infront of the house , halls,and whereever you need. </p>
            </div>
            <div className='stage' style={{backgroundImage:`url(${bg})`}}>
               <img src={img3} alt=" " className='stageimg'></img>
               <h2>Stage Decoration</h2>
               <p>We make stage decorations according to your needs and facilities. </p>
            </div>
            <div className='hall'style={{backgroundImage:`url(${bg})`}}>
               <img src={img4} alt=" " className='hallimg'></img>
               <h2>Hall Decoration</h2>
               <p>We decorate the hall and perfectly make the seating arrangements according to number of guests you have invited. </p>
            </div>
            <div className='seer'style={{backgroundImage:`url(${bg})`}}>
               <img src={img5} alt=" " className='seerimg'></img>
               <h2>Seer Plates</h2>
               <p>We seer plates for the marriage with decorated coconuts, fruits, aarathi plates etc </p>
            </div>
            <div className='dj'style={{backgroundImage:`url(${bg})`}}>
               <img src={img6} alt=" " className='djimg'></img>
               <h2>Sound And Music</h2>
               <p>We will be highlighting portable sound systems that provide full, clear sound. We offer microphones, speakers, mike systems, podiums, mixer, amplifier, signal processors etc </p>
            </div>
            <div className='melam'style={{backgroundImage:`url(${bg})`}}>
               <img src={img7} alt=" " className='melamimg'></img>
               <h2>Wedding Music</h2>
               <p>Traditional groups that play Indian classical music tend to include instruments such as a Mela Vaaithiyam etc. </p>
            </div>
            <div className='henna'style={{backgroundImage:`url(${bg})`}}>
               <img src={img8} alt=" " className='hennaimg'></img>
               <h2>Mehandhi</h2>
               <p>The beautiful bride-to-be adorns her hands and feet with striking designs made out of henna. </p>
            </div>
            <div className='beauty'style={{backgroundImage:`url(${bg})`}}>
               <img src={img9} alt=" " className='beautyimg'></img>
               <h2>Beauticians</h2>
               <p> We appoint professional & talented hair stylist and makeup artist, mehandi artist. </p>
            </div>
            <div className='food'style={{backgroundImage:`url(${bg})`}}>
               <img src={img10} alt=" " className='foodimg'></img>
               <h2>Catering Services</h2>
               <p>Our caterers can deliver the party food. We can also make necessary plates, cups, napkins & decorations delivered to your hall. </p>
            </div>
            <div className='vehicle'style={{backgroundImage:`url(${bg})`}}>
               <img src={img11} alt=" " className='vehiimg'></img>
               <h2>Vehicle Arrangement</h2>
               <p> We decorate cars or marriage vehicle with different items according to theme and colour combination. </p>
            </div>
            <div className='photo'style={{backgroundImage:`url(${bg})`}}>
               <img src={img12} alt=" " className='photoimg'></img>
               <h2>Photograpers</h2>
               <p>We arrange photograpers and videographers to capture yuor day at the best way and make that day memorable to you. </p>
            </div>
      </div>
      </div>
    </div>
  )
}

export default App