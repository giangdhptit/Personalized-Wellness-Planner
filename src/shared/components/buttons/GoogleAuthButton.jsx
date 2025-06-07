import React from "react";
import styles from "./GoogleAuthButton.module.css";

const GoogleAuthButton = ({ mode = "login" }) => {
  const handleClick = () => {
    const baseUrl = "http://localhost:8080/oauth2/authorization/google";
    const url = mode === "signup" ? `${baseUrl}?source=signup` : baseUrl;
    window.location.assign(url);
  };

  return (
    <button onClick={handleClick} className={styles.googleButton}>
      aria-label={mode === "signup" ? "Sign up with Google" : "Login with Google"}
    </button>
  );
};

export default GoogleAuthButton;
