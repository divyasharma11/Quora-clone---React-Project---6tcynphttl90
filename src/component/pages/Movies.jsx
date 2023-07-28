import React from 'react'
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import "./Styles/style.css"
import { Avatar } from "@mui/material";
import movie from "../../image/movie.jpg"
const Movies = () => {
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
          <h2 className="h2">Vinay Shree</h2>
        </div>
        <h3 className="h3">
          <span>Ques.</span>
          What is voted the best movie of all time?
        </h3>
        <p className="p">
          <span>Ans.</span>
          Citizen Kane (1941)
        </p>
        <img src={movie} alt=""/>
      </div>
    </div>
  </div>
  </>
  )
}

export default Movies