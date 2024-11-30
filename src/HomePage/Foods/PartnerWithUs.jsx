import React from "react";
import styles from "./ParternWithUs.module.css";

export default function PartnerWithUs() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span>Earn more with lower fees</span>
        </div>
        <img
          src="Group 8 (1).png"
          alt="Partner with us"
          className={styles.image}
        />
        <div className={styles.content}>
          <p className={styles.subText}>Signup as a business</p>
          <h2 className={styles.title}>Partner with us</h2>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span>Earn more with lower fees</span>
        </div>
        <img
          src="Group 8 (2).png"
          alt="Partner with us"
          className={styles.image}
        />
        <div className={styles.content}>
          <p className={styles.subText}>Signup as a Rider</p>
          <h2 className={styles.title}>Ride with us</h2>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
