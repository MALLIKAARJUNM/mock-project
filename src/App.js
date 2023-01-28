import React,{useState} from 'react';
import './App.css';
import LoginForm from './component/LoginForm.js'
import RegistrationForm from './component/RegistrationForm.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home.js';
import Contact from './component/Contact.js';
import About from './component/About.js';
import Navbar from './component/Navbar.js';
import TestBundle from './component/TestBundle.js';
import Instructions from './component/Instructions.js';
import TestPage from './component/TestPage.js';

function App() {
  //const [questions, setQuestions] = useState("");
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="RegistrationForm" element={<RegistrationForm />} />
        <Route path="TestBundle" element={<TestBundle />} />
        <Route path="Instructions" element={<Instructions />} />
        <Route path="TestPage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //<Route path="TestPage" element={<TestPage />} />
    //     <Login />
    //   </div>
    // <div>
    //   <Home />
    // </div>
  );
}

export default App;
