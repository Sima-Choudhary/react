import React from 'react'


export default function Cards1(probs) {
  return (
    <div className='card1'>
      <div>
        <img src={probs.icon} alt='card' />
      </div>
        <h1>{probs.title}</h1>
        <p>{probs.description}</p>      
    </div>
  )
}
