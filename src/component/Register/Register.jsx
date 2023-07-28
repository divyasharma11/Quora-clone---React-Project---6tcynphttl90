import React, { useEffect, useState } from "react";
import "./Register.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name,email,password}=formData;

  const [success, setSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formErrors = {};
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // Validation checks
    if (name.length < 3) {
      formErrors.name = 'name must be at least 3 characters.';
    }
    if (!email.match(emailPattern)) {
      formErrors.email = 'email is invalid.';
    }
    if (password.length<6 ) {
      formErrors.password = 'Password must be at least 6 characters long.';
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
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Form submitted successfully
      setSuccess(true);
      navigate('/');
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      setErrors({
        name: '',
        email: '',
        password: '',
      });
    }
    setRegistered(true);
  };
  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [registered]);

  return (
    <div>
      <div className="register-container">
        <div className="register">
          <div>
            <h1>New Register</h1>
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
             {errors.email && <p style={{color:"red"}} className="error-message">{errors.email}</p>}
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
             {errors.name && <p style={{color:"red"}} className="error-message">{errors.name}</p>}
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
          {errors.password && <p style={{color:"red"}} className="error-message">{errors.password}</p>}
          </div>
          <div>
            <Button
              onClick={handleClick}
              style={{
                fontSize: "1rem",
                width: "6rem",
                marginTop: "0px",
                textAlign: "center",
              }}
            >
              <span>Register</span>
            </Button>
          </div>
          {success && <p style={{color:"green"}}>Form submitted successfully!</p>}
        </div>
      </div>
    </div>
  );
};
export default Register;
