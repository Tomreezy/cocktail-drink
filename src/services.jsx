// services/drinksApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const drinksApi = createApi({
  reducerPath: 'drinksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php' }),
  endpoints: (builder) => ({
    getByCategory: builder.query({
      query: () => `?c=Ordinary_Drink`,
    }),
    getByAlcoholic: builder.query({
      query: (alcoholic) => `?a=Alcoholic`,
    }),
    getAllDrinks:builder.query({
      query:()=> `?a=Alcoholic&c=Ordinary_Drink`
    })
  }),
});

// Export hooks for usage in functional components
export const { useGetByCategoryQuery, useGetByAlcoholicQuery, useGetAllDrinksQuery } = drinksApi;

