import { Link } from "react-router-dom";
import Restaurants from "../components/Restaurants.jsx";
import Products from "../components/Products.jsx";
import "../styles/App.css";

const Home = () => {
  return (
    
    <div>
      
      {/* HERO SECTION */}
      <div className="hero">
        <div className="container text-center">
          <h1>OrderOnTheGo</h1>
          <p>
            Fresh food from your favorite restaurants delivered fast.
          </p>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
      </div>

      <div className="container mt-5">

        {/* RESTAURANTS */}
        <h2 className="section-title">Popular Restaurants</h2>
        <Restaurants />

        {/* PRODUCTS */}
        <h2 className="section-title">Trending Dishes</h2>
        <Products />

        {/* REVIEWS */}
        <h2 className="section-title">Customer Reviews</h2>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="review-box">
              <h5>⭐⭐⭐⭐⭐</h5>
              <p>"Amazing food and super quick delivery!"</p>
              <small>- Priya S.</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="review-box">
              <h5>⭐⭐⭐⭐⭐</h5>
              <p>"Great app experience and clean UI."</p>
              <small>- Rahul K.</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="review-box">
              <h5>⭐⭐⭐⭐⭐</h5>
              <p>"Highly recommended for weekend orders."</p>
              <small>- Sneha M.</small>
            </div>
          </div>
        </div>

      </div>

      {/* CONTACT */}
      <div className="contact">
        <div className="container text-center">
          <h3>Contact Us</h3>
          <p>Email: support@orderonthego.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © {new Date().getFullYear()} OrderOnTheGo. All rights reserved.
      </div>

    </div>
  );
};

export default Home;