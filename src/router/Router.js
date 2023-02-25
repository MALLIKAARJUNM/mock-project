import React from 'react';
import Home from '../container/Home'
import Contact from '../container/Contact'
import About from '../container/About'
import LoginForm from '../container/LoginForm'
import RegistrationForm from '../container/RegistrationForm'
import Instructions from '../container/Instructions'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from '../container/TestPage';


const Router = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="RegistrationForm" element={<RegistrationForm />} />
          <Route path="Instructions" element={<Instructions />} />
          <Route path="TestPage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;