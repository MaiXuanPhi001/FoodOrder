import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AreaAndTable from '~/screens/areaAndTable/AreaAndTable';

export type MainStackParamList = {
    AreaAndTable: undefined;
}

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'AreaAndTable'} component={AreaAndTable} />
        </Stack.Navigator>
    )
}

export default MainNavigator