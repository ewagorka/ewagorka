import React from "react"
import './ContentRow2.css'

const ContentRow2 = ({t,p,displayArea}) =>{

    return(

        <div className="container">
            <div className="content-row2">
                <h2>{t}</h2>
                {p && <p>{p}</p>}
                <div className="display-area">
                {displayArea}
                </div>
            </div>
        </div>
    )

}

export default ContentRow2;