import React from 'react';
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <div  className='bg-[#1a1a2b] items-center flex content-center pl-5 lg:justify-center py-6 lg:gap-2 md:gap-0 gap-12'>

      <div className='flex lg:gap-8 gap-2 cursor-pointer md:mx-28 md:gap-8 md:mr-20 lg:mx-2'>
        <div className='lg:h-8 lg:w-9 bg-gray-500 hover:bg-blue-700 px-1'>
          <a href="https://www.linkedin.com/in/ukaegbu-chidimma-precious-545b34270">
            <AiFillLinkedin size={25} color='white' className='lg:justify-center lg:items-center lg:mx-0.5 my-1'/>
          </a>
        </div>

        <div className='lg:h-8 lg:w-9 bg-gray-500 hover:bg-blue-700 px-1'>
          <a href="https://x.com/PreciousCh61908?t=OmuiXuXUgA5PD66NKOBGrQ&s=08">
            <AiOutlineTwitter size={25} color='white' className='lg:justify-center lg:items-center lg:mx-0.5 my-1'/>
          </a>
        </div>

        <div className='lg:h-8 lg:w-9 bg-gray-500 hover:bg-blue-700 px-1'>
          <a href="https://github.com/Chipresh">
            <AiOutlineGithub size={25} color='white' className='lg:justify-center lg:items-center lg:mx-0.5 my-1'/>
          </a>
        </div>

      </div >
      <div className='text-white lg:mx-2'>
        <p className='text-[10px] md:text-[22px] lg:text-[18px]'>Designed by <span className='font-[40px]'>&#128151;</span> Chidimma &copy;2023</p>
      </div>

    </div>
  )
}

export default Footer;