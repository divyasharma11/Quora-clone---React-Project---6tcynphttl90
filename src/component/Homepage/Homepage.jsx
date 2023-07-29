import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Left-Sidebar/Sidebar";
import Feed from "../Main-content/Feed";
import "./Homepage.css";

import QuesList from "../Right-Sidebar/QuesList";
import Footer from "../footer/Footer";

const Homepage = ({
  search,
  setSearch,
  setSearchedQues,
  setSearchedAns,
  setSearchQuestion,
  searchQuestion,
}) => {
  return (
    <div className="home">
      <Navbar
        setSearchQuestion={setSearchQuestion}
        searchQuestion={searchQuestion}
        search={search}
        setSearch={setSearch}
        setSearchedAns={setSearchedAns}
        setSearchedQues={setSearchedQues}
      />
      <div className="home-content">
        <Sidebar  />
        <Feed
          setSearchQuestion={setSearchQuestion}
          searchQuestion={searchQuestion}
        />
        <QuesList title={"Question List"} className="right"/>
      </div>
        <Footer />
    </div>
  );
};

export default Homepage;
