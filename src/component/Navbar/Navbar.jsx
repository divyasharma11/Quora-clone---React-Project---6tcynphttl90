import React from 'react'
import { useState } from 'react';
import "./Navbar.css"


import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '../ButtonComponent/Button';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddQues from '../AddQues/AddQues';
import AddAns from '../AddAns/AddAns';



const Navbar = (props) => {
  const navigate = useNavigate();
  const [isQuesModalOpen,setIsQuesModalOpen]=useState(false);
  const [isAnsModalOpen,setIsAnsModalOpen]=useState(false);
  
  const searching=()=> {
    console.log("hello")
    var QuestionAnswerList = JSON.parse(localStorage.getItem("QuestionAnswer"));
    QuestionAnswerList.map((data) =>
      data.question === props.search
        ? props.setSearchedQues(data.question) & props.setSearchedAns(data.answer)
        : props.setSearchedQues("This question is not Found") &
          props.setSearchedAns("So please submit your question")
    );
  }
  return (
    <div className='nav-container'>
       <div className='navbar-logo'>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
        alt="logo"
        />
        </div>
       <div className='nav-icons'>
       <div className='active nav-icon'>
          <HomeIcon />
        </div>
       <div className='nav-icon'>
          <FeaturedPlayListIcon />
        </div>
       <div className='nav-icon'>
          <AssignmentTurnedInIcon />
        </div>
       <div className='nav-icon'>
        <PeopleAltIcon />
        </div>
       <div className='nav-icon'>
       <NotificationsIcon />
        </div>
       </div>
       <div className='nav-input'>
        <input type="search" className='search-questions' placeholder="Search for questions..." value={props.search} onChange={(e) => props.setSearch(e.target.value)}></input>
                <button onClick={searching} className="search-btn">Search1</button>    
       </div>
       <div>
          <Button
           onClick={()=>setIsQuesModalOpen(true)} style={{fontSize:"1rem"}} className='btn'><span>Add Questions</span></Button>
              <Modal
              isOpen={isQuesModalOpen}
              onClose={()=>setIsQuesModalOpen(false)}
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
                    <Button onClick={()=>setIsAnsModalOpen(true)} style={{fontSize:"1rem"}} className='btn'><span>Add Answers</span></Button>
                    <Modal
              isOpen={isAnsModalOpen}
              onClose={()=>setIsAnsModalOpen(false)}
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
                    <Button onClick={()=>navigate('/')} style={{fontSize:"1rem", width:"5rem"}} className='btn'><span>Log In</span></Button>
                </div>
                
        </div> 
  )
}

export default Navbar;