import { Alarm } from 'iconsax-react-native'
import React from 'react'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { ResponsiveArea } from '~/models/responsive'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'

interface Props {
    food: Food
    useResponsive: ResponsiveArea
}

const ItemFood = ({ food, useResponsive }: Props) => {
    return (
        <TouchOpacity
            borderWidth={1}
            w={useResponsive.widthItem}
            h={useResponsive.widthItem}
            bg={colors.white}
            radius={2}
            borderColor={colors.borderItem}
            ai='center'
            jc='center'
        >
            <Alarm color={colors.gray2} />
            <Txt textAlign='center' color={colors.gray2}>{food.name}</Txt>
        </TouchOpacity>
    )
}

export default ItemFood