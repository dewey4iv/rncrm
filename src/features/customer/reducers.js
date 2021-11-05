import { createSlice } from '@reduxjs/toolkit'
import { isEmpty } from '../../utilities/helpers'
import * as status from '../status'

const name = 'customer'

const initialState = {
    list: {
        status: status.PENDING,
        customers: [],
    },
    show: {
        status: status.PENDING,
        customer: null,
        error: null,
    },
    create: {
        status: status.PENDING,
    },
    edit: {
        status: status.PENDING,
    },
    form: {
        fields: {
            first_name: null,
            last_name: null,
            active: null,
            region: null,
        },
    },
}

const reducers = {
    load: (state, { payload }) => {
        state.list.status = status.REQUESTING
    },
    loadResult: (state, { payload }) => {
        state.list.status = status.SUCCESS
        state.list.customers = payload
    },
    loadError: (state, { payload }) => {
        state.list.status = status.ERROR
        state.list.error = payload
    },

    createCustomer: (state) => {
        state.create.status = status.REQUESTING
    },
    createCustomerResult: (state, { payload }) => {
        state.create.status = status.SUCCESS
        state.list.customers = payload
    },
    createCustomerError: (state, { payload }) => {
        state.create.status = status.ERROR
        state.create.error = payload
    },
    createCustomerReset: (state) => {
        state.create = initialState.create
    },

    showCustomer: (state, { payload }) => {
        const customer = customers.find(c => c.id = payload)

        if (!isEmpty(customer)) {
            state.show.status = status.SUCCESS
            state.show.error = null
        } else {
            state.show.status = status.ERROR
            state.show.error = 'Oops! Customer was not found'
        }
    },
    resetShow: (state, { payload }) => {
        state.show = initialState.show
    },

    editCustomer: (state, { payload }) => {
        state.edit.status = status.REQUESTING
    },
    editCustomerResult: (state, { payload }) => {
        state.edit.status = status.SUCCESS
        state.list.customers = payload
    },
    editCustomerError: (state) => {
        state.edit.status = status.ERROR
        state.edit.error = payload
    },
    editCustomerReset: (state) => {
        state.edit = initialState.edit
    },

    setForm: (state, { payload }) => {
        state.form.fields = payload
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },

    resetForm: (state) => {
        state.form.fields = initialState.form.fields
    },

    clear: (state, { payload }) => {
        state.list.customers = []
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    load,
    loadResult,
    loadError,
    createCustomer,
    createCustomerResult,
    createCustomerError,
    createCustomerReset,
    showCustomer,
    showCustomerResult,
    showCustomerError,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerReset,
    setForm,
    setFormField,
    resetForm,
    clear,
} = slice.actions

export default slice.reducer
