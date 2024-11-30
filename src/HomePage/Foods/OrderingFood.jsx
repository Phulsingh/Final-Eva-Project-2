import React from "react";
import styles from "./Ordering.module.css";
export default function OrderingFood() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img className={styles.people} src="People2.png" />
        </div>
        <div className={styles.textsContent}>
          <div className={styles.more}>
            <img className={styles.logo} src="LOGO 1.png" />
            <span className={styles.ing}>ing is more</span>
          </div>
          <div className={styles.personlized}>
            <p>
              <span>Personilized</span> & instant
            </p>
          </div>
          <p className={styles.para}>Download the Under.uk app for faster ordering</p>
          <img  className={styles.social} src="Group (3).png"/>
        </div>
      </div>
    </div>
  );
}
