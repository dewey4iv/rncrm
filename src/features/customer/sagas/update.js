import { all, put, select, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import * as services from '../services'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    try {
        const customerID = action.payload

        const currentCustomers = yield select(state => state.customer.list.customers)
        const fields = yield select(state => state.customer.form.fields)

        const customers = currentCustomers.map(c => {
            if (c.id !== customerID) return c

            return fields
        })

        yield services.save(customers)

        yield put(actions.editCustomerResult(customers))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}

