import experience from "../images/experience_2.jpg";

let topDresses = [
    {
        category: "Women Top",
        Name: "Women Asthetic Top",
        SubTitle: "Women Tribal Printed Round Neck Shirt Style Top",
        Image: "https://ik.imagekit.io/kt6wczqim/top_women.jpg",
        price: 700
    },
    {
        category: "Men T-Shirt",
        Name: "Men Casual T-Shirt",
        SubTitle: "Men Graphic Print Relaxed Fit Crew-Neck T-Shirt",
        Image: "https://ik.imagekit.io/kt6wczqim/tshirt_men.jpg",
        price: 650
    },
    {
        category: "Women T-Shirt",
        Name: "Women Stylish T-Shirt",
        SubTitle: "The Life Co. Typography Embroidered Contrast Sleeves Oversized Longline T-shirt",
        Image: "https://ik.imagekit.io/kt6wczqim/tshirt_women.jpg",
        price: 600
    },
    {
        category: "Mens Sneakers",
        Name: "Reverb: Azure",
        SubTitle: "Men Low Top Sneakers",
        Image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1745837248_6457922.jpg?w=720&dpr=2.0",
        price: 850
    },
    {
        category: "Men T-Shirt",
        Name: "MARVEL STREET",
        SubTitle: "Black Panther Print Drop-Shoulder Sleeves Pure Cotton Oversized T-shirt",
        Image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31411599/2025/6/2/1f6a6647-c15f-43ff-9d8b-6bbb70d7b93e1748868863060-MARVEL-STREET-Men-Tshirts-3321748868862193-1.jpg",
        price: 999
    },
    {
        category: "Women Jeans",
        Name: "NU CLOTHS",
        SubTitle: "Women Jean Wide Leg High-Rise Light Fade Stretchable Jeans",
        Image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2025/FEBRUARY/21/lBprLVPl_205522660ade435182723ffff1bb1daa.jpg",
        price: 850
    },
    {
        category: "Women Shirt",
        Name: "Roadster",
        SubTitle: "The Lifestyle Co. Women Spread Collar Textured Satin Casual Shirt",
        Image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/31298489/2024/11/28/30e801f3-abca-4623-9379-62fe1aa27b721732811048787-The-Roadster-Lifestyle-Co-Women-Spread-Collar-Textured-Satin-6.jpg",
        price: 680
    },
    {
        category: "Women Trousers",
        Name: "Popnetic",
        SubTitle: "Women High Raise Cargo Trousers",
        Image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/30962742/2024/9/20/312bec15-9757-4a46-b663-1482caf892ee1726808627502-Popnetic-Women-Trousers-5551726808626975-1.jpg",
        price: 959
    },
];

export const Top = () => {
    return (
        <div className="ExperienceSection container py-4">
            <h3 className="fw-bold sectionsHeading text-center mb-5">
                Top ZyraWear Picks
            </h3>

            <div className="row mx-0 pt-3">
                {topDresses.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                        <div className="card shadow-sm h-100 topCards border-0">
                            <img
                                src={item.Image}
                                className="card-img-top topImageHome"
                                alt={item.Name}
                                style={{ height: "25rem", objectFit: "cover" }}
                            />
                            <div className="card-body ">
                                <h6 className="card-title">{item.category}</h6>
                                {item.SubTitle && (
                                    <p className="small text-muted text-truncate">{item.Name}</p>
                                )}
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="fw-bold m-0">₹{item.price}</p>
                                    <div className="d-flex align-items-center">
                                    <button to="/login" className="btn border-0 shadow-none d-flex px-1 flex-column align-items-center justify-content-center me-2"><i class="fa-brands fa-opencart"></i> <span className="font12">Cart</span></button>
                                    <button to="/login" className="btn border-0 shadow-none d-flex px-1 flex-column align-items-center justify-content-center"><i class="fa-regular fa-heart"></i> <span className="font12">Wishlist</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
