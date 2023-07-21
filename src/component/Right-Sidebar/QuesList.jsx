import React from "react";
import "./QuesList.css";
const QuesList = (props) => {

  let localQuesList = [];

  let quesList = [
    { id: 0, question: "What is the color of sky?" },
    { id: 1, question: "When was India won the first World Cup?" },
    { id: 2, question: "When did the world war start?" },
    { id: 3, question: "What is the famous food of odisha?" },
    { id: 4, question: "Difference between stress and strain?" },
    { id: 5, question: "How did the world war start?" },
    { id: 6, question: "Difference between strees and strain?" },
    {id: 7,question: "How many hours are there in a day?" },
   
  ];

  localQuesList = JSON.parse(localStorage.getItem("QuestionList"));

  return (
    <div className="QList">
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
                {data.question}
              </p>
            </span>
          ))}
          
      </div>
    </div>
  );
};

export default QuesList;
