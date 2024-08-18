import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  layout: JSON.parse(localStorage.getItem('layout')) || [],
  widgets: JSON.parse(localStorage.getItem('widgets')) || [],
};


const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
      addWidget: (state, action) => {
        state.layout.push(action.payload.layout);
        state.widgets.push(action.payload.widget);
        localStorage.setItem('layout', JSON.stringify(state.layout));
        localStorage.setItem('widgets', JSON.stringify(state.widgets));
      },

      removeWidget: (state, action) => {
        state.layout = state.layout.filter((l) => l.i !== action.payload);
        state.widgets = state.widgets.filter((w) => w.id !== action.payload);
        localStorage.setItem('layout', JSON.stringify(state.layout));
        localStorage.setItem('widgets', JSON.stringify(state.widgets));
      },

      updateWidget: (state, action) => {
        const { id, content } = action.payload;
        const widget = state.widgets.find((w) => w.id === id);
        if (widget) {
          widget.content = content;
          localStorage.setItem('widgets', JSON.stringify(state.widgets));
        }
      },

      setLayout: (state, action) => {
        state.layout = action.payload;
        localStorage.setItem('layout', JSON.stringify(state.layout));
      },
    },
  });

export const { addWidget, removeWidget, updateWidget, setLayout } = widgetsSlice.actions;
export default widgetsSlice.reducer;