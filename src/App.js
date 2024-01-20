import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navbar';
import Header from './Component/Header/header';
import Footer from './Component/Footer/footer';
import Contact from './Container/Contact/contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Container/Login/login';
import ProfessionalsPage from './Container/Professional/professional';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} ></Route> 
      <Route  path='/contact' element={<Contact/>} ></Route>
      <Route  path='/professional' element={<ProfessionalsPage/>} ></Route>
    </Routes>
    </BrowserRouter>
  
    {/* <Header/>
    <Footer/>      */}
    
    </>
  );
}

export default App;
