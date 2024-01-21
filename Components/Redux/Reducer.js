import { ADD_T0_CART } from "./Contant";
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: ADD_T0_CART,
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state,action) => {
      // state.value = action.payload
      state.value.push(action.payload);
    },

  }
});
export default counterSlice.reducer;
export const {addToCart}=counterSlice.actions;