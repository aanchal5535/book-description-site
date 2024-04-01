import React from 'react';
import LandingImage from '../assests/Landing.jpeg'
import Search from './Search';

const Landing = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        className='w-full h-full object-cover'
        src={LandingImage}
       alt=''
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Unlock Your Imagination,</h1>
        <h2 className='py-4'>One page  at a Time.</h2>
       <Search/>
      </div>
    </div>
  );
};

export default Landing;