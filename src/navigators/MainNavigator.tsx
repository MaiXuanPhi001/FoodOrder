import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AreaAndTable from '~/screens/areaAndTable/AreaAndTable';
import Order from '~/screens/order/Order';
import { Table } from '~/servers/databases/tables';

export type MainStackParamList = {
    AreaAndTable: undefined
    Order: { table: Table }
}

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'AreaAndTable'} component={AreaAndTable} />
            <Stack.Screen name={'Order'} component={Order} />
        </Stack.Navigator>
    )
}

export default MainNavigator