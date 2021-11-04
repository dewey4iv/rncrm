import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/Welcome'
import ListRegionsScreen from '../screens/customers/ListRegions'
import ListByRegionScreen from '../screens/customers/ListByRegion'
import ShowScreen from '../screens/customers/Show'
import NewScreen from '../screens/customers/New'
import EditScreen from '../screens/customers/Edit'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='ListRegions'
                    component={ListRegionsScreen}
                />
                <Stack.Screen
                    name='ListByRegion'
                    component={ListByRegionScreen}
                />
                <Stack.Screen
                    name='Show'
                    component={ShowScreen}
                />
                <Stack.Screen
                    name='New'
                    component={NewScreen}
                />
                <Stack.Screen
                    name='Edit'
                    component={EditScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
