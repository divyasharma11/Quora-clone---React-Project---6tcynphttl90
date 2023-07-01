import React from "react";
import "./Register.css";
import Button from "../ButtonComponent/Button";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
const navigate=useNavigate();
    return(
        <div className="register-container">
            <div className='register'>
                <div>
                    <h1>New Register</h1>  
                </div>
                <div> 
                    <input className="input-style-register" placeholder="Enter Email" type="email" required/>
                </div> 
                <div>          
                    <input className="input-style-register" placeholder="Enter Username" type="text" required/>  
                </div> 
                <div> 
                    <input className="input-style-register" placeholder="Enter Password" type="password" required/>
                </div>                 
                <div >  
                    <Button onClick={()=>navigate('/')} style={{fontSize:"1rem" ,width:"6rem",marginTop:"0px",textAlign:"center"}}><span>Register</span></Button>                      
                </div>
            </div>
        </div>
    )

}
export default Register