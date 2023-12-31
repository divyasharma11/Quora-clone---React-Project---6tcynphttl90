import React, { useEffect, useRef } from "react";
import "./AddAns.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuesList from "../Right-Sidebar/QuesList";

const AddAns = (props) => {
  const navigate = useNavigate();
  const [ans, setAns] = useState("");
  const [answerAdded, setAnswerAdded] = useState(false);
  const [selectedQue, setSelectedQue] = useState({
    question: "",
    // questionedBy: "",
  });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const inputRef = useRef("");
  
  function answerSubmit() {
    console.log("selectedQue.question",selectedQue);
    if (selectedQue.question && ans !== "") {
      const updatedQuestionAnswer = [
        // ...props.quesAns,
        ...(JSON.parse(localStorage.getItem("QuestionAnswer"))),
        {
          question: selectedQue.question,
          answer: ans,
        },
      ];
      props.setQuesAns(updatedQuestionAnswer);
      setAns("");
      setSelectedQuestionIndex(null);
      toast.success("Answere added successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAnswerAdded(true);
      localStorage.setItem(`QuestionAnswer`, JSON.stringify(updatedQuestionAnswer));
    } else {
      toast.error("Please select a question from the questions list and write your answer.!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    if (answerAdded) {
      setTimeout(() => {
        navigate("/home");
      }, 3500);
    }
  }, [answerAdded]);
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
    {id: 8,question: "What do you think the meaning of life is?" },
    {id: 9,question: "If money were no object, what would you do?" },
    // {id: 10,question: "If money were no object, what would you do?" },
    // {id: 11,question: "Which is the largest plateau in the world?" },
    // {id: 12,question: "Who designed the National Flag of India?" },
    // {id: 13,question: "Who designed the National Flag of India?" },
    // {id: 14,question: "How many days are there in a year?" },
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
       <ToastContainer />
      <Navbar />
      <div className="ans-container">
        <div className="ans-page">
          <div className="select_quest_List">
            <h2>Selection List</h2>
            <hr />
            <div className="list">        
              {/* {quesList &&
                quesList.map((data, index) => (
                  <span className="span-tags" key={data.id}>
                    <p
                      onClick={() =>
                        handleQueAns(
                          data.question,
                          index
                        )
                      }
                      className={`questionAns ptag ${
                        selectedQuestionIndex === index ? "active" : ""
                      }`}
                    >
                      {data.question}
                    </p>
                  </span>
                ))} */}
                 {localQuesList &&
                localQuesList.map((e, index) => (
                  <span className="span-tags" key={index}>
                    <p
                      onClick={() =>
                        handleQueAns(
                          e,
                          index                       
                        )
                      }
                      className={`questionAns ptag ${
                        selectedQuestionIndex === index ? "active" : ""                      
                      }`}
                    >
                      {e}
                    </p>
                  </span>
                ))}

            </div>
          </div>
        </div>
        <div>
        <div className="input-container">
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
            onClick={closeModalHandler}>
            <span>Cancel</span>
          </Button>
          <Button onClick={answerSubmit}>
            <span>Post Answer</span>
          </Button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddAns;
