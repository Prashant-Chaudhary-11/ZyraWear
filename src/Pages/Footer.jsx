export const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="row mx-0">
                <div className="col-3">
                    <h5 className="fw-bold mb-3 logo">ZyraWear</h5>
                    <p>Elevate your wardrobe with ZyraWear.
                        Where timeless style meets everyday comfort.</p>
                </div>
                <div className="col-3">
                    <h6 className="secondaryColor mb-3">About</h6>
                    <p>Company</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
                <div className="col-3">
                    <h6 className="secondaryColor mb-3">Shop By</h6>
                    <p>All</p>
                    <p>Mens</p>
                    <p>Womens</p>
                    <p>Kids</p>
                </div>
                <div className="col-3">
                    <h6 className="secondaryColor mb-3">Follow Us</h6>
                    <p><i class="fa-brands fa-facebook-f"></i> Facebook</p>
                    <p><i class="fa-brands fa-instagram"></i> Instagram</p>
                    <p><i class="fa-brands fa-x-twitter"></i> Twitter</p>
                    <p><i class="fa-brands fa-youtube"></i> YouTube</p>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="text-center mt-4">© {year} ZyraWear. All rights reserved.</p>
                <p className="text-center">Terms of Service | Privacy Policy</p>
            </div>
        </div>
    );
}