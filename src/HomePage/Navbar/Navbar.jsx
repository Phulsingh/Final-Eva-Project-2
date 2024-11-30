import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img height={"50px"} src='LOGO 1.png'/>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <button className={styles.homeButton}>Home</button>
        </li>
        <li>Browse Menu</li>
        <li>Special Offers</li>
        <li>Restaurants</li>
        <li>Track Order</li>
      </ul>

      {/* Login/Signup Section */}
      <div className={styles.login}>
        <button onClick={()=> navigate("/")} className={styles.loginButton}>
          <img src='Male User.png'/> Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
