import React from "react";
import "./AddQues.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddQues = ({count,setCount,questionObj,setQuestionObj,}) => {
  const navigate = useNavigate();

  const [Question, setQuestion] = useState("");

  var i = count;

  const quesPosted = () => {
    if (!Question == "") {
      var arryList = questionObj;
      arryList.unshift(Question);
      setQuestionObj(arryList);

      localStorage.setItem(`QuestionList`, JSON.stringify(questionObj));
      i++;
      setCount(i);
      alert("post successfull!!");
      navigate("/Home");
    } else {
      alert("Please Enter Question");
    }
  };
  const closeModalHandler = () => {
    // navigate("/Home");
     location.reload();
  };
  return (
    <div className="add_ques-container">
      <div className="ques-card">
        <h1 className="heading">Question:</h1>
         <textarea
           type="text"
           className="input-ques"
           placeholder="Type Your Question Here................"
           value={Question}
           onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
      </div>
      <div className="button-style">
        <Button
          onClick={closeModalHandler}
          style={{ width: "4rem", fontSize: "1rem" }}
        >
          <span>Cancel</span>
        </Button>
        <Button onClick={() => quesPosted} style={{ fontSize: "1rem" }}>
          <span>Post Question</span>
        </Button>
      </div>
    </div>
  );
};

export default AddQues;
