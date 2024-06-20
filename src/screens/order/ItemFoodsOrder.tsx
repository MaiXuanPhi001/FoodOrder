import React from 'react'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { Food } from '~/models/database'
import { colors } from '~/themes/colors'

interface Props {
    food: any
    main: boolean,
    onShowFoodOption: (food: Food) => void
    onShowModalDelete: (food: Food) => void
}

const ItemFoodsOrder = ({
    food,
    main,
    onShowFoodOption,
    onShowModalDelete,
}: Props) => {
    if (food.amount < 1) {
        return null
    }

    return (
        <TouchOpacity
            onPress={() => onShowFoodOption && onShowFoodOption(food)}
            onLongPress={() => onShowModalDelete(food)}
            disabled={!main}
            w={'100%'}
            pl={main ? 10 : 15}
            pr={main ? 10 : 0}
            styles={{
                // borderTopWidth: main ? 1 : 0,
                borderBottomWidth: main ? 1 : 0,
                borderColor: colors.gray2,
            }}
        >
            <Box row py={3} styles={{ borderBottomWidth: 1, borderColor: colors.gray3 }}>
                <Box bg={colors.background} p={3} row mr={5} as='center'>
                    <Txt size={8} bold color={colors.white}>{'0' + food.amount}</Txt>
                </Box>
                <Box as='center' f={1}>
                    <Txt bold size={12}>{food.name}</Txt>
                    {food?.note ? <Txt size={10}>{food.note}</Txt> : <></>}
                </Box>
                <Box ai='flex-end'>
                    <Txt size={10}>{'12:00'}</Txt>
                    <Txt size={10} bold color={colors.background}>{main ? '72.000' : '0'}</Txt>
                </Box>
            </Box>

            {food?.options?.map((option) => (
                <Box key={option._id}>
                    {option.ingredients.map((ingredient) => (
                        <ItemFoodsOrder
                            key={`${option._id}${ingredient._id}${ingredient.food._id}`}
                            food={ingredient.food}
                        />
                    ))}
                </Box>
            ))}
        </TouchOpacity>
    )
}

export default ItemFoodsOrder