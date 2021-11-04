import React from 'react'
import { View, Text } from 'react-native'
import Form from '../Form'
import { useResetForm, useNewCustomer } from '../../hooks'
import styles from './styles'

const New = () => {
    useResetForm()

    const { status, onSubmit } = useNewCustomer()

    return (
        <View>
            <Form
                onSubmit={onSubmit}
            />
        </View>
    )
}

export default New
