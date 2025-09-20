import React, { useState } from "react";
import "./Auth.css";

function SignIn() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessage("You signed in successfully!"); 
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

export default SignIn;
