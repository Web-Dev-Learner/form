import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import clientSlice from './clientSlice'; 

const store = configureStore({
  reducer: {
    form: formSlice,
    client: clientSlice,
  },
});

export default store;
