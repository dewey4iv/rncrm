import React from 'react'
import { View, Text } from 'react-native'
import Form from '../Form'
import { useResetForm, useEditCustomer } from '../../hooks'
import styles from './styles'

const Show = () => {
    useResetForm()

    const { status, onSubmit } = useEditCustomer()

    return (
        <View>
            <Text>Just some text...</Text>
            <Form
                onSubmit={onSubmit}
            />
        </View>
    )
}

export default Show
