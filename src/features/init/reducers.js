import { createSlice } from '@reduxjs/toolkit'

const name = 'init'

const initialState = {
}

const reducers = {
    initResult: (state, { payload }) => {
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    initResult,
} = slice.actions

export default slice.reducer
