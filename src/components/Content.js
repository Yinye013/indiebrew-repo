import React from "react";
import SMI from "../images/Social Media Icons.png";
import Phone from "../images/Phone Mockup.png";
import "./Content.css";

const Content = () => {
  const content = [
    {
      heading: "Curate your field from dozens of resources.",
      description:
        "We cover all major platforms where one could want to curate their feed from Reddit, ProductHunt, IndieHackers and so much more. ",
    },
    {
      heading: "Access your feed from the comfort of your phone.",
      description:
        "With native apps for both iOS and Android, accessing your curated content has never been easier. ",
    },
  ];
  return (
    <div className="content">
      <div className="content-one">
        <div>
          <h2 className="heading-secondary">{content[0].heading}</h2>
          <p className="content-description">{content[0].description}</p>
          <a href="/" className="content-link">
            {" "}
            See full list of resources &rarr;
          </a>
        </div>
        <div className="content-one-right">
          <img src={SMI} alt="Icons" />
        </div>
      </div>
      <div className="content-two">
        <div className="content-two-left">
          <img src={Phone} alt="Mobile" />
        </div>
        <div className="content-two-textbox">
          <h2 className="heading-secondary">{content[1].heading}</h2>
          <p className="content-description">{content[1].description}</p>
          <a href="/" className="content-link">
            {" "}
            Sign up for the waitlist &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
