import React from 'react'
import './Frame3.css'
export default function Frame3() {
  return (
    <div className="container2">
      <div className='content1'>
        <div classname='sub-intro1'>
            <div><img src={require('../images/Group 13.png')} alt='img'  /></div>
            <div><img src={require('../images/Group 23.png')} alt='img'  /></div>
        </div >
        <div classname='sub-intro2'>
            <div>
                <img id='bg1' src={require('../images/Vector 1.png')} alt='img'  />
                <img id='photo1' src={require('../images/Rectangle 11.png')} alt='img'  />
                <img id='photo2' src={require('../images/Rectangle 10.png')} alt='img'  />
                

            </div>
        </div>
      </div>
      <div className='content2'>
        <div className='sub-info3'>
                <img id='bg2' src={require('../images/Vector 2.png')} alt='img'  />
                <img id='photo3' src={require('../images/Group 19.png')} alt='img'  />
                <img id='photo4' src={require('../images/Group 22.png')} alt='img'  />
        </div>
        <div className='sub-info4'>
            <div><img src={require('../images/Group 25.png')} alt='img'  /></div>
            <div><img src={require('../images/Group 23.png')} alt='img'  /></div>
        </div>

      </div>
    </div>
  )
}
