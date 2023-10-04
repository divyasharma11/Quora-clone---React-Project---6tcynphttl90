import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {name,email,password}=formData;
  const nameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    nameErrorRef.current.style.display = "none";
    emailErrorRef.current.style.display = "none";
    passwordErrorRef.current.style.display = "none";
  };

  const handleClick = (e) => {
    e.preventDefault();

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (name.length < 3) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 6) {
      passwordErrorRef.current.style.display = "block";
    }

    if (name.length >= 3 && email.match(emailPattern) && password.length >= 6) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: name,
          email: email,
          password: password,
        })
      );
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      toast.success("Account successfully Registered!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setRegistered(true);
    }
  };

  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [registered]);

  return (
    <div>
       <ToastContainer />
      <div className="register-container">
        <div className="register">
          <div>
            <h1>New Register</h1>
          </div>
          <div>
          <input
              className="input-style-register"
              placeholder="Enter Username"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
           
            <div style={{color:"red"}} id="name_error" ref={nameErrorRef}>
            name must be at least 3 characters.
          </div>
          </div>
          <div>
          <input
              className="input-style-register"
              placeholder="Enter Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
             <div id="email_error" ref={emailErrorRef}>
            Enter valid email address
          </div>
          </div>
          <div>
            <input
              className="input-style-register"
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          <div id="pass_error" ref={passwordErrorRef}>
            Password must contain atleast 6 characters
          </div>
          </div>
          <div>
            <Button
              onClick={handleClick}
              // style={{
              //   fontSize: "1rem",
              //   width: "6rem",
              //   marginTop: "0px",
              //   textAlign: "center",
              // }}
            >
              <span>Register</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
