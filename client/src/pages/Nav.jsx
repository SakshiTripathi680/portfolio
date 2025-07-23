import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 z-10 w-full bg-black bg-opacity-80 backdrop-blur-sm text-white'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='font-bold text-2xl drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]'>
          Sakshi Tripathi
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-4 font-semibold px-4 py-2 border border-none rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-700'>
          <li><Link to='about' smooth={true} duration={500} className='cursor-pointer'>About</Link></li>
          <li><Link to='experience' smooth={true} duration={500} className='cursor-pointer'>Experience</Link></li>
          <li><Link to='education' smooth={true} duration={500} className='cursor-pointer'>Education</Link></li>
          <li><Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link></li>
          <li><Link to='projects' smooth={true} duration={500} className='cursor-pointer'>Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500} className='cursor-pointer'>Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className='md:hidden z-20' onClick={toggleNav}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center space-y-4 pb-6 bg-black bg-opacity-90'>
          <li><Link to='about' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>About</Link></li>
          <li><Link to='experience' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>Experience</Link></li>
          <li><Link to='education' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>Education</Link></li>
          <li><Link to='skills' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>Skills</Link></li>
          <li><Link to='projects' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500} className='cursor-pointer' onClick={closeNav}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
