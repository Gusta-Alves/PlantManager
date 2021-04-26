import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const style = StyleSheet.create({
    container: {
      flex: 1, 
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    content: {
      flex: 1,
      width: '100%',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 54,
      alignItems: 'center',
      width: '100%'
    },
    header: {
      alignItems: 'center'
    },
    emoji: {
      fontSize: 44
    },
    input: {
      borderBottomWidth: 1,
      borderColor: colors.gray,
      color: colors.heading,
      fontSize: 18,
      width: '100%',
      padding: 10,
      textAlign: 'center'
    },
    focusInput: {
      borderColor: colors.green
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 32,
      marginTop: 20
    },
    footer: {
      marginTop: 40,
      width: '100%',
      paddingHorizontal: 20
    }
});