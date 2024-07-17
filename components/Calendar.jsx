import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import Widget from './Widget';
import NoteWidget from './NoteWidget';

import { useTranslation } from 'react-i18next';



const Calendar = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    

    return (
        <>
        <section className='dashButtons'>
            <section className='dashLeft'>
                <h2>{t("calendar")}</h2>
            </section>
            <section className="dashRight">
                <button >Add Widget</button>
                <button >Add Note</button>
                <button >Add Chart</button>
                <button >Add Alarm</button>
            </section>    
        </section>
        <div className='dashMain'>
            
            
        </div>
        </>
    );
};

export default Calendar;
