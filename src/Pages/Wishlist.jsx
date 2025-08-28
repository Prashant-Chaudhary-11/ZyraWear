import { useState, useEffect } from "react";
import Store from "../Pages/Store.json";

export const Wishlist = ({ onWishlistChange }) => {
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

    const filteredData = Store.filter((item) => wishlistIds.includes(item.id));

    const removeWishlistItem = (item) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const index = wishlist.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            wishlist.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }

    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    },[])

    return (
        <div className="wishlistContainer">
            <span className="font12 fw-bold">MY WISHLIST - <span className="text-muted fw-normal">{wishlistIds.length} Items</span></span>
            <div className="row mx-0">
                {filteredData.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-6 p-1 mb-1">
                        <div className="card shadow-sm h-100 shopCards border-0 cursor-pointer" id={"item_" + item.id}>
                            <img
                                src={item.Image}
                                className="card-img-top cardImageWishlist"
                                alt={item.Name}
                                style={{ height: "22rem", objectFit: "cover" }}
                            />
                            <div className="card-body ">
                                <h6 className="card-title font13 fw-bolder shopCardTitle m-0">{item.brand}</h6>
                                <p className="small text-muted m-0 font14 text-truncate">{item.Name}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="fw-bold m-0 shopPrice">
                                        <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px", fontWeight: "400" }}>
                                            ₹{Math.round(item.price)}
                                        </span>
                                        <span>
                                            ₹{Math.round(item.price - (item.price * item.discount / 100))}
                                        </span>
                                        <span className="discount ms-2">{item.discount}% OFF</span>
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <button className="btn border-0 shadow-none d-flex p-1 flex-column align-items-center justify-content-center position-absolute top-0 end-0 bg-white rounded-circle m-2 font12 opacity-75 cursor-pointer wishlistCross" onClick={() => {removeWishlistItem(item)}}><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredData.length === 0 && <p className="text-center text-muted">No items found</p>}
            </div>
        </div>
    );
};
