import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useAppSelector } from '~/hooks/redux'
import { useResponsiveOrder } from '~/hooks/responsive'
import { foodsMainSelector } from '~/reduxs/selectors/mainSelector'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'
import ItemFood from './ItemFood'
import { ResponsiveArea, ResponsiveOrder } from '~/models/responsive'

interface Props {
  useResponsive: ResponsiveOrder
}

const Foods = ({ useResponsive }: Props) => {
  const foods = useAppSelector(foodsMainSelector)

  return (
    <Box w={useResponsive.widthFoods} h={useResponsive.heighFoods} bg={colors.gray}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          row
          wrap
          p={useResponsive.padding}
          gap={useResponsive.gap}
        >
          {foods.map((food: Food) =>
            <ItemFood
              key={food._id}
              food={food}
              useResponsive={useResponsive}
            />
          )}
        </Box>
      </ScrollView>
    </Box>
  )
}

export default Foods