import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as states from '../../../status'
import Button from '../../../../components/Button'
import Loading from '../../../../components/Loading'
import { useLoadCustomers } from '../../../../features/customer/hooks'
import styles from './style'

const Welcome = () => {
    const { navigate, reset } = useNavigation()
    const { status, clearCustomers } = useLoadCustomers()

    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>

            {status === states.SUCCESS ? (
                <Button
                    text={'Click to Continue...'}
                    onPress={() => {
                        reset({
                            index: 1,
                            routes: [
                                { name: 'ListRegions' },
                            ],
                        })
                    }}
                />
            ) : (
                <>
                    <Loading />
                </>
            )}

            <Button
                text={'Clear Storage...'}
                onPress={() => clearCustomers()}
            />
        </View>
    )
}

export default Welcome
