import React, { useRef, useState } from "react";
import "./QuesList.css";
const QuesList = (props) => {
  let localQuesList = [];

  let quesList = [
    { id: 0, question: "What is the color of sky?" },
    { id: 1, question: "When was India won the first World Cup?" },
    { id: 2, question: "When did the world war start?" },
    { id: 3, question: "What is the famous food of odisha?" },
    { id: 4, question: "Difference between stress and strain?" },
    { id: 5, question: "Rainbow consist of how many colours?" },
    { id: 6, question: "Which is the tallest mountain in the world?" },
    {id: 7,question: "How many hours are there in a day?" },
    {id: 8,question: "What do you think the meaning of life is?" },
    {id: 9,question: "If money were no object, what would you do?" },
  ];

  localQuesList = JSON.parse(localStorage.getItem("QuestionList"));
  
  return (
    <div className="QList">
      <h2>Question List</h2>
      <hr />
      <div className="list">
      {localQuesList &&
          localQuesList.map((e, index) => (
            <span className="span-tags" key={index}>
              <p  
              className="ptag">
              Q.  {e}
              </p>
            </span>
          ))}
        {quesList &&
          quesList.map((data) => (
            <span className="span-tags" key={data.id}>
              <p 
              className="ptag">
              Q. {data.question}
              </p>
            </span>
          ))}
          
      </div>
    </div>
  );
};

export default QuesList;
