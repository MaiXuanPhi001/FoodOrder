import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Register</Text>
      <Button
        title='Register'
        onPress={() => {
          navigation.replace('MainNavigator')
        }}
      />
    </View>
  )
}

export default Register