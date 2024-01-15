
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getProductsApi = createApi({
  reducerPath: 'allproductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
  }),
  
})


export const { useGetProductsQuery} = getProductsApi;