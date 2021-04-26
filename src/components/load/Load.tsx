import React from 'react';
import { View } from 'react-native';

import { style } from './style';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load.json';

export function Load(){
    return (
        <View style={style.container}>
            <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={style.animation}
            />
        </View>
    )
}