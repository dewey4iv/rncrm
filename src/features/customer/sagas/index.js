import { all } from 'redux-saga/effects'
import { watchClearCustomers } from './clear'
import { watchLoadCustomer } from './load'
import { watchCreateCustomer } from './create'
import { watchEditCustomer } from './update'

export default function* customer() {
    yield all([
        watchClearCustomers(),
        watchLoadCustomer(),
        watchCreateCustomer(),
        watchEditCustomer(),
    ])
}
