import React from 'react'
import comma from '../images/comma.png';
import star from '../images/Star.png';
export default function Card4(props) {
  return (
    <div className='cards4-design'>
      <img src={comma} alt='comma'></img>
      <p>{props.info}</p>
      <div className='ratting'>
        <div><img src={props.person} alt='person'></img></div>
        <div>
        <h5>{props.Name}</h5>
        <div>
            <img src={star} alt='star1'></img>
            <img src={star} alt='star2'></img>
            <img src={star} alt='star3'></img>
            <img src={star} alt='star4'></img>
            <img src={star} alt='star5'></img>
            
        </div>
        </div>
      </div>    
        </div>
    
  )
}
