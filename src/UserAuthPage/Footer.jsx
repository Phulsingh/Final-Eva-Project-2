import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section: Logo and App Links */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img src="LOGO 2.png" />
          </div>
          <div className={styles.appLinks}>
           <img src="Group (3).png" />
          </div>
          <p className={styles.companyInfo}>
            Company # 409303-445, Registered with House of Companies.
          </p>
        </div>

        {/* Center Section: Subscription */}
        <div className={styles.centerSection}>
          <h3>Get Exclusive Deals in your Inbox</h3>
          <div className={styles.subscription}>
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.noSpamText} style={{padding:"10px"}}>
            We won’t spam, read our email policy
          </p>
          <div className={styles.socialIcons}>
            <img src="Facebook.png" alt="Facebook" />
            <img src="Instagram.png" alt="Instagram" />
            <img src="TikTok.png" alt="TikTok" />
            <img src="Snapchat.png" alt="Snapchat" />
          </div>
        </div>

        {/* Right Section: Links */}
        <div className={styles.rightSection}>
          <div>
            <h4 style={{paddingBottom:"5px"}}>Legal Pages</h4>
            <ul>
              <li>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/cookies">Cookies</a>
              </li>
              <li>
                <a href="/modern-slavery">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
          <div>
            <h4  style={{paddingBottom:"5px"}}>Important Links</h4>
            <ul>
              <li>
                <a href="/get-help">Get Help</a>
              </li>
              <li>
                <a href="/add-your-restaurant">Add your Restaurant</a>
              </li>
              <li>
                <a href="/sign-up-to-deliver">Sign up to Deliver</a>
              </li>
              <li>
                <a href="/create-business-account">Create a Business Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>Order.UK Copyright 2024. All Rights Reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/pricing">Pricing</a>
          <a href="/do-not-sell">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
