import React from 'react'
import './Frame2.css'
import Cards1 from './Cards1.js'
import Group8 from '../images/Group8.png'
import Group6 from '../images/Group6.png'
import Group7 from '../images/Group7.png'

export default function Frame2() {
  return (
    <div className='container2'>
        <div className='intro2'>
            <h1>Advantages Of The Institute</h1>
            <p>
            Elit ut  arcu fringilla  felis  malesuada  imperdiet. Id quis
             scelerisque  quis neque eu enim. Morbi  nisi  tellus  nec elit. Nunc lorem  sit rhoncus 
             sit nibh nulla
            </p>
        </div>
        <div className='choices'>
          
            <div className='card'>
            <Cards1 icon={Group8}  title="Daily Analysis" description="Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at condimentum viverra."/>
            </div>
          
            <div className='card'>
            <Cards1  icon={Group6} title="Strategy And Planning" description="Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at condimentum viverra."/>
            </div>
          
          
            <div className='card'>
            <Cards1 icon={Group7} title="Creative Solution" description="Purus nibh ultrices velit in et imperdiet. Etiam luctus auctor at condimentum viverra." />
            </div>
          

        </div>
      
    </div>
  )
}
