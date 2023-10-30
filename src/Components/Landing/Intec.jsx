import React from 'react'
import dash from '../images/dash.png'

const intec = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='ml-[10%] gap-4 flex flex-col'>
            <h2 className='text-4xl font-bold'>We Breed And Reward Intellectuals</h2>
            <p>Earn And Learn Unlimitedly As A Memeber...</p>
            <button className='text-white bg-sky-700 p-3 w-[30%]'>Get Started</button>
        </div>
        <div >
            <img className='h-[70vh]' src={dash} alt="" />
        </div>
    </div>
  )
}

export default intec