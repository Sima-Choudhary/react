import React from 'react'
import './Frame1.css';
export default function Frame1() {
  return (
    <div>
        <div className='main-header'>
            <div className='info'>
            <div className='header'>
                <nav>
                    <div className='Box1'>
                        <h2>Gyan  Deep  Computer  Education</h2>
                    </div>
                    <div className='Box2'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>Gallery</a></li>
                            <li><a href='/'>Students</a></li>
                            <li><a href='/'>course</a></li>
                        </ul>
                    </div>
                    <div className='Box3'>
                        <ul>
                            <li><a href='/'>
                            <img src={require('../images/Icon-Search.png')} alt='img'  />
                                </a></li>
                            <li><a href='/' >
                                <img src={require('../images/Icon-User.png')} alt='img'  />
                                </a></li>
                        </ul>
                    </div>
                </nav>
                <div className='intro'>
                    <div className=' description'>
                        <div>
                            <h1 >Learning  For  The  Future</h1>
                            <p >NisiQuisque nunc  At Cras  Tristique.  Lectus  scelerisque  sed id  nisi  vitae venenatis.</p>
                        </div>
                        <div className='response'> 
                            <button type="button" id='register' >Register Now </button>
                            <img src={require('../images/Group-5.png')} alt='img'  />
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='imagination1'>
                        <div className='rectangle1'>
                        <img src={require('../images/Rectangle-3.png')} alt='img'  />
                        </div>
            </div>
            <div className='imagination2'>
                        <div className='rectangle2'>
                        <img src={require('../images/Rectangle-4.png')} alt='img'  />
                        </div>
            </div>
        </div>
      </div>
    </div>
  )
}
