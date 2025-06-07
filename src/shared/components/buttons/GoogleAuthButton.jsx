import React from "react";
import styles from "./GoogleAuthButton.module.css";

const GoogleAuthButton = ({ mode = "login" }) => {
  const handleClick = () => {
    const baseUrl = "http://localhost:8080/oauth2/authorization/google";
    const url = mode === "signup" ? `${baseUrl}?source=signup` : baseUrl;
    window.location.href = url;
  };

  return (
    <button onClick={handleClick} className={styles.googleButton}>
      <img src="/google-icon.jpg" alt="" className={styles.icon} />
      {mode === "signup" ? "Sign up with Google" : "Login with Google"}
    </button>
  );
};

export default GoogleAuthButton;
