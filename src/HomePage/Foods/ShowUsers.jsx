import React from "react";
import styles from "./ShowUsers.module.css";

const StatsSection = () => {
  const stats = [
    { count: "546+", label: "Registered Riders" },
    { count: "789,900+", label: "Orders Delivered" },
    { count: "690+", label: "Restaurants Partnered" },
    { count: "17,457+", label: "Food Items" },
  ];

  return (
    <div className={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <h2 className={styles.statCount}>{stat.count}</h2>
          <p className={styles.statLabel}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
