import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const variants = {
        open: { y: 0, transition: { duration: 0.5 } },
        closed: { y: "-100vh", transition: { duration: 0.5 } },
    };
  return (
    <div className="relative">
    <div className="bg-emerald-400 py-6 justify-between px-10 flex sticky top-0 w-full text-black">
        <h1 className="text-xl font-bold flex justify-center items-center">Miss Laure</h1>
        <ul className="text-lg md:flex justify-center items-center gap-5 hidden">
            <li className="cursor-pointer duration-300 hover:text-gray-600">HOME</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">TESTIMONIALS</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">ABOUT ME</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">CONTACT ME</li>
            <li className=" bg-gray-900 hover:bg-gray-800 duration-300 text-white cursor-pointer p-3">BOOK NOW</li>
        </ul>
        <div className="md:hidden flex flex-col justify-center items-center">
            <GiHamburgerMenu size={30} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
    </div>
    <motion.ul initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                className={`top-20 justify-center items-center space-y-7 text-gray-900 text-3xl bg-gray-300 min-h-screen w-full ${isMenuOpen ? "flex flex-col" : "hidden"}`}>
                <li className="cursor-pointer duration-300 hover:text-gray-600">HOME</li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">TESTIMONIALS</li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">ABOUT ME</li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">CONTACT ME</li>
                <li className=" bg-gray-900 hover:bg-gray-800 duration-300 text-white cursor-pointer p-3">BOOK NOW</li>
    </motion.ul>
    </div>
  )
}

export default Navbar