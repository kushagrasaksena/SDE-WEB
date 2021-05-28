import React from 'react'
import './home.css'
function home() {
    return (
        <div className="container">
            <div className="base" width = "800px" height="500px">
                <h1 className="main-title">Problems</h1>
                <br/>
                <div className="main-buttons">
                    <div className="on-off">
                        <button className="button" type="button" disabled>Solved</button> 
                        <button type="button" className="button" disabled>Unsolved</button> 
                    </div>
                     <div className="dropdown">
                        <button className="dropbtn">Difficulty</button>
                        <div className="dropdown-content">
                            <button type="dropbtn-1">Click Me!</button>
                            <button type="dropbtn-1">Click Me!</button>
                            <button type="dropbtn-1">Click Me!</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default home
