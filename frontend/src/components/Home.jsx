import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import VideoBg from '../assets/videoBg.mp4';

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={VideoBg}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>The PAGE</h1>
        <h2 className='py-4'> For Your travel guide.</h2>
        
      </div>
    </div>
  );
};

export default Home;