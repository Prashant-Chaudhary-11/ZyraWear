import { NavLink } from "react-router-dom";
import logo from '../images/ZyraWear logo.png'
export const Header = (WishlistCount) => {
    console.log("WishlistCount", WishlistCount)
    return (
        <div className="header py-2 z-3 px-5">
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="logo m-0 d-flex align-items-center"><img src={logo} alt="" width={28} className="me-2" />ZyraWear</h2>
                <nav>
                    <ul className="d-flex list-unstyled mb-0">
                        <li className="me-4">
                            <NavLink to="/" className="text-decoration-none navLinks text-dark" activeclassname="fw-bold">Home</NavLink>
                        </li>
                        <li className="me-4">
                            <NavLink to="/shop" className="text-decoration-none navLinks text-dark" activeclassname="fw-bold">Shop</NavLink>
                        </li>
                        <li className="me-4">
                            <NavLink to="/about" className="text-decoration-none navLinks text-dark" activeclassname="fw-bold">About</NavLink>
                        </li>
                        <li className="me-4">
                            <NavLink to="/contact" className="text-decoration-none navLinks text-dark" activeclassname="fw-bold">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="d-flex align-items-center">
                    <div className="position-relative">
                        <input className="customInput me-2" type="text" placeholder="Search" />
                        <i class="customSearchIcon fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y"></i>
                    </div>
                    <NavLink to="/login" className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center me-2"><i class="fa-brands fa-opencart"></i> <span className="font12">Cart</span></NavLink>
                    <NavLink to="/wishlist" className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center me-2 position-relative"><span class="position-absolute translate-middle badge rounded-pill bg-danger wishlistBadge">{WishlistCount.WishlistCount}<span class="visually-hidden">unread messages</span></span><i class="fa-regular fa-heart"></i> <span className="font12">Wishlist</span></NavLink>
                    <NavLink to="/login" className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center"><i class="fa-regular fa-user"></i> <span className="font12">Sign In</span></NavLink>
                    {/* <NavLink to="/login" className="btn customButton me-2">Login</NavLink>
                    <NavLink to="/signup" className="btn customButton">Sign Up</NavLink> */}
                </div>
            </div>
        </div>
    );
};
