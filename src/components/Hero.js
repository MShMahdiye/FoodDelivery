import React from 'react';
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='bg-white h-screen flex flex-col justify-center
    items-center'>
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl
      font-black mb-14'>Pizza Delivery</h1>
      <Link to={"/contact"} className='py-6 px-10 bg-yellow-500 rounded-full
      text-3xl hover:bg-yellow-400 transition duration-300 
      ease-in-out flex items-center
      animate-pulse'>
      Order Now
        <svg className="w-6 h-6 ml-4 mt-2" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
      </Link>
    </div>
  )
}

export default Hero
