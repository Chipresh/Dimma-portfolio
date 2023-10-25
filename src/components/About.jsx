import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

const About = () => {

    AOS.init({
        duration: 1200,
    })

    return (
        <Element name="About">
            <div className=' h-full bg-[#1a1a2b] text-white lg:py-2 py-3'>
            <div data-aos="zoom-in-down" className='text-[22px] lg:text-[30px]'>
                    <h3 className='lg:my-3 text-4xl font-bold py-4  text-center '>About</h3>
                </div>
                <div data-aos="zoom-in-down" className='lg:mx-[85px] mx-5 md:mx-6 text-[13px] lg:text-[16px] '>
                    <p className='py-2'>Hello! I'm Ukaegbu Chidimma Precious, a passionate and creative frontend   developer who embarked on a transformative journey through a coding bootcamp.
                        What I find most exhilarating about frontend development is the fusion of creativity and technology. I am genuinely passionate about turning ideas into visually stunning, user-friendly interfaces. I enjoy the challenge of making websites responsive, accessible and optimized for performance.
                        I take pride in my ability to transform ideas into pixel-perfect, responsive designs, using web technologies like HTML5, CSS3, JavaScript and React.
                        I am committed to
                        keeping up with rapid advancements in web technology and applying them effectively
                        in projects.</p>

                    <p className='my-3'>I have a strong technical background and
                        an in-depth understanding of the latest frontend development trends. My approach to frontend development is a blend of art and technology. I put users at the forefront of my design process. Understanding their needs and behaviors helps me create interfaces that are intuitive and engaging. I believe that the best websites not only function flawlessly but also leave a lasting impression. Ensuring that websites look and perform well on all devices is a top priority for me.</p>

                    <p> What fuels my passion for frontend development is the ability to create meaningful and      engaging digital experiences that resonate with users.
                        I value collaboration and excel in working alongside designers, backend developers
                        and project managers to bring projects to life cohesively.
                        I'm always eager to take on new challenges and collaborate on exciting projects. If you're looking for a frontend developer who's not only skilled but also enthusiastic about creating exceptional web experiences, feel free to get in touch. Let's turn your ideas into reality!
                    </p>

                </div>
            </div >
        </Element>
    )
}

export default About;