import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerDescription =
    "With Indiebrew, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers and so much more.";
  const footerNav = [
    { title: "Sitemap", descriptionOne: "Homepage", descriptionTwo: "Pricing" },
    {
      title: "Resources",
      descriptionOne: "Support",
      descriptionTwo: "Contact",
      descriptionThree: "FAQ",
    },
    {
      title: "Company",
      descriptionOne: "About",
      descriptionTwo: "Customers",
      descriptionThree: "Blog",
    },
    {
      title: "Portfolios",
      descriptionOne: "HackerNews",
      descriptionTwo: "Reddit",
      descriptionThree: "Twitter",
    },
  ];

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <h3 className="heading-tertiary">Indiebrew</h3>
          <p className="footer-description">{footerDescription}</p>
          <p className="below-description">Made with &hearts; in the UK.</p>
        </div>
        <div className="footer-right" key={footerNav.title}>
          {footerNav.map((nav) => (
            <div>
              <h3 className="heading-tertiary">{nav.title}</h3>
              <a href="/" className="footer-nav">
                {nav.descriptionOne}
              </a>
              <a href="/" className="footer-nav">
                {nav.descriptionTwo}
              </a>
              <a href="/" className="footer-nav">
                {nav.descriptionThree}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

//when using map method, .map((param) => (JSX Template Outputs))
export default Footer;
