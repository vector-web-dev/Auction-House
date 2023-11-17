import React from 'react'
import Navbar from './Navbar'
import NavbarMd from './NavbarMd'
import Logo from "../images/Vector.jpg";
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {

  return (
      <main className='flex flex-col justify-between mt-12 gap-20 md:flex-col lg:flex-row'>
          <div className='flex flex-row justify-between gap-20 items-center md:mb-6'>
              <div className='flex flex-row justify-center items-center gap-4'>
                <Image
                    src={Logo}
                    alt="logo"
                    width={40}
                    quality={100}
                    placeholder="blur"
                ></Image>
              <div>
                  <h1 className='text-lg text-black font-medium'>Auction House</h1>
                  <p className='text-sm'>Public infrastructure by Nouns DAO</p>
            </div>
              
          </div>
            <AiOutlineMenu size={30} className='block md:block lg:hidden'/>
          </div>
            <NavbarMd />
          <Navbar />
      </main>
  )
}
