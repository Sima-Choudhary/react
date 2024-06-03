import React from 'react'
import  './Frame5.css'
export default function Frame5() {
  return (
    <div className='container1'>
        <div className='intro2'>
            <h1>Choose Your Plan</h1>
            <p>
            Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna. 
            Ultricies suspendisse a libero lorem sodales eget. Egestas in erat porttitor a cursus.
            </p>
        </div>
        <div className='choices'>
            <div>
            <img src={require('../images/Group 40.png')} alt='img'  />
            </div>
            <div>
            <img src={require('../images/Group 42.png')} alt='img'  />
            </div>
            <div>
            <img src={require('../images/Group 41.png')} alt='img'  />
            </div>
        

        </div>
      
    </div>
  )
}
