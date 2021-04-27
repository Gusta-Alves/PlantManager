import React from 'react';
import { Text, View } from 'react-native';

import { style } from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'

interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string,
        hour: string
    }
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton 
            style={style.container}
            { ...rest }
        >
            <SvgFromUri uri={data.photo} width={50} height={50} />
            
            <Text style={style.title}>
                { data.name }
            </Text>
            <View style={style.detalhes}>
                <Text style={style.timeLabel}>
                    Regar às
                </Text>
                <Text style={style.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}