import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { style } from './style';

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity style={style.container} activeOpacity={0.8} {...rest}>
            <Text style={style.text}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}