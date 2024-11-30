import React from 'react'
import { useState } from 'react'
import Location from "../HomePage/location/Location"
import Navbar from "../HomePage/Navbar/Navbar"
import Burger from './Burger/Burger'
import Nav from "./NavBar/Nav"
import FoodSection from './FoodSections/FoodSections'



export default function ProductPage() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
    console.log("clicked");
  };

  return (
    <>
      <Location toggleCart={toggleCart} isCartVisible={isCartVisible}/>
      <Navbar/>
      <Burger />
      <Nav />
      <FoodSection/>
    </>
  )
}
