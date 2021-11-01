import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../../../components/Button'
import styles from './style'

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>

            <Button
                text={'Click to Continue...'}
            />
        </View>
    )
}

export default Welcome
