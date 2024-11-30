import React from "react";
import Location from "./location/Location";
import Navbar from "./Navbar/Navbar";
import Feast from "./Fiest/Fiest";
import Food from "./Foods/Food";
import ExclusiveDeals from "./Foods/ExclusiveDeals";
import PopularCategories from "./Foods/PopularCategories";
import PopularResturant from "./Foods/PopularResturant";
import OrderingFood from "./Foods/OrderingFood";
import PartnerWithUs from "./Foods/PartnerWithUs";
import AboutUs from "./Foods/AboutUs";
import ShowUsers from "./Foods/ShowUsers";


export default function HomePage() {


  return (
    <div>
      <div>
        <Location/>
        <Navbar />
        <Feast />
        <Food />
        <ExclusiveDeals />
        <PopularCategories />
        <PopularResturant />
        <OrderingFood />
        <PartnerWithUs />
        <AboutUs />
        <ShowUsers />

      </div>
    </div>
  );
}
