import React from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Routes from './routes'

export default function app(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return <Routes />
}


