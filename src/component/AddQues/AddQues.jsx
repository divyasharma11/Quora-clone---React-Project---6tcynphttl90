import React, { useEffect } from "react";
import "./AddQues.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../Left-Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddQues = (props) => {
  const navigate=useNavigate();
 const[quesAdded,setQuesAdded]=useState(false);
  const [Ques,setQues]=useState('');

     var i=props.count;
   
  const ques_posted = () => {

      if(!Ques==''){

      var arryList=props.questionObj;
      arryList.unshift(Ques);
      props.setQuestionObj(arryList);

      localStorage.setItem(`QuestionList`,JSON.stringify(props.questionObj));
      i++;
      props.setCount(i) 
      toast.success("Question added successfully !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setQuesAdded(true);
      }
      else{
          toast.error("Please Enter Question!", {
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
  };

  useEffect(() => {
    if (quesAdded) {
      setTimeout(() => {
        navigate("/home");
      }, 3500);
    }
  }, [quesAdded]);

  const closeModalHandler = () => {
    navigate("/home");
  };
  return (
    <>
     <ToastContainer />
    <Navbar />
    <div className="add_ques-container">
      <div className="ques-card">
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
    </>
  );
};

export default AddQues;
