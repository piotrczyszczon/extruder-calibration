import {createSlice} from '@reduxjs/toolkit'
import {calculateNewEStepNumber} from 'features/calculator/formula/calculateNewEStepNumber'

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        measuredLength: '',
        currentEStepNumber: '',
        newEStepNumber: '',
    },
    reducers: {
        measuredLengthChanged: (state, payload) => {
            state.measuredLength = payload.payload
            state.newEStepNumber = calculateNewEStepNumber(state.measuredLength, state.currentEStepNumber)
        },
        currentEStepNumberChanged: (state, payload) => {
            state.currentEStepNumber = payload.payload
            state.newEStepNumber = calculateNewEStepNumber(state.measuredLength, state.currentEStepNumber)
        }
    },
})

export const {measuredLengthChanged, currentEStepNumberChanged} = calculatorSlice.actions

export default calculatorSlice.reducer