import React from "react";
import "./QuesContainer.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Left-Sidebar/Sidebar";
const QuesContainer =(props)=>{
let localQuesList = [];

  let quesList = [
    
    { id: 0, question: "When is the last time you experienced nostalgia?" },
    { id: 1, question: " What’s the scariest dream you’ve ever had?" },
    { id: 2, question: "What’s the weirdest thought you’ve ever had?" },
    { id: 3, question: " What’s the first thing that comes to mind when you hear the word “fidget”?" },
    { id: 4, question: " What made-up word would you incorporate into the English language if you could?" },
    { id: 5, question: " What animal would you want to be reincarnated as?" },
    { id: 0, question: "What is the color of sky?" },
    { id: 1, question: "When was India won the first World Cup?" },
    { id: 2, question: "When did the world war start?" },
    { id: 3, question: "What is the famous food of odisha?" },
    { id: 4, question: "Difference between stress and strain?" },
    { id: 5, question: "How did the world war start?" },
    { id: 6, question: "Difference between strees and strain?" },
    {id: 7,question: "How many hours are there in a day?" },
,

   
  ];

  localQuesList = JSON.parse(localStorage.getItem("QuestionList"));

  return (
    <>
    <Navbar />
    <div className="main">
    <div>
    <Sidebar />
    </div>
   
    <div className="Q2List">
      <h2>{props.title}</h2>
      <div className="list">
      {localQuesList &&
          localQuesList.map((e, index) => (
            <span className="span-tags" key={index}>
              <p onClick={() => props.print(e)} className="ptag">
                {e}
              </p>
            </span>
          ))}
          
        {quesList &&
          quesList.map((data) => (
            <span className="span-tags" key={data.id}>
              <p onClick={() => props.print(data.question)} className="ptag">
              Ques.  {data.question}
              </p>
            </span>
          ))}
          
      </div>
    </div>
    </div>
    </>
  );
};

export default  QuesContainer;
