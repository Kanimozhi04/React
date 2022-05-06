import { configureStore } from '@reduxjs/toolkit';
import changeReduce from './Slice';
export const store = configureStore({
  reducer: {
    data: changeReduce
    , 
  },
});