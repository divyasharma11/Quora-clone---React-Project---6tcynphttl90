import React, { useEffect, useRef } from "react";
import "./AddAns.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const AddAns = (props) => {
  const navigate = useNavigate();
  const [ans, setAns] = useState("");
  
  const [selectedQue, setSelectedQue] = useState({
    question: "",
    questionedBy: "",
  });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const inputRef = useRef("");
  
  // useEffect(() => {
  //   localStorage.setItem(`QuestionAnswer`, JSON.stringify(props.quesAns));
  // }, [props.quesAns]);

  // function answerSubmit() {
  //   if (selectedQue.question && ans !== "") {
  //     props.setQuesAns([
  //       ...props.quesAns,
  //       {
  //         question: selectedQue.question,
  //         answer: ans,
  //       },
  //     ]);
  //     setAns("");
  //     setSelectedQuestionIndex(null);
  //     alert("Answer added");
  //     localStorage.setItem(`QuestionAnswer`, JSON.stringify(props.quesAns));
  //     navigate("/home");
  //   } else {
  //     alert(
  //       "Please select a question from the questions list and write your answer."
  //     );
  //   }
  // }
  function answerSubmit() {
    if (selectedQue.question && ans !== "") {
      const updatedQuestionAnswer = [
        ...props.quesAns,
        {
          question: selectedQue.question,
          answer: ans,
        },
      ];
      props.setQuesAns(updatedQuestionAnswer);
      setAns("");
      setSelectedQuestionIndex(null);
      alert("Answer added");
      localStorage.setItem(`QuestionAnswer`, JSON.stringify(updatedQuestionAnswer));
      navigate("/home");
    } else {
      alert("Please select a question from the questions list and write your answer.");
    }
  }
  
  const closeModalHandler = () => {
    navigate("/Home");
  };
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
  const handleQueAns=(question,index)=>{
    setSelectedQue({
      question,
    });
    setSelectedQuestionIndex(index);
    inputRef.current.focus();
  }

  return (
    <div>
      <Navbar />
      <div className="ans-container">
        <div className="ans-page">
          {/* <p className="selected-ques">{element}</p> */}
          {/* <QuesList className="qlist" handleQueAns={handleQueAns} title={"Selection List"} /> */}
          <div className="QList">
            <h2>Selection List</h2>
            <div className="list">
              {localQuesList &&
                localQuesList.map((e, index) => (
                  <span className="span-tags" key={index}>
                    <p
                      onClick={() =>
                        handleQueAns(
                          e.question,
                          // question.questionedBy,
                          index
                        )
                      }
                      className={`questionAns ptag ${
                        selectedQuestionIndex === index ? "active" : ""
                      }`}
                      // className="ptag"
                    >
                      {e}
                    </p>
                  </span>
                ))}

              {quesList &&
                quesList.map((data, index) => (
                  <span className="span-tags" key={data.id}>
                    {/* <p onClick={() => props.print(data.question)} className="ptag"> */}
                    <p
                      onClick={() =>
                        handleQueAns(
                          data.question,
                          // question.questionedBy,
                          index
                        )
                      }
                      className={`questionAns ptag ${
                        selectedQuestionIndex === index ? "active" : ""
                      }`}
                      // className="ptag" 
                    >
                      {data.question}
                    </p>
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="input-container">
          <h1>Add Answer:</h1>
          <textarea
            type="text"
            ref={inputRef}
            className="ans-card"
            placeholder="Write Answer here:"
            value={ans}
            onChange={(entered_ans) => setAns(entered_ans.target.value)}
          ></textarea>
        </div>
        <div className="ans-btn">
          <Button
            onClick={closeModalHandler}
            style={{ width: "5rem", fontSize: "1rem" }}
          >
            <span>Cancel</span>
          </Button>
          <Button onClick={answerSubmit} style={{ fontSize: "1rem" }}>
            <span>Post Answer</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddAns;
