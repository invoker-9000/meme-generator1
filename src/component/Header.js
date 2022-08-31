import React from "react"
import troll from "../images/troll-face.png"

export default function Header(){

    return(
        <header className="header-container">

        <img src={troll} alt="troll-face" className="header-image" ></img>
        <h1 className="header-title">Meme Generator</h1>
        <h2 className="header-subtitle"> React course - Project 3</h2>
        
        </header>
        

    )
}