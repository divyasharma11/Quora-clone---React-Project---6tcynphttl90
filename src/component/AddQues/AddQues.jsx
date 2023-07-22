import React from "react";
import "./AddQues.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const AddQues = (props) => {
  const navigate=useNavigate();

  const [Ques,setQues]=useState('');
  
  //    console.log(localStorage.getItem("questionObj"));


     var i=props.count;
   
  const ques_posted = () => {

      if(!Ques==''){

      var arryList=props.questionObj;
      arryList.unshift(Ques);
      props.setQuestionObj(arryList);

      localStorage.setItem(`QuestionList`,JSON.stringify(props.questionObj));
      i++;
      props.setCount(i) 

      navigate('/home');
      }
      else{
          alert("Please Enter Question")
      }

  };



  const closeModalHandler = () => {
    navigate("/home");
    //  location.reload();
  };
  return (
    <div className="add_ques-container">
      <div className="ques-card">
        <h1 className="heading">Question:</h1>
         <textarea
           type="text"
           className="input-ques"
           placeholder="Type Your Question Here................"
           value={Ques}
           onChange={(e) => setQues(e.target.value)}
          ></textarea>
      </div>
      <div className="button-style">
        <Button
          onClick={closeModalHandler}
          style={{ width: "4rem", fontSize: "1rem" }}
        >
          <span>Cancel</span>
        </Button>
        <Button onClick={ques_posted} style={{fontSize:"1rem"}} >
          <span>Post Question</span>
        </Button>
      </div>
    </div>
  
  );
};

export default AddQues;
