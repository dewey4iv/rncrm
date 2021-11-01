import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import styleFn from './style'

const Button = ({ disabled, reverse, onPress, text }) => {
    const styles = styleFn(disabled, reverse)

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
 export default Button
