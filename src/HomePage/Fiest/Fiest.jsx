import React from "react";
import styles from "./Fiest.module.css";

function Fiest() {
  return (
    <div className={styles.container}>
      <div className={styles.landingPage}>
        <div className={styles.content}>
          <p className={styles.subtext}>
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 style={{ fontSize: "45px" }} className={styles.headline}>
            Feast Your Senses,{" "}
            <span className={styles.highlight}>Fast and Fresh</span>
          </h1>
          <p>Enter a passcode to see what we deliver</p>
          <div className={styles.searchSection}>
            <input
              type="text"
              className={styles.postcodeInput}
              placeholder="e.g. EC4R 3TE"
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
      <div className={styles.imgs}>
        <img className={styles.img1} src="Untitled-1 1.png" />
        <img className={styles.img2} src="Untitled-2 1.png" />
      </div>
      <div className={styles.contents}>
        <div className={styles.rightDiv}></div>
      </div>
      <div className={styles.container1}>
        <div  className={styles.container2}>
          <p>Location</p>
          <div className={styles.content2}></div>
        </div>
      </div>
    </div>
  );
}

export default Fiest;
