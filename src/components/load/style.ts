import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    },
});