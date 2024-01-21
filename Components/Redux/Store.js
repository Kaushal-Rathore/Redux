import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './Reducer'
const store = configureStore({
    reducer: { addToCart: counterSlice }
    //REducer value add hogi header mai
});
export default store;