import React from 'react'
import "../CSS/MobileFooter.css"

import { useTranslation } from 'react-i18next'

export default function MobileFooter() {

  const { t, i18n } = useTranslation()

  return (
    <footer className="mainMobFooter">
        <ul className="footerMenu">
            <li>{t("footerHome")}</li>
            <li>{t("footerCalendar")}</li>
            <li>{t("footerTasks")}</li>
            <li>{t("footerSports")}</li>
            <li>{t("footerFood")}</li>
        </ul>
    </footer>
  )
}
