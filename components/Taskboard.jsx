import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useTranslation } from 'react-i18next';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css";
import Widget from './Widget';
import TaskInput from './TaskInput';
import { useTasks } from './TaskContext';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Taskboard = () => {
  const { t } = useTranslation();
  const { tasks, addTask } = useTasks();

  const initialLayout = JSON.parse(localStorage.getItem('layout')) || [];

  const [layout, setLayout] = useState(initialLayout);
  const [widgetCounter, setWidgetCounter] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const taskWidgets = tasks.map((task, index) => ({
      i: `task_${index}`,
      x: (index * 2) % 12,
      y: Math.floor(index / 6) * 2,
      w: 2,
      h: 2
    }));
    setLayout(taskWidgets);
  }, [tasks]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('layout', JSON.stringify(newLayout));
  };

  const responsiveProps = {
    className: 'layout',
    breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
    cols: { lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 },
    maxRows: 10, // Adjust this to your desired number of rows
    isBounded: true
  };

  return (
    <>
      <section className='dashButtons'>
        <section className='dashLeft'>
          <h2>{t("tasks")}</h2>
        </section>
        <section className="dashRight">
          <TaskInput addTask={addTask} />
        </section>
      </section>
      <div className='dashMain'>
        <ResponsiveGridLayout
          {...responsiveProps}
          layout={layout}
          onLayoutChange={onLayoutChange}
          draggableHandle=".widget"
        >
          {tasks.map((task, index) => (
            <div key={`task_${index}`} data-grid={layout.find(l => l.i === `task_${index}`)}>
              <Widget 
                id={`task_${index}`} 
                title={task.task} 
                content={`${task.time} hours`} 
              />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Taskboard;
