import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer"
import "./Quespage.css";
import Sidebar from "../Left-Sidebar/Sidebar";
import QuesList from "../Right-Sidebar/QuesList";


const QuesAns = (props) => {
  
  let quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  
  return (
    <>
      <Navbar />
     <div className="main">
      <div>
      <Sidebar />
      </div>
      <div className="qa-container">
        <QuesList />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default QuesAns;
