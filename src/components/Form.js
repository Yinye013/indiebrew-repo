import React from "react";
import indieBrew from "../images/Logo.svg";
import BackArrow from "../images/Back Arrow.svg";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container">
      <div className="form-nav">
        <img src={indieBrew} alt="logo" />
        <div className="form-nav-right">
          <Link to="/" className=" back-arrow">
            <img src={BackArrow} alt="back arrow" />
          </Link>
          <h4 className="nav-header">Back to homepage</h4>
        </div>
      </div>
      <div className="form-container">
        <div className="form-container-left">
          <h2 className="form-heading-secondary">
            Create your personalized feed.
          </h2>
          <p className="description">
            🎈<span className="bold">Over 20 resources.</span>With resources
            ranging from Reddit to Indiehackers, we've got all your needs
            covered.
          </p>
          <p className="description">
            🗞️<span className="bold">Delivered weekly. </span>Every week at
            exactly Tuesday 12:00P.M EST &mdash; expect a value-packed digest
            right in your mail.
          </p>
          <p className="description">
            💡<span className="bold">Unlimited ideas.</span> With all the ideas
            you'll be reading about, what's stopping you from creating a
            sustainable startup?
          </p>
        </div>
        <div className="form-container-right">
          <div className="form-wrapper">
            <h3 className="form-heading">Create your IndieBrew Account</h3>
            <form className="indiebrew-form">
              <label for="Email">Email</label>
              <input
                className="input"
                type="email"
                placeholder="john@example.com"
              />
              <label for="Name">Name</label>
              <input className="input" type="text" placeholder="John Doe" />
              <label for="Password">Password</label>
              <input
                className="input"
                type="password"
                placeholder="At least 8 characters"
              />

              <p className="create-account-description">
                <input type="checkbox" className="checkbox" /> By creating an
                account on IndieBrew, you agree to the{" "}
                <span className="terms">Terms & Conditions.</span>{" "}
              </p>
              <button className="submit-button">Create an Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
