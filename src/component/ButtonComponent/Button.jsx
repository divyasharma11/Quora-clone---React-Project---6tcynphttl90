import React from 'react'
import "./Button.css"

const Button=(props)=>{

    return(
        <div className='button_component'>
            <button {...props} className="btn"></button>
        </div>
    )
}

export default Button