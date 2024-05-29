import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { TabParamList } from '~/navigators/TabNavigator'

const Profile = () => {
  const route = useRoute<RouteProp<TabParamList, 'Profile'>>()

  return (
    <View>
      <Text>Profile</Text>
      <Text>age: {route.params.age}</Text>
    </View>
  )
}

export default Profile