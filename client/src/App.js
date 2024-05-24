import React from 'react';
import './index.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Mandar Deshmukh</h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Creative Frontend Developer</h2>
          <p className="text-lg">Building beautiful and user-friendly web experiences</p>
          <div className="mt-8">
            <a href="#contact" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">Contact Me</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg">A passionate frontend developer with expertise in React.js and Tailwind CSS. I love turning ideas into beautifully designed and functional websites.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <h3 className="text-xl font-bold">Finance Planner Portfolio Website</h3>
              <p>Deployed a portfolio website for a financial planner (www.licanand.com). (MERN Stack)</p>
            </li>
            <li className="mb-4">
              <h3 className="text-xl font-bold">I2IT Paper Publication Website</h3>
              <p>Developed a web application where a user can search and view previous journals/conference published by our college. (Flask, React, Data visualization)</p>
            </li>
            <li className="mb-4">
              <h3 className="text-xl font-bold">SIH (Smart India Hackathon) 2022 Finalist</h3>
              <p>Predictive model for Criminal Hotspots Mapping. Developed a model that depicts the crime rate of a selected region. (Python, Pandas, Numpy, Tableau Public, Excel, ML)</p>
            </li>
            <li className="mb-4">
              <h3 className="text-xl font-bold">Manhole Safety Assurance</h3>
              <p>Created a system that detects the loss of lids, harmful gases generated, drainage water level and blockages and raised the alarm for pre-critical situation using IoT devices ensuring safety in manhole cleaning. (IoT, web development, C)</p>
            </li>
          </ul>
          {/* Add your portfolio projects here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg">Ready to start your next project? Let's get in touch!</p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="mailto:mandard1512@gmail.com" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center">
              <FaEnvelope className="mr-2" /> mandard1512@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mandar-deshmukh-7286061b8" className="ml-4 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/mandard2015" className="ml-4 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Mandar Deshmukh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
