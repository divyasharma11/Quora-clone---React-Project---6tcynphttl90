import React from "react";
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import "./Styles/style.css"
import { Avatar } from "@mui/material";
import history from "../../image/history.jpg"
const History = () => {
  return (
    <>
      <Navbar />
    < div className="main">
  <div>
      <Sidebar />
    </div>
      <div className="feed-container">
        <div className="inner-ques-card">
          <div className="avatar-box">
            <Avatar className="avatar" />
            <h2 className="h2">Shrey Agrawal</h2>
          </div>
          <h3 className="h3">
            <span>Ques.</span>
            What is tempel history?
          </h3>
          <p className="p">
            <span>Ans.</span>
            Hindu Shiva temple depicted in a coin from the 1st century BCE.
            Example of a Hindu temple constructed in the same manner as the one
            depicted in the coin.
          </p>
          <img src={history} alt=""/>
        </div>
      </div>
    </div>
    </>
  );
};

export default History;
