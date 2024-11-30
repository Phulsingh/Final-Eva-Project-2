import React from 'react'
import styles from "./Exclusive.module.css"

export default function ExclusiveDeals() {
  return (
      <div className={styles.divImage}>
        <div className={styles.cardContainer}>
          <div className={styles.imageOverlay}>
            <img
              src="Group 8.png" 
              alt="Delicious food"
              className={styles.cardImage}
            />
            <div className={styles.overlayContent}>
              <span className={styles.discountBadge}>-40%</span>
              <div className={styles.textContent}>
                <h4 className={styles.category}>Restaurant</h4>
                <h2 className={styles.title}>Chef Burgers London</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.imageOverlay}>
            <img
              src="Group 8.png"
              alt="Delicious food"
              className={styles.cardImage}
            />
            <div className={styles.overlayContent}>
              <span className={styles.discountBadge}>-30%</span>
              <div className={styles.textContent}>
                <h4 className={styles.category}>Restaurant</h4>
                <h2 className={styles.title}>Chef Burgers London</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.imageOverlay}>
            <img
              src="Group 8.png" 
              alt="Delicious food"
              className={styles.cardImage}
            />
            <div className={styles.overlayContent}>
              <span className={styles.discountBadge}>-20%</span>
              <div className={styles.textContent}>
                <h4 className={styles.category}>Restaurant</h4>
                <h2 className={styles.title}>Chef Burgers London</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
