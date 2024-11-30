import React from 'react'
import styles from "./FoodSections.module.css"

export default function ColdDrick() {
    const fries = [
        {
          id: 1,
          name: "Royal Cheese Burger with extra Fries",
          description:
            "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
          price: "₹70",
          image: "Rectangle 46 (3).png", 
        },
        {
          id: 2,
          name: "The classics for 3",
          description:
            "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
          price: "₹70",
          image: "Rectangle 46 (3).png", 
        },
        {
          id: 3,
          name: "The classics for 3",
          description:
            "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
          price: "₹70",
          image: "Rectangle 46 (3).png", 
        },
        {
          id: 4,
          name: "The classics for 3",
          description:
            "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
          price: "₹70",
          image: "Rectangle 46 (3).png",
        },
      ];
  return (
    <div className={styles.container}>
      <h2 style={{color:"#FC8A06"}} className={styles.heading}>Cold Drinks</h2>
      <div className={styles.grid}>
        {fries.map((frie) => (
          <div key={frie.id} className={styles.card}>
            <img
              src={frie.image}
              alt={frie.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{frie.name}</h3>
              <p className={styles.description}>{frie.description}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{frie.price}</span>
                <div className={styles.buttonDiv}>
                  <button className={styles.addButton}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
