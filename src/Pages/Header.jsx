import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ WishlistCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header py-2 z-3 px-3 border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        {/* Logo */}
        <NavLink to="/" className="d-flex align-items-center text-decoration-none" onClick={() => setMenuOpen(false)}>
          <img src="../ZyraWear_Logo.png" alt="Logo" width={28} className="me-2" />
          <h2 className="logo m-0">ZyraWear</h2>
        </NavLink>


        {/* Hamburger button for mobile */}
        <button
          className="d-lg-none border-0 bg-transparent fs-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        {/* Desktop Menu */}
        <nav className="d-none d-lg-block">
          <ul className="d-flex list-unstyled mb-0">
            <li className="me-4">
              <NavLink to="/" className="navLinks text-dark text-decoration-none">
                Home
              </NavLink>
            </li>
            <li className="me-4">
              <NavLink to="/shop" className="navLinks text-dark text-decoration-none">
                Shop
              </NavLink>
            </li>
            <li className="me-4">
              <NavLink to="/about" className="navLinks text-dark text-decoration-none">
                About
              </NavLink>
            </li>
            <li className="me-4">
              <NavLink to="/contact" className="navLinks text-dark text-decoration-none">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Icons (Cart, Wishlist, Login) - Always visible */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="position-relative">
            <input
              className="customInput me-2"
              type="text"
              placeholder="Search"
            />
            <i className="customSearchIcon fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y"></i>
          </div>
          <NavLink
            to="/cart"
            className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center me-2"
          >
            <i className="fa-brands fa-opencart"></i>
            <span className="font12">Cart</span>
          </NavLink>
          <NavLink
            to="/wishlist"
            className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center me-2 position-relative"
          >
            <span className="position-absolute translate-middle badge rounded-pill bg-danger wishlistBadge">
              {WishlistCount}
              <span className="visually-hidden">unread messages</span>
            </span>
            <i className="fa-regular fa-heart"></i>
            <span className="font12">Wishlist</span>
          </NavLink>
          <NavLink
            to="/login"
            className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center"
          >
            <i className="fa-regular fa-user"></i>
            <span className="font12">Sign In</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="d-lg-none h-100 z-3 position-absolute bg-white w-100 start-0 shadow-sm p-3">
          <ul className="list-unstyled">
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-regular fa-house"></i> Home
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/shop" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-solid fa-shop"></i> Shop
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/about" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-regular fa-address-card"></i> About
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/contact" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-regular fa-comment-dots"></i> Contact
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/cart" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-brands fa-opencart"></i> Cart
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/wishlist" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-regular fa-heart"></i> Wishlist
              </NavLink>
            </li>
            <li className="py-2 px-3 border-bottom mobileMenuItem">
              <NavLink to="/signIn" className="navLinks w-100 d-block text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
              <i class=" me-2 fa-regular fa-user"></i> Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
