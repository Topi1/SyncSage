import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget, updateWidget, setLayout } from '/src/features/widgetSlice';
import Widget from './Widget';
import NoteWidget from './NoteWidget';
import { useTasks } from './TaskContext';
import { useTranslation } from 'react-i18next';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "../CSS/Dashboard.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Sports = () => {
  const dispatch = useDispatch();
  const { layout, widgets } = useSelector((state) => state.widgets);
  const { t } = useTranslation();
  const { tasks: contextTasks } = useTasks();

  const onLayoutChange = (newLayout) => {
    dispatch(setLayout(newLayout));
  };

  const addWidgetHandler = () => {
    const newId = `widget_${Date.now()}`;
    const newLayout = { i: newId, x: 0, y: Infinity, w: 2, h: 2 };
    const newWidget = { id: newId, type: 'widget', title: `Widget ${Date.now()}`, content: `Content ${Date.now()}` };
    dispatch(addWidget({ layout: newLayout, widget: newWidget }));
  };

  const addNoteWidgetHandler = () => {
    const newId = `note_${Date.now()}`;
    const newLayout = { i: newId, x: 0, y: Infinity, w: 2, h: 2 };
    const newNoteWidget = { id: newId, type: 'note', content: '' };
    dispatch(addWidget({ layout: newLayout, widget: newNoteWidget }));
  };

  const removeWidgetHandler = (id) => {
    dispatch(removeWidget(id));
  };

  const saveNote = (id, content) => {
    dispatch(updateWidget({ id, content }));
  };

  const getPieChartData = () => {
    const labels = contextTasks.map((task) => task.task);
    const data = contextTasks.map((task) => task.time);
    return {
      labels,
      datasets: [{
        data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      }],
    };
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
          <h2>{t("sports")}</h2>
        </section>
        <section className="dashRight">
          <button onClick={addWidgetHandler}>Add Widget</button>
          <button onClick={addNoteWidgetHandler}>Add Note</button>
        </section>
      </section>
      <div className='dashMain'>
        <ResponsiveGridLayout
          {...responsiveProps}
          layout={layout}
          onLayoutChange={onLayoutChange}
          draggableHandle=".widget-header"
        >
          {widgets.map((widget) => (
            <div key={widget.id} data-grid={layout.find((l) => l.i === widget.id)}>
              {widget.type === 'note' ? (
                <NoteWidget
                  id={widget.id}
                  content={widget.content}
                  removeWidget={removeWidgetHandler}
                  saveNote={saveNote}
                />
              ) : (
                <Widget
                  id={widget.id}
                  title={widget.title}
                  content={widget.content}
                  removeWidget={removeWidgetHandler}
                />
              )}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Sports;
