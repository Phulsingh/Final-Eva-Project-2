import React from "react";
import styles from "./Food.module.css";


function Food() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h3>Up to 40% Off Order Uk exclusive deals</h3>
        <ul className={styles.ul}>
          <li>Vegan</li>
          <li>Shushi</li>
          <button>
            <img src="Next page.png" /> Pizza and Fast Food
          </button>
          <li>others</li>
        </ul>
      </nav>
    </div>
  );
}

export default Food;
