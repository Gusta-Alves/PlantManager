import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
});