import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../../../components/Button'
import { useListCustomersByRegion } from '../../hooks'
import Row from './Row'
import styles from './styles'

const List = () => {
    const { navigate } = useNavigation()
    const { params } = useRoute()
    const { customers } = useListCustomersByRegion(params.region)

    return (
        <View>
            <Text>Viewing Customers in the {params.region} Region</Text>

            {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button text={'New Customer'} onPress={() => {
                        navigate('New', params)
                    }} />
                </>
            )}
        </View>
    )
}

export default List
