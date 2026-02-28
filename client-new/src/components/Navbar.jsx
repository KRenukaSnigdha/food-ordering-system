import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={{ backgroundColor: "#f8f9fa", padding: "0.5rem 2rem" }}>
      
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "#000"
        }}
      >
        OrderOnTheGo
      </Link>

      <div style={{ float: "right" }}>

        {/* Always visible */}
        <Link
          to="/cart"
          style={{ margin: "0 1rem", textDecoration: "none", color: "#000" }}
        >
          Cart
        </Link>

        {/* If NOT logged in */}
        {!user && (
          <>
            <Link
              to="/login"
              style={{ margin: "0 1rem", textDecoration: "none", color: "#000" }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{ margin: "0 1rem", textDecoration: "none", color: "#000" }}
            >
              Register
            </Link>
          </>
        )}

        {/* If logged in */}
        {user && (
          <>
            <span style={{ marginRight: "1rem" }}>
              Hello, {user.name}
            </span>

            {/* Admin Only */}
            {user.role === "admin" && (
              <Link
                to="/admin"
                style={{ margin: "0 1rem", textDecoration: "none", color: "#000" }}
              >
                Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "1rem",
                padding: "4px 8px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;