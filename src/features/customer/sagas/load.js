import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import * as services from '../services'

export function* watchLoadCustomer() {
    yield takeLatest(actions.load.toString(), takeLoadCustomer)
}

export function* takeLoadCustomer() {
    try {
        const customers = yield services.load()

        yield delay(1500)

        yield put(actions.loadResult(customers))
    } catch (error) {
        yield put(actions.loadResult([]))
    }
}

