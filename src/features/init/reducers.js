import { createSlice } from '@reduxjs/toolkit'
import * as status from '../status'

const name = 'init'

const initialState = {
    status: status.PENDING,
}

const reducers = {
    init: (state) => {
    },
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
