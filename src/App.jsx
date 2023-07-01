import React, { useState } from "react";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Login from "./component/Login-page/Login";
import Home from "./component/Homepage/Homepage";
import AddAns from "./component/AddAns/AddAns";
import AddQues from "./component/AddQues/AddQues";
import Register from "./component/Register/Register";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const [questionObj, setQuestionObj] = useState([]);

  const [quesAns, setQuesAns] = useState([]);
  const [search, setSearch] = useState("");

  const [searchedQues, setSearchedQues] = useState("");
  const [searchedAns, setSearchedAns] = useState("");

  // function searching() {
  //   var QuestionAnswerList = JSON.parse(localStorage.getItem("QuestionAnswer"));
  //   QuestionAnswerList.map((data) =>
  //     data.question === search
  //       ? setSearchedQues(data.question) & setSearchedAns(data.answer)
  //       : setSearchedQues("This question is not Found") &
  //         setSearchedAns("So please submit your question")
  //   );
  // }

  return (
    <div>
      <BrowserRouter >
        <Routes>        
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home search={search} setSearch={setSearch} searchedQues={searchedQues} searchedAns={searchedAns}  setSearchedQues={setSearchedQues} setSearchedAns={setSearchedAns}/>}/>
            <Route path="/add_ques" element={<AddQues count={count} setCount={setCount} questionObj={questionObj} setQuestionObj={setQuestionObj}/>}/>
            <Route path="/ans_ques" element={<AddAns quesAns={quesAns} setQuesAns={setQuesAns}/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
