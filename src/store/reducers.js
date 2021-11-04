import { combineReducers } from 'redux'
import init from '../features/init/reducers'
import customer from '../features/customer/reducers'

const rootReducer = combineReducers({
    init,
    customer,
})

export default rootReducer

