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
            <h6 className="vertical-filters-header ms-3">MY WISHLIST <span className="text-body-tertiary">{wishlistIds.length} Items</span></h6>
            <div className="row mx-0">
                {filteredData.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-4 col-sm-6 mb-4">
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
