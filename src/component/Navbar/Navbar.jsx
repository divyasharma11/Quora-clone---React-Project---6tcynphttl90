import React from "react";
import { useState } from "react";
import "./Navbar.css";

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
  return (
    <div className="nav-container">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt="logo"
        />
      </div>
      <div className="nav-icons">
        <div className="active nav-icon">
          <HomeIcon />
        </div>
        <div className="nav-icon">
          <FeaturedPlayListIcon />
        </div>
        <div className="nav-icon">
          <AssignmentTurnedInIcon />
        </div>
        <div className="nav-icon">
          <PeopleAltIcon />
        </div>
        <div className="nav-icon">
          <NotificationsIcon />
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
          // onKeyDown={searchHandler}
        />
        <div onClick={searchHandler}>
          <Search className="search-btn" />
        </div>
      </div>
      <div>
        <Button
          onClick={() => setIsQuesModalOpen(true)}
          style={{ fontSize: "1rem" }}
          className="btn"
        >
         <span>Add questions</span>
        </Button>
        <Modal
          isOpen={isQuesModalOpen}
          // onClose={() => setIsQuesModalOpen(false)}
          style={{
            overlay: {
              width: 700,
              height: 500,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-200px",
              marginLeft: "-350px",
            },
          }}
        >
          <AddQues setIsModalOpen={setIsQuesModalOpen} />
        </Modal>
      </div>
      <div>
        <Button
          onClick={() => setIsAnsModalOpen(true)}
          style={{ fontSize: "1rem" }}
          className="btn"
        >
          <span>Add answers</span>
        </Button>
        <Modal
          isOpen={isAnsModalOpen}
          onClose={() => setIsAnsModalOpen(false)}
          style={{
            overlay: {
              width: 700,
              height: 500,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-200px",
              marginLeft: "-350px",
            },
          }}
        >
          <AddAns setIsAnsModalOpen={setIsAnsModalOpen} />
        </Modal>
      </div>
      <div>
        <Button
          onClick={() => navigate("/")}
          style={{ fontSize: "1rem", width: "5rem" }}
          className="btn"
        >
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
