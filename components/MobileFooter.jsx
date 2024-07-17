import React from 'react'
import "../CSS/MobileFooter.css"
import { Link } from 'react-router-dom';


import { useTranslation } from 'react-i18next'

export default function MobileFooter() {

  const { t, i18n } = useTranslation()

  return (
    <footer className="mainMobFooter">
        <ul className="footerMenu">
            <li><Link to="/dashboard">{t("footerHome")}</Link></li>
            <li><Link to="/calendar">{t("footerCalendar")}</Link></li>
            <li><Link to="/taskboard">{t("footerTasks")}</Link></li>
            <li><Link to="/sports">{t("footerSports")}</Link></li>
            <li><Link to="/food">{t("footerFood")}</Link></li>
        </ul>
    </footer>
  )
}
