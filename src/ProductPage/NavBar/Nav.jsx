import React from "react";
import styles from "./Navbar.module.css";


export default function Navbar() {


  const offers = [
    {
      title: "First Order Discount",
      subtitle: "McDonald's East London",
      discount: "-20%",
      image: "Group 8 (3).png",
    },
    {
      title: "Vegan Discount",
      subtitle: "McDonald's East London",
      discount: "-20%",
      image: "Group 8 (3).png", 
    },
    {
      title: "Free Ice Cream Offer",
      subtitle: "McDonald's East London",
      discount: "-100%",
      image: "Group 8 (3).png", 
    },
  ];
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          <li
            className={styles.icon}
            style={{
              backgroundColor: "black",
              padding: "5px 20px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Offers
          </li>

          <li className={styles.icon}>Burgers</li>
          <li className={styles.icon}>Fries</li>
          <li className={styles.icon}>Salads</li>
          <li className={styles.icon}>Cold Drink</li>
          <li className={styles.icon}>Happy Meal</li>
          <li className={styles.icon}>Dessert</li>
          <li className={styles.icon}>Hot Drinks</li>
          <li className={styles.icon}>Sources</li>
          <li className={styles.icon}>Orbit</li>
          <li className={styles.icon}>offers</li>
        </ul>
      </div>
      <div className={styles.container}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.card}>
            <img
              src={offer.image}
              alt={offer.title}
              className={styles.cardImage}
            />
            <div className={styles.overlay}>
              <div className={styles.discountBadge}>{offer.discount}</div>
              <div className={styles.textContent}>
                <p className={styles.subtitle}>{offer.subtitle}</p>
                <h3 className={styles.title}>{offer.title}</h3>
              </div>
              <button className={styles.addButton}>+</button>
            </div>
          </div>
        ))}


      
      </div>
    </>
  );
}
