import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("user");
  const [cartItems, setCartItems] = useState([]);
  
  // Add search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedCart = localStorage.getItem("cartItems");
    console.log("Stored cart items:", storedCart);
    
    // Always try to parse cart items safely
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          // Ensure all items have quantity property
          const cartWithQuantity = parsedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1
          }));
          setCartItems(cartWithQuantity);
        } else {
          setCartItems([]);
        }
      } catch (err) {
        console.error("Failed to parse cartItems:", err);
        setCartItems([]);
      }
    }

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded user:", decoded);
        setUser(decoded);
        setRole(decoded.role || "user");
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
    setRole(decoded.role || "user");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems"); // optional: clear cart on logout
    setUser(null);
    setRole("user");
    setCartItems([]);
  };

  // Search functions
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        role,
        cartItems,
        setCartItems,
        // Add search values and functions
        searchQuery,
        selectedCategory,
        handleSearch,
        handleCategorySelect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};