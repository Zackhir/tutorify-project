import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Lessons from "./Lessons";
import FindTutors from "./FindTutors";
import AboutUs from "./AboutUs";
import Login from "./Login";
import SignUp from "./SignUp";
import "./Header.css";

function Header() {
  const [nav_class,setNavClass] = useState("nav-menu");
  const [hamburger_class,setHamburgerClass] = useState("hamburger");
  const [isMenuClicked,setIsMenuClicked] = useState(false);


  const handleHamburgerClick = () =>{
    if(!isMenuClicked){
      setNavClass("nav-menu active")
      setHamburgerClass("hamburger active")
    }
    else{
      setNavClass("nav-menu");
      setHamburgerClass("hamburger");
    }
    setIsMenuClicked(!isMenuClicked);
  }
  const handleLinkClick = () =>{
    setNavClass("nav-menu");
    setHamburgerClass("hamburger");
    setIsMenuClicked(false);
  }


  return (
    <header>
      <BrowserRouter>
        <nav className="navbar">
          <Link className="nav-branding" to={"/"}>
            Tutorify
          </Link>

          <div className={nav_class}>
            <Link className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/*"}>
              Home
            </Link>
            <Link className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/lessons"}>
              Lessons
            </Link>
            <Link className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/findtutors"}>
              Find Tutors
            </Link>
            <Link className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/aboutus"}>
              About Us
            </Link>
            <div className="log-btns-container">
              <Link className="nav-item nav-link login" onClick={() =>handleLinkClick()} to={"/login"}>
                Login
              </Link>
              <Link className="nav-item nav-link signup" onClick={() =>handleLinkClick()} to={"/signup"}>
                Sign Up
              </Link>
            </div>
          </div>

          <div className={hamburger_class}
          onClick={() => handleHamburgerClick()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/findtutors" element={<FindTutors />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default Header;
