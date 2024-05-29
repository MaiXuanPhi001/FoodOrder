import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Alarm } from 'iconsax-react-native'
import React, { useEffect } from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { RootStackParamList } from '~/navigators/Navigation'
import { colors } from '~/themes/colors'

const Hello = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Sau giây chuyển sang màn hình MainNavigator
      navigation.navigate('MainNavigator')
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Box
      f={1}
      bg={colors.background}
      center
    >
      <Alarm color={colors.white} size={40} />
      <Txt bold size={25} mt={10} color={colors.white}>Food Order</Txt>
    </Box>
  )
}

export default Hello