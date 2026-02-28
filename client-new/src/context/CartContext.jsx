import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem("token");

  // -----------------------------
  // Load Cart from Backend
  // -----------------------------
  const fetchCart = async () => {
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/carts", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (res.ok) {
        setCart(data.items.map(item => ({
          ...item.productId,
          quantity: item.quantity
        })));
      }

    } catch (err) {
      console.error(err);
    }
  };

  // -----------------------------
  // Add to Cart
  // -----------------------------
  const addToCart = async (productId) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://localhost:5000/api/carts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        productId,
        quantity: 1
      })
    });

    if (res.ok) {
      fetchCart();
    }
  };

  // -----------------------------
  // Remove from Cart
  // -----------------------------
  const removeFromCart = async (productId) => {
    const res = await fetch(
      `http://localhost:5000/api/carts/remove/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (res.ok) {
      fetchCart();
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
