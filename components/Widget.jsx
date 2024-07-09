import React from 'react';

const Widget = ({ title, content }) => {
  return (
    <div className="widget-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Widget;