import React, { useState } from 'react';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProfessionalsPage = () => {
  const [isOfficeDropdownOpen, setIsOfficeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleOfficeDropdown = () => {
    setIsOfficeDropdownOpen(!isOfficeDropdownOpen);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsOfficeDropdownOpen(false);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 flex flex-row p-16 mb-12 items-center justify-center">
  <div className="w-1/2 md:w-1/2  items-start">
    <div className="text-2xl mb-4 text-center md:text-start">Need help? Talk to our expert.</div>
    <div className="text-gray-600 mb-4 text-center md:text-left">Talk to our experts or browse through more properties.</div>
  </div>
 
</div>

       <div className="search_bar flex flex-row md:flex-col justify-center items-center col-md-12 col-lg-8 mx-auto m-5">
        <form className="flex flex-wrap md:flex-nowrap justify-center">
          {/* Search Input */}
          <input
            className="form-control mr-2 border border-gray-600 rounded-md px-4 py-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          {/* Search by Office Dropdown */}
          <div className="relative inline-block text-left md:ml-2 ml-2 m-3">
            <button
              onClick={toggleOfficeDropdown}
              type="button"
              className="inline-flex justify-center w-full md:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800"
              aria-haspopup="true"
              aria-expanded={isOfficeDropdownOpen}
            >
              Search By Office
              <ArrowDropDownIcon />
            </button>

            <div
              className={`${
                isOfficeDropdownOpen ? 'origin-top-right' : 'hidden'
              } absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}
            >
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Calgary South
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Calgary North
                </a>
              </div>
            </div>
          </div>

          {/* Language Spoken Dropdown */}
          <div className="relative inline-block text-left md:ml-2 m-3">
            <button
              onClick={toggleLanguageDropdown}
              type="button"
              className="inline-flex justify-center w-full md:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800"
              aria-haspopup="true"
              aria-expanded={isLanguageDropdownOpen}
            >
              Select Language
              <ArrowDropDownIcon />
            </button>

            <div
              className={`${
                isLanguageDropdownOpen ? 'origin-top-right' : 'hidden'
              } absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}
            >
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  English
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                  Hindi
                </a>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="ml-2">
            <button className="md:inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2">
              <a href="#">Search</a>
            </button>
          </div>
        </form>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Repeat the following card structure for each professional */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <div className="card h-5" style={{ width: '100%' }}>
              <img className="card-img-top border-" src="./Assets/img/card.jpeg" alt="Card image" />
              <div className="card-body">
                <p className="card-text text-bold m-0">Pranav Khemka</p>
                <p className="card-text">Calgary</p>
              </div>
            </div>
          </div>
          {/* Repeat ends here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfessionalsPage;
