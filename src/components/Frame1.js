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
                        <h2>Gyan Deep Computer Education</h2>
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
                                <img src='../images/Icon-Search.png' alt='Search' />
                                </a></li>
                            <li><a href='/' >
                                <img src='../images/Icon-User.png' alt='User' />
                                </a></li>
                        </ul>
                    </div>
                </nav>
                <div className='intro'>
                    <div className=' description'>
                        <div>
                            <h1 >Learning  for  The  future</h1>
                            <p >NisiQuisque nunc At Cras Tristique.  Lectus scelerisque sed id nisi vitae venenatis.</p>
                        </div>
                        <div className='response'> 
                            <button type="button"  >Register Now </button>
                            <button type="button" > </button>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='imagination'>
                        <div className='rectangle1'></div>
            </div>
            <div className='imagination2'>
                        <div className='rectangle2'></div>
            </div>
        </div>
      </div>
    </div>
  )
}
