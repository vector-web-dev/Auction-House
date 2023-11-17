"use client"
import React, { useState } from 'react'
import { BiWorld } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

export default function Navbar() {
  const [isClick, setIsClicked] = useState(false);

  const changeIcon = () => {
    setIsClicked(true);
  }
 
  return (
    <main className='hidden md:hidden lg:hidden h-full'>
      <nav className='flex flex-col mt-4 justify-center items-center gap-5'>
        <div className='uppercase text-inherit font-medium nav-md'>Faq</div>
        <div className='nav-md'>
          <button onClick={changeIcon} className='flex justify-center items-center gap-1'>
            <BiWorld size={17} />
            <div>
                {!isClick ?
                <BiSolidDownArrow size={9} /> :
                <BiSolidUpArrow size={9} />
                }
            </div>
          </button>
        </div>
        <div className='btn-primary'>Create a round</div>
        <div className='btn-connect'>Connect</div>
      </nav>
    </main>
  )
}
