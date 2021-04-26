import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { style } from './style';
import perfil from '../../assets/perfil.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '')
        }

        loadUserName();
    }, [userName])

    return (
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>{userName}</Text>
            </View>

            <Image source={perfil} style={style.image} />
        </View>
    )
}