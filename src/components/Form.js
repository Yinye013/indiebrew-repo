import React, { useState } from "react";
import indieBrew from "../images/Logo.svg";
import BackArrow from "../images/Back Arrow.svg";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [checkedBox, setCheckedBox] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
    //when using state that depends on the previous state, pass in a function
    // (previousState) => {
    //   return {
    //     ...previousState,
    //     enteredName: e.target.value
    //   }
    // })
  };
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
    console.log(e.target);
  };
  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const checkboxHandler = (e) => {
    setCheckedBox(e.target.checked);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    console.log("Submitted ");

    //since the state isn't combined into an object, I'll create the object here
    // name the key anything you want but the values have to be the state variables!
    let enteredData = {
      email: enteredEmail,
      name: enteredName,
      checked: checkedBox,
      password: enteredPassword,
    };
    props.onSaveData(enteredData);
    setEnteredEmail("");
    setEnteredName("");
    setCheckedBox(!checkedBox);
    setEnteredPassword("");
  };

  // JSX Body
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
            <form className="indiebrew-form" onSubmit={submitHandler}>
              <label htmlFor="Email">Email</label>
              <input
                className="input"
                type="email"
                placeholder="john@example.com"
                value={enteredEmail}
                onChange={emailHandler}
              />
              <label htmlFor="Name">Name</label>
              <input
                className="input"
                type="text"
                placeholder="John Doe"
                value={enteredName}
                onChange={nameHandler}
              />
              <label htmlFor="Password">Password</label>
              <input
                className="input"
                type="password"
                placeholder="At least 8 characters"
                value={enteredPassword}
                onChange={passwordHandler}
              />

              <p className="create-account-description">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={checkedBox}
                  onChange={checkboxHandler}
                />{" "}
                By creating an account on IndieBrew, you agree to the{" "}
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
