import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Left-Sidebar/Sidebar'
import Feed from '../Main-content/Feed'
import "./Homepage.css"


import QuesList from '../Right-Sidebar/QuesList'

const Homepage = ({search, setSearch,setSearchedQues,setSearchedAns}) => {
  
  
  return (
    <div className='home'>
           <Navbar search={search} setSearch={setSearch} setSearchedAns={setSearchedAns} setSearchedQues={setSearchedQues} /> 
     <div className='home-content'>
        <Sidebar />
        <Feed />
        <QuesList title={"Question List"} />
     </div>
     
    </div>
  )
}

export default Homepage;