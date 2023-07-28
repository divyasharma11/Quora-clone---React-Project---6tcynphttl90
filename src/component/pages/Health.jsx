import React from "react";
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Styles/style.css";
import { Avatar } from "@mui/material";
import health from "../../image/health.jpg";
const Health = () => {
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
              <h2 className="h2">Antari Mourya</h2>
            </div>
            <h3 className="h3">
              <span>Ques.</span>
              Why health is important in our life?
            </h3>
            <p className="p">
              <span>Ans.</span>
              Living a healthy lifestyle can help prevent chronic diseases and
              long-term illnesses.
            </p>
            <img src={health} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Health;
