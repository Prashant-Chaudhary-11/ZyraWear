import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="row mx-0">
      {/* Text Section */}
      <div className="col-12 col-md-6 order-2 order-md-1">
        <div className="d-flex flex-column errorPhone text-center p-3">
          <h1 className="display-1 fw-bold text-dark">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-dark">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-12 col-md-6 order-1 order-md-2">
        <img src="./404.svg" alt="404" className="img-fluid p-4" />
      </div>
    </div>
  );
};
