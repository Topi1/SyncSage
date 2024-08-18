
import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './features/widgetSlice'; 

const store = configureStore({
  reducer: {
    widgets: widgetsReducer, 
    
  },
});

export default store;
