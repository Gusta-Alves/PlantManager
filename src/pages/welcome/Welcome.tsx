import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';

import wateringImg from '../../assets/watering.png';
import { style } from './style';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIndentification');
    }
    
    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie {'\n'}
                suas plantas de
                {'\n'} forma fácil
            </Text>

                <Image
                    source={wateringImg}
                    style={style.image}
                    resizeMode={'contain'}
                />

                <Text style={style.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                    sempre que precisar.
            </Text>

                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.8}
                    onPress={handleStart}
                >
                    <Feather style={style.buttonIcon} name="chevron-right" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}