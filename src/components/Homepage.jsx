import Image from 'next/image'
import React from 'react'
import sideImg from "../../public/sideImg.jpg"
import { IoIosCall } from "react-icons/io";

function Homepage() {
  return (
    <div className="select-none min-h-screen w-full bg-gray-100  text-gray-800 flex flex-col justify-center items-center space-y-5 py-5" id="home">
        <div className="flex justify-center items-center px-6 gap-5">
          <Image className="sideImg rounded-xl md:flex hidden" src={sideImg} alt="IMAGE" height={400} width={400}/>
          <div className="flex flex-col space-y-3">
          <h1 className="md:text-7xl text-5xl font-bold text-emerald-900 heroText flex flex-wrap">Emrace your lifestyle with our weekly coaching</h1>
          <p className="md:text-lg text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolore quam consequuntur voluptates quis expedita cumque, pariatur repellat corporis tenetur numquam, odit voluptatibus aliquam odio commodi eum dignissimos quidem nostrum</p>
          </div>
        </div>
        <button className="px-6 py-2 gap-2 bg-emerald-300 flex justify-center items-center hover:bg-emerald-600 duration-300">Book a call<IoIosCall className="mb-1" size={25}/></button>

        <div className="w-full bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-900 mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Nutritional Counseling</h3>
              <p className="text-lg">
                Personalized nutritional plans to help you eat better and feel better.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Personal Training</h3>
              <p className="text-lg">
                Customized workout routines to fit your lifestyle and fitness level.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Stress Management</h3>
              <p className="text-lg">
                Techniques and strategies to help you manage stress effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage