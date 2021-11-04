import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import Page from '../../components/Page'
import Button from '../../components/Button'

const ListRegionsScreen = () => {
    const { navigate } = useNavigation()

    return (
        <Page>
            <Button text={'Create Customer'} onPress={() => navigate('New')} />
            <Text>List of Regions</Text>
            <Text>Select a Region:</Text>
            <Button
                text={'South West'}
                onPress={() => navigate('ListByRegion', { region: 'South West' })}
            />
            <Button
                text={'North West'}
                onPress={() => navigate('ListByRegion', { region: 'North West' })}
            />
            <Button
                text={'South East'}
                onPress={() => navigate('ListByRegion', { region: 'South East' })}
            />
            <Button
                text={'North East'}
                onPress={() => navigate('ListByRegion', { region: 'North East' })}
            />
            <Button
                text={'Mid West'}
                onPress={() => navigate('ListByRegion', { region: 'Mid West' })}
            />
        </Page>
    )
}

export default ListRegionsScreen
