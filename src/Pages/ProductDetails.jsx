import { useParams } from "react-router-dom";
import Store from "./Store.json";
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams(); // get id from URL
  const product = Store.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  return (
    <div className="container mt-4">
        <div>
            <span className="font12">
                <span className="text-muted fw-normal"><span className="upperNavLinks" onClick={() => navigate(`/`)}>Home</span> / <span className="upperNavLinks" onClick={() => navigate(`/shop`)}>Shop</span> / <span className="fw-bold">{product.Name}</span></span>
            </span>
        </div>
      <div className="row">
        <div className="col-md-7">
            <div className="row mx-0">
                <div className="col-6 mb-3 p-0 pe-3">
                    <img src={product.Image} alt={product.Name} className="img-fluid rounded shadow"/>
                </div>
                <div className="col-6 mb-3 p-0 pe-3">
                    <img src={product.Image} alt={product.Name} className="img-fluid rounded shadow"/>
                </div>
                <div className="col-6 mb-3 p-0 pe-3">
                    <img src={product.Image} alt={product.Name} className="img-fluid rounded shadow"/>
                </div>
                <div className="col-6 mb-3 p-0 pe-3">
                    <img src={product.Image} alt={product.Name} className="img-fluid rounded shadow"/>
                </div>
            </div>
        </div>
        <div className="col-md-5">
          <h4>{product.brand}</h4>
          <h5 className="shopHeadingLight">{product.Name}</h5>
          <hr />
          <p className="d-flex align-items-center mb-2">
            <span>MRP</span>
            <span className="fw-bold mx-2 shopPrice">
              ₹{Math.round(product.price - (product.price * product.discount) / 100)}
            </span>{" "}
            <span className="me-2 font13" style={{ textDecoration: "line-through", color: "gray" }}>
              ₹{Math.round(product.price)}
            </span>{" "}
            <span className="discount">{product.discount}% OFF</span>
          </p>
            <span className="text-success">Inclusive of all taxes</span>
            <div className="d-flex align-items-center mt-3 mb-3">
                <button className="btn btn-outline-dark w-50 me-2">Add to Cart</button>
                <button className="btn btn-dark w-50">Buy Now</button>
            </div>
            <hr />
            <div className="">
                <p className="fw-300">100% Original Products</p>
                <p className="fw-300">Pay on delivery might be available</p>
                <p className="fw-300">Easy 7 days returns and exchanges</p>

                <p className="fw-bold font18">
                    Product Details <i className="fa-regular fa-note-sticky"></i>
                </p>
                {/* remove bullets */}
                <ul className="no-bullets">
                    <li>Green and blue Tshirt for women</li>
                    <li>Typography embroidered</li>
                    <li>Applique detail</li>
                    <li>Longline length</li>
                    <li>Round neck</li>
                    <li>Three-quarter, contrasting raglan sleeves</li>
                    <li>Knitted cotton fabric</li>
                </ul>

                <h6 className="fw-bold mt-3">Size & Fit</h6>
                <ul className="no-bullets">
                    <li>Oversized Fit</li>
                    <li>The model (height 5'8) is wearing a size S</li>
                </ul>

                <h6 className="fw-bold mt-3">Material & Care</h6>
                <ul className="no-bullets">
                    <li>60% Cotton, 40% Polyester</li>
                    <li>Machine wash</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
