import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator} from 'react-native';
import { EnvironmentButton } from '../../components/environmentButton/EnvironmentButton';
import { Header } from '../../components/header/Header';
import { Load } from '../../components/load/Load';
import { PlantCardPrimary } from '../../components/plantCardPrimary/PlantCardPrimary';
import { PlantProps } from '../../interfaces/storage';
import api from '../../services/api';
import colors from '../../styles/colors';

import { style } from './style';

interface EnvironmentProps {
    key: string;
    title: string;
}

export function PlantSelect() {
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [load, setLoad] = useState(true);

    const navigation = useNavigation();

    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);

    function handlerEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment);

        if (environment === 'all')
            return setfilteredPlants(plants);

        const filtered = plants.filter((plant: PlantProps) => plant.environments.includes(environment));

        setfilteredPlants(filtered);
    }

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        if (!data)
            return setLoad(true);
        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data]);
            setfilteredPlants(oldValue => [...oldValue, ...data]);
        }
        else {
            setPlants(data);
            setfilteredPlants(data);
        }
        setLoad(false);
        setLoadMore(false);
    }

    function handleFetchMore(distance: number){
        if(distance < 1)
            return;

        setLoadMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', { plant });
    }

    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }
        fetchEnvironment();
    }, [])

    useEffect(() => {        
        fetchPlants();
    }, [])

    if (load) return (
        <Load />
    )
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header />

                <Text style={style.title}>
                    Em qual ambiente
            </Text>
                <Text style={style.subtitle}>
                    você quer colocar sua planta?
            </Text>
            </View>

            <View>
                <FlatList
                    data={environments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnvironmentButton title={item.title} active={item.key === environmentSelected} onPress={() => handlerEnvironmentSelected(item.key)} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.environmentList} />
            </View>
            <View style={style.plants}>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => {
                        handleFetchMore(distanceFromEnd);
                    }}
                    ListFooterComponent={
                        loadMore
                        ? <ActivityIndicator color={colors.green} />
                        : <></>
                    }
                />
            </View>
        </View>
    )
}