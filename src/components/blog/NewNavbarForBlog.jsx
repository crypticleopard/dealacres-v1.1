import React from 'react'

import { FaBars, FaUser } from 'react-icons/fa';

const NewNavbarForBlog = () => {
  return (
    <nav className="bg-black text-white flex items-center text-base  justify-between py-4 px-12">
      <div className="mr-4 text-xl">
        <span className="text-white font-bold ">Deal Acres</span>
      </div>
      <div>
        <ul className="lg:flex list-none cursor-pointer hidden">
          <li className="mr-6">Property Trends</li>
          <li className="mr-6">Lifestyle</li>
          <li className="mr-6">Must Know</li>
          <li className="mr-6">Resources</li>
        </ul>
      </div>
      <div className='flex items-start justify-center gap-6 '>
        <button className="mr-2 text-blue-700 bg-white px-3 py-0.5 rounded-xl text-sm font-bold">Post Property <span className='text-green-600 font-bold uppercase'> Free</span></button>
        <button className="mr-2 text-blue-700 bg-white px-3 py-0.5 rounded-xl text-sm font-bold ">Business Listing <span className='text-green-600 font-bold uppercase'> Free</span></button>
        </div>
        <div className='flex items-start justify-center gap-6'>
        <FaUser className="mr-2 text-white text-lg cursor-pointer" />
        <FaBars className="text-white text-lg cursor-pointer" />
        </div>
     
    </nav>
  );
};




export default NewNavbarForBlog




