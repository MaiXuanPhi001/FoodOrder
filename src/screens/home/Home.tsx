import { View, Text, Button } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { TabParamList } from '~/navigators/TabNavigator'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { MainStackParamList } from '~/navigators/MainNavigator'

const Home = () => {
  const navigation = useNavigation<
    BottomTabNavigationProp<TabParamList & MainStackParamList>
  >()
  const route = useRoute<RouteProp<TabParamList, 'Home'>>()

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Setting'
        onPress={() => navigation.navigate('Setting')}
      />
      <Button
        title='Profile'
        onPress={() => navigation.navigate('Profile', { age: 22 })}
      />
      <Text>Ten tai khoan: {route.params.name}</Text>
    </View>
  )
}

export default Home