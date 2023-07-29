import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer"
import "./QuesAns.css";
import Sidebar from "../Left-Sidebar/Sidebar";


const QuesAns = (props) => {
  // let quesAnsList = [];
  

  let quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  
  return (
    <>
      <Navbar />
     <div className="main">
      <div>
      <Sidebar />
      </div>
      <div className="qa-container">
        <div className="q1">
            <div className="small">
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. If money were no object, what would you do?</h3>
          <p className="ptag">Ans. 
          Once you understand what you really want, you have a much better chance of balancing your need for money.
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. What is one item on your bucket list?</h3>
          <p className="ptag">Ans. 
          Perhaps you’ve always wanted to earn a bachelor's or master’s degree, or go back for your GED. 
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. If you could learn one skill instantly, what would it be?</h3>
          <p className="ptag">Ans. 
          if I have to answer as per the context, I would say being able to speak multiple languages fluently would be a valuable and useful skill to have. 
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. What is your favorite simple pleasure?</h3>
          <p className="ptag">Ans. 
          Walking barefoot in grass. Listening to good music in the car. Taking a long, relaxing shower. Coffee.
          </p>
          </div>
          {  quesAnsList &&
            quesAnsList.map((e, index) => (
              <div key={index}  className="small">
                 <h3 className="htag">Ques. {e.question}</h3>
                <p className="ptag">Ans. {e.answer}</p>
              </div>
            ))}
            
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default QuesAns;
