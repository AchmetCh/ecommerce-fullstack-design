import { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("user");
  const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded);
        setRole(decoded.role || "user");
        }
    setLoading(false);
  }, []);

    const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
    setRole(decoded.role || "user");
    }
    const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setRole("user");
    }


  return (
    <AuthContext.Provider value={{ user, loading, login, logout, role, cartCount, setCartCount }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}