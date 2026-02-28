// src/pages/customer/IndividualRestaurant.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const IndividualRestaurant = () => {
  const { id } = useParams(); // restaurant id
  const [products, setProducts] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Fetch products for this restaurant
    axios.get(`http://localhost:5000/api/products`)
      .then(res => {
        const filtered = res.data.filter(p => p.restaurantId === id);
        setProducts(filtered);
      })
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    // Fetch restaurant info (optional, if you have a restaurants API)
    axios.get(`http://localhost:5000/api/restaurants`)
      .then(res => {
        const r = res.data.find(r => r._id === id);
        setRestaurant(r);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-3">{restaurant.name}</h2>
      <p className="mb-4">{restaurant.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(p => (
            <div key={p._id} className="card p-3 shadow rounded-lg">
              <h5 className="font-semibold">{p.name}</h5>
              <p className="text-green-700 font-bold mb-2">₹{p.price}</p>
              <button className="btn btn-success">Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IndividualRestaurant;