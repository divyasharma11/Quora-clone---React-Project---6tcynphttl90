import React from "react";
import Navbar from "../Navbar/Navbar";
import "./QuesAns.css";


const QuesAns = () => {
  let quesAnsList = [];
  let questionList = [];

  quesAnsList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  questionList = JSON.parse(localStorage.getItem("QuestionList"));
  return (
    <>
      <Navbar />
      <h1 className="h1">Question answer list:</h1>
      <div className="qa-container">
        <div className="q1">
          {questionList &&
            questionList.map((e, index) => (
              <span className="span-tags" key={index}>
                <p className="htag">
                  <h3>Ques. {e}</h3>
                </p>
              </span>
            ))}
          {quesAnsList &&
            quesAnsList.map((e, index) => (
              <div key={index}>
                <p className="ptag">Ans. {e.answer}</p>
              </div>
            ))}
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
             <h3 className="htag" >Ques. When was India won the first World Cup?</h3>
          <p className="ptag">Ans. 
            The final of the 1983 the West Indies at Lord's on 25 June 1983.
          </p>
            
        </div>
      </div>
     
    </>
  );
};

export default QuesAns;
