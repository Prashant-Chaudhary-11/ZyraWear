import { useState, useEffect } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeFromCart = (item) => {
    const updated = cart.filter((i) => i.id !== item.id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + Math.round(item.price - (item.price * item.discount) / 100),
    0
  );

  return (
    <div className="container mt-4">
      <h4>My Cart ({cart.length} items)</h4>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-6 col-6 p-1 mb-1">
            <div
                className="card shadow-sm h-100 shopCards border-0 cursor-pointer position-relative"
                id={"item_" + item.id}
                onClick={() => navigate(`/shop/${item.id}`)} // 👉 navigate on card click
            >
                <img
                    src={item.Image}
                    className="card-img-top cardImageWishlist"
                    alt={item.Name}
                    style={{ height: "22rem", objectFit: "cover" }}
                />
                <div className="card-body">
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
                    </div>
                </div>

                {/* ❌ Remove button (stop redirect on click) */}
                <button
                    className="btn border-0 shadow-none d-flex p-1 flex-column align-items-center justify-content-center position-absolute top-0 end-0 bg-white rounded-circle m-2 font12 opacity-75 cursor-pointer wishlistCross"
                    onClick={(e) => {
                        e.stopPropagation(); // ⛔ stop card navigation
                        removeFromCart(item);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
          ))}
          <div className="col-12 mt-3">
            <h5>Total: ₹{total}</h5>
            <button className="btn btn-dark w-100">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
