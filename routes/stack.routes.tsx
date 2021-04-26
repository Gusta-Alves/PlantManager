import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../src/styles/colors';

import { Welcome } from '../src/pages/welcome/Welcome';
import { UserIndentification } from '../src/pages/UserIndentification/UserIndentification';
import { Confirmation } from '../src/pages/Confirmation/Confirmation';
import { PlantSelect } from '../src/pages/PlantSelect/PlantSelect';
import { PlantSave } from '../src/pages/PlantSave/PlantSave';



const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}>

        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserIndentification"
            component={UserIndentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />

        <stackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />

    </stackRoutes.Navigator>
)
export default AppRoutes;