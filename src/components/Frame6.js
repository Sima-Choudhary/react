import React from 'react'
import './Frame6.css'
import Card4 from './Card4.js'
import Person1 from '../images/person1.png';
import Person2 from '../images/person2.png';
export default function Frame6() {
  return (
    <div className='container6'>
      <div className='content5'>
      <div className="intro2">
        <h1>What <br></br>Our Clients say</h1>
        <p>Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna. 
            Ultricies suspendisse a libero lorem sodales eget.</p>
      </div>
    </div>
      <div className='choice3'>
          
          <div className='card4'>
            <Card4 info="At in pellentesque integer netus enim purus. Tempor nulla porta pretium venenatis sem tellus duis. Rhoncus eu lectus interdum tellus pellentesque."  person={Person1} Name='Narendra Gates'/>
          </div>
        
          <div className='card4'>
            <Card4 info="Eu lorem lobortis malesuada suspendisse volutpat viverra penatibus vulputate sit. Morbi et malesuada ipsum etiam in vitae. Urna mi id viverra nullam eget."  person={Person2} Name='Silvia Putriani'/>
          </div>
        

      </div>
      </div>
      
    
  )
}
