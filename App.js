import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/navigation'
import initializeStore from './src/store'

const store = initializeStore()

export const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export default App

