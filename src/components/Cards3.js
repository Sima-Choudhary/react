import React from 'react'


export default function Cards3(probs) {
  return (
    <div className='card3'>
      <div>
        <img src={probs.icon} alt='card' />
      </div>
      <h1>{probs.title}</h1>
      <p>{probs.description}</p>      
      <div className='prise'>
          <p>$</p>
          <h4 >{probs.amount}</h4>
          <p>.00</p>
      </div>
      <button className='button4'>Join Now</button>
    </div>
  )
}
