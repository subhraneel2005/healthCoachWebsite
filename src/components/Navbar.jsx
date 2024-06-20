import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const variants = {
        open: { y: 0, transition: { duration: 0.5 } },
        closed: { y: "-100vh", transition: { duration: 0.5 } },
    };

    return (
        <div className="relative">
            <div className="bg-emerald-400 py-3 justify-between px-6 flex sticky top-0 w-full text-black select-none">
                <h1 className="text-xl font-bold flex justify-center items-center">Health Coach</h1>
                <ul className="text-lg md:flex justify-center items-center gap-5 hidden">
                    <li className="cursor-pointer duration-300 hover:text-gray-600">
                        <Link to="home" smooth={true} duration={500}>
                            HOME
                        </Link>
                    </li>
                    <li className="cursor-pointer duration-300 hover:text-gray-600">
                        <Link to="testimonials" smooth={true} duration={500}>
                            TESTIMONIALS
                        </Link>
                    </li>
                    <li className="cursor-pointer duration-300 hover:text-gray-600">
                        <Link to="about" smooth={true} duration={500}>
                            ABOUT ME
                        </Link>
                    </li>
                    <li className="cursor-pointer duration-300 hover:text-gray-600">
                        <Link to="contact" smooth={true} duration={500}>
                            CONTACT ME
                        </Link>
                    </li>
                    <li className="bg-gray-900 rounded-lg hover:bg-gray-800 duration-300 text-white cursor-pointer p-3">
                        BOOK NOW
                    </li>
                </ul>
                <div className="md:hidden flex flex-col justify-center items-center">
                    <GiHamburgerMenu size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            <motion.ul
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                className={`top-20 justify-center items-center space-y-7 text-gray-900 text-3xl bg-gray-300 min-h-screen w-full ${isMenuOpen ? "flex flex-col" : "hidden"}`}>
                <li className="cursor-pointer duration-300 hover:text-gray-600">
                    <Link to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        HOME
                    </Link>
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">
                    <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        TESTIMONIALS
                    </Link>
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">
                    <Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        ABOUT ME
                    </Link>
                </li>
                <li className="cursor-pointer duration-300 hover:text-gray-600">
                    <Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                        CONTACT ME
                    </Link>
                </li>
                <li className="bg-gray-900 hover:bg-gray-800 duration-300 text-white cursor-pointer p-3">
                    BOOK NOW
                </li>
            </motion.ul>
        </div>
    );
}

export default Navbar;
