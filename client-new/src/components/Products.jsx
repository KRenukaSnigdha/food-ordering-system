import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product._id} className="col-md-4 mb-4">
          <div className="card h-100">
            {product.image && (
              <img src={product.image} alt={product.name} />
            )}

            <div className="card-body">
              <h5>{product.name}</h5>
              <p>₹{product.price}</p>

              <button
                className="btn btn-primary w-100"
                onClick={() => addToCart(product._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;