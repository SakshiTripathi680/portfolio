import React from 'react'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 z-10 w-full p-4 flex justify-between items-center bg-opacity-80 backdrop-blur-sm'>
        <div>
            <h1 className='text-white font-bold text-2xl drop-shadow-[0_0_5px_rgba(0,191,255,0.9)]'>Sakshi Tripathi</h1>
        </div>
        <div>
            <ul className='flex space-x-4 text-white font-semibold px-4 py-2 border border-none rounded-3xl bg-gradient-to-r from-blue-500 to-blue-800'>
                <li><Link to='about' smooth={true} duration={500} className='cursor-pointer'>About</Link></li>
                <li><Link to='experience' smooth={true} duration={500} className='cursor-pointer'>Experience</Link></li>
                <li><Link to='education' smooth={true} duration={500} className='cursor-pointer'>Education</Link></li>
                <li><Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link></li>
                <li><Link to='projects' smooth={true} duration={500} className='cursor-pointer'>Projects</Link></li>
                <li><Link to='contact' smooth={true} duration={500} className='cursor-pointer'>Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav