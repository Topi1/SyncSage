import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Widget from './Widget';

const ResponsiveDash = () => {

const ResponsiveGridLayout = WidthProvider(Responsive);



const responsiveProps = {

    className: 'responsive-grid',
  
    breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
  
    cols: { lg: 12, md: 3, sm: 2, xs: 1, xxs: 1 },
  
    layouts: {
  
      lg: [{ i: '1', x: 0, y: 0, w: 2, h: 2 }],
  
      md: [{ i: '1', x: 0, y: 0, w: 1, h: 2 }],
  
      // More layouts for other breakpoints...
  
    }
  
  };


  // Inside your render or return method of the component
return (
    <div className="dashMain">
        <button onClick="">Add Widget</button>
         <ResponsiveGridLayout {...responsiveProps}>

            <div key="1" style={{ background: '#4caf50' }}>Responsive Item 1</div>

            {/* More grid items... */}

        </ResponsiveGridLayout>
    </div>
   
)





};

export default ResponsiveDash