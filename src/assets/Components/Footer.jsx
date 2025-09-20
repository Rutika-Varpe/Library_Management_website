import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h3>About Library</h3>
          <p>
            Our Library Management System helps you find, borrow, and manage books easily.
            Join us and explore thousands of books at your fingertips.
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search Books</Link></li>
            <li><Link to="/student-register">Student Register</Link></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@librarysystem.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Library Management System. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
