import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices.js/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { getProductsApi } from './slices.js/dynamicDataSlice';
export const store = configureStore({
  reducer: {
    counterrr:counterReducer,
    [getProductsApi.reducerPath]: getProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
})

setupListeners(store.dispatch);

