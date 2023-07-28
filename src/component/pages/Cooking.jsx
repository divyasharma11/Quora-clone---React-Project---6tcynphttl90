import React from "react";
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Styles/style.css";
import { Avatar } from "@mui/material";
import cooking from "../../image/cooking.jpg";
const Cooking = () => {
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
              <h2 className="h2">Preeti Chouhan</h2>
            </div>
            <h3 className="h3">
              <span>Ques.</span>
              Which food you cook best?
            </h3>
            <p className="p">
              <span>Ans.</span>
              cooking, the act of using heat to prepare food for consumption.
              Cooking is as old as civilization itself, and observers have
              perceived it as ...
            </p>
            <img src={cooking} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooking;
