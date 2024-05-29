import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Area from '~/screens/area/Area';

export type MainStackParamList = {
    Area: undefined;
}

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Area'} component={Area} />
        </Stack.Navigator>
    )
}

export default MainNavigator