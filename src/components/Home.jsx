import React from 'react';
import image1 from "../Assets/chidimma-removebg-preview.png";
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';


const Home = () => {

  return (

    <Element name="Home">

      <div className=' bg-[#1a1a2b] py-[30px] text-white '>
        <div className=' lg:px-10 py-4 lg:py-0 flex flex-col justify-between md:flex-row lg:gap-10 lg:mx-9 gap-6 md:my-20 md:mx-3 md:pr-8'>
          <div className='text-white lg:mx-2 '>
            <h2 className='text-2xl font-extrabold lg:text-5xl my-2 lg:font-extrabold mx-4 lg:mx-1 lg:my-4' data-aos="fade-right">Hi, I'm Chidimma</h2>
            <p className='text-xl lg:text-3xl text-blue-500 my-1 font-bold lg:mx-1 lg:my-2 mx-4'>

              <Typewriter onInit={(Typewriter) => {
                Typewriter.typeString('Frontend Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Web Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }} options={{ loop: true }} />

            </p>
            <div className='lg:w-[600px] w-[335px] mx-4 lg:mx-1 lg:p-0 lg:text-[16px] text-[13px] my-2'>
              <p className='' data-aos="fade-right">A skilled and passionate frontend developer with a deep understanding of
                web technologies and user centered design. I am enthusiastic about delivering stunning and innovative designs and user experiences that bring real value to users.
                Always eager to take on new challenges and collaborate on exciting projects.</p>
            </div>
            <div className='my-6 mx-28 lg:mx-1 md:mx-7'>
              <a href='https://drive.google.com/file/d/1zva7jv4260fjwdlWxYeMLrRJQYWPP7z4/view?usp=sharing'>
                
                <button data-aos="fade-left" className='bg-blue-700 w-fit px-2  h-12 rounded hover:bg-blue-300 my-2'>Download CV</button>
              </a>
            </div>
          </div>
          <div className='lg:w-[300px] w-[240px] bg-blue-700 items-center mx-12 shadow-[15px_15px_0px_0px_rgba(200,200,200)] lg:shadow-[20px_20px_0px_0px_rgba(200,200,200)] lg:mx-8' data-aos="zoom-out-left">
            <img src={image1} alt="my_image" className='lg:h-[400px] lg:w-[400px] ' />
          </div>
        </div>

      </div>
    </Element>
  )
}

export default Home;