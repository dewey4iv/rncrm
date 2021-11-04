import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import * as actions from './reducers'

export const useLoadCustomers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.load())
    }, [])

    const status = useSelector(state => state.customer.list.status)

    return {
        status,
        clearCustomers: () => dispatch(actions.clear())
    }
}

export const useListCustomersByRegion = (region) => {
    const dispatch = useDispatch()


    const allCustomers = useSelector(state => state.customer.list.customers)

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const filteredCustomers = allCustomers.filter(c => c.region === region)

        setCustomers(filteredCustomers)
    }, [region, allCustomers])

    return {
        customers,
    }
}

export const useNewCustomer = () => {
    const dispatch = useDispatch()

    return {
        onSubmit: () => dispatch(actions.createCustomer())
    }
}

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch action to set fields to be the matching customer
    }, [])

    return {
        onSubmit: () => dispatch(actions.editCustomer())
    }
}

export const useResetForm = () => {
    const dispatch = useDispatch()

    const isFocused = useIsFocused()

    useEffect(() => {
        if (!isFocused) dispatch(actions.resetForm())

        return () => dispatch(actions.resetForm())
    }, [isFocused])

}

export const useUpdateFields = () => {
    const dispatch = useDispatch()

    const fields = useSelector(state => state.customer.form.fields)

    return {
        fields,
        setFormField: (field) => (value) => dispatch(actions.setFormField({ field, value })),
    }
}
