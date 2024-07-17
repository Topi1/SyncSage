import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'


const NoteWidget = ({ id, title, content, removeWidget, saveNote }) => {
    const [noteContent, setNoteContent] = useState(content);

    const { t, i18n } = useTranslation()

    useEffect(() => {
        setNoteContent(content);
    }, [content]);

    const handleNoteChange = (e) => {
        setNoteContent(e.target.value);
        saveNote(id, e.target.value);
    };

    

    return (
        <div className="widget">
            <div className="widget-header">
                <h3>{t('notename')}</h3>
                
            </div>
            <div className="widget-content">
                <textarea 
                    value={noteContent} 
                    onChange={handleNoteChange}
                    placeholder={t("placeholder")}
                />
                <button className="remove-widget" onClick={() => removeWidget(id)}>{t("buttonRemove")}</button>
            </div>
        </div>
    );
};

export default NoteWidget;
