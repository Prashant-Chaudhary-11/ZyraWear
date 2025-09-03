import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Pages/Header';
import { Footer } from './Pages/Footer';

// Pages
import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/Signup';
import { Wishlist } from './Pages/Wishlist';
import { ProductDetails } from './Pages/ProductDetails'; // 👈 import ProductDetails

const App = () => {
  // ✅ make WishlistCount a state
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <BrowserRouter>
      {/* pass wishlistCount to Header */}
      <Header WishlistCount={wishlistCount} />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop"
          element={<Shop onWishlistChange={(count) => setWishlistCount(count)} />}
        />
        <Route path="/shop/:id" element={<ProductDetails />} /> {/* 👈 new route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist onWishlistChange={(count) => setWishlistCount(count)} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
