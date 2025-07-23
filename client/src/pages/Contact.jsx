import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { Element } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    try {
      const res = await axios.post(`${baseURL}/api/contact`, formData);
      alert("Message sent successfully");
      console.log(res);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message. Please try again.", error);
    }
  };

  return (
    <Element name="contact" className="pt-20">
      <div className="min-h-screen px-4 sm:px-10 py-10 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)] text-center md:text-left">
            Let's Connect!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center md:text-left">
            I'm always open to feedback, collaboration, or just a friendly hello 👋.
            Whether you want to work on a project together or suggest improvements,
            feel free to drop a message. I promise I don’t bite — unless you're a bug
            in production. 🐛💥
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/sakshitripathi680/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SakshiTripathi680"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:sakshitripathi680@gmail.com"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 w-full">
          <form
            className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-md w-full"
            onSubmit={handleSubmit}
          >
            <label className="text-sm font-semibold">Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <label className="text-sm font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <label className="text-sm font-semibold">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded font-semibold transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
