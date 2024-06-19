import React from 'react'

function Navbar() {
  return (
    <div className="bg-emerald-400 py-6 justify-between px-10 flex sticky top-0 w-full text-black">
        <h1 className="text-xl font-bold flex justify-center items-center">Miss Laure</h1>
        <ul className="text-lg md:flex justify-center items-center gap-5 hidden">
            <li className="cursor-pointer duration-300 hover:text-gray-600">HOME</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">TESTIMONIALS</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">ABOUT ME</li>
            <li className="cursor-pointer duration-300 hover:text-gray-600">CONTACT ME</li>
            <li className=" bg-gray-900 hover:bg-gray-800 duration-300 text-white cursor-pointer p-3">BOOK NOW</li>
        </ul>
    </div>
  )
}

export default Navbar