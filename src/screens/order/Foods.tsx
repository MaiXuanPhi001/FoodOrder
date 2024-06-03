import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useAppSelector } from '~/hooks/redux'
import { ResponsiveOrder } from '~/models/responsive'
import { foodsMainSelector } from '~/reduxs/selectors/mainSelector'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'
import ItemFood from './ItemFood'
import ModalFoodOption from './ModalFoodOption'
import { getFoodDetailApi } from '~/servers/databases/api/orderApi'

interface Props {
  useResponsive: ResponsiveOrder
}

const Foods = ({ useResponsive }: Props) => {
  const [foodOption, setFoodOption] = useState(undefined)
  const [isShowModalFoodOption, setShowModalFoodOption] = useState<boolean>(false)

  const foods = useAppSelector(foodsMainSelector)

  // Event khi user nhấn vào ItemFood
  const handleChooseFood = (food: Food) => {
    setShowModalFoodOption(true)
    const foodOptionService = getFoodDetailApi(food)
    setFoodOption(foodOptionService)
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
      <ModalFoodOption
        foodOption={foodOption}
        isShow={isShowModalFoodOption}
        setShow={setShowModalFoodOption}
      />
    </Box>
  )
}

export default Foods