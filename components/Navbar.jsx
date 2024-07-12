import React from 'react'
import "../CSS/Navbar.css"
import logo from "../src/assets/logos/sageText.png"
import profileIcon from "../src/assets/icons/profile.png"

import DateTime from './DateTime'

export default function Navbar() {
  return (
    <nav className="navMain">
        <section className="nav1">
            <section className="navLeft">
                <img src={logo} alt="" className="textLogo" />
                <h1>"The wise way forward."</h1>
            </section>
            <section className="navRight">
                <DateTime></DateTime>
                <ul className='languageList'>
                    <li>Eng</li>
                    <li>Fin</li>
                    <li>Ger</li>
                </ul>
                <img src={profileIcon} alt="" className="profileIcon" />
            </section>
        </section>
        <section className="nav2">

        </section>
        
    </nav>
  )
}
