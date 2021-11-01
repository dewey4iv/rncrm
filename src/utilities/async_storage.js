import AsyncStorage from '@react-native-async-storage/async-storage'

export const set = async (key) => {
    return await AsyncStorage.setItem(key, value)
}

export const get = async (key) => {
    return await AsyncStorage.getItem(key)
}

export const remove = async (key) => {
    return await AsyncStorage.removeItem(key)
}

export const clear = async () => {
    return await AsyncStorage.clear()
}
