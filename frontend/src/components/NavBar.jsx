import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white' style={{ background: '#bc6c25' }}>
      <div>
        <h1>BE OUT.</h1>
      </div>
      <ul className={`md:flex ${nav ? 'flex' : 'hidden'} flex-col md:flex-row`}>
        {/* Other menu items */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      
      <div className='md:flex'>
        
        <Link to="/profile">
          <BsPerson size={25} />
        </Link>
      
        <button className="ml-4 text-white bg-gray-500 rounded-md px-3 py-1">
          <Link to="/login">Login</Link>
        </button>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>GO OUT.</h1>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/guide">Guides</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <button className='my-6 mr-'>Blog</button>
        
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
