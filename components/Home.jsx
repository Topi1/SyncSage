import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import "../CSS/Home.css"
import Widget from './Widget';
import NoteWidget from './NoteWidget';

import { useTranslation } from 'react-i18next';



const Home = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    

    return (
        <>
        
        <div className='homeMain'>
            <section className="homeSec">
                <h1>{t("homeText1")}</h1>
                <h1>{t("homeText2")}</h1>
            </section>

            <section className="homeSec">
            
            </section>
            
        </div>

        </>
    );
};

export default Home;
