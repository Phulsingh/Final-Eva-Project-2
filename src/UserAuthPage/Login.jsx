import React from 'react'
import { useState } from 'react';
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login({ToggleRegisterPage}) {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');  //Take the input user email
  const [password, setPassword] = useState('');  //Take the input user password


const UserLogin =(e)=>{
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userData = users.find(user => user.email === email);
  if(userData){
    if(userData.password === password){
      alert("User logged in Successfully");
      navigate("/home");
      localStorage.setItem("currentUser", JSON.stringify(userData))
    }
    else{
      alert("Password is wrong")
    }
  }
  else{
    alert("User does not existt")
  }
}



  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <img className={styles.img} src='LOGO 1.png'/>
        <h2 className={styles.welcome}>Welcome Back 👋</h2>
        <p className={styles.subheading}>
          Today is a new day. It's your day. You shape it. Sign in to start ordering.
        </p>

        <form onSubmit={UserLogin} className={styles.form}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            value={email}
            type="email"
            id="email"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@email.com"
          />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e)=> setPassword(e.target.value)}
            className={styles.input}
            placeholder="At least 8 characters"
          />

          <div className={styles.options}>
            <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
          </div>

          <button type="submit" className={styles.signInButton} >Sign In</button>
        </form>
        <div className={styles.signUp}>
          Don't you have an account? <a href="#" className={styles.signUpLink} onClick={ToggleRegisterPage}>Sign up</a>
        </div>
      </div>
    </div>
  )
}
