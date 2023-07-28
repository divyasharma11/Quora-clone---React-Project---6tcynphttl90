import React from 'react'
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import "./Styles/style.css"
import { Avatar } from "@mui/material";
import technology from "../../image/technology.jpg"
const Technology = () => {
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
          <h2 className="h2">Amit Kumar</h2>
        </div>
        <h3 className="h3">
          <span>Ques.</span>
          What is technology and importance?
        </h3>
        <p className="p">
          <span>Ans.</span>
          Technology is the application of knowledge for achieving practical goals in a reproducible way. The word technology can also mean the products resulting ...
‎Technology (disambiguation) · ‎Environmental technology · ‎Ancient technology · ‎Tool
        </p>
        <img src={technology} alt=""/>
      </div>
    </div>
  </div>
  </>
  )
}

export default Technology