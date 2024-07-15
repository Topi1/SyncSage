import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import Widget from './Widget';
import NoteWidget from './NoteWidget';

import { useTranslation } from 'react-i18next';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const initialLayout = JSON.parse(localStorage.getItem('layout')) || [
        { i: 'a', x: 0, y: 0, w: 2, h: 2 },
        { i: 'b', x: 2, y: 0, w: 2, h: 2 },
        { i: 'c', x: 4, y: 0, w: 2, h: 2 }
    ];

    const initialWidgets = JSON.parse(localStorage.getItem('widgets')) || [
        { id: 'a', title: 'Widget 1', content: 'Content 1' },
        { id: 'b', title: 'Widget 2', content: 'Content 2' },
        { id: 'c', title: 'Widget 3', content: 'Content 3' }
    ];

    const [layout, setLayout] = useState(initialLayout);
    const [widgets, setWidgets] = useState(initialWidgets);

    const [widgetCounter, setWidgetCounter] = useState(1)
    const [noteWidgetCounter, setNoteWidgetCounter] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
        localStorage.setItem('layout', JSON.stringify(newLayout));
    };

    const addWidget = () => {
        const newId = `widget_${widgetCounter}`;
        const newLayout = [...layout, { i: newId, x: 0, y: Infinity, w: 2, h: 2 }];
        const newWidget = { id: newId, title: `Widget ${widgetCounter}`, content: `Content ${widgetCounter}` };
        setLayout(newLayout);
        setWidgets([...widgets, newWidget]);
        localStorage.setItem('layout', JSON.stringify(newLayout));
        localStorage.setItem('widgets', JSON.stringify([...widgets, newWidget]));
        setWidgetCounter(widgetCounter + 1)
    };

    const addNoteWidget = () => {
        const newId = `note_${noteWidgetCounter}`;
        const newLayout = [...layout, { i: newId, x: 0, y: Infinity, w: 2, h: 2 }];
        const newNoteWidget = { id: newId, title: `Note ${noteWidgetCounter}`, content: `` };
        setLayout(newLayout);
        setWidgets([...widgets, newNoteWidget]);
        localStorage.setItem('layout', JSON.stringify(newLayout));
        localStorage.setItem('widgets', JSON.stringify([...widgets, newNoteWidget]));
        setNoteWidgetCounter(noteWidgetCounter + 1)
    }

    const saveNote = (id, content) => {
        const newWidgets = widgets.map(widget =>
            widget.id === id ? {...widget, content} : widget)
            setWidgets(newWidgets)
            localStorage.setItem("widgets", JSON.stringify(newWidgets))
    }

    const removeWidget = (id) => {
        const newLayout = layout.filter(l => l.i !== id);
        const newWidgets = widgets.filter(w => w.id !== id);
        setLayout(newLayout);
        setWidgets(newWidgets);
        localStorage.setItem('layout', JSON.stringify(newLayout));
        localStorage.setItem('widgets', JSON.stringify(newWidgets));
        console.log(`Removing widget with id: ${id}`);
    };

    const responsiveProps = {
        className: 'layout',
        breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
        cols: { lg: 6, md: 4, sm: 3, xs: 2, xxs: 2 },
        
        
    };

    return (
        <>
        <section className='dashButtons'>
            <section className='dashLeft'>
                <h2>{t("dash")}</h2>
            </section>
            <section className="dashRight">
                <button onClick={addWidget}>Add Widget</button>
                <button onClick={addNoteWidget}>Add Note</button>
                <button onClick={addNoteWidget}>Add Chart</button>
                <button onClick={addNoteWidget}>Add Alarm</button>
            </section>    
        </section>
        <div className='dashMain'>
            
            <ResponsiveGridLayout
                {...responsiveProps}
                layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
                onLayoutChange={onLayoutChange}
                draggableHandle=".widget-header"
            >
                {widgets.map(widget => (
                    <div key={widget.id} data-grid={layout.find(l => l.i === widget.id)}>
                        {widget.id.startsWith("note_") ? (
                            <NoteWidget
                                id={widget.id}
                                title={widget.title}
                                content={widget.content}
                                removeWidget={removeWidget}
                                saveNote={saveNote}
                            />
                        ) : (

                            <Widget 
                                id={widget.id} 
                                title={widget.title} 
                                content={widget.content} 
                                removeWidget={removeWidget}/>
                        )}
                        
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
        </>
    );
};

export default Dashboard;
