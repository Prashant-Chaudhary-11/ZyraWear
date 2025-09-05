import { useState, useEffect } from "react";
import Store from "../Pages/Store.json";
import { useNavigate } from "react-router-dom";

export const Shop = ({ onWishlistChange }) => {
    const navigate = useNavigate();
    const [wishlistIds, setWishlistIds] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [showFilter, setShowFilter] = useState(false); // 👈 filter toggle

    const setWishlist = (wishlist) => {
        const wishlistIds = wishlist.map((item) => item.id);
        setWishlistIds(wishlistIds);
        if (onWishlistChange) {
            onWishlistChange(wishlistIds.length);
        }
    };

    const setCart = (cart) => {
        const cartIds = cart.map((item) => item.id);
        setCartIds(cartIds);
    };

    // States for filters
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState(10000);
    const [sortBy, setSortBy] = useState("recommended");

    // Filter + sort logic
    const filteredData = Store.filter((item) => {
        if (categoryFilter !== "all" && item.gender?.toLowerCase() !== categoryFilter) {
            return false;
        }
        if (categories.length > 0 && !categories.includes(item.category)) {
            return false;
        }
        if (item.price > price) {
            return false;
        }
        return true;
    }).sort((a, b) => {
        if (sortBy === "lowtohigh") return a.price - b.price;
        if (sortBy === "hightolow") return b.price - a.price;
        if (sortBy === "az") return a.Name.localeCompare(b.Name);
        if (sortBy === "za") return b.Name.localeCompare(a.Name);
        return 0;
    });

    const addWishlist = (item) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const index = wishlist.findIndex((i) => i.id === item.id);
        if (index === -1) {
            wishlist.push(item);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } else {
            wishlist.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    };

    const addToCart = (item) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cart.findIndex((i) => i.id === item.id);
        if (index === -1) {
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }, []);

    return (
        <div className="shopContainer">
            {/* Top Section */}
            <div className="mb-3 mx-2">
                <div>
                    <span className="font12 fw-bold">
                        All Dresses - <span className="text-muted fw-normal">{filteredData.length} Items</span>
                    </span>
                </div>
                <div className="align-items-center w-100 justify-content-between border rounded recommandMobile">
                    {/* 👇 Mobile Filter Button */}
                    <button
                        className="btn btn-outline-secondary border-end rounded-0 d-lg-none font14 lightborder py-1 w-50 border-0"
                        onClick={() => setShowFilter(true)}
                    >
                        <i className="fa-solid fa-filter me-1"></i> Filters
                    </button>
                    <span></span>
                    <div className="d-flex align-items-center w-50">
                        <select
                            className="form-select border-0 text-center shadow-none shopSelect font14"
                            id="SortDress"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recommended">Recommended</option>
                            <option value="lowtohigh">Price: Low to High</option>
                            <option value="hightolow">Price: High to Low</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="justify-content-end recommandLaptop">
                    <select
                            className="form-select text-center shadow-none shopSelect font14"
                            id="SortDress"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recommended">Recommended</option>
                            <option value="lowtohigh">Price: Low to High</option>
                            <option value="hightolow">Price: High to Low</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                </div>
            </div>

            <div className="row mx-0">
                {/* Filters - Desktop visible, Mobile hidden unless button clicked */}
                <div
                    className={`col-lg-3 col-md-4 col-sm-6 mb-4 border-end border-top bg-white h-100 p-3 
          ${showFilter ? "d-block position-fixed top-0 start-0" : "d-none"} d-lg-block`}
                    style={{ zIndex: 1050, overflowY: "auto" }}
                >
                    {/* Header for mobile filter */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="m-0">Filters</h5>
                        <div>
                            <button
                                className="btn btn-sm btn-outline-success me-2 d-lg-none"
                                onClick={() => setShowFilter(false)}
                            >
                                Apply
                            </button>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => { setCategoryFilter("all"); setCategories([]); setPrice(10000); }}
                            >
                                Clear All
                            </button>
                        </div>
                    </div>

                    {/* Filter Options */}
                    <div>
                        {/* Gender Filter */}
                        <h6 className="vertical-filters-header">GENDER</h6>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={categoryFilter === "all"}
                                onChange={() => setCategoryFilter("all")}
                            />
                            <label className="form-check-label">All</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={categoryFilter === "men"}
                                onChange={() => setCategoryFilter("men")}
                            />
                            <label className="form-check-label">Men</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={categoryFilter === "women"}
                                onChange={() => setCategoryFilter("women")}
                            />
                            <label className="form-check-label">Women</label>
                        </div>
                        <hr />

                        {/* Category Filter */}
                        <h6 className="vertical-filters-header">CATEGORIES</h6>
                        {(
                            categoryFilter === "men"
                                ? ["Mens-Tshirt", "Mens Shirt", "Mens Coat", "Mens Ethenic", "Mens Jeans"]
                                : categoryFilter === "women"
                                    ? ["Women Dresses", "Women Tops", "Women Saree", "Women Ethenic", "Women Tshirt", "Women Jeans"]
                                    : ["Women Dresses", "Women Tops", "Mens-Tshirt", "Mens Shirt", "Mens Coat", "Mens Ethenic", "Women Saree", "Women Ethenic", "Women Tshirt", "Mens Jeans", "Women Jeans"]
                        ).map((cat, i) => (
                            <div className="form-check" key={i}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={categories.includes(cat)}
                                    onChange={() =>
                                        categories.includes(cat)
                                            ? setCategories(categories.filter((c) => c !== cat))
                                            : setCategories([...categories, cat])
                                    }
                                />
                                <label className="form-check-label">{cat}</label>
                            </div>
                        ))}
                        <hr />

                        {/* Price Filter */}
                        <h6 className="vertical-filters-header">PRICE</h6>
                        <input
                            type="range"
                            min={0}
                            max={10000}
                            value={price}
                            className="form-range"
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <label>₹0 - ₹{price}+</label>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="col-lg-9 col-md-8 col-sm-12 mb-4 border-top pt-3 px-1">
                    <div className="row mx-0">
                        {filteredData.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2 px-1" onClick={() => navigate(`/shop/${item.id}`)}
                            style={{ cursor: "pointer" }}>
                                <div className="card h-100 shopCards border-0">
                                    <img
                                        src={item.Image}
                                        className="card-img-top cardImageShop rounded"
                                        alt={item.Name}
                                        style={{ height: "22rem", objectFit: "cover" }}
                                    />
                                    <div className="card-body p-2">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className="w-75">
                                                <h6 className="card-title font13 fw-bolder shopCardTitle m-0">{item.brand}</h6>
                                                <p className="small text-muted m-0 font14 text-truncate">{item.Name}</p>
                                            </div>
                                            <button
                                                className="btn border-0 shadow-none d-flex flex-column align-items-center justify-content-center"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // ⛔ stop card click
                                                    addWishlist(item);
                                                }}
                                                >
                                                <i className={wishlistIds.includes(item.id) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}></i>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="fw-bold m-0">
                                                <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px", fontWeight: "400" }}>
                                                    ₹{Math.round(item.price)}
                                                </span>
                                                <span>
                                                    ₹{Math.round(item.price - (item.price * item.discount / 100))}
                                                </span>
                                                <span className="discount ms-2">{item.discount}% OFF</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredData.length === 0 && <p className="text-center text-muted">No items found</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
