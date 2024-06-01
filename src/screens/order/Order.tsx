import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import Box from '~/atoms/Box'
import { MainStackParamList } from '~/navigators/MainNavigator'
import Header from './Header'
import Section from './Section'

const Order = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'Order'>>()
  const { table } = route.params

  return (
    <Box f={1}>
      <Header />
      <Section />
    </Box>
  )
}

export default Order