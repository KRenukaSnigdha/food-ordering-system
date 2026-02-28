import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/App.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>All Orders</h3>

      {orders.map(order => (
        <div key={order._id} className="card">
          <p>User: {order.userId?.email}</p>
          <p>Total: ₹{order.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default AllOrders;