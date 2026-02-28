import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="list-group">
            {cart.map(item => (
              <div
                key={item._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.name}</h5>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h4 className="mt-3">Total: ₹{total}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;