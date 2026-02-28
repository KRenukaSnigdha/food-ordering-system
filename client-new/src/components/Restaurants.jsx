import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants")
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {restaurants.map(r => (
        <div key={r._id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "30%" }}>
          <h5 style={{ fontWeight: "bold" }}>{r.name}</h5>
          <p>{r.description}</p>
          <Link to={`/restaurant/${r._id}`} style={{ textDecoration: "none", backgroundColor: "#0d6efd", color: "#fff", padding: "0.5rem 1rem", borderRadius: "4px" }}>
            View Menu
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;