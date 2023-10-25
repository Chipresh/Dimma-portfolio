import React from "react";
import { BiSolidGrid } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <>
      <nav className="bg-[#1a1a2b] hidden md:hidden lg:flex justify-between items-center sticky lg:top-0 py-[24px] lg:px-[82px] z-10 ">
        <div className="text-white lg:text-3xl text-xl font-bold cursor-pointer bg-[#1a1a2b]">
          <h1>CHIDIMMA</h1>
        </div>
        <ul className="lg:flex lg:gap-9 cursor-pointer hidden top-0">
          {links.map(({ id, link }) => (
            <li key={id} className="text-white">
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="w-full lg:hidden bg-[#1a1a2b] py-[20px] sticky top-0 z-10 items-center">
        <div className="flex justify-between mx-4 items-center ">
          <div className="text-white lg:text-3xl text-xl font-bold cursor-pointer md:mx-4">
            <h1 className="text-[2opx]">CHIDIMMA</h1>
          </div>
          <div onClick={toggleMenu} className="cursor-pointer lg:hidden md:mx-7">
            <BiSolidGrid color="white" size={35} />
          </div>
        </div>

        {isOpen && (
          <div
            data-aos="fade-left"
            className="absolute top-0 h-[100vh] left-0 w-[100%] bg-[#1a1a2b] z-10 flex flex-col">
            <div className="flex justify-between bg-[#1a1a2b] px-[15px] py-[20px]">
              <div className="text-white lg:text-3xl text-xl font-bold cursor-pointer">
                <h1>CHIDIMMA</h1>
              </div>
              <div
                onClick={toggleMenu}
                className="cursor-pointer lg:hidden md:mx-7">
                <VscChromeClose color="white" size={32}  className=""/>
              </div>
            </div>
            <ul className="flex flex-col lg:hidden text-[18px] gap-8 px-[17px]">
              {links.map(({ id, link }) => (
                <li key={id} className="text-[#fff]">
                  <Link to={link} smooth={true} duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
