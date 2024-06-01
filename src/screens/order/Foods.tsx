import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useAppSelector } from '~/hooks/redux'
import { useResponsiveOrder } from '~/hooks/responsive'
import { foodsMainSelector } from '~/reduxs/selectors/mainSelector'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'
import ItemFood from './ItemFood'

const Foods = () => {
  const foods = useAppSelector(foodsMainSelector)
  console.log('food: ', foods)
  const useResponsive = useResponsiveOrder()

  return (
    <Box f={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          row
          wrap
          bg={colors.gray}
          p={useResponsive.padding}
          gap={useResponsive.gap}
          w={useResponsive.widthListItem}
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