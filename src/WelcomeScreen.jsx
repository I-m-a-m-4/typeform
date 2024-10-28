// src/components/WelcomeScreen.js
import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1 className="toufiqwel">Welcome to Toufiq Fitness!</h1>
      <h2 className="toufiqwelh2">HELPING YOU GET FITTER AND MOVE BETTER!</h2>

      <h2 className="toufiqwelh22">Get ready !</h2>
      <Link className="start" to="/questionnaire">
      <div className="start-div"> <button className="start-button">Start</button></div>

      </Link>
    </div>
  );
};

export default WelcomeScreen;
