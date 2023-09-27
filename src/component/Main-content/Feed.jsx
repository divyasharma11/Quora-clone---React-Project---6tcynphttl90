import React, { useRef } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import { getItem } from "../../getUser";

const Feed = ({ searchQuestion, setSearchQuestion }) => {
  let quesAnsList = [];
  const userRef = useRef(getItem("user"));
  quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  
  return (
    <div className="post-container"> 
    {  quesAnsList &&
            quesAnsList.map((e, index) => (
              <div key={index}  className="inner-ques-card1">
                 <div className="avatar-box">
                 <Avatar className="avatar" />
                  <h2 className="h2">{userRef.current?.username}</h2>
                 </div>
                 <h3 className="h3">
              <span>Ques.</span>
              {e.question}
            </h3>
             <p className="p">
              <span>Ans.</span>
              {e.answer}
              </p>
              </div>
            ))}   
      {searchQuestion &&
        searchQuestion.map((data) => (
          <div className="inner-ques-card1" key={data.id}>
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
