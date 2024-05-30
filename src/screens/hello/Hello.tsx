import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Alarm } from 'iconsax-react-native'
import React, { useEffect } from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { RootStackParamList } from '~/navigators/Navigation'
import { colors } from '~/themes/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { storages } from '~/constants/storages'
import { delay } from '~/utils/promise'
import { useAppDispatch } from '~/hooks/redux'
import { setAreas } from '~/reduxs/slices/mainSlice'
import { Area } from '~/servers/databases/areas'
import { Table, tables } from '~/servers/databases/tables'

const Hello = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    handleGetData()
  }, [])

  const handleGetData = async () => {
    // Lấy danh sách khu vực đã lưu trong local
    const areasJSON = await AsyncStorage.getItem(storages.areas) || '[]'
    const areas: Area[] = JSON.parse(areasJSON)
    // Lấy danh sách bàn
    const tablesJSON = await AsyncStorage.getItem(storages.tables) || '[]'
    const tables: Table[] = JSON.parse(tablesJSON)
    console.log('tables: ', tables)
    // Set data cho areas trong redux slice 
    dispatch(setAreas({ areas, tables }))
    // Sau 1 giây chuyển sang màn hình MainNavigator
    await delay(1000)
    navigation.navigate('MainNavigator')
  }

  const handleSetTable = async () => {
    await AsyncStorage.setItem(storages.tables, JSON.stringify(tables))
  }

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