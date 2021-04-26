import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { style } from './style';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({title, active = false, ...rest}: EnvironmentButtonProps){
    return(
        <RectButton style={[style.container, active && style.containerActive]} {...rest} >
            <Text style={[style.text, active && style.textActive]}>
                { title }
            </Text>
        </RectButton>
    )
}