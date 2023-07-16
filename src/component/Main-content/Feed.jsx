import React from "react";
import "./Feed.css"
import { Avatar } from "@mui/material";
const Feed = () => {
  let quesAnsList = [];
  let quesAns = [
    {
      id: 0,
      username: "eliyana",
      question: "what is the color of sky?",
      answer: "The color of sky blue because of ramen effect",
    },
    {
      id: 1,
      username: "D K Mishra",
      question: "When was India won the first World Cup?",
      answer:
        "The final of the 1983 Cricket World Cup was played between India and the West Indies at Lord's on 25 June 1983. ",
    },
    {
      id: 2,
      username: "Divyanshu Agrawal",
      question: "When did the world war start?",
      answer: "The first world war started in 1914.",
    },
    {
      id: 3,
      username: "Mahesh Gupta",
      question: "What is the famous food of odisha?",
      answer: "Puri is the famous food and as well as famous place of Odisha.",
    },
  ];
  quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));

  return (
    <div className="feed-container">
      {quesAnsList &&
        quesAnsList.map((e, index) => (
          <div className="inner-ques-card">
            <h3>{e.question}</h3>
            <p>{e.answer}</p>
          </div>
        ))}
      {quesAns &&
        quesAns.map((data) => (
          <div className="inner-ques-card" key={data.id}>
           <div className="avatar">
           <Avatar  />
            <h2 className="h2">{data.username}</h2>
            </div>
            <h3 className="h3"><span>Ques.</span>{data.question}</h3>
            <p className="p"><span>Ans.</span>{data.answer}</p>
          </div>
        ))}
    </div>
  );
};

export default Feed;
