import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div>
      <InstagramIcon  className='insta'/>
      <FacebookIcon className='facebook'/>
     <LinkedInIcon  className='linkedin'/>
     </div>
     <div>
    <h4 className="copyright">&copy; Copyright: Quora-Clone </h4>
     </div>
     
  </footer>
  )
}

export default Footer;