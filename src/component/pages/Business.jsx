import React from "react";
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Styles/style.css";
import { Avatar } from "@mui/material";
import business from "../../image/business.jpg";
const Business = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div>
          <Sidebar />
        </div>
        <div className="feed-container">
          <div className="inner-ques-card">
            <div className="avatar-box">
              <Avatar className="avatar" />
              <h2 className="h2">Shashank Shekhar</h2>
            </div>
            <h3 className="h3">
              <span>Ques.</span>
              What is a business simple definition?
            </h3>
            <p className="p">
              <span>Ans.</span>A business is an economic activity that involves
              the exchange, purchase, sale, or creation of goods and services
              with the goal of profit and ...
            </p>
            <img src={business} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
