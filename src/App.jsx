import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./assets/Components/Navigation";
import Footer from "./assets/Components/Footer";
import About from "./assets/Components/About";
import SearchBook from "./assets/Components/SearchBook";
import SignIn from "./assets/Components/SignIn";
import SignUp from "./assets/Components/SignUp";
import StudentRegister from "./assets/Components/StudentRegister";
import AdminRegister from "./assets/Components/AdminRegister";
import Contact from "./assets/Components/Contact";


import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        
        <Route
          path="/"
          element={
            <div className="home-bg">
              <h1>Explore the World of Knowledge</h1>
              <p>
                Welcome to our Library Management System! Browse thousands of
                books, discover new authors, and manage your reading efficiently.
                Whether you're a student, researcher, or book lover, our platform
                makes it easy to search, register, and enjoy a seamless library
                experience from anywhere.
              </p>
            </div>
          }
        />

       
        <Route path="/about" element={<About />} />

        
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
