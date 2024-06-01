import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Alarm } from 'iconsax-react-native'
import React, { useEffect } from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { storages } from '~/constants/storages'
import { useAppDispatch } from '~/hooks/redux'
import { RootStackParamList } from '~/navigators/Navigation'
import { setFirstData } from '~/reduxs/slices/mainSlice'
import { Area, areas } from '~/servers/databases/areas'
import { Food, foods } from '~/servers/databases/foods'
import { Table, tables } from '~/servers/databases/tables'
import { colors } from '~/themes/colors'
import { delay } from '~/utils/promise'

const Hello = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    handleSetAreas()
    handleSetFoods()
    handleGetData()
  }, [])

  const handleGetData = async () => {
    // Lấy danh sách khu vực đã lưu trong local
    const areasJSON = await AsyncStorage.getItem(storages.areas) || '[]'
    const areas: Area[] = JSON.parse(areasJSON)
    // Lấy danh sách bàn
    const tablesJSON = await AsyncStorage.getItem(storages.tables) || '[]'
    const tables: Table[] = JSON.parse(tablesJSON)
    // Lấy danh sách thức ăn
    const foodsJSON = await AsyncStorage.getItem(storages.foods) || '[]'
    const foods: Food[] = JSON.parse(foodsJSON)
    // Set data areas & table & foods trong redux slice 
    dispatch(setFirstData({ areas, tables, foods }))
    // Sau 1 giây chuyển sang màn hình MainNavigator
    await delay(1000)
    navigation.replace('MainNavigator')
  }

  const handleSetTable = async () => {
    await AsyncStorage.setItem(storages.tables, JSON.stringify(tables))
  }

  const handleSetAreas = async () => {
    await AsyncStorage.setItem(storages.areas, JSON.stringify(areas))
  }

  const handleSetFoods = async () => {
    await AsyncStorage.setItem(storages.foods, JSON.stringify(foods))
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