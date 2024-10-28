// src/components/EndScreen.js
import React from "react";
import { Link } from "react-router-dom";

const EndScreen = () => {
  return (
    <div className="end-screen">
      <h1 className="toufiqwelh22">Thanks for completing the form!</h1>
      <h4 className="toufiqwelh2">Follow us on social media:</h4>
      <div className="social-icons">
        <img src="/facebook.png" alt="Facebook" width="50px" />
        <img src="/tiktok.png" alt="Tiktok" width="50px" />
        <img src="/instagram.png" alt="Instagram" width="50px" />
      </div>
      <Link to="/">
        <button className="home-button">Go Home</button>
      </Link>
    </div>
  );
};

export default EndScreen;
