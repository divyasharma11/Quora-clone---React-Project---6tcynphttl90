import React from "react";
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Styles/style.css";
import { Avatar } from "@mui/material";
import education from "../../image/education.jpg";
const Education = () => {
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
              <h2 className="h2">Shubranshu</h2>
            </div>
            <h3 className="h3">
              <span>Ques.</span>
              Why education is important in life?
            </h3>
            <p className="p">
              <span>Ans.</span>
              Education helps a person to get knowledge and improve confidence
              in life. It can help you improve your career and your personal
              growth. An educated person can become a great citizen in society.
              It helps you to take the right decisions in life.
            </p>
            <img src={education} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
