import React, { useTransition, useState } from 'react'
import "../CSS/Navbar.css"

import DropMenu from "./DropMenu"

import logo from "../src/assets/logos/sageText.png"
import profileIcon from "../src/assets/icons/profile.png"

import DateTime from './DateTime'

import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom';

export default function Navbar() {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };


  return (
    <nav className="navMain">
        <section className="nav1">
            <section className="navLeft">
                <Link to="/home" className='homeLink'><img src={logo} alt="" className="textLogo" /></Link>
                
                <h1 className='motto'>"{t("navmotto")}"</h1>
            </section>
            <section className="navRight">
                <DateTime></DateTime>
                <ul className='languageList'>
                    <li onClick={ () => changeLanguage("en-US")}>Eng</li>
                    <li onClick={ () => changeLanguage("fin")}>Fin</li>
                    <li>Ger</li>
                </ul>
                <img src={profileIcon} alt="" className="profileIcon" onClick={toggleDropdown}/>
                    {showDropdown && (
                    <div className="dropdown-container">
                    <DropMenu onClose={closeDropdown} />
                    </div>
                )}
            </section>
        </section>
        
        
    </nav>
  )
}
