import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import Widget from './Widget';
import NoteWidget from './NoteWidget';

import { useTranslation } from 'react-i18next';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CalendarPage = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    

    return (
        <>
        <section className='dashButtons'>
            <section className='dashLeft'>
                <h2>{t("calendar")}</h2>
            </section>
            <section className="dashRight">
                
            </section>    
        </section>
        <div className='dashMain'>
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
            
        </div>
        </>
    );
};

export default CalendarPage;
