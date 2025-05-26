
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/cameras", label: "Cameras" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/cart", label: "Cart" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "12px 20px",
      backgroundColor: "#335C67",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>KameraApp</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "16px" }}>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              style={{
                color: location.pathname === path ? "#E09F3E" : "white",
                fontWeight: location.pathname === path ? "700" : "500",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
