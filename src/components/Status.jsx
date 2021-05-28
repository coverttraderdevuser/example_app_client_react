import React from 'react'
import './Status.css'

const Status = ({text, freeze}) => {
    // const []


    return (
        <div className="status"> 
            {/* <input id="textChanged-toggler" type="checkbox" className="textChanged-toggler" checked={textTransition} onChange={handleTextChanged} /> */}
            <div className="container">{text}</div>
        </div>
    )
}

export default Status
