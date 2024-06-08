import React from 'react'
import './Frame3.css'
import vector1 from '../images/Vector1.png'
import vector2 from '../images/Vector2.png'
import Rectangle10 from '../images/Rectangle10.png'
import Rectangle11 from '../images/Rectangle11.png'
import Group19 from '../images/Group19.png'
import Group22 from '../images/Group22.png'

export default function Frame3() {
  return (
    <div className="container3">
      <div className='content1'>
        <div className='sub-intro'>
              <h1>
              Help Learn Business More Quickly and Efficiently
              </h1>
              <p>Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna. 
                Ultricies suspendisse a libero lorem sodales eget. Egestas in erat porttitor a cursus.</p>
              <div><button id ='button2'></button></div>
            </div>       
        <div className='sub-description'>
            <div>
                <img id='bg1' src={vector1} alt='img'  />
                <img id='photo1' src={Rectangle11} alt='img'  />
                <img id='photo2' src={Rectangle10} alt='img'  />
            </div>
        </div>
      </div>
      <div className='content2'>
         <div className='sub-description'>
                <img id='bg2' src={vector2} alt='img'  />
                 <img id='photo3' src={Group19} alt='img'  />
                 <img id='photo4' src={Group22} alt='img'  />
        </div>
        <div className='sub-intro'>
              <h1>
              Growing Business Market Is Getting Better
              </h1>
              <p>Morbi ac sit vel nisl. Scelerisque viverra tempus tortor facilisis magna. 
                Ultricies suspendisse a libero lorem sodales eget. Egestas in erat porttitor a cursus.</p>
          
              <div><button id ='button2'></button></div>   
            </div>
      </div>
    </div>
  )
}
