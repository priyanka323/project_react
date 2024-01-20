import React from 'react';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer'

const Login = () => {
  return (
    <>
    <Header/>
    <div className="login flex justify-center items-center bg-gray-200 p-10 " >
      <div className="login-form p-9 bg-white border-2 border-gray-300 rounded-2xl text-center  ">
        <h2 className="text-2xl font-bold  ">Login with RSP</h2>
        <p>
          Don't have an account? <a href='' className="text-blue-500 hover:cursor-pointer">Sign Up</a>
        </p>
        <form action="#" method="post" className="mt-4">
          <div className="mb-6 border border-solid rounded-md border-gray-900">
            <input type="text" placeholder="Email" name="email" required className="w-full p-2 " />
          </div>
          <div className="mb-6 border border-solid border-gray-900 rounded-md">
            <input type="password" placeholder="Password" name="password" required className="w-full p-2 " />
          </div>
          <button type="submit" className= "w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Login
          </button>
        </form>
        <p className="forgot-password mt-4 text-end">
          <a href="#" className='text-blue-500'>Forgot Password?</a>
        </p>
        <div className="flex items-center justify-between mt-4">
          <hr className="w-2/5 border-gray-500" />
          <div className="mx-2">OR</div>
          <hr className="w-2/5 border-gray-500" />
        </div>
        <div className="signup-buttons  flex flex-col md:flex-row justify-between mt-4">
          <button className="m-2 w-full signup-button flex items-center bg-blue border bg-blue-500 border-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
            <img className="w-6 h-6 mr-2 rounded-full" src="https://th.bing.com/th?id=OIP.d5futl9_HMoiD0hPTuYylwHaHX&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="LinkedIn" />
            Signup with LinkedIn
          </button>
          <button className="m-2 w-full signup-button flex items-center bg-blue-500 border border-blue-500 text-white  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            <img className="w-6 h-6 mr-2 rounded-full" src="https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=199&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Google" />
            Signup with Google
          </button>
        </div>
      </div>
    </div>

    <Footer/>
      
    </>
  );
};

export default Login;
