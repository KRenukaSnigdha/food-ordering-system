import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import IndividualRestaurant from "./pages/customer/IndividualRestaurant.jsx";
import Cart from "./pages/customer/Cart.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin Pages
import Admin from "./pages/admin/Admin.jsx";
import AllUsers from "./pages/admin/AllUsers.jsx";
import AllOrders from "./pages/admin/AllOrders.jsx";
import AllProducts from "./pages/admin/AllProducts.jsx";
import AllRestaurants from "./pages/admin/AllRestaurants.jsx";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<IndividualRestaurant />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/orders" element={<AllOrders />} />
          <Route path="/admin/restaurants" element={<AllRestaurants />} />
          <Route path="/admin/products" element={<AllProducts />} />
          
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;