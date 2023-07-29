import React from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";

const Feed = ({ searchQuestion, setSearchQuestion }) => {
  let quesAnsList = [];
  
  quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  
  return (
    <div className="feed-container">    
      {searchQuestion &&
        searchQuestion.map((data) => (
          <div className="inner-ques-card" key={data.id}>
            <div className="avatar-box">
              <Avatar className="avatar" />
              <h2 className="h2">{data.username}</h2>
            </div>
            <h3 className="h3">
              <span>Ques.</span>
              {data.question}
            </h3>
            <p className="p">
              <span>Ans.</span>
              {data.answer}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Feed;
