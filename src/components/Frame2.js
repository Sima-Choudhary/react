import React from 'react'
import './Frame2.css'
export default function Frame2() {
  return (
    <div className='container1'>
        <div className='intro2'>
            <h1>Advantages Of The Institute</h1>
            <p>
            Elit ut  arcu fringilla  felis  malesuada  imperdiet. Id quis
             scelerisque  quis neque eu enim. Morbi  nisi  tellus  nec elit. Nunc lorem  sit rhoncus 
             sit nibh nulla
            </p>
        </div>
        <div className='choices'>
            <div>
            <img src={require('../images/Group 11.png')} alt='img'  />
            </div>
            <div>
            <img src={require('../images/Group 12.png')} alt='img'  />
            </div>
            <div>
            <img src={require('../images/Group 10.png')} alt='img'  />
            </div>
        

        </div>
      
    </div>
  )
}
