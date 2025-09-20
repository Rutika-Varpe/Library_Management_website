import React, { useState } from "react";
import "./Auth.css";

function SignUp() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessage("You signed up successfully!"); 
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

export default SignUp;
