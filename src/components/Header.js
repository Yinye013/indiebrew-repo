import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <div className="header">
      <Navbar open={open} toggle={toggle}></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Header;
