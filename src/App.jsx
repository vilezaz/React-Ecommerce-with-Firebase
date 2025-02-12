import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FavouritesPage from "./pages/FavouritesPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./Components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Toaster />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
