
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CartPage from "./pages/CartPage";
import Cameras from "./pages/Cameras";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cameras" element={<Cameras />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
