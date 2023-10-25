import React from 'react';
import image1 from "../Assets/image1.png";
import image2 from "../Assets/img2.png";
import image3 from "../Assets/portfolio2.png";
import { Element } from 'react-scroll';
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";


const Projects = () => {
  return (
    <Element name='Projects'>
      <div className='bg-[#1a1a2b] justify-center items-center lg:py-20 py-6 '>
        <div className='lg:mx-20 justify-center items-center flex flex-col lg:flex lg:flex-col lg:gap-14 gap-9 '>
          <div data-aos="zoom-in-down" className='text-center'>
            <p className='font-bold text-3xl text-white '>Projects</p>
          </div>

          <div data-aos="zoom-in-down" className='flex flex-col lg:flex lg:flex-row justify-center items-center  rounded-lg lg:rounded-none md:flex md:flex-row px-2'>

            <div className='lg:h-[390px] lg:w-[450px] h-[200px] w-[320px] bg-gray-700 items-center justify-center lg:rounded-bl-lg lg:rounded-tl-lg rounded-tl rounded-tr'>
              <img src={image1} alt="" className='lg:h-[350px] lg:w-[430px] h-[170px] w-[290px] lg:mx-5 lg:my-5 my-5 mx-4 md:my-4 md:mx-5 rounded-lg lg:rounded-lg'/>
            </div>

            <div className='lg:h-[390px] lg:w-[470px] h-[200px] w-[320px] bg-gray-700 justify-center lg:my-2 lg:rounded-tr-lg lg:rounded-br-lg'>
              <div className='lg:h-[350px] lg:w-[430px] h-[170px] w-[290px] bg-[#1a1a2b] lg:mx-5 my-3 mx-3.5 md:mx-3  md:my-4 text-white justify-center text-center lg:py-16 lg:my-5 py-2 lg:rounded-tr-lg rounded-lg '>
                <p className='text-xl py-2'>Mich Home</p>
                <p className='lg:my-6 text-[10px] px-1.5'>Mich Homes is a website for listing homes for rent that features houses, apartments, and lodges that are available within Awka city, Nigeria.</p>

                <div className='lg:py-6 flex items-center content-center lg:gap-6 lg:mx-44 mx-24 gap-10 py-5'>
                  <div className='lg:h-8 lg:w-16 bg-gray-700'>

                    <a href="https://mich-home-nu.vercel.app/"> 
                    <RiExternalLinkLine color='white' size={30} className='cursor-pointer p-1  '/>
                    </a>
                  </div>
                  <div className='lg:h-8 lg:w-16 bg-gray-700 cursor-pointer'>
                    <a href="https://github.com/Chipresh/mich_home">
                    <FiGithub color='white' size={30} className='cursor-pointer p-1 lg:my-1'/>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div data-aos="zoom-in-down" className='flex flex-col lg:flex lg:flex-row justify-center items-center md:flex md:flex-row px-2'>
            <div className='lg:h-[390px] lg:w-[450px] h-[200px] w-[320px] bg-gray-700 items-center justify-center lg:rounded-bl-lg lg:rounded-tl-lg'>
              <img src={image2} alt="" className='lg:h-[350px] lg:w-[430px] h-[170px] w-[290px] lg:mx-5 lg:my-5 my-5 mx-4 md:my-4 md:mx-5 rounded-lg lg:rounded-lg'/>
            </div>

            <div className='lg:h-[390px] lg:w-[470px] h-[200px] w-[320px] bg-gray-700 justify-center lg:rounded-tr-lg lg:rounded-br-lg'>
              <div className='lg:h-[350px] lg:w-[430px] h-[170px] w-[290px] bg-[#1a1a2b] lg:mx-5 lg:my-5 my-3 mx-4  md:mx-3 md:my-4 text-white justify-center text-center lg:py-14 lg:rounded-tr-lg rounded-lg'>
                <p className='text-xl lg:py-4 py-3'>Food Wagon Landing Page</p>
                <p className='lg:py-2 text-[10px] px-2.5'>Food Wagon landing page is a food website where your can easily order for food, customize dishes to their requirements and place an order from anywhere, saving the time and resources typically spent on travelling to pick up a meal. </p>

                <div className='lg:py-6 flex items-center content-center lg:gap-6 lg:mx-44 mx-24 gap-10 py-3.5'>
                  <div className='lg:h-8 lg:w-16 bg-gray-700'>

                    <a href="https://food-wagon-38av.vercel.app/"> 
                    <RiExternalLinkLine color='white' size={30} className='cursor-pointer p-1 '/>
                    </a>
                  </div>
                  <div className='lg:h-8 lg:w-16 bg-gray-700 cursor-pointer'>
                    <a href="https://food-wagon-eight.vercel.app/">
                    <FiGithub color='white' size={30} className='cursor-pointer p-1  lg:my-1'/>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div data-aos="zoom-in-down" className='flex flex-col lg:flex lg:flex-row justify-center items-center md:flex md:flex-row'>

            <div className='lg:h-[390px] lg:w-[450px] h-[200px] w-[320px] bg-gray-700 items-center justify-center lg:rounded-bl-lg lg:rounded-tl-lg'>
              <img src={image3} alt="" className='lg:h-[350px] lg:w-[430px] h-[175px] w-[290px] lg:mx-5 lg:my-5 my-4 mx-4 md:my-4 md:mx-5 rounded-lg' />
            </div>

            <div className='lg:h-[390px] lg:w-[470px] h-[200px] w-[320px] bg-gray-700 justify-center lg:rounded-tr-lg lg:rounded-br-lg'>
              <div className='lg:h-[350px] lg:w-[430px] h-[170px] w-[290px] bg-[#1a1a2b] lg:mx-5 lg:my-5 my-3 mx-4 md:mx-3 md:my-4 text-white justify-center text-center lg:py-14 rounded-lg'>
                <p className='text-xl lg:my-6  py-5'>Portfolio</p>
                <p className='text-[10px] px-2'>Built a personal portfolio Website, where you can get in touch 
                  with me easily.</p>

                <div className='lg:py-6 flex items-center content-center lg:mx-44 mx-24 gap-10 lg:my-4 py-6 lg:gap-6'>
                  <div className='lg:h-8 lg:w-16 bg-gray-700'>

                    <a href="https://github.com/Chipresh?tab=repositories"> 
                    <RiExternalLinkLine color='white' size={30} className='cursor-pointer p-1'/>
                    </a>
                  </div>
                  <div className='lg:h-8 lg:w-16 bg-gray-700 cursor-pointer'>
                    <a href="https://github.com/Chipresh?tab=repositories">
                    <FiGithub color='white' size={30}  className='cursor-pointer p-1 lg:my-1'/>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </Element >
  )
}

export default Projects;