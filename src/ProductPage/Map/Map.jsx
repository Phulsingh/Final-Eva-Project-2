import React from "react";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30494.73215204099!2d77.26549358218864!3d17.177918756698723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9195242d194c9%3A0x8c3d77889b369f7e!2z4KS44KSm4KSuLCDgpJXgpLDgpY3gpKjgpL7gpJ_gpJUgNTg1MjIy!5e0!3m2!1shi!2sin!4v1732906067606!5m2!1shi!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       {/* Card Container */}
       <div className={styles.card}>
        <h1 className={styles.title}>McDonald’s</h1>
        <p style={{color:"#FC8A06"}} className={styles.subtitle}>South London</p>
        <address className={styles.address}>
          Tooley St, London Bridge,<br />
          London SE1 2TF,<br />
          United Kingdom
        </address>
        <p className={styles.contact}>
          <span>Phone number</span><br />
          <a style={{color:"#FC8A06"}} href="tel:+93444343" className={styles.link}>+934443-43</a>
        </p>
        <p className={styles.contact}>
          <span>Website</span><br />
          <a style={{color:"#FC8A06"}} href="http://mcdonalds.uk/" className={styles.link}>
            http://mcdonalds.uk/
          </a>
        </p>
      </div>
    </div>
  );
}
