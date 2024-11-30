import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <nav>
          <h1>Know more About us!</h1>
          <ul className={styles.ul}>
            <li className={styles.li}>Frequent Questions</li>
            <li>Who we are?</li>
            <li>Parter Program</li>
            <li>Help & Support</li>
          </ul>
        </nav>
        <div className={styles.innerDiv}>
          <div className={styles.texts}>
            <h1 className={styles.heading}>How does Order.Uk works?</h1>
            <h1>What payment methods are accepted</h1>
            <h1>Can I track my order in real-time</h1>
            <h1>
              Are there any special discount or <br></br>
              Promotions available
            </h1>
            <h1>Is Order.Uk available in area</h1>
          </div>
          <div className={styles.imageContents}>
            <div>
              <p>Place an Order!</p>
              <img src="food 1.png" />
              <p>
                Place order through our <br /> website or Mobile app
              </p>
            </div>
            <div>
              <p>Place an Order!</p>
              <img src="food 1.png" />
              <p>
                Place order through our <br /> website or Mobile app
              </p>
            </div>
            <div>
              <p>Place an Order!</p>
              <img src="food 1.png" />
              <p>
                Place order through our <br /> website or Mobile app
              </p>
            </div>
          </div>
        </div>
        <p className={styles.paragraph}>
          Order.uk Simplifies the food ordering process Browseer through our
          diverse menu, <br />
          Select your favarite dishesh, and proceed to checkout. Your dilicious
          meal will be
          <br />
          on it's way to your doorstep in no time!
        </p>
      </div>
    </div>
  );
}
