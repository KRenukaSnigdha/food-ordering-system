import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/App.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>All Users</h3>

      {users.map(user => (
        <div key={user._id} className="card">
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default AllUsers;