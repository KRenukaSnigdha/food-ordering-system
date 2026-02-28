import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../../styles/App.css";
import { CartContext } from "../../context/CartContext";

const AllProducts = () => {

  const { addToCart } = useContext(CartContext); // ✅ inside component

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>All Products</h3>

      {products.map(product => (
        <div key={product._id} className="card p-3 mb-3">
          <h5>{product.name}</h5>
          <p>₹{product.price}</p>

          {/* ✅ Button INSIDE map */}
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;