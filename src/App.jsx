import React, { useState } from "react";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Login from "./component/Login-page/Login";
import Home from "./component/Homepage/Homepage";
import AddAns from "./component/AddAns/AddAns";
import AddQues from "./component/AddQues/AddQues";
import Register from "./component/Register/Register";
import searchList from "./component/SearchList";
import QuesAns from "./component/QuesAnsPage/QuesAns";
import History from "./component/pages/History";
import  Business  from "./component/pages/Business";
import Education from "./component/pages/Education";
import Cooking from "./component/pages/Cooking"
import Health from "./component/pages/Health"
import Movies from "./component/pages/Movies"
import Technology from "./component/pages/Technology"
import Discover from "./component/pages/Discover";
import LongListQues from "./component/pages/LongListQues";
import QuesContainer from "./component/quesContainer/QuesContainer";

function App() {
  const [count, setCount] = useState(0);

  const [questionObj, setQuestionObj] = useState([]);

  const [quesAns, setQuesAns] = useState([]);
  const [search, setSearch] = useState("");

  const [searchQuestion,setSearchQuestion]=useState(searchList)

  const [searchedQues, setSearchedQues] = useState("");
  const [searchedAns, setSearchedAns] = useState("");


  return (
    <div>
      <BrowserRouter >
        <Routes>        
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home searchQuestion={searchQuestion} setSearchQuestion={setSearchQuestion} search={search} setSearch={setSearch} searchedQues={searchedQues} searchedAns={searchedAns}  setSearchedQues={setSearchedQues} setSearchedAns={setSearchedAns}/>}/>
            <Route path="/add_ques" element={<AddQues quesAns={quesAns} setQuesAns={setQuesAns} count={count} setCount={setCount} questionObj={questionObj} setQuestionObj={setQuestionObj}/>}/>
            <Route path="/ans_ques" element={<AddAns quesAns={quesAns} setQuesAns={setQuesAns}/>}/>
            <Route path="/question-list" element={<LongListQues/>}/>
            <Route path="/question-container" element={<QuesContainer/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/quesanspage" element={<QuesAns questionObj={questionObj} setQuestionObj={setQuestionObj} quesAns={quesAns} setQuesAns={setQuesAns} />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/business" element={<Business />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/cooking" element={<Cooking />}/>
            <Route path="/health" element={<Health />}/>
            <Route path="/technology" element={<Technology />}/>
            <Route path="/discover" element={<Discover />}/>
           
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
