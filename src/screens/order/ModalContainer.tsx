import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Add, CloseCircle, CloseSquare, Minus, TickCircle } from 'iconsax-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { s } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import Img from '~/atoms/Img'
import Input from '~/atoms/Input'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { colors } from '~/themes/colors'
import { numberCommas } from '~/utils/convertNumber'
import { getImageByFoodType } from '~/utils/images'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
    onCloseModal: () => void
    onAddIngredientsToFood: (ingredient, option) => void
    onDoneSelectFoodOption: () => void
    onChangeAmountFoodOption: (type: 'plus' | 'minus') => void
    onChangeNoteFoodOption: (text: string) => void
    onRemoveIngredientsFoodOption: (ingredient, option) => void
    children?: React.JSX.Element
}

const ModalContainer = ({
    isShow,
    foodOption,
    onCloseModal,
    onAddIngredientsToFood,
    onDoneSelectFoodOption,
    onChangeAmountFoodOption,
    onChangeNoteFoodOption,
    onRemoveIngredientsFoodOption,
    children,
}: Props) => {
    return (
        <Modality show={isShow} close={false}>
            <Box bg={colors.white} w={'80%'} h={'90%'} as='center'>
                <ScrollView>
                    <Box w={'100%'} jc='space-between' row ai='center' p={10}>
                        <TouchOpacity onPress={(onCloseModal)}>
                            <CloseSquare color={colors.background} />
                        </TouchOpacity>
                        <Txt bold>{foodOption.name}</Txt>
                        <TouchOpacity
                            onPress={onDoneSelectFoodOption}
                        >
                            <TickCircle color={colors.background} />
                        </TouchOpacity>
                    </Box>

                    <Box row ai={'center'} jc={'center'} w={'100%'} mb={20}>
                        <TouchOpacity
                            onPress={() => onChangeAmountFoodOption('minus')}
                        >
                            <Minus color={colors.background} size={30} />
                        </TouchOpacity>
                        <Txt bold size={20} mx={20}>{foodOption.amount}</Txt>
                        <TouchOpacity
                            onPress={() => onChangeAmountFoodOption('plus')}
                        >
                            <Add color={colors.background} size={30} />
                        </TouchOpacity>
                    </Box>

                    <Box
                        borderTopWidth={1}
                        borderColor={colors.gray3}
                        w={'100%'}
                        py={10}
                        px={5}
                    >
                        <Txt>Giá bán: {numberCommas(foodOption.price)}</Txt>
                    </Box>

                    <Box
                        borderTopWidth={1}
                        borderBottomWidth={1}
                        w={'100%'}
                        borderColor={colors.gray3}
                    >
                        <Input
                            value={foodOption.note}
                            onChangeText={(text: string) => onChangeNoteFoodOption(text)}
                            placeholder='Ghi chú'
                            h={35}
                        />
                    </Box>

                    {foodOption.options.map((option) => (
                        <Box key={option._id} w={'100%'}>
                            <Box row w={'100%'} bg={colors.gray3} jc='space-between' px={10}>
                                <Txt>{option.title}</Txt>
                                <Txt>Số lượng: {option.maxChoose * foodOption.amount}</Txt>
                            </Box>
                            <Box row my={10}>
                                {option.ingredients.map((ingredient) => (
                                    <TouchOpacity
                                        onPress={() => onAddIngredientsToFood(ingredient, option)}
                                        key={ingredient._id}
                                        ai='center'
                                        m={5}
                                        w={s(70)}
                                    >
                                        <Img
                                            source={getImageByFoodType(ingredient.food.type)}
                                            styles={{ width: s(25), height: s(25) }}
                                        />
                                        <Txt color={ingredient.food.amount > 0 ? colors.background : colors.black}>{ingredient.food.amount}</Txt>
                                        <Txt
                                            color={ingredient.food.amount > 0 ? colors.background : colors.black}
                                            size={s(12)}
                                            textAlign='center'
                                        >
                                            {ingredient.food.name}
                                        </Txt>
                                        {ingredient.food.amount > 0 ?
                                            <TouchOpacity
                                                onPress={() => onRemoveIngredientsFoodOption(ingredient, option)}
                                                position='absolute'
                                                right={0}
                                                top={-5}
                                            >
                                                <CloseCircle size={18} color={colors.red} />
                                            </TouchOpacity> : <></>
                                        }
                                    </TouchOpacity>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </ScrollView>
            </Box >
            {children ? children : <></>}
        </Modality >
    )
}

export default ModalContainer