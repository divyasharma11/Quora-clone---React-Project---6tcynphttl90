import React from 'react'
import { Add } from '@mui/icons-material'
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate=useNavigate();
  const historyPage=()=>{
    navigate("/history")
  }
  const businessPage=()=>{
    navigate("/business")
  }
  const moviesPage=()=>{
    navigate("/movies")
  }
  const cookingPage=()=>{
    navigate("/cooking")
  }
  const healthPage=()=>{
    navigate("/health")
  }
  const technologyPage=()=>{
    navigate("/technology")
  }
  const educationPage=()=>{
    navigate("/education")
  }
  const discoverPage=()=>{
    navigate("/discover")
  }
  return (
    <div className='sidebar-container'>
    <div className="sidebar" onClick={historyPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebar" onClick={businessPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Business</p>
      </div>
      {/* <div className="sidebar">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Psychology</p>
      </div> */}

      <div className="sidebar" onClick={cookingPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      {/* <div className="sidebar">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Music</p>
      </div> */}

      {/* <div className="sidebar">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div> */}

      <div className="sidebar" onClick={healthPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebar" onClick={moviesPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebar" onClick={technologyPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebar" onClick={educationPage}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Education</p>
  </div>
      <div className="sidebar" onClick={discoverPage}>
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default Sidebar