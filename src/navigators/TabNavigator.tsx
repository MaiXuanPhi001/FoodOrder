import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '~/screens/home/Home'
import Profile from '~/screens/profile/Profile'

export type TabParamList = {
  Home: { name: string };
  Profile: { age: number };
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} initialParams={{ name: 'Mai Xuan Phi' }} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator