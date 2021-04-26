import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    },
});