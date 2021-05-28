import React from 'react'
import './header.css'
function header() {
    return (
        <div className="header">
            <a href="#default" className="logo">SDE CRACKER</a>
            <div className="header-right">
                <a className="active prob" href="#home">Problems</a>
                <a href="#contact" className="discuss">Discuss</a>
                <a href="#guide" className="guide">Guide</a>
                <a href="#about" className="about">About</a>
            </div>
        </div> 
    )
}

export default header
