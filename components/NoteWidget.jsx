import React, { useState, useEffect } from 'react';


const NoteWidget = ({ id, title, content, removeWidget, saveNote }) => {
    const [noteContent, setNoteContent] = useState(content);

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
                <h3>{title}</h3>
                <button className="remove-widget" onClick={() => removeWidget(id)}>Remove</button>
            </div>
            <div className="widget-content">
                <textarea 
                    value={noteContent} 
                    onChange={handleNoteChange}
                    placeholder="Write your note here..."
                />
            </div>
        </div>
    );
};

export default NoteWidget;
