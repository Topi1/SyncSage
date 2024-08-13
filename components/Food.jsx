import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import Widget from './Widget';
import NoteWidget from './NoteWidget';

import { useTranslation } from 'react-i18next';



const Food = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    

    return (
        <>
        <section className='dashButtons'>
            <section className='dashLeft'>
                <h2>{t("food")}</h2>
            </section>
            <section className="dashRight">
                
            </section>    
        </section>
        <div className='dashMain'>
            
            
        </div>
        </>
    );
};

export default Food;
