import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {getItem} from "../../getUser"
import { TextField } from "@mui/material";
import logo from "../../assets/googleLogo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import emailLogo from "../../assets/Email-logo.png";

const Login = () => {
const navigate = useNavigate();
const userRef = useRef(getItem("user"));
const [loginDetails, setLoginDetails] = useState({
  email: "",
  password: "",
});

const emailRef = useRef(null);
const passwordRef = useRef(null);
const emailErrorRef = useRef(null);
const passwordErrorRef = useRef(null);

const { email, password } = loginDetails;

const handleLogin = (event) => {
  event.preventDefault();
  if (email !== userRef.current?.email) {
    emailRef.current.style.outlineColor = "red";
    emailRef.current.focus();
    emailErrorRef.current.style.display = "block";
  }
  if (password !== userRef.current?.password) {
    passwordRef.current.style.outlineColor = "red";
    passwordRef.current.focus();
    passwordErrorRef.current.style.display = "block";
  }
  if (
    email === userRef.current?.email &&
    password === userRef.current?.password
  ) {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userRef.current, islogged: true })
    );
    navigate("/home");
    // window.location.reload();
    
  }
};

const googleLogin = (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("RESULT", result);
      const userName = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...userRef.current,
          username: userName,
          email: email,
          islogged: true,
        })
      );
      navigate("/home");
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
};

const signupPage = () => {
  navigate("/register");
};

useEffect(() => {
  if (!userRef.current?.islogged) {
    navigate("/");
  } else {
    navigate("home");
  }
}, [userRef.current?.islogged]);

const handleLoginDetails = (event) => {
  const field = event.target.id;
  const value = event.target.value;

  setLoginDetails({
    ...loginDetails,
    [field]: value,
  });

  emailErrorRef.current.style.display = "none";
  passwordErrorRef.current.style.display = "none";
};
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt=""
          />
        </div>
        <div className="login-description">
          <p>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="loginContent">
          <div className="leftSide">
            <div className="termsAndConditions">
              By continuing you indicate that you agree to Quora's {" "}
              <span className="condition"> Terms of Service </span>and {" "}
              <span className="condition">Privacy Policy</span>.
            </div>

            <div className="leftSideBtn">
              <button
                type="submit"
                className="loginBttn googleBttn"
                onClick={googleLogin}
              >
                <img src={logo} alt="logo" className="googleLogo" />
                Continue with Google
              </button>
              <button type="submit" className="signupBtn" onClick={signupPage}>
                <img src={emailLogo} alt="logo" className="emailLogo" />
                Sign up with Email
              </button>
            </div>
          </div>
          <div className="rightSide">
            <div className="logoContainer">
              <p className="rightSideLogin">Login</p>
            </div>
            <form className="login_form">
              <TextField
                id="email"
                label="Email"
                type="email"
                onChange={handleLoginDetails}
                ref={emailRef}
                value={email}
                className="textField"
              />

              <div id="email_error" ref={emailErrorRef}>
                The email address you entered isn't registered or incorrrect
              </div>

              <TextField
                id="password"
                label="Password"
                type="password"
                onChange={handleLoginDetails}
                ref={passwordRef}
                value={password}
                className="textField"
              />

              <div id="pass_error" ref={passwordErrorRef}>
                Enter valid password
              </div>
              <div className="loginContainer">
                <p className="forgotPassword">Forgot Password?</p>
                <button
                  type="submit"
                  className="loginBttn"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora Fake Inc. 2021</p>
        </div>
      </div>
      </div>
  );
};

export default Login;
