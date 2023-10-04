import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import { getItem } from "../../getUser";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import buttons from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";
import { MediaBluetoothOnSharp, Search } from "@mui/icons-material";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.info("Logout successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      auth
        .signOut()
        .then(() => {
          setTimeout(() => {
          navigate("/");
          window.location.reload();
          localStorage.setItem(
            "user",
            JSON.stringify({ ...userRef.current, islogged: false })
          );
        }, 3000);
        })
        .catch((error) => {
          // console.log(error);
          toast.error("Logout Error!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    // }
  }
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="nav-container">
       <ToastContainer />
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
        <div className="nav-icon" title="Question-List">
          <FeaturedPlayListIcon  onClick={()=>navigate('/quespage')}/>
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
        <button
          onClick={() => navigate('/add_ques')}
          style={{ fontSize: "1rem" }}
          className="btn"
        >
         <span>Add questions</span>
        </button>
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
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Avatar />  
      </Button>
         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>{userRef.current?.username}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </div>
      </div>
  );
};

export default Navbar;
