import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { AuthStackParamList } from '~/navigators/AuthNavigator'

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  const route = useRoute<RouteProp<AuthStackParamList>>()
  return (
    <View>
      <Text>Login</Text>
      <Button
        title='Register'
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
      <Button
        title='Login'
        onPress={() => {
          navigation.replace('MainNavigator')
        }}
      />
      <Text>id: {route.params?.id}</Text>
    </View>
  )
}

export default Login