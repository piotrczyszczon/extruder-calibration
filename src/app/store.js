import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from 'features/calculator/calculatorSlice'
import homepageReducer from 'features/homepage/homePageSlice'

export default configureStore({
    reducer: {
        calculator: calculatorReducer,
        homepage: homepageReducer
    },
})