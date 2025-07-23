import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center px-4 py-8 mt-10">
      <p className="font-bold text-xl sm:text-2xl">Sakshi Tripathi</p>
      <p className="text-sm sm:text-base text-gray-400 mt-1">
        Turning coffee into code ☕💻
      </p>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-6 mt-4">
        <a
          href="https://github.com/SakshiTripathi680"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/sakshi-tripathi-523a01212/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:sakshitripathi680@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope size={22} />
        </a>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-gray-400 mt-4">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-white">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-white">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-white">
          Contact
        </Link>
      </div>

      <p className="text-xs mt-5 text-gray-500">&copy; {new Date().getFullYear()} Sakshi Tripathi. All rights reserved.</p>
      <p className="text-xs text-gray-500 italic">
        Built with ❤️ using MERN Stack, React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
