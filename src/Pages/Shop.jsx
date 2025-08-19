import { useEffect, useState } from "react";

export const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch only clothing category products
        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container py-4">
            <h3 className="fw-bold text-center mb-4">Shop ZyraWear</h3>
            <div className="row g-4">
                {products.map((item) => (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card shadow-sm h-100">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-muted">{item.category}</p>
                                <p className="fw-bold">₹{(item.price * 83).toFixed(0)}</p>
                                <button className="btn btn-dark">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
