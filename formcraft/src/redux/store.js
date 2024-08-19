import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import clientSlice from './clientSlice'; // Assuming you have a client slice

const store = configureStore({
  reducer: {
    form: formSlice,
    client: clientSlice,
  },
});

export default store;
