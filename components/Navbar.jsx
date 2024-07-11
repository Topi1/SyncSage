import React from 'react'
import "../CSS/Navbar.css"
import logo from "../src/assets/logos/sageText.png"
import profileIcon from "../src/assets/icons/profile.png"

import DateTime from './DateTime'

export default function Navbar() {
  return (
    <nav className="navMain">
        <section className="nav1">
            <img src={logo} alt="" className="textLogo" />
            <DateTime></DateTime>
            <img src={profileIcon} alt="" className="profileIcon" />
        </section>
        <section className="nav2">

        </section>
        
    </nav>
  )
}
