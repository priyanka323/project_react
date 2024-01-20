import React from 'react';
import logo from '../../Assets/img/logo.jpeg'; // Import your logo image
import image1 from '../../Assets/img/footer.jpeg';

const Footer = () => {
  return (
    <footer className=" text-black-800 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Logo Section (first 50%) */}
        <div className="mb-4 md:mb-0 md:w-1/2">
          <img src={logo} alt="Logo" className="h-12 w-12 mb-2" />
          {/* <span className="text-blue font-bold text-lg">RSP</span> */}
        </div>

        {/* Columns Section (next 50%) */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Search</h3>
            <p>City Center</p>
            <p>North Calgary</p>
            <p>East Calgary</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Latest</h3>
            <p>Dover Calgary</p>
            <p>Dover Glen </p>
            <p>Radission Heights</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Our Professionals</p>
          </div>

          {/* Column 4 */}
          <div>
            
            <button className="bg-blue-500 text-white px-3 py-2 rounded  mt-3 w-full md:w-auto"><a href='#'> Register</a></button>
            <button className="border border-blue-500 bg--white text-blue-500 px-5 py-2 rounded mt-3 w-full md:w-auto "><a href='#'>Login</a></button>
          </div>
        </div>
      </div>


      <div className='m-3'>
      <hr></hr>
      </div>


      <div className="flex items-center justify-between p-4">
      {/* Left Side - Text */}
      <div>
        <p className="text-md ">@RSP, Inc. 2023. We love our Users!</p>
      </div>

      {/* Right Side - Follow Us Text and Images */}
      <div className="flex items-center">
        <p className="text-lg mr-4">Follow Us:</p>
        
        {/* Images */}
        <div className="flex">
          <img src={image1} alt="footer img 1" className="w-8 h-8 rounded-full mr-2" />
          <img src={image1} alt="Footer img 2" className="w-8 h-8 rounded-full mr-2" />
          <img src={image1} alt="footer img 3" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
