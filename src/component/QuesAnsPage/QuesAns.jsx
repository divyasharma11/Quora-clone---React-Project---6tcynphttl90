import React from "react";
import Navbar from "../Navbar/Navbar";
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
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
          </div>
            <div className="small">
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
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
    </>
  );
};

export default QuesAns;
