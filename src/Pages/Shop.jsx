import { useState, useEffect } from "react";
import Store from "../Pages/Store.json";

export const Shop = ({ onWishlistChange }) => {
    const [wishlistIds, setWishlistIds] = useState([]);
    const [cartIds, setCartIds] = useState([]);
  
    const setWishlist = (wishlist) => {
      const wishlistIds = wishlist.map((item) => item.id);
      setWishlistIds(wishlistIds);
  
      // notify parent if callback is provided
      if (onWishlistChange) {
        onWishlistChange(wishlistIds.length);
      }
    };

    const setCart = (cart) => {
      const cartIds = cart.map((item) => item.id);
      setCartIds(cartIds);
    }
    // States for filters
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState(10000);
    const [sortBy, setSortBy] = useState("recommended");


    // Filter + sort logic
    const filteredData = Store.filter((item) => {
        // Gender Filter
        if (categoryFilter !== "all" && item.gender?.toLowerCase() !== categoryFilter) {
            return false;
        }

        // Category Filter
        if (categories.length > 0 && !categories.includes(item.category)) {
            return false;
        }

        // Price Filter
        if (item.price > price) {
            return false;
        }

        return true;
    }).sort((a, b) => {
        if (sortBy === "lowtohigh") return a.price - b.price;
        if (sortBy === "hightolow") return b.price - a.price;
        if (sortBy === "az") return a.Name.localeCompare(b.Name);
        if (sortBy === "za") return b.Name.localeCompare(a.Name);
        return 0; // Recommended / Default
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
        //change icon color based on wishlist
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }

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
        //change icon color based on cart
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }

    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);

    },[])

    return (
        <div className="shopContainer">
            {/* Top Section */}
            <div className="d-flex justify-content-between align-items-center mb-3 me-4 ms-2">
                <div>
                    <span className="font12 fw-bold">
                        All Dresses - <span className="text-muted fw-normal">{filteredData.length} Items</span>
                    </span>
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="SortDress" className="form-label font14 text-muted m-0 me-2">
                        Sort By:
                    </label>
                    <select
                        className="form-select shadow-none shopSelect font14"
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

            {/* Main Section */}
            <div className="row mx-0">
                {/* Filters */}
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border-end border-top pt-3 pe-0">
                    <div>
                        <div className="d-flex justify-content-between align-items-center pe-3">
                            <h6 className="vertical-filters-header">FILTERS</h6>
                            <h6
                                className="vertical-filters-header text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setCategoryFilter("all");
                                    setCategories([]);
                                    setPrice(10000);
                                }}
                            >
                                Clear All
                            </h6>
                        </div>

                        {/* Gender Filter */}
                        <div>
                            <div className="form-check d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryFilter"
                                    id="all"
                                    checked={categoryFilter === "all"}
                                    onChange={() => setCategoryFilter("all")}
                                />
                                <label className="form-check-label font14 text-muted" htmlFor="all">All</label>
                            </div>
                            <div className="form-check d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryFilter"
                                    id="mens"
                                    checked={categoryFilter === "men"}
                                    onChange={() => setCategoryFilter("men")}
                                />
                                <label className="form-check-label font14 text-muted" htmlFor="mens">Men</label>
                            </div>
                            <div className="form-check d-flex align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="categoryFilter"
                                    id="womens"
                                    checked={categoryFilter === "women"}
                                    onChange={() => setCategoryFilter("women")}
                                />
                                <label className="form-check-label font14 text-muted" htmlFor="womens">Women</label>
                            </div>
                        </div>
                        <hr />

                        {/* Category Filter */}
                        <div>
                            <h6 className="vertical-filters-header">CATEGORIES</h6>
                            {["Women Dresses", "Women Tops", "Mens-Tshirt", "Mens Shirt", "Mens Coat", "Mens Ethenic", "Women Saree", "Women Ethenic", "Women Tshirt", "Mens Jeans", "Women Jeans"].map((cat, i) => (
                                <div className="form-check d-flex align-items-center gap-2" key={i}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={categories.includes(cat)}
                                        onChange={() => {
                                            if (categories.includes(cat)) {
                                                setCategories(categories.filter((c) => c !== cat));
                                            } else {
                                                setCategories([...categories, cat]);
                                            }
                                        }}
                                        id={`cat-${i}`}
                                    />
                                    <label className="form-check-label font14 text-muted" htmlFor={`cat-${i}`}>
                                        {cat}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <hr />

                        {/* Price Filter */}
                        <div>
                            <h6 className="vertical-filters-header">PRICE</h6>
                            <div className="pe-3">
                                <input
                                    type="range"
                                    min={0}
                                    max={10000}
                                    value={price}
                                    className="form-range"
                                    id="customRange1"
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />
                                <label htmlFor="customRange1" className="form-check-label font14 text-muted">
                                    ₹0 - ₹{price}+
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="col-lg-9 col-md-8 col-sm-12 mb-4 border-top pt-3">
                    <div className="row mx-0">
                        {filteredData.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="card shadow-sm h-100 shopCards border-0 cursor-pointer" id={"item_" + item.id}>
                                    <img
                                        src={item.Image}
                                        className="card-img-top"
                                        alt={item.Name}
                                        style={{ height: "19rem", objectFit: "cover" }}
                                    />
                                    <div className="card-body ">
                                        <h6 className="card-title font13 m-0">{item.brand}</h6>
                                        <p className="small text-muted font14 text-truncate fw-200 m-0">{item.Name}</p>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <p className="fw-bold m-0">₹{item.price}</p>
                                            <div className="d-flex align-items-center">
                                                <button className="btn border-0 shadow-none d-flex px-1 py-0 flex-column align-items-center justify-content-center me-2" onClick={() => { addToCart(item) }}>
                                                    <i className={ cartIds.includes(item.id) ? "fa-brands fa-opencart text-warning" : "fa-brands fa-opencart"}></i> <span className="font12">Cart</span>
                                                </button>
                                                <button className="btn border-0 shadow-none d-flex px-1 py-0 flex-column align-items-center justify-content-center" onClick={() => { addWishlist(item) }}><i className={ wishlistIds.includes(item.id) ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart" }></i> <span className="font12">Wishlist</span></button>
                                            </div>
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
