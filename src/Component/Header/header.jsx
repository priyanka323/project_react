import React, { useState } from 'react';
import logo from '../../Assets/img/logo.jpeg'; // Import your logo image
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" bg-white p-4 md-flex justify-between">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="8-5 w-8 mr-2" />
          <span className="text-blue font-bold text-lg text-center">RSP</span>
        </div>

        {/* Center - Navigation Pages */}
        <div className="hidden md:flex items-center space-x-4 ">
          <a href="#" className="text-blue-500 ">About US</a>
          <a href="#" className="text-blue-500">Why REP</a>
          <a href="#" className="text-blue-500">Our Professional</a>
          <a href="#" className="text-blue-500">Property Search</a>
          <a href="#" className="text-blue-500">Contact Us</a>
        </div>

        {/* Right side - Buttons and Mobile Menu */}
        <div className="flex items-center">
          {/* Buttons */}
          <button className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2">
          <a href='#'>Login</a>
          </button>
          
          <button className="hidden md:inline-block border border-blue-500 bg--white text-blue-500 px-4 py-2 rounded  w-full md:w-auto "><a href='#'>Relator Login</a></button>

          {/* Mobile Menu - Hamburger Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
           <MenuIcon/>
          </button>

          {/* Mobile Menu - Overlay */}
          {/* {menuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="  text-white w-full h-40 bg-black">
                <a href="#" className="text-white  ">About US</a>
          <a href="#" className="text-white">Why REP</a>
          <a href="#" className="text-white">Our Professional</a>
          <a href="#" className="text-white">Property Search</a>
          <a href="#" className="text-white">Contact Us</a>
              </div>
            </div>
          )} */}
          {menuOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full h-full bg-gray-100 bg-opacity-75 flex items-center justify-center">
    <div className="text-white w-full max-w-xs text-center bg-blue-500 rounded-3xl ">
      <a href="#" className="block py-2">About US</a>
      <a href="#" className="block py-2">Why REP</a>
      <a href="#" className="block py-2">Our Professional</a>
      <a href="#" className="block py-2">Property Search</a>
      <a href="#" className="block py-2">Contact Us</a>
    </div>
  </div>
)}

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
