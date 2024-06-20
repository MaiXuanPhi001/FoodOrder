import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { ResponsiveOrder } from '~/models/responsive'
import { foodOptionMainSelector, foodsMainSelector } from '~/reduxs/selectors/mainSelector'
import { addFoodToOrderPending, setFoodOption } from '~/reduxs/slices/mainSlice'
import { getFoodDetailApi } from '~/servers/databases/api/orderApi'
import { colors } from '~/themes/colors'
import ItemFood from './ItemFood'
import ModalFoodOption from './ModalFoodOption'
import { Food } from '~/models/database'

interface Props {
  useResponsive: ResponsiveOrder
}

const Foods = ({ useResponsive }: Props) => {
  const dispatch = useAppDispatch()

  const foods = useAppSelector(foodsMainSelector)
  const foodOption = useAppSelector(foodOptionMainSelector)

  // Event khi user nhấn vào ItemFood
  const handleChooseFood = (food: Food) => {
    const foodOptionService = getFoodDetailApi(food)
    console.log('foodOptionService: ', JSON.stringify(foodOptionService))
    if (foodOptionService?.options?.length > 0) {
      dispatch(setFoodOption(foodOptionService))
    } else {
      dispatch(addFoodToOrderPending(foodOptionService))
    }
  }

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
              onChooseFood={handleChooseFood}
            />
          )}
        </Box>
      </ScrollView>
      {foodOption &&
        <ModalFoodOption
          dispatch={dispatch}
          foodOption={foodOption}
          isShow={foodOption !== null}
        />
      }
    </Box>
  )
}

export default Foods