import React from 'react'
import logo from '../images/Gifted.png'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-around items-center'>
            <div>
                <img className='h-[15vh]' src={logo} alt="" />
            </div>
            <ul className='flex gap-10 align-center'>
                <li>Course</li>
                <li>Career</li>
                <li>About Us</li>
            </ul>
                
            <button className='btn'>Sign Up</button>
        </nav>
    </div>
  )
}

export default Nav