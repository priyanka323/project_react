import React from 'react';
import Header from '../../Component/Header/header'
import Footer from '../../Component/Footer/footer';
import card1 from '../../Assets/img/card.jpeg';

const Contact = () => {
  return (
    <>
        <Header/>

    <div className="contact-container bg-gray-200 p-4 md:p-8 flex flex-col md:flex-row">
      {/* Form Container */}
      <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-center items-center ">
        <div className="form-container w-3/4 md:w-1/2 p-4 md:p-8 bg-white rounded-lg shadow-md justify-center ">
          <div className="form-group mb-4 flex flex-col md:flex-col">
            <label className="label" htmlFor="name">Name:</label>
            <input className="input-field border-2 border-grey-300 rounded-sm " type="text" id="name" name="name" required />
          </div>

          <div className="form-group mb-4 flex flex-col md:flex-col">
            <label className="label" htmlFor="email">Email:</label>
            <input className="input-field border-2 border-grey-300 rounded-sm" type="email" id="email" name="email" required />
          </div>

          <div className="form-group mb-4 flex flex-col md:flex-col">
            <label className="label" htmlFor="mobile">Mobile:</label>
            <input className="input-field border-2 border-grey-300 rounded-sm" type="tel" id="mobile" name="mobile" required />
          </div>

          <div className="form-group mb-4 flex flex-col md:flex-col">
            <label className="label" htmlFor="comment">Comment:</label>
            <input className="input-field border-2 border-grey-300 rounded-sm" type="text" id="comment" name="comment" required />
          </div>
          <button className="submit-btn md:inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2" type='submit'>
            Login
          </button>
  
        </div>
      </div>

      {/* Map Container */}
      <div className="w-full md:w-1/2 flex justify-center items-center text-5xl text-gray-700">
        MAP
      </div>
    </div>



    <div className="m-8">
      <div className="flex justify-center text-2xl">Visit Our Office</div>
      <div className="flex justify-center my-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </div>
      <div className="flex justify-center my-4 text-lg">incididunt ut labore</div>
    </div>


    <div className="card-container flex justify-around p-5">
      <div className="card bg-white rounded-lg shadow-md p-4 border border-black-900 text-center">
        <img
          src={card1}
          alt="Card 1"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <div className="card-heading text-xl font-bold my-2">North office</div>
        <div className="card-email">northoffice@ca.com</div>
        <div className="card-address">south office | 2887637367</div>
        <div className="card-address">2nd street calgary, Alberica T2H0H2</div>
      </div>

      <div className="card bg-white rounded-lg shadow-md p-4 border border-black-900 text-center">
        <img
          src={card1}
          alt="Card 2"
          className="w-full h-40 object-cover rounded mb-4"
        />
        <div className="card-heading text-xl font-bold my-2">South office</div>
        <div className="card-email">southoffice@ca.com</div>
        <div className="card-address">south office | 2887637367</div>
        <div className="card-email">2nd street calgary, Alberica T2H0H2</div>
      </div>
    </div>


    <div className="bg-gray-200 flex flex-row p-16 mb-12 items-center justify-center">
  <div className="w-1/2 md:w-1/2 flex flex-col items-start">
    <div className="text-2xl mb-4 text-center md:text-left">Need help? Talk to our expert.</div>
    <div className="text-gray-600 mb-4 text-center md:text-left">Talk to our experts or browse through more properties.</div>
  </div>
  <div className="w-1/2 flex justify-center md:justify-center">
    <button className="bg-blue-500 text-white border border-blue-500 py-2 px-3 rounded">
      Call Us
    </button>
  </div>
</div>


      
    
    
    <Footer/>
    </>
  );
};

export default Contact;
