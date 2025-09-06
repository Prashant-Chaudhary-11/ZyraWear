import { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted", formData);
  };

  return (
    <div className="">
      <div className="row h-100 m-0">
        {/* Left Side - Form */}
        <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
          <div className="w-100">
            <h2 className="fw-bold mb-2">Start your 14-day free trial</h2>
            <p className="text-muted mb-4">
              No credit card required. Cancel anytime.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Create account
              </button>
            </form>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1" />
              <span className="px-2 text-muted">or</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Social Buttons */}
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-outline-secondary rounded-circle">G</button>
              <button className="btn btn-outline-secondary rounded-circle"></button>
              <button className="btn btn-outline-secondary rounded-circle">X</button>
            </div>

            <p className="mt-4 text-muted font13 text-center">
              Already have an account?{" "}
              <a href="/login" className="fw-semibold text-dark">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Image + Quote */}
        <div className="col-md-8 p-3 d-none d-md-block">
          <div className="position-relative">
            <img
              src="./register.jpg"
              alt="Model"
              className="w-100 h-100 object-fit-cover rounded-5"
            />
            <div className="position-absolute bottom-0 start-50 w-100 translate-middle-x p-3 bg-dark bg-opacity-50 text-white rounded-bottom-5">
              <i className="mb-1 small text-white">
                I landed four paid gigs within a week of signing up, which is more
                than I’ve ever had from an agency. I’ve been recommending it to
                everyone I know since!
              </i>
              <p className="mb-0 small text-white">
                Mia Schultejohann | Model | Melbourne
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
