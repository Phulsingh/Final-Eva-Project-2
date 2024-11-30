import React from "react";
import styles from "./FoodSections.module.css";
import Fries from "./Fries";
import ColdDrick from "./ColdDrick";
import InfoSection from "../InfoSection/InforSection";
import Map from "../Map/Map";
import Footer from "../../UserAuthPage/Footer";
import PopularCategories from "../../HomePage/Foods/PopularResturant"; 

const FoodSection = () => {
  const burgers = [
    {
      id: 1,
      name: "Royal Cheese Burger with extra Fries",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
      price: "₹120",
      image: "Rectangle 46.png",
    },
    {
      id: 2,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
      price: "₹120",
      image: "Rectangle 46.png", 
    },
    {
      id: 3,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
      price: "₹120",
      image: "Rectangle 46.png", 
    },
    {
      id: 4,
      name: "The classics for 3",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
      price: "₹120",
      image: "Rectangle 46.png", 
    },
  ];

  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.heading}>Burgers</h2>
      <div className={styles.grid}>
        {burgers.map((burger) => (
          <div key={burger.id}  className={styles.card}>
            <img
              src={burger.image}
              alt={burger.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{burger.name}</h3>
              <p className={styles.description}>{burger.description}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{burger.price}</span>
                <div className={styles.buttonDiv}>
                  <button className={styles.addButton}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Fries/>
    <ColdDrick/>
    <InfoSection/>
    <Map/>
    <PopularCategories/>
    <Footer/>
    </>
  );
};

export default FoodSection;
