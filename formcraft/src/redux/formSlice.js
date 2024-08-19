import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    address: '',
    phone: '',
    countryCode: '',
    interest: ''
  },
  reducers: {
    setFormData(state, action) {
      return { ...state, ...action.payload };
    },
    loadFormDataFromLocalStorage(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setFormData, loadFormDataFromLocalStorage } = formSlice.actions;
export default formSlice.reducer;
