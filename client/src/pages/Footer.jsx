import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 mt-10">
      <p className="font-bold text-lg">Sakshi Tripathi</p>
      <p className="text-sm text-gray-400">Turning coffee into code ☕💻</p>

      <div className="flex justify-center space-x-6 my-4">
        <a href="https://github.com/SakshiTripathi680" target="_blank" rel="noreferrer">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/sakshi-tripathi-523a01212/" target="_blank" rel="noreferrer">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:sakshitripathi680@gmail.com">
          <FaEnvelope size={22} />
        </a>
      </div>

      <div className="flex justify-center space-x-4 text-sm text-gray-400">
        <Link to='about' smooth={true} duration={500} className='cursor-pointer'>About</Link>
        <Link to='projects' smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
        <Link to='contact' smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
      </div>

      <p className="text-xs mt-3 text-gray-500">&copy; {new Date().getFullYear()} Sakshi Tripathi. All rights reserved.</p>
      <p className="text-xs text-gray-500 italic">Built with ❤️ using MERN Stack, React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
