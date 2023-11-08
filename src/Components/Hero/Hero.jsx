import React from 'react'
import heroimg from '../images/illustration-intro.svg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        
            <h1>Bring everyone together to build
           better products.</h1>
         
           <p>Manges makes it simple for software teams to plan day to day tasks while keeping larger team goals in view.</p>
           <button className="btn btn-red">Get Stared</button>
       </div>
       <div className="hero-img">
        <img src={heroimg} alt="" />
       </div>
     
    </div>
  )
}

export default Hero