import { RouteProp, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '~/screens/auth/login/Login';
import Register from '~/screens/auth/register/Register';
import { RootStackParamList } from './Navigation';

export type AuthStackParamList = {
  Login: { id: number },
  Register: undefined,
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Login'}
        component={Login}
        initialParams={{ id: route.params?.id }}
      />
      <Stack.Screen
        name={'Register'}
        component={Register}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator