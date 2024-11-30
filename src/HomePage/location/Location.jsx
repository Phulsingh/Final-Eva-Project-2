import React, { useContext } from "react";
import styles from "./Location.module.css";
import CartContext from "../../CartContext";

const Location = () => {
 
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.promo}>
          <span>☀️ Get 5% Off your first order, </span>
          <span className={styles.promoLink}>Promo: ORDERS</span>
        </div>
        <div className={styles.location}>
          <span>📍 Regent Street, A4, A4201, London</span>
          <a href="#" className={styles.changeLocation}>
            Change Location
          </a>
        </div>
        <div className={styles.cart}>
          <button className={styles.cartButton}>
            <img height={"25px"} src="Full Shopping Basket.png" />
            <span>My Cart</span>
          </button>

          <button className={styles.cartButton}>
            <img height={"25px"} src="Forward Button.png" />
          </button>
        </div>
      </div>
      <div className={styles.ordersLogo}>
        <div>
          <img height={"30px"} src="LOGO 2.png" />
        </div>
        <div style={{borderLeft:"1px solid gray"}}>
          <img height={"50px"}  src="Menu.png"/>
        </div>
      </div>
      <div className={styles.basket}>
        <button style={{width:"50%" , color:"black",   height:"60px",backgroundColor:"#FC8A06",  gap:"20px"}}>
          <img src="Ellipse 9.png"/>
          <p>Hey Mike</p>
        </button>
        <button  style={{width:"50%", height:"60px", backgroundColor:"#028643", display:"flex", gap:"20px"}}>
          <img src="Full Shopping Basket.png"/>
          <p>My Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Location;
