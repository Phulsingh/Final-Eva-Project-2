import React from "react";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div style={{display:"flex", gap:"10px"}}>
          <img src="Tracking.png" height={"30vh"} />
          <h1 className={styles.heading}>Delivery information</h1>
        </div>

        <p>
          <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday: </span>8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday:</span> 8:00 AM–2:00 AM
        </p>
        <p>
          <span>Sunday: </span>8:00 AM–2:00 AM
        </p>
        <p>Estimated time until delivery: ~20 min</p>
      </div>

      <div className={styles.section}>
        <div style={{display:"flex", gap:"10px"}}>
          <img src="ID Verified.png" />
          <h1 className={styles.heading}>Contact information</h1>
        </div>

        <p>
          If you have allergies or other dietary <br></br> restrictions, please
          contact the restaurant.<br></br> The restaurant will provide
          food-specific<br></br> information upon request.
        </p>
        <p>
          <strong>Phone number:</strong> +934443-43
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="http://mcdonalds.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://mcdonalds.uk/
          </a>
        </p>
      </div>

      <div className={`${styles.section} ${styles.darkSection}`}>
        <div style={{display:"flex", gap:"10px"}}>
          <img src="Clock (1).png" />
          <h1 className={styles.heading}>Operational Times</h1>
        </div>

        <p>
          <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday: </span>8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday:</span> 8:00 AM–2:00 AM
        </p>
        <p>
          <span>Sunday: </span>8:00 AM–2:00 AM
        </p>
      </div>
    </div>
  );
}
