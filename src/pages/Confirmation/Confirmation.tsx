import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '../../components/button/Button';

import { style } from './style';

export function Confirmation() {
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    😄
                </Text>

                <Text style={style.title}>
                    Prontinho
                </Text>
                <Text style={style.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
                <View style={style.footer}>
                    <Button title="Começar" onPress={handleMoveOn} />
                </View>
            </View>
        </SafeAreaView>
    )
}