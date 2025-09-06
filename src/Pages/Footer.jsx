import { Link } from "react-router-dom";

export const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="row mx-0">
                {/* Logo + About */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
                    <h2 className="logo m-0 mb-2 d-flex align-items-center justify-content-center">
                        <img
                            src="../ZyraWear_Logo.png"
                            alt="ZyraWear Logo"
                            width={28}
                            className="me-2"
                        />
                        ZyraWear
                    </h2>
                    <p className="text-start">
                        Elevate your wardrobe with ZyraWear.
                        Where timeless style meets everyday comfort.
                    </p>
                </div>

                {/* About Links */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
                    <h6 className="secondaryColor mb-3">About</h6>
                    <p><Link to="/about" className="text-dark text-decoration-none">Company</Link></p>
                    <p><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></p>
                    <p><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></p>
                    <p><Link to="/careers" className="text-dark text-decoration-none">Careers</Link></p>
                    <p><Link to="/privacy" className="text-dark text-decoration-none">Privacy Policy</Link></p>
                </div>

                {/* Shop Links */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
                    <h6 className="secondaryColor mb-3">Shop By</h6>
                    <p><Link to="/shop" className="text-dark text-decoration-none">All</Link></p>
                    <p><Link to="/shop" className="text-dark text-decoration-none">Mens</Link></p>
                    <p><Link to="/shop" className="text-dark text-decoration-none">Womens</Link></p>
                    {/* <p><Link to="/shop/kids" className="text-dark text-decoration-none">Kids</Link></p> */}
                </div>

                {/* Social Media Links */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
                    <h6 className="secondaryColor mb-3">Follow Us</h6>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            <i className="fa-brands fa-facebook-f me-2"></i> Facebook
                        </a>
                    </p>
                    <p>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            <i className="fa-brands fa-instagram me-2"></i> Instagram
                        </a>
                    </p>
                    <p>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            <i className="fa-brands fa-x-twitter me-2"></i> Twitter
                        </a>
                    </p>
                    <p>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            <i className="fa-brands fa-youtube me-2"></i> YouTube
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="d-flex justify-content-center align-items-center border-top pt-3">
                <p className="text-center mb-0">
                    © {year} ZyraWear. All rights reserved.
                </p>
            </div>
        </div>
    );
};
