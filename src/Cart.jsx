import React, { useState } from 'react'
import styles from "./Cart.module.css"
import CartContext from './CartContext';

export default function Cart() {

    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCart = ()=>{
        setCartVisible((prev) => !prev);
    }
  return (
    <CartContext.Provider value={{isCartVisible, toggleCart}}>
    <div>
      {/* Cart Popup */}
      {isCartVisible && (
        <div className={styles.cartPopup}>
          <div className={styles.cartHeader}>
            <h3>My Basket</h3>
            <button className={styles.closeButton} onClick={toggleCart}>
              X
            </button>
          </div>
          <div className={styles.cartItems}>
            <p>Item 1: Royal Cheese Burger</p>
            <p>Item 2: Vegan Meal</p>
          </div>
          <div className={styles.checkoutSection}>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </div>
      )}
    </div>
    </CartContext.Provider>
  )
}
