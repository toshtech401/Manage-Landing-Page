import React from 'react'
import pic from '../images/pic.png'
import pics from '../images/pics.png'
import phone from '../images/phone.png'
import phones from '../images/phones.png'

const Work = () => {
  return (
    <div className='flex flex-col items-center w-[100%] mt-4'>
        <div>
            <h3 className='font-bold text-2xl border-solid border-black border-2 p-2 flex items-center justify-center'>How It's Works</h3>
        </div>
        <div className='flex justify-around w-[100%] pl-[15%] pr-[15%] gap-[40px]'>
            <div>
                <img className='h-[50vh]' src={pic} alt="" />
                <p className='w-[55%]'>nigerians and other african countries can come and challenge one another.in a daily active quiz competition and stand a chance to win cash prize more than #100,000 weekly/monthly respectively or it’s equivalent in uSDT.</p>
            </div>
            <div>
                <img className='h-[50vh]' src={pics} alt="" />
                <p className='w-[90%]'>you will acquire valuable skills and knowledge in blockchain, De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on.</p>
            </div>
        </div>
        <div className='flex justify-around w-[100%] pl-[15%] pr-[15%] gap-[40px] items-center'>
            <div>
                <img className='h-[50vh]' src={phone} alt="" />
                <p className='w-[60%]'>you will participate in intellectual contest for a life changing prize. you have the chance to join our innovative and creative team.</p>
            </div>
            <div className='ml-[120px]'>
                <img className='h-[50vh]' src={phones} alt="" />
                <p className='w-[80%]'>you enjoy steady affiliate earnings. refer your friends and earn 40% affiliate commision.</p>
            </div>
        </div>
    </div>
  )
}

export default Work