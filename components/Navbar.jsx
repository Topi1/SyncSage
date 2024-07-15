import React, { useTransition } from 'react'
import "../CSS/Navbar.css"
import logo from "../src/assets/logos/sageText.png"
import profileIcon from "../src/assets/icons/profile.png"

import DateTime from './DateTime'

import { useTranslation } from 'react-i18next'

export default function Navbar() {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    


  return (
    <nav className="navMain">
        <section className="nav1">
            <section className="navLeft">
                <img src={logo} alt="" className="textLogo" />
                <h1>"{t("navmotto")}"</h1>
            </section>
            <section className="navRight">
                <DateTime></DateTime>
                <ul className='languageList'>
                    <li onClick={ () => changeLanguage("en-US")}>Eng</li>
                    <li onClick={ () => changeLanguage("fin")}>Fin</li>
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
