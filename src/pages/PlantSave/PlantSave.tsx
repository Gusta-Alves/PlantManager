import React, { useState } from 'react';
import { Text, View, Image, Platform, Alert, TouchableOpacity } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { style } from './style';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/button/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { loadPlant, PlantProps, savePlant } from '../../interfaces/storage';

interface Params {
    plant: PlantProps
}

export function PlantSave() {
    const [selectDateTime, setSelectDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    const route = useRoute();
    const { plant } = route.params as Params;
    const navigation = useNavigation();

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰');
        }

        if (dateTime) setSelectDateTime(dateTime);
    }

    function openAndroidPicker() {
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
        try{
            await savePlant({
                ...plant,
                dateTimeNotification: selectDateTime
            });
            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
                buttonTitle: 'Muito Obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants'
            });
        }
        catch{
            return Alert.alert('Não foi possível salvar 😥');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />

                <Text style={style.plantName}>
                    {plant.name}
                </Text>
                <Text style={style.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={style.controller}>
                <View style={style.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={style.tipImage}
                    />
                    <Text style={style.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={style.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
            </Text>

                {showDatePicker && (
                    <DateTimePicker
                        value={selectDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}
                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity onPress={openAndroidPicker} style={style.dateTimeButton}>
                            <Text style={style.dateTimeText}>
                                {`Mudar ${format(selectDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                <Button title="Cadastrar planta" onPress={handleSave} />

            </View>
        </View >
    )
}