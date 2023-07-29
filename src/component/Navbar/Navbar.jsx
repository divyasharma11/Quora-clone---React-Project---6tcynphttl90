import React, { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import { getItem } from "../../getUser";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import AddQues from "../AddQues/AddQues";
import AddAns from "../AddAns/AddAns";
import { Search } from "@mui/icons-material";

const Navbar = ({
  search,
  setSearch,
  setSearchedQues,
  searchQuestion,
  setSearchQuestion,
}) => {
  const navigate = useNavigate();
  const userRef = useRef(getItem("user"));
  const [isQuesModalOpen, setIsQuesModalOpen] = useState(false);
  const [isAnsModalOpen, setIsAnsModalOpen] = useState(false);

  const inputHandler = (event) => {
    setSearch(event.target.value);
    setSearchedQues(null);
  };

  const searchHandler = (event) => {
    // if (event.keyCode === 13) {
    const queAnsFilter = searchQuestion?.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    );
    setSearchQuestion(queAnsFilter);
    // }
  };
  const handleLogout =()=>{
    // if (window.confirm("Do you want to Logout?")) {
    //   auth
    //     .signOut()
    //     .then(() => {
    //       navigate("/");
    //       window.location.reload();
    //       localStorage.setItem(
    //         "user",
    //         JSON.stringify({ ...userRef.current, islogged: false })
    //       );
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    navigate("/");
  }
  return (
    <div className="nav-container">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt="logo"
        />
      </div>
      <div className="nav-icons">
        <div className="active nav-icon" title="Home">
          <HomeIcon onClick={()=>navigate('/home')}/>
        </div>
        <div className="nav-icon" title="Question-Answer-List">
          <FeaturedPlayListIcon  onClick={()=>navigate('/quesanspage')}/>
        </div>
        <div className="nav-icon" title="Add-Answer">
          <AssignmentTurnedInIcon  onClick={()=>navigate('/ans_ques')} />
        </div>
        <div className="nav-icon" title="Discovery">
          <PeopleAltIcon onClick={()=>navigate('/discover')}/>
        </div>
        <div className="nav-icon" title="Notification">
          <NotificationsIcon onClick={()=>navigate('/discover')} />
        </div>
      </div>
      <div className="nav-input">
        <input
          type="text"
          className="search-questions"
          id="search"
          value={search}
          onChange={inputHandler}
          placeholder="   Search question here..."
        />
        <div onClick={searchHandler}>
          <Search className="search-btn" />
        </div>
      </div>
      <div className="btn-container">
      <div>
        <Button
          onClick={() => navigate('/add_ques')}
          style={{ fontSize: "1rem" }}
          className="btn"
        >
         <span>Add questions</span>
        </Button>
      </div>
      {/* <div>
        <Button
          // onClick={() => setIsAnsModalOpen(true)}
          onClick={()=>navigate('/ans_ques')}
          style={{ fontSize: "1rem" }}
          className="btn"
        >
          <span>Add answers</span>
        </Button>
      </div> */}
      <div>
        <Button
          onClick={handleLogout}
          style={{ fontSize: "1rem", width: "5rem" }}
          className="btn"
        >
          <span>Logout</span>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
