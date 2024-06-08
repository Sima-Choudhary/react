import React from 'react'

export default function Cards2(probs) {
  return (
    <div className='card2'>
      <div>
        <img src={probs.picture} alt='card' />
      </div>
        <h1>{probs.title}</h1>
        <p>{probs.description}</p>  
        <div>
            <button>15x Lesson</button>
            <p></p>    
        </div>    
    </div>
  )
}
