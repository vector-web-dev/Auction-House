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
    <main className='h-full hidden md:hidden lg:flex'>
      <nav className='flex flex-row justify-center items-center gap-5'>
        <div className='uppercase mr-4 text-inherit font-medium'>Faq</div>
        <div className='flex justify-center items-center gap-1 uppercase text-inherit font-medium'>
          <BiWorld size={17} />
          <button onClick={changeIcon}>
            {!isClick ?
              <BiSolidDownArrow size={9} /> :
              <BiSolidUpArrow size={9} />
            }
          </button>
        </div>
        <div className='btn-primary'>Create a round</div>
        <div className='btn-connect'>Connect</div>
      </nav>
    </main>
  )
}
