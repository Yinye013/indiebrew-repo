import React from "react";
import logo from "../images/Logo.svg";
import "./Navbar.css";
import CtaButton from "./CtaButton";
import { Link } from "react-router-dom";
import HamburgerMenu from "../images/Hamburger Menu.svg";

const Navbar = ({ open, toggle }) => {
  const links = [
    { navLink: "Pricing", id: 1 },
    { navLink: "Support", id: 2 },
  ];
  return (
    <header className="nav-component">
      <img src={logo} alt="IndieBrew Logo" />
      <div>
        <nav
          className={open ? "nav-open" : "nav-list"}
          key={links.id}
          onClick={toggle}
        >
          {links.map((link) => (
            <a className="nav-links" key={link.id} href="/">
              {" "}
              {link.navLink}{" "}
            </a>
          ))}

          <Link to="/form">
            <CtaButton></CtaButton>
          </Link>
        </nav>
      </div>
      <img
        src={HamburgerMenu}
        alt="hamburger menu"
        className="hamburger"
        onClick={toggle}
      />
    </header>
  );
};

export default Navbar;
