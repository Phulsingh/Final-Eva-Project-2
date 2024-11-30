import React from "react";
import styles from "./Login.module.css";

export default function Register({
  ToggleRegisterPage,
  handleSubmit,
  handleChange,
  userData,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <img className={styles.img} src="LOGO 1.png" />
        <h2 className={styles.welcome}>Welcome Back 👋</h2>
        <p className={styles.subheading}>
          Today is a new day. It's your day. You shape it. Sign in to start
          ordering.
        </p>

        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="name"
            value={userData.name}
            onChange={handleChange}
          />

          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Example@email.com"
            value={userData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            type="number"
            id="number"
            name="phone"
            className={styles.input}
            placeholder="number"
            value={userData.phone}
            onChange={handleChange}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="At least 8 characters"
            value={userData.password}
            onChange={handleChange}
          />

          <div className={styles.options}>
            <a href="#" className={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e); // Call the first function
            }}
            className={styles.signInButton}
          >
            Continue
          </button>
        </form>

        <div className={styles.signUp}>
          Don't you have an account?{" "}
          <a
            href="#"
            className={styles.signUpLink}
            onClick={ToggleRegisterPage}
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
