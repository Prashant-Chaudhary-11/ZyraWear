import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // 👈 state for popup

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
      <span className="font12 fw-bold">
        MY CART - <span className="text-muted fw-normal">{cart.length} Items</span>
      </span>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8 col-12">
            {cart.map((item) => (
              <div key={item.id}>
                <div
                  className="card shadow h-100 rounded-3 shopCards border-0 cursor-pointer position-relative d-flex flex-row mb-3 p-2"
                  id={"item_" + item.id}
                  onClick={() => navigate(`/shop/${item.id}`)} // 👉 navigate on card click
                >
                  <img
                    src={item.Image}
                    className="card-img-top cardImageCart"
                    alt={item.Name}
                    style={{ height: "11rem", width: "8rem", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title font16 fw-bolder shopCardTitle m-0">{item.brand}</h6>
                    <p className="small text-muted m-0 font14 text-truncate">{item.Name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="fw-bold m-0 shopPrice">
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "gray",
                            marginRight: "8px",
                            fontWeight: "400",
                          }}
                        >
                          ₹{Math.round(item.price)}
                        </span>
                        <span>
                          ₹{Math.round(item.price - (item.price * item.discount) / 100)}
                        </span>
                        <span className="discount ms-2">{item.discount}% OFF</span>
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-dark shadow-none  d-flex align-items-center justify-content-center mt-3 font12"
                      onClick={(e) => {
                        e.stopPropagation(); // ⛔ stop card navigation
                        removeFromCart(item);
                      }}
                    >
                      <i className="fa-solid fa-trash me-2"></i> REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 col-12">
            <div className="priceCart p-3 rounded shadow-sm">
              <h5 className="text-muted">Price Details</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Price ({cart.length} Items)</span>
                <span>₹{total}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span className="text-success">-₹50</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Platform Fee</span>
                <span>₹5</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between h5">
                <span>Total Amount</span>
                <span>₹{total - 50 + 5}</span>
              </div>
              <p className="text-success small">You will save ₹45 on this order</p>

              {/* 👉 Checkout Button */}
              <button
                className="btn btn-dark w-100 mb-3"
                onClick={() => setShowPopup(true)}
              >
                Proceed to Checkout
              </button>

              <small>
                <i className="fa-solid fa-shield-halved"></i> Safe and Secure
                Payments. Easy returns. 100% Authentic products.
              </small>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div className="bg-white rounded p-4 shadow" style={{ width: "350px" }}>
            <h5 className="mb-3 text-center">⚠️ Payment Gateway</h5>
            <p className="text-muted text-center mb-4">
              Payment gateway is currently in development phase.  
              Please try again later.
            </p>
            <button
              className="btn btn-dark w-100"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
