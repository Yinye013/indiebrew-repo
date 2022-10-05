import React from "react";
import CtaButton from "./CtaButton";
import FeedMockup from "../images/Feed Mockup.png";
import UserAvatars from "../images/User Avatars.svg";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const headingPrimary = "Your weekly personal feed digest.";
  const heroDescription =
    "With Indiebrew, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers and so much more.";
  return (
    <div className="hero-section">
      <div className="left-section">
        <h1 className="heading-primary">{headingPrimary}</h1>
        <p className="hero-description">{heroDescription}</p>
        <Link to="/form">
          <CtaButton></CtaButton>
        </Link>
        <div className="user-avatars">
          {" "}
          <img src={UserAvatars} alt="User Avatars" />
        </div>

        <p className="hero-closing-paragraph">
          Join <span className="paragraph-span">32,642</span> Indiebrewers in
          curating their personal digest.
        </p>
      </div>
      <div className="right-section">
        <img src={FeedMockup} alt="Feed Muckup" />
      </div>
    </div>
  );
};

export default HeroSection;
