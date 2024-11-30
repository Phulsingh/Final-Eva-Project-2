import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "./UserAuthPage/UserAuth";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import './App.css'
import Cart from "./Cart";
import Location from "./HomePage/location/Location"

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<UserAuth/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
    </Router>
    <Cart>
    <Location/>
    </Cart>
    </>
  );
}
