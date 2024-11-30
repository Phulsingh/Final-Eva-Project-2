import React, { useState } from "react";
import styles from "./UserAuth.module.css";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";

export default function AuthUser() {

  

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



//Register User 
const handleSubmit = (e) => {
  e.preventDefault();
 
  if (!userData.name.trim() || !userData.email.trim() || !userData.phone.trim() || !userData.password.trim()) {
    alert("Please fill out all fields!");
    return; // Stop further execution if validation fails
  }
  else{
  // Retrieve the existing users from localStorage or initialize as an empty array
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user data to the array
  const updatedUsers = [...existingUsers, userData];

  // Save the updated array back to localStorage
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Data saved to localStorage!");

  // Clear the form fields
  setUserData({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  ToggleRegisterPage();
  navigate("/");
}
};


  //Toggle the Login
  const [toggleLoggin, setToggleLogin] = useState(false);

  //Toggle the Login
  const ToggleRegisterPage = () => {
    setToggleLogin((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.RegOrLog}>
          {toggleLoggin ? (
            <Register
              ToggleRegisterPage={ToggleRegisterPage}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              userData={userData}
            />
          ) : (
            <Login ToggleRegisterPage={ToggleRegisterPage} />
          )}
        </div>
        <div className={styles.image}>
          <img src="Art.png" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
