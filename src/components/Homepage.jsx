import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/heroImg.jpg';
import { IoIosCall } from 'react-icons/io';

function Homepage() {
  return (
    <div className="relative w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center text-gray-800">
      <Image
        src={heroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative z-10 flex flex-col items-center text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-emerald-200 mb-6">
          Embrace Your Health
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Achieve your wellness goals with personalized coaching from Jessica.
          Lets embark on this journey together towards a healthier, happier
          you.
        </p>
        <button className="px-8 py-3 bg-emerald-500 text-white flex items-center gap-2 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300">
          Schedule a Free Consultation <IoIosCall size={25} />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
