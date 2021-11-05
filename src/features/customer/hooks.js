import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import * as states from '../status'
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

    const { navigate } = useNavigation()

    const status = useSelector(state => state.customer.create.status)

    useEffect(() => {
        if (status === states.SUCCESS) {
            dispatch(actions.createCustomerReset())
            navigate('ListRegions')
        }
    }, [status])

    return {
        onSubmit: () => dispatch(actions.createCustomer())
    }
}

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch()

    const { navigate } = useNavigation()

    const status = useSelector(state => state.customer.edit.status)
    const customers = useSelector(state => state.customer.list.customers)

    useEffect(() => {
        const customer = customers.find(c => c.id === customerID)

        dispatch(actions.setForm(customer))
    }, [customerID])

    useEffect(() => {
        if (status === states.SUCCESS) {
            dispatch(actions.editCustomerReset())
            navigate('ListRegions')
        }
    }, [status])

    return {
        onSubmit: () => dispatch(actions.editCustomer(customerID))
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
