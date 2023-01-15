import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
 

  return (
    <div className="bg-black py-20">
    <div className="w-[95%] md:w-[85%] mx-auto">
        <h2 className="text-white text-3xl font-bold pb-6 md:pb-0 text-center md:text-center">
          BUYHERE
        </h2>
       
      

      <div className="flex flex-col md:flex-row my-10">
        
        <div className="flex-[0.5] md:ml-32">
          <div className=" text-white text-2xl flex justify-center py-10 md:py-0 md:justify-end md:space-x-8">
            <FaFacebookSquare className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
            <FaInstagram className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
            <FaTwitterSquare className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className='md:ml-72'>
        <p className="ml-10 text-white text-center md:text-left text-lg font-semibold">
          Copyright 2023. All Rights Reserved
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer