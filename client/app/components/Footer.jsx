import React from 'react';
import { LuDot } from "react-icons/lu";

export default function Footer() {
  return (
    <div className='flex flex-row justify-center items-center gap-1 text-xs text-[#DD1FA0] text-center font-medium mt-28 mb-12 lg:text-sm'>
        <div>twitter</div>
        <LuDot size={14}/>
        <div>discord</div>
        <LuDot size={14}/>
        <div>github</div>
        <LuDot size={14}/>
        <div>terms of service</div>
    </div>
  )
}
