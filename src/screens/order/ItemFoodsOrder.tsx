import React from 'react'
import Box from '~/atoms/Box'
import Txt from '~/atoms/Txt'
import { colors } from '~/themes/colors'

const ItemFoodsOrder = ({ food }) => {
    if (food.amount < 1) {
        return null
    }

    return (
        <Box>
            <Box row borderBottomWidth={1} w={'100%'}>
                <Box p={3} radius={2} as='center' bg={colors.background}>
                    <Txt size={10} bold color={colors.white}>{food.amount}</Txt>
                </Box>
                <Box as='center'>
                    <Txt
                        size={12}
                        bold
                    >
                        {food.name}
                    </Txt>
                    {food.note && <Txt size={12} color={colors.gray2}>{food.note}</Txt>}
                </Box>
            </Box>

            {food?.options?.map((option, index) => {
                return (
                    <Box key={option._id}>
                        {option?.ingredients?.map((ingredient) => (
                            <ItemFoodsOrder
                                key={ingredient.food._id}
                                food={ingredient.food}
                            />
                        ))}
                    </Box>
                )
            })}
        </Box>
    )
}

export default ItemFoodsOrder