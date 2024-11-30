import React from 'react';
import styles from './PopularCat.module.css';
import { useNavigate } from 'react-router-dom';

export default function PopularCategories() {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Burgers & Fast food",
      restaurants: "21 Restaurants",
      image: "Rectangle 13.png",
    },
    {
      name: "Salads",
      restaurants: "32 Restaurants",
      image: "Rectangle 13.png",
    },
    {
      name: "Pasta & Casuals",
      restaurants: "4 Restaurants",
      image: "Rectangle 13.png",
    },
    {
      name: "Pizza",
      restaurants: "32 Restaurants",
      image: "Rectangle 13.png",
    },
    {
      name: "Breakfast",
      restaurants: "4 Restaurants",
      image: "Rectangle 13.png",
    },
    {
      name: "Soups",
      restaurants: "32 Restaurants",
      image: "Rectangle 13.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Order.uk Popular Categories <span className={styles.emoji}>😋</span>
      </h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} onClick={()=> navigate("/products")} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={styles.image} />
            <div className={styles.textContent}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.restaurants}>{category.restaurants}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
