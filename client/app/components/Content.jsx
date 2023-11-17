import Image from 'next/image';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";

import Image1 from "../images/nft/Image-1.webp";
import Image2 from "../images/nft/Image-2.webp";
import Image3 from "../images/nft/Image-3.webp";
import Image4 from "../images/nft/Image-4.webp";
import Image5 from "../images/nft/Image-5.webp";
import Image6 from "../images/nft/Image-6.webp";
import Image7 from "../images/nft/Image-7.webp";
import Image8 from "../images/nft/Image-8.webp";
import Image9 from "../images/nft/Image-9.webp";
import Image10 from "../images/nft/Image-10.webp";
import Image11 from "../images/nft/Image-11.webp";
import Image12 from "../images/nft/Image-12.webp";
import Image13 from "../images/nft/Image-13.webp";
import Image14 from "../images/nft/Image-14.webp";
import Image15 from "../images/nft/Image-15.webp";
import Image16 from "../images/nft/Image-16.webp";
import Image17 from "../images/nft/Image-17.webp";
import Image18 from "../images/nft/Image-18.webp";
import Image19 from "../images/nft/Image-19.webp";
import Image20 from "../images/nft/Image-20.webp";
import Image21 from "../images/nft/Image-21.webp";
import Image22 from "../images/nft/Image-22.webp";
import Image23 from "../images/nft/Image-23.webp";
import Image24 from "../images/nft/Image-24.webp";
import Image25 from "../images/nft/Image-25.webp";
import Image26 from "../images/nft/Image-26.webp";
import Image27 from "../images/nft/Image-27.webp";
import Image28 from "../images/nft/Image-28.webp";
import Image29 from "../images/nft/Image-29.webp";
import Image30 from "../images/nft/Image-30.webp";
import Image31 from "../images/nft/Image-31.webp";
import Image32 from "../images/nft/Image-32.webp";
import Image33 from "../images/nft/Image-33.webp";
import Image34 from "../images/nft/Image-34.webp";
import Image35 from "../images/nft/Image-35.webp";
import Image36 from "../images/nft/Image-36.webp";


export default function Content() {
  return (
      <main className='mt-16'>
          <div className='w-full flex flex-row justify-center items-center gap-3 py-1.5 px-3 bg-white rounded-xl border border-gray-300 shadow-md'>
              <IoIosSearch size={20} />
              <input type="text" placeholder='Search community houses' className='outline-none w-full text-black' />
          </div>

          <div className='mt-12 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4'>

              {/* NFT No:1 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image1}
                    alt="Image1"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Nouns</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>639</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>43</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

                {/* NFT No:2 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image2}
                    alt="Image2"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Cool Girl</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>13K</span>
                              <span className='text-gray-900 font-medium'>
                                {/* <RiMenu5Fill size={14}/> */}
                                GIRL
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>13</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

                {/* NFT No:3 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image3}
                    alt="Image3"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Base</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>95</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>4</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

              {/* NFT No:4 */}
                <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image4}
                    alt="Image4"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Gugoma</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>53k</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>8</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>
              
                {/* NFT No:5 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image5}
                    alt="Image5"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Emoji</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>32</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>18</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>9</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:6 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image6}
                    alt="Image6"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Bird</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>11</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>2</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:7 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image7}
                    alt="Image7"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Drip Ape</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>68K</span>
                              <span>
                                {/* <RiMenu5Fill size={14}/> */}
                                APE
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>15</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:8 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image8}
                    alt="Image8"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Skull</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>31</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>4</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:9 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image9}
                    alt="Image9"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Vampire</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>21</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>5</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:10 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image10}
                    alt="Image10"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Potrait 1</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>60</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>47</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

          {/* NFT No:11 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image11}
                    alt="Image11"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Dragon</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>1.5K</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>13</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

                {/* NFT No:12 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image12}
                    alt="Image12"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Assasin</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>41</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>51</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

                {/* NFT No:13 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image13}
                    alt="Image13"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Cult</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>22</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>3</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>

              {/* NFT No:14 */}
                <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image14}
                    alt="Image14"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Kangaroo</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>69</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>13</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>
              
                {/* NFT No:15 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image15}
                    alt="Image15"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Camel</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>57</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>17</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No16*/}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image16}
                    alt="Image16"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Potrait 2</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>9</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>2</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:17 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image17}
                    alt="Image17"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Mirror On The Wall</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>72</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>17</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:18 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image18}
                    alt="Image18"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Pig</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>1.9K</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>19</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:19  */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image19 }
                    alt="Image19 "
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Picture</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>7</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>2</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


               {/* NFT No:20 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image20}
                    alt="Image20"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>City Lab</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>39</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>13</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>
              
        
              {/* NFT No:21 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image21}
                    alt="Image21"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Bull Dog</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>19</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>3</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:22 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image22}
                    alt="Image22"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Bored Ape</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>27K</span>
                              <span className='text-gray-900 font-medium'>
                                {/* <RiMenu5Fill size={14}/> */}
                                APE
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>9</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:23 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image23}
                    alt="Image23"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>$Psycho</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>42</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>7</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:24 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image24}
                    alt="Image24"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Monalisa</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>61K</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>2</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:25 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image25}
                    alt="Image25"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Potrait 3</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>23</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>17</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:26 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image26}
                    alt="Image26"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Detective Bird</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>1.1K</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>10</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:27 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image27}
                    alt="Image27"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Rhyno</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>251</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>6</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:28 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image28}
                    alt="Image28"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Super Dog</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>12</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>8</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:29 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image29}
                    alt="Image29"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Minimi</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>119</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>13</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:30 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image30}
                    alt="Image30"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Sloth</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>17</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>8</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>


        {/* NFT No:31 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image31}
                    alt="Image31"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Potrait 4</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>24</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>9</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:32 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image32}
                    alt="Image32"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Ghost</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>179</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>7</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


        {/* NFT No:33 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image33}
                    alt="Image33"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Pirate Ape</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>13K</span>
                              <span className='text-gray-900 font-medium'>
                                {/* <RiMenu5Fill size={14}/> */}
                                APE
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>5</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:34 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image34}
                    alt="Image34"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Broke</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>120</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>11</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
        </div>
        

        {/* NFT No:35 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image35}
                    alt="Image35"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Rift Nft</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>3K</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>7</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>


        {/* NFT No:36 */}
              <div className='flex flex-col justify-center items-start w-fit border border-gray-300 p-3 shadow-md bg-white rounded-3xl'>
                  <Image
                    src={Image36}
                    alt="Image36"
                    width={200}
                    quality={100}  
                    className='rounded-xl mb-3'
                  ></Image>
                  <div className='w-full p-1'>
                    <div className='pb-2 mb-2 border-b border-gray-400 w-full text-start font-medium text-gray-900'>Hello Nft</div>
                      <div className='flex flex-row justify-between items-center gap-2 mb-2 text-sm'>
                          <div className='flex flex-row justify-center items-center gap-0.5'>
                              <span className='text-gray-900 font-medium'>27</span>
                              <span>
                                <RiMenu5Fill size={14}/>
                              </span>
                              <span>funded</span>
                          </div>
                          
                          <div className='flex flex-row justify-center items-center gap-1'>
                              <span className='text-gray-900 font-medium'>3</span>
                              <span>rounds</span>
                           </div>
                      </div>
                  </div>
              </div>
        
              
        {/* End of NFT Section */}
          </div>

    </main>
  )
}
