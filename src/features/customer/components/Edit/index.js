import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Form from '../Form'
import { useResetForm, useEditCustomer } from '../../hooks'
import styles from './styles'

const Show = () => {
    useResetForm()

    const { params } = useRoute()

    const { status, onSubmit } = useEditCustomer(params.customerID)

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
