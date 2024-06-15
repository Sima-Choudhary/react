import React from 'react'
import './Frame4.css'
import Cards2 from './Cards2.js'
import picture1 from '../images/picture1.png'
import picture2 from '../images/picture2.png'
import picture3 from '../images/picture3.jpg'



export default function Frame4() {
  return (
    <div className='container4'>
        <div className='intro2'>
            <h1>Our Popular Courses</h1>
            <p>
            Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna.
             Ultricies suspendisse a libero lorem sodales eget. Egestas in erat porttitor a cursus.
            </p>
        </div>
        <div className='content4'>
          <div id='card'>
            <Cards2 title="Manufacture" description="Magnis accumsan vel morbi urna pellentesque lacus aliquam. 
            Dignissim orci ipsum lorem quis sit." picture={picture1} count="2000+"/>
          </div>
          <div id='card'>
          <Cards2 title="Real Estate" description="It is a business that makes a profit by selling, renting
           and developing real estate, houses and buildings." picture={picture2} count="2500+"/>
          </div>
          <div id ='card'>
          <Cards2 title="Industrial Company" description="Lectus sed suspendisse viverra eu a sit risus 
          dignissim. Amet auctor tincidunt risus et sed fermentum." picture={picture3} count="3000+"/>
          </div>
          <div id ='card'>
          <Cards2 title="Industrial Company" description="Lectus sed suspendisse viverra eu a sit risus 
          dignissim. Amet auctor tincidunt risus et sed fermentum." picture={picture3} count="1500+"/>
          </div>
        </div>
      
    </div>
  )
}
