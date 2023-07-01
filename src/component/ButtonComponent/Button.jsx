import React from 'react'
import "./Button.css"

const Button=(props)=>{

    return(
        <div>
            <button {...props} className="btn"></button>
        </div>
    )
}

export default Button