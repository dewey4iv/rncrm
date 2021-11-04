import { all, put, select, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import * as services from '../services'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    try {
        const customerID = action.payload

        const customers = yield select(state => state.customer.list.customers)
        const fields = yield select(state => state.customer.form.fields)

        const customerIndex = customers.findIndex(c => c.id === customerID)

        customers[customerIndex] = {
            id: customerID,
            ...fields,
        }

        yield services.save(customers)

        yield put(actions.createCustomerResult(customers))
    } catch (error) {
        yield put(actions.createCustomerError(error.toString()))
    }
}

