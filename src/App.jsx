import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Pages/Header';
import { Footer } from './Pages/Footer';

// Pages
import {Home} from './Pages/Home';
import {Shop} from './Pages/Shop';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Login} from './Pages/Login';
import {SignUp} from './Pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
