import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import * as services from '../services'

export function* watchClearCustomers() {
    yield takeLatest(actions.clear.toString(), takeClearCustomers)
}

export function* takeClearCustomers() {
    try {
        yield services.clear()
    } catch (error) {
        yield put(actions.clearError(error.toString()))
    }
}

