import { get, set, remove } from '../../utilities/async_storage'

const CUSTOMERS_STORAGE_KEY = 'CUSTOMERS_STORAGE_KEY'

export const load = async () => {
    return await get(CUSTOMERS_STORAGE_KEY)
}

export const save = async (customers) => {
    return await set(CUSTOMERS_STORAGE_KEY, customers)
}

export const clear = async () => {
    return await remove(CUSTOMERS_STORAGE_KEY)
}
