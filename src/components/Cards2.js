import React from 'react'
 import Group26 from '../images/Group26.png'

 
export default function Cards2(probs) {
  return (
    <div className='card2'>
        <div><img src={probs.picture} alt='card' /></div>
        <div className='card-info'>
          <h1>{probs.title}</h1>
          <p>{probs.description}</p>
        </div>  
        <div className='card-play'>
            <div id='button3'>
              <img src={Group26} alt='play'></img>
              <p>15x Lesson</p></div>
            <div className='desc'>
              <p className='number'>{probs.count}</p>  
              <p>join members</p> 
            </div> 
        </div>    
    </div>
  )
}
