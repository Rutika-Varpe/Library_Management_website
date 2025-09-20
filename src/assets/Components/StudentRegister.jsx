import { useState } from "react";
import "./register.css";

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    course: "",
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
    console.log("Student Registration Data:", formData);
    alert("Student Registered Successfully!");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        
        <div className="register-left">
          <div>
            <h2>Welcome Students!</h2>
            <p>Join our library community and explore thousands of books and resources to boost your learning.</p>
          </div>
        </div>

       
        <div className="register-right">
          <h1>Student Registration</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
            <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} required />
            <input type="text" name="course" placeholder="Course (e.g., MCA, BCA)" onChange={handleChange} required />
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

export default StudentRegister;
