import { StyleSheet } from 'react-native'

const styleFn = (disabled, reverse) => {
    let color, backgroundColor;

    if (reverse) {
        color = 'white'
        backgroundColor = 'black'
    } else {
        color = 'black'
        backgroundColor = 'transparent'
    }

    return StyleSheet.create({
        button: {
            backgroundColor,
            borderWidth: 1,
            borderRadius: 9.34,
            paddingHorizontal: 30,
            paddingVertical: 10,
            margin: '2.5%',
        },
        text: {
            color,
            fontFamily: 'Avenir',
            alignSelf: 'center',
            textAlign: 'center',
        },
    }
)}

export default styleFn
