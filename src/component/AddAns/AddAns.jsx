import React from "react";
import "./AddAns.css"
import QuesList from "../Right-Sidebar/QuesList";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Navbar from "../Navbar/Navbar";



const AddAns=(props)=>{

    const navigate=useNavigate();

    const [ans,setAns]=useState('');

    const [element,setElement]=useState('');

    function print(e){
        

        setElement(e);

        navigate('/ans_ques');
      
    }

    var obj={};
  

    function answerSubmit(){

        if(!ans==''){

        obj.question=(element);
        obj.answer=(ans);


        var QuestioAnswerList=props.quesAns;
        QuestioAnswerList.unshift(obj);

        props.setQuesAns(QuestioAnswerList);
        // console.log(props.quesAns);

        localStorage.setItem(`QuestionAnswer`,JSON.stringify(props.quesAns));
        // alert("Answer Submitted!!")
        navigate('/Home');
        }
        else {
            alert("Please Enter Answer")
        }

    }


    return (
        <div>
            <div className="ans-container">
                <Navbar />
            <p className="selected-ques">{element}</p>
                <div className="ans-page">
                    <QuesList print={print} title={"Selection List"}/>
                    <textarea type="text" className="ans-card" placeholder="Answer:" value={ans} onChange={(entered_ans) => setAns(entered_ans.target.value)}></textarea>
                </div> 
                 <div className="ans-btn">
                    <Button onClick={()=>navigate('/Home')} style={{width:"5rem", fontSize:"1rem"}}>
                        <span>Cancel</span>
                    </Button>
                    <Button onClick={answerSubmit} style={{fontSize:"1rem"}} >
                        <span>Post Answer</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}
export default AddAns;