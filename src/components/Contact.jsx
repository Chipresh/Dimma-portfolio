import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rj07676', 'template_am8wqwa', form.current, '0-R1zH-WqgFnSBoud')
            .then((result) => {
                console.log(result.text);
                // Clear the form after successful submission
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Element name='Contact'>
            <div className='bg-[#1a1a2b] justify-center items-center lg:py-6' >
                <div className='flex flex-col lg:flex-col justify-center py-6'>
                    <div data-aos="flip-left" className='text-white text-center'>
                        <p className='font-bold text-3xl  lg:py-2 lg:p-4'>Contact</p>
                        <p className='my-2 text-[18px]'>Get in touch with me</p>
                    </div>

                    <div data-aos="flip-right" className='flex justify-center'>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full relative items-center'>

                            <input type="text"
                                id="name"
                                name="name"
                                required
                                placeholder='Enter your name'

                                className='lg:w-[500px] w-[310px] p-2 my-4 bg-transparent border-2 rounded text-white focus:outline-none focus:border-blue-500 focus:text-white-700 transition duration-200 ' />

                            <input type="text"
                                id="email"
                                name="email"
                                required
                                placeholder='Enter your email'
                                className='lg:w-[500px] w-[310px] p-2 my-4 bg-transparent border-2 rounded text-white focus:outline-none focus:border-blue-500 focus:text-white-700 transition duration-200' />

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="10"
                                placeholder='Enter your message'
                                className='lg:w-[500px] w-[310px] p-2 my-3 bg-transparent border-2 rounded text-white focus:outline-none focus:border-blue-500' ></textarea>
                            <button className='text-white flex bg-blue-700 px-6 py-2 my-4 mx-auto text-center rounded hover:scale-110 duration-300 w-fit h-10' type='submit' value="send">Let's talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact;







