import Image from 'next/image'
import React from 'react'
import sideImg from "../../public/sideImg.jpg"
import { IoIosCall } from "react-icons/io";

function Homepage() {
  return (
    <div className="select-none min-h-screen w-full bg-gray-300 text-gray-800 flex flex-col justify-center items-center space-y-5" id="home">
        <div className="flex justify-center items-center px-6 gap-5">
          <Image className="sideImg rounded-xl md:flex hidden" src={sideImg} alt="IMAGE" height={400} width={400}/>
          <div className="flex flex-col space-y-3">
          <h1 className="md:text-7xl text-5xl heroText flex flex-wrap">Emrace your lifestyle with our weekly coaching</h1>
          <p className="md:text-lg text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolore quam consequuntur voluptates quis expedita cumque, pariatur repellat corporis tenetur numquam, odit voluptatibus aliquam odio commodi eum dignissimos quidem nostrum</p>
          </div>
        </div>
        <button className="px-6 py-2 gap-2 bg-emerald-300 flex justify-center items-center hover:bg-emerald-600 duration-300">Schedule a Free Consultation <IoIosCall className="mb-1" size={25}/> </button>
    </div>
  )
}

export default Homepage