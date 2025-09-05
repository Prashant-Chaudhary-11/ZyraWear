import { useParams, useNavigate } from "react-router-dom";
import Store from "./Store.json";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const product = Store.find((item) => item.id === parseInt(id));

  const [cartIds, setCartIds] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Load existing cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartIds(cart.map((i) => i.id));
  }, []);

  // 👉 Function to add to cart
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.find((i) => i.id === item.id)) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartIds(cart.map((i) => i.id));
    }
  };

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  // Suggestions
  const suggestions = [...Store]
    .filter((item) => item.id !== parseInt(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <div>
        <span className="font12">
          <span className="text-muted fw-normal">
            <span className="upperNavLinks" onClick={() => navigate(`/`)}>Home</span> /{" "}
            <span className="upperNavLinks" onClick={() => navigate(`/shop`)}>Shop</span> /{" "}
            <span className="fw-bold">{product.Name}</span>
          </span>
        </span>
      </div>

      <div className="row">
        {/* Images */}
        <div className="col-md-7">
          <div className="row mx-0">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="col-6 mb-3 p-0 pe-3">
                <img src={product.Image} alt={product.Name} className="img-fluid rounded shadow" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-5">
          <h4>{product.brand}</h4>
          <h5 className="shopHeadingLight">{product.Name}</h5>
          <hr />
          <p className="d-flex align-items-center mb-2">
            <span>MRP</span>
            <span className="fw-bold mx-2 shopPrice">
              ₹{Math.round(product.price - (product.price * product.discount) / 100)}
            </span>
            <span className="me-2 font13" style={{ textDecoration: "line-through", color: "gray" }}>
              ₹{Math.round(product.price)}
            </span>
            <span className="discount">{product.discount}% OFF</span>
          </p>
          <span className="text-success">Inclusive of all taxes</span>

          {/* Cart Buttons */}
          <div className="d-flex align-items-center mt-3 mb-3">
            <button
              className="btn btn-outline-dark w-50 me-2"
              onClick={() => addToCart(product)}
            >
              {cartIds.includes(product.id) ? "Added to Cart" : "Add to Cart"}
            </button>
            <button
              className="btn btn-dark w-50"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
          <hr />

          {/* Product Details */}
          <div>
            <p className="fw-300">100% Original Products</p>
            <p className="fw-300">Pay on delivery might be available</p>
            <p className="fw-300">Easy 7 days returns and exchanges</p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-5">
        <h6 className="fw-bold">You May Also Like</h6>
        <div className="row">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="col-6 col-md-2 mb-3"
              onClick={() => navigate(`/shop/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 shopCards border-0">
                <img
                  src={item.Image}
                  className="card-img-top cardImageShop rounded"
                  alt={item.Name}
                  style={{ height: "17rem", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title font13 fw-bolder text-truncate m-0">{item.brand}</h6>
                  <p className="small text-muted m-0 font14 text-truncate">{item.Name}</p>
                  <p className="fw-bold m-0">
                    <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px" }}>
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
          ))}
        </div>
      </div>
    </div>
  );
};
