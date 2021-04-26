import React from 'react';
import { Text } from 'react-native';

import { style } from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'

interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string
    }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
    return(
        <RectButton 
            style={style.container}
            { ...rest }
        >
            <SvgFromUri uri={data.photo} width={70} height={70} />
            <Text style={style.text}>
                { data.name }
            </Text>
        </RectButton>
    )
}