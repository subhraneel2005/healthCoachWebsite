import React from 'react';

function Aboutme() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-200 py-12 px-6 text-gray-800">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://i.pinimg.com/236x/0c/54/a1/0c54a1492b53d4119ebf0b47b1ad1f6e.jpg"
            alt="Health Coach"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold mb-4">Hi, I'm Jessica</h2>
          <p className="text-lg mb-6">
            I'm a certified health coach with over 10 years of experience in helping people achieve their health and wellness goals. My approach is holistic, focusing on both physical and mental well-being.
          </p>
          <h3 className="text-2xl font-semibold mb-3">My Philosophy</h3>
          <p className="text-lg mb-6">
            I believe that true health comes from a balance of good nutrition, regular physical activity, and a positive mindset. I work with my clients to create personalized plans that are sustainable and effective.
          </p>
          <h3 className="text-2xl font-semibold mb-3">Services I Offer</h3>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>Nutritional Counseling</li>
            <li>Personal Training</li>
            <li>Stress Management</li>
            <li>Weight Loss Programs</li>
            <li>Group Workshops</li>
          </ul>
          <p className="text-lg mb-6">
            Ready to start your journey to better health? Let's work together to achieve your goals!
          </p>
          <div className="flex justify-center items-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
            Contact Me
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
