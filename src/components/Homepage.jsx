import Image from 'next/image'
import React from 'react'
import sideImg from "../../public/sideImg.jpg"

function Homepage() {
  return (
    <div className="select-none min-h-screen w-full bg-gray-300 text-gray-800 flex flex-col justify-center items-center space-y-5" id="home">
        <div className="flex justify-center items-center px-6 gap-5">
          <Image className="sideImg rounded-xl md:flex hidden" src={sideImg} alt="IMAGE" height={400} width={400}/>
          <h1 className="md:text-7xl text-5xl heroText flex flex-wrap">Emrace your lifestyle with our weekly coaching</h1>
        </div>
        <button className="px-6 py-2 bg-emerald-300 hover:bg-emerald-600 duration-300">Book a call</button>
    </div>
  )
}

export default Homepage