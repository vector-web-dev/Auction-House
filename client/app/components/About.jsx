import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
    return (
        <div className='text-center mt-10 flex flex-col justify-center items-center gap-8'>
            <h1 className='text-4xl font-medium text-gray-800 leading-lose lg:text-5xl'>
                Get funded to build with <br /> your favorite communities
            </h1>

            <div className='flex flex-row gap-1 justify-center items-center font border border-gray-400 text-[#8a2be2] rounded-full px-3 py-1 font-semibold text-xs w-max'>
                Learn More
                <FaArrowRightLong size={12} />
            </div>

            <div className='flex flex-row justify-center gap-16 items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center items-center font-medium text-4xl text-[#8a2be2] lg:text-5xl'>1K+</h1>
                    <h3 className='text-black text-medium font-thin'>ETH funded</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center items-center font-medium text-4xl text-[#8a2be2] lg:text-5xl'>298+</h1>
                    <h3 className='text-black text-medium font-thin'>Funding rounds</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center items-center font-medium text-4xl text-[#8a2be2] lg:text-5xl'>8K+</h1>
                    <h3 className='text-black text-medium font-thin'>Submitted props</h3>
                </div>
            </div>
      </div>
  )
}
