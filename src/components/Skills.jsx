import React from 'react';
import html from "../Assets/html.png";
import css from "../Assets/css2.png";
import javascript from "../Assets/javascript.png";
import tailwind from '../Assets/tailwind.png';
import react from "../Assets/react.png";
import sass from "../Assets/sass.png";
import redux from "../Assets/redux.png";
import github from "../Assets/gitbub2.png";
import materialui from "../Assets/materialui.png";


const Skills = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "Html",
            style: "shadow-orange-700"
        },
        {
            id: 2,
            src: css,
            title: "Css",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-blue-400"
        },
        {
            id: 6,
            src: sass,
            title: "Sass",
            style: "shadow-pink-500"
        },
        {
            id: 7,
            src: redux,
            title: "Redux",
            style: "shadow-purple-500"
        },
        {
            id: 8,
            src: github,
            title: "Github",
            style: "shadow-white"
        },
        {
            id: 9,
            src: materialui,
            title: "Material UI",
            style: "shadow-blue-500"
        },
    ]
    return (
        <div className='bg-[#1a1a2b]'>
            <div className='lg:px-24 p-2 flex flex-col h-full items-center text-white py-8 lg:py-20'>
                <div data-aos="zoom-in-down" className='text-center lg:pr-10 lg:mx-6'>
                    <p className='text-4xl font-bold lg:pl-8'>Skills</p>
                    <p className='my-4 text-[17px] lg:pl-12 mx-2'>These are technologies I have worked with:</p>
                </div>
                <div data-aos="zoom-in-down" className='grid grid-cols-2 lg:grid-cols-3 gap-10  items-center py-2 mx-12 lg:mx-2'>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg lg:w-[280px] ${style}`}>
                                <img src={src} alt="" className='w-18 h-[90px] mx-auto' />
                                <p className='mt-4 p-2'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Skills;