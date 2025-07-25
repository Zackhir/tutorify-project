import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
    
      <>
      <header>
        <nav className="navbar">
          <NavLink className="nav-branding" to={"/"}>
            Tutorify
          </NavLink>

          <div className={nav_class}>
            <NavLink end className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/lessons"}>
              Lessons
            </NavLink>
            <NavLink className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/findtutors"}>
              Find Tutors
            </NavLink>
            <NavLink className="nav-item nav-link" onClick={() =>handleLinkClick()} to={"/aboutus"}>
              About Us
            </NavLink>
            <div className="log-btns-container">
              <NavLink className="nav-item nav-link login" onClick={() =>handleLinkClick()} to={"/login"}>
                Login
              </NavLink>
              <NavLink className="nav-item nav-link signup" onClick={() =>handleLinkClick()} to={"/signup"}>
                Sign Up
              </NavLink>
            </div>
          </div>

          <div className={hamburger_class}
          onClick={() => handleHamburgerClick()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
        </header>
        
      </>
    
  );
}

export default Header;
