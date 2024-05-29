import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Hello from '../screens/hello/Hello';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export type RootStackParamList = {
    Hello: undefined;
    AuthNavigator: { id: number };
    MainNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Hello'} component={Hello} />
                <Stack.Screen name={'AuthNavigator'} component={AuthNavigator} />
                <Stack.Screen name={'MainNavigator'} component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation