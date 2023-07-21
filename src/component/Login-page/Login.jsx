import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
     localStorage.setItem("Loggedin",true)
    navigate("/Home");
  };
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [isEmailValid,setIsEmailValid]=useState(true);
const [isPasswordValid,setIsPasswordValid]=useState(true);
    
const validateEmail = (email)=>{
    const regex =/\S+@\S+\.\S+/;
    return regex.test(email);
}
const validatePassword=(password)=>{
    return password.length >= 8;
}
const handleEmailChange=(e)=>{
    const newEmail= e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
}
const handlePasswordChange=(e)=>{
    const newPassword= e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
}

const isFormValid=isEmailValid && isPasswordValid;

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
        <div className="login-form">
          <div className="login-tittle">
            <h4>Login</h4>
          </div>
          <div className="login-inputfield">
            <div className="login-input">
              {/* <input type="email" placeholder="Email" /> */}
              <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                />
           <div id='validation'  style={{color:"red"}} className={isEmailValid? 'valid' : 'invalid'} >
                {isEmailValid ? '' : 'invalid email'}</div>
            </div>
            <div className="login-input">
              {/* <input type="password" placeholder="Password" /> */}
              <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
                <div id='validation' style={{color:"red"}} className={isPasswordValid? 'valid' : 'invalid'}>
                {isPasswordValid ? '' : 'invalid password'}</div>
            </div>
            </div>
          
          <div className="login-forget">
            <small>Forgot Password?</small>
            {/* <button onClick={handleSignIn}>Login</button> */}
            <button type="submit" onClick={handleSignIn} disabled={!isFormValid}>
                Login
            </button>
          </div>
          <button onClick={() => navigate("/register")}>Register</button>
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
