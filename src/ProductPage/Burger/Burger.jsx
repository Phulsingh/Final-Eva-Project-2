import React from "react";
import styles from "./Burger.module.css";

export default function Burger() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <p className={styles.p}>i'm lovin it</p>
          <h1 className={styles.heading}>Mc Donalds East London</h1>
          <div className={styles.buttons}>
            <div>
              {" "}
              <img src="List.png" /> Minimum order:12GBP
            </div>
            <div>
              {" "}
              <img src="Motocross.png" /> Delivery in 20-25 minutes
            </div>
          </div>
        </div>
        <div className={styles.RightSide}>
          <div className={styles.firstImg}>
            <img src="Rating.png" />
          </div>
          <div className={styles.secondImg}>
            <img src="Burger.png" />
          </div>
        </div>
      </div>
      <button>
        <img src="Clock.png" /> Open until 3:00AM
      </button>
      <div className={styles.searchDiv}>
        <p>All offers from McDonald's East London</p>
        <div>
          <img src="Search More.png"/>
          <input type="text" placeholder="Search from menu" />
        </div>
      </div>
    </div>
  );
}
