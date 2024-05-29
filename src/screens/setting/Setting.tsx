import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '~/hooks/redux'
import { isLoginUserSelector } from '~/reduxs/selectors/userSelector'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '~/navigators/MainNavigator'
import { TabParamList } from '~/navigators/TabNavigator'

const Setting = () => {
  const isLogin = useAppSelector(isLoginUserSelector)
  const navigation = useNavigation<
    NativeStackNavigationProp<MainStackParamList & TabParamList>
  >()

  return (
    <View>
      <Text>Setting</Text>
      <Button
        title='Detail'
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title='Profile'
        onPress={() => navigation.navigate('Profile', { age: 22 })}
      />
      <Text>login chua: {isLogin + ''}</Text>
    </View>
  )
}

export default Setting