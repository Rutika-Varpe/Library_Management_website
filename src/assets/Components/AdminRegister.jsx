import { useState } from "react";
import "./register.css";

function AdminRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Admin Registration Data:", formData);
    alert("Admin Registered Successfully!");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        
        <div className="register-left">
          <div>
            <h2>Welcome Admins!</h2>
            <p>Manage the library efficiently. Add books, track users, and ensure smooth operations.</p>
          </div>
        </div>

        
        <div className="register-right">
          <h1>Admin Registration</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
            <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} required />
            <input type="text" name="role" placeholder="Role (e.g., Librarian)" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
