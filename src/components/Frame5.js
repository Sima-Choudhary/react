import React from 'react'
import  './Frame5.css'
import  Cards3 from './Cards3.js'
import Group30 from '../images/Group30.png'
import Group31 from '../images/Group31.png'
import Group32 from '../images/Group32.png'

export default function Frame5() {
  return (
    <div className='container5'>
        <div className='content5'>
            <h1>Choose Your Plan</h1>
            <p>
            Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna. 
            Ultricies suspendisse a libero lorem sodales eget. Egestas in erat porttitor a cursus.
            </p>
        </div>
        <div className='choices1'>
          
          <div className='card3'>
          <Cards3 icon={Group30}  title="Regular" description="Learn is a basic character building process to start with full readiness" amount={300}/>
          </div>
        
          <div className='card3'>
          <Cards3  icon={Group31} title="Agency" description="Learn is a basic character building process to start with full readiness" amount={100}/>
          </div>
        
        
          <div className='card3'>
          <Cards3 icon={Group32} title="Private" description="Learn is a basic character building process to start with full readiness"  amount={200} />
          </div>
        

      </div>
      
    </div>
  )
}
