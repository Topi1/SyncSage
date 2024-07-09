import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css"
import Widget from './Widget';

const Dashboard = () => {
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

        const onLayoutChange = (newLayout) => {
            setLayout(newLayout);
            localStorage.setItem('layout', JSON.stringify(newLayout));
            };
            
            const addWidget = () => {
                const newId = `widget_${layout.length + 1}`;
                const newLayout = [...layout, { i: newId, x: 0, y: Infinity, w: 2, h: 2 }];
                const newWidget = { id: newId, title: `Widget ${widgets.length + 1}`, content: `Content ${widgets.length + 1}` };
                setLayout(newLayout);
                setWidgets([...widgets, newWidget]);
                localStorage.setItem('layout', JSON.stringify(newLayout));
                localStorage.setItem('widgets', JSON.stringify([...widgets, newWidget]));
              };
              
              
              const removeWidget = (id) => {
                const newLayout = layout.filter(l => l.i !== id);
                const newWidgets = widgets.filter(w => w.id !== id);
                setLayout(newLayout);
                setWidgets(newWidgets);
                localStorage.setItem('layout', JSON.stringify(newLayout));
                localStorage.setItem('widgets', JSON.stringify(newWidgets));
              };
                

    return (
        <div className='dashMain'>
      <button onClick={addWidget}>Add Widget</button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {widgets.map(widget => (
          <div key={widget.id} data-grid={layout.find(l => l.i === widget.id)}>
            <Widget title={widget.title} content={widget.content} />
            <button onClick={() => removeWidget(widget.id)}>Remove</button>
          </div>
        ))}
      </GridLayout>
    </div>
  );
    };
        
    export default Dashboard;