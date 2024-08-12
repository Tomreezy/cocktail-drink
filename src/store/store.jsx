import {configureStore} from "@reduxjs/toolkit"

import { drinksApi } from "../services"
import { setupListeners } from "@reduxjs/toolkit/query"


const store = configureStore({
    reducer:{
        [drinksApi.reducerPath]:drinksApi.reducer
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(drinksApi.middleware)
})

export default store