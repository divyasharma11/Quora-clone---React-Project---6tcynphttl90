import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const handleSignIn=(e)=>{
       e.preventDefault(); 
      //  localStorage.setItem("Loggedin",true)
      
        navigate("/Home");
    }
   
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
              <input type="text" placeholder="Email" />
            </div>
            <div className="login-input">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="login-forget">
          <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={()=>navigate('/register')}>Register</button>
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
