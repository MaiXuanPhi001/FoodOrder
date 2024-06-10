import React from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { colors } from '~/themes/colors'

const ItemFoodsOrder = ({ food }) => {
    console.log('food: ', JSON.stringify(food))

    return (
        <Box p={5} row borderBottomWidth={1} borderColor={colors.gray}>
            <Box p={3} mr={5} bg={colors.background} radius={5}>
                <Txt size={10} color={colors.white}>{food.amount}</Txt>
            </Box>
            <Box f={1}>
                <Txt size={12} bold>{food.name}</Txt>
                <Txt size={12} color={colors.gray2}>{food.name}</Txt>
            </Box>
            {food.options.map(option => {
                const ingredients = option.ingredients
                ingredients.map((ingredient) => {
                    const food = ingredient.food
                    return (
                        <ItemFoodsOrder food={food} />
                    )
                })
            })}
        </Box>
    )
}

export default ItemFoodsOrder