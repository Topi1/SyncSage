import React from 'react';

const Widget = ({ id, title, content, removeWidget }) => {
    
  return (
    <div className="widget">
            <div className="widget-header">
                <h3>{title}</h3>
                
            </div>
            <div className="widget-content">
                {content}
                <button className="remove-widget" onClick={() => removeWidget(id)}>Remove</button>
            </div>
        </div>
  );
};

export default Widget;