import React, { useState } from "react";
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

  const [success, setSuccess] = useState(false);

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

    // Validation checks
    if (!formData.name) {
      formErrors.name = 'name is required.';
    }
    if (!formData.email) {
      formErrors.email = 'email is required.';
    }
    if (!formData.password) {
      formErrors.password = 'password is required.';
    } else if (formData.password.length < 4) {
      formErrors.password = 'Password must be at least 4 characters long.';
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
   
  };

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
              value={formData.email}
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
              value={formData.name}
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
              value={formData.password}
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
