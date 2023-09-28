import React from 'react'
import Sidebar from "../Left-Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import "./Styles/style.css"
import discover from "../../image/discover.jpg"
import Footer from '../footer/Footer';
const Discover = () => {
  return (
    <>
    <Navbar />
  < div className="main">
<div>
    <Sidebar />
  </div>
    <div className="feed-container">
      <div className="inner-ques-card">
        <img src={discover} alt=""/>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Discover