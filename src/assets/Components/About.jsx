import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Our Library</h1>
        <p>
          Welcome to the Library Management System! 📚  
          Our mission is to make managing and accessing books simple, fast, and user-friendly.  
          Whether you are a student searching for study material, an admin managing the library,
          or just a book lover exploring new titles, our platform provides an efficient and 
          seamless experience.
        </p>

        <h2>Features</h2>
        <ul>
          <li>🔎 Easy search and browsing of books</li>
          <li>📝 Online student and admin registration</li>
          <li>📊 Efficient library management system</li>
          <li>📱 Access from anywhere, anytime</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We aim to provide a modern, digital library experience that encourages learning,
          research, and the joy of reading for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
