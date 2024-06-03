import React from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { Food } from '~/servers/databases/foods'
import { colors } from '~/themes/colors'

interface Props {
    food: Food
}

const ItemFoodsOrder = ({ food }: Props) => {
    return (
        <Box p={5} row borderBottomWidth={1} borderColor={colors.gray}>
            <Box p={3} mr={5} bg={colors.background} radius={5}>
                <Txt size={10} color={colors.white}>2.0</Txt>
            </Box>
            <Box f={1}>
                <Txt size={12} bold>{food.name}</Txt>
                <Txt size={12} color={colors.gray2}>{'Cấp 2'}</Txt>
            </Box>
        </Box>
    )
}

export default ItemFoodsOrder