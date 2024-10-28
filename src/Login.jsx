import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";  // Import auth and Google provider
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const adminEmail = "belloimam431@gmail.com";  // Replace with the correct admin email

  const handleLogin = () => {
    auth.signInWithRedirect(googleProvider)  // Switch to signInWithRedirect
      .catch((error) => {
        console.error("Error during login: ", error);
      });
  };

  useEffect(() => {
    // Get the result from redirect after successful login
    auth.getRedirectResult()
      .then((result) => {
        if (result.user) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Error during authentication: ", error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      // Check if logged-in user is the admin
      if (user.email === adminEmail) {
        navigate("/responses");  // Redirect to Responses page if admin
      } else {
        alert("You do not have access to view the responses.");
        auth.signOut();  // Sign out if not admin
      }
    }
  }, [user, navigate]);

  return (
    <div className="login-screen">
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
