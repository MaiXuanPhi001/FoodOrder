import { Alarm } from 'iconsax-react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { ResponsiveOrder } from '~/models/responsive'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'

interface Props {
    food: Food
    useResponsive: ResponsiveOrder
    onChooseFood: (food: Food) => void
}

const ItemFood = ({ food, useResponsive, onChooseFood }: Props) => {
    return (
        <TouchOpacity
            onPress={() => onChooseFood(food)}
            borderWidth={1}
            w={useResponsive.widthItem}
            h={useResponsive.heightItem}
            bg={colors.white}
            p={5}
            radius={2}
            borderColor={colors.borderItem}
            ai='center'
            jc='center'
        >
            <Alarm
                color={colors.gray2}
                size={useResponsive.sizeIconItem}
            />
            <Box mt={10} w={'100%'}>
                <Txt textAlign='center' bold size={s(10)}>{food.name}</Txt>
                <Txt textAlign='center' color={colors.gray2} size={s(10)}>{food.price}</Txt>
            </Box>
        </TouchOpacity>
    )
}

export default ItemFood