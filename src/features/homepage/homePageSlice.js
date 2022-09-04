import { createSlice } from '@reduxjs/toolkit'

export const homePageSlice = createSlice({
    name: 'homepage',
    initialState: {
        title: "Extruder Calibration",
    },
    reducers: {
        setTitle: (state, payload) => {
            state.title = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTitle } = homePageSlice.actions

export default homePageSlice.reducer