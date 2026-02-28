import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/App.css";

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants")
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>All Restaurants</h3>

      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        restaurants.map(restaurant => (
          <div key={restaurant._id} className="card">
            <h5>{restaurant.name}</h5>
            <p>{restaurant.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllRestaurants;