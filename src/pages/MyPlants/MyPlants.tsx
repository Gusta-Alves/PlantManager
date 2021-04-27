import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../../components/header/Header';
import waterDrop from '../../assets/waterdrop.png';

import { style } from './style';
import { FlatList } from 'react-native-gesture-handler';
import { loadPlant, PlantProps } from '../../interfaces/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/esm/locale';
import { PlantCardSecondary } from '../../components/plantCardSecondary/PlantCardSecondary';

export function MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextRegada, setNextRegada] = useState<string>();

    useEffect(() => {
        async function loadStorageData(){
            const plantsStorage = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStorage[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            )

            setNextRegada(`Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime}`);
            setMyPlants(plantsStorage);
            setLoading(false);
        }

        loadStorageData();
    }, [])

    return (
        <View style={style.container}>
            <Header />

            <View style={style.destaque}>
                <Image 
                    source={waterDrop}
                    style={style.destaqueImagem}
                />
                <Text style={style.destaqueText}>
                    {nextRegada}
                </Text>
            </View>

            <View style={style.plants}>
                <Text style={style.plantsTitle}>
                    Proximas regadas:
                </Text>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardSecondary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}