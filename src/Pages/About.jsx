export const About = () => {
    return (
        <div>
            <div className="text-center px-4 aboutus_img d-flex flex-column justify-content-center align-items-center position-relative">
                <h1 className="mainHeadingAbout">ZyraWear – Where Fashion Meets Confidence</h1>
                <p className="secondaryHeadingAbout">Your style, your story. Fashion that fits every moment of life.</p>
                <div className="aboutus_text position-absolute top-100 start-50 translate-middle rounded p-3">
                    Discover stylish, comfortable, and affordable fashion designed to fit your lifestyle. From casual essentials to trendsetting outfits, ZyraWear is here to make you look good and feel great. We believe fashion should be effortless, empowering, and accessible to everyone. Step into a world where your style tells your story.
                </div>
            </div>

            <div className="row mx-0">
                <div className="col-md-6 mb-4 text-center">
                    <div className="position-relative">
                        <img
                            src="about_us_3.jpg"
                            className="experienceImg rounded-4"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-4 d-flex flex-column justify-content-center about_home">
                    <h6 className="secondaryColor topSmallHeading mb-4">About Us</h6>
                    <h3 className="fw-bold sectionsHeading">ZyraWear – Where Fashion Meets Confidence</h3>
                    <p>At ZyraWear, fashion isn’t just about clothes—it’s about expressing who you are. Our journey began with a mission to provide modern, high-quality, and versatile fashion that brings out the best in every individual. We carefully design and curate collections that blend comfort, elegance, and trend, ensuring that you always step out with confidence.

                    From daily wear to statement pieces, ZyraWear is more than just a shopping destination—it’s a lifestyle. We are committed to making fashion accessible without compromise, offering products that combine premium quality with affordable prices. With every collection, we aim to inspire confidence, celebrate individuality, and create a community where style knows no limits.</p>
                </div>
            </div>
            <div className="mt-5">
                <div className="text-center">
                    <h6 className="secondaryColor topSmallHeading mb-4">Why Choose ZyraWear?</h6>
                    <h3 className="fw-bold sectionsHeading">Because fashion should be effortless, affordable, and made for you.</h3>
                </div>
                <div className="row about_row align-items-stretch">
                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_1 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="dress.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Trendy Collections</h5>
                                <p className="aboutCard_subHeading">We bring you the latest styles every season. Fashion-forward pieces designed to keep you confident and stylish every day.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_2 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="quality.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Premium Quality</h5>
                                <p className="aboutCard_subHeading">Each product is made with care, using fabrics that are both durable and comfortable, ensuring long-lasting wear.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_3 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="affordable.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Affordable Fashion</h5>
                                <p className="aboutCard_subHeading">Looking good shouldn’t be expensive. At ZyraWear, you get premium styles at prices that fit every budget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_2 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="fast-shipping.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Fast Delivery</h5>
                                <p className="aboutCard_subHeading">No long waits! We make sure your favorite outfits reach you quickly, right at your doorstep.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_3 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="customer-service.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Customer First</h5>
                                <p className="aboutCard_subHeading">Your satisfaction is our priority. Our support team is always ready to assist and ensure you have a smooth shopping experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 d-flex about_columns">
                        <div className="about_bg_1 w-100 p-3 rounded-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="planet-earth.png" className="aboutCard_img" alt="" />
                            <div className="text-center mt-3">
                                <h5 className="fw-bold aboutCard_mainHeading">Sustainable Approach</h5>
                                <p className="aboutCard_subHeading">We believe in fashion with responsibility. Our practices are designed to reduce waste and care for the planet.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}