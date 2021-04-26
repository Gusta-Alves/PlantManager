import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Alert } from 'react-native';
import { Button } from '../../components/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { style } from './style';

export function UserIndentification() {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [name, setName] = useState<string>()
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name)
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit() {
        if (!name) return Alert.alert('Me diz como chamar você 🥺');

        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation');
        }
        catch{
            Alert.alert('Não foi possivel salvar o seu nome 😥');
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.content}>

                        <View style={style.form}>
                            <View style={style.header}>
                                <Text style={style.emoji}>
                                    {isFilled ? '😄' : '😃'}
                                </Text>

                                <Text style={style.title}>
                                    Como podemos {'\n'}
                                chamar você?
                    </Text>
                            </View>

                            <TextInput
                                style={[
                                    style.input,
                                    (isFocused || isFilled) && style.focusInput
                                ]}
                                placeholder="Digite seu nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={style.footer}>
                                <Button title='Confirmar' onPress={handleSubmit} />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}