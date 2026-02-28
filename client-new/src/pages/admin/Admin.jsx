import { Link, Routes, Route } from "react-router-dom";
import "../../styles/App.css";

import AllProducts from "./AllProducts.jsx";
import AllRestaurants from "./AllRestaurants.jsx";

// Temporary placeholders (create real pages later)
const Users = () => <h4>All Users Page</h4>;
const Orders = () => <h4>All Orders Page</h4>;

const Admin = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Admin Dashboard
      </h2>

      {/* Navigation */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        <Link to="products" className="btn">Products</Link>
        <Link to="restaurants" className="btn">Restaurants</Link>
        <Link to="users" className="btn">Users</Link>
        <Link to="orders" className="btn">Orders</Link>
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="products" element={<AllProducts />} />
        <Route path="restaurants" element={<AllRestaurants />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default Admin;
