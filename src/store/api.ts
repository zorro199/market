import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/product.types";
// import { REHYDRATE } from 'redux-persist'
// import type { Action } from '@reduxjs/toolkit'

const API_URL = "https://fakestoreapi.com/products"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getProduct: builder.query<IProduct[], null>({
            query: () => '',
            providesTags:() => [{
                type: 'Product'
            }]
        })
    })
})

export const { useGetProductQuery } = api