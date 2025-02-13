import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import FavouritesPage from "./pages/FavouritesPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./Components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/ScrollToTop";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        navigate("/");
      }
    })
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Toaster />
      <Navbar />
      <ScrollToTop  />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
