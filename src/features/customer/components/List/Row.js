import React from 'react'
import { View, Text } from 'react-native'

const Row = ({ item }) => {
    return (
        <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
            <Text key={'id'}>ID: {item.id}</Text>
            <Text key={'fn'}>First Name: {item.first_name}</Text>
            <Text key={'ln'}>Last Name: {item.last_name}</Text>
            <Text key={'a'}>Active?: {JSON.stringify(item.active)}</Text>
            <Text key={'r'}>Region: {item.region}</Text>
        </View>
    )
}

export default Row
