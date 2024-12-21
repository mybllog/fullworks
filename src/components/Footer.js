import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Message, Phone } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo1-removebg-preview.png'
const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 font-poppins overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
          <div>
            <img src={logo} alt='logo' className='h-16'/>
          </div>
            <p className="text-base text-gray-400 leading-6 break-words">
              Build a firm digital foundation
              <br />
              with our service offering and expert consultations.
            </p>
            <div className="flex space-x-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-lg text-gray-400 hover:text-pink-400 cursor-pointer rounded-full h-6 w-6 bg-pink-800"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg text-gray-400 hover:text-pink-400 cursor-pointer rounded-full h-6 w-6 bg-pink-800"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-lg text-gray-400 hover:text-pink-400 cursor-pointer rounded-full h-6 w-6 bg-pink-800"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Company Links */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-black">Company</h2>
              <p className="text-base text-gray-400 hover:text-pink-400 cursor-pointer"><NavLink to='/'>Home</NavLink></p>
              <p className="text-base text-gray-400 hover:text-pink-400 cursor-pointer"><NavLink to='/about-us'>About Us</NavLink></p>
              <p className="text-base text-gray-400 hover:text-pink-400 cursor-pointer"><NavLink to='/contact-us'>Contact Us</NavLink></p>
              <p className="text-base text-gray-400 hover:text-pink-400 cursor-pointer"><NavLink to='/services'>Services</NavLink></p>
            </div>

            

            {/* Head Office */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-black">Head Office</h2>
              <p className="text-base text-gray-400">
                Fullworks Limited, 2 Awoyemi st, Ogunlana Drive, Lagos, Nigeria.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <Message className="text-pink-800" />
                  <p className="text-base text-gray-400">reachus<br/>@manifoldcomputers.com</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="text-pink-800" />
                  <p className="text-base text-gray-400">+234 901 628 2357</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Fullworks. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
