import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Add, Alarm, BoxRemove, CloseCircle, CloseSquare, Minus, TickCircle, Trash } from 'iconsax-react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { ms, s, vs } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { setFoodOption, setAmountFoodOption, setFoodOptionChild, removeIngredientsFoodOption, doneSelectFoodOption, changeNoteFoodOption } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import { colors } from '~/themes/colors'
import ModalFoodOptionChild from './ModalFoodOptionChild'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionChildMainSelector } from '~/reduxs/selectors/mainSelector'
import Img from '~/atoms/Img'
import { getImageByFoodType } from '~/utils/images'
import Input from '~/atoms/Input'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOption = ({ isShow, foodOption, dispatch }: Props) => {
    const foodOptionChild = useAppSelector(foodOptionChildMainSelector)

    const handleMinusFood = () => {
        if (foodOption.amount > 1) {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount - 1 }))
        }
    }

    const handlePlusFood = () => {
        dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount + 1 }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        if (ingredientChoose.food.options) {
            return dispatch(setFoodOptionChild({ foodOptionChild: ingredientChoose.food, optionChoose }))
        }

        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            return dispatch(setFoodOptionChild({ foodOptionChild: foodOptionService, optionChoose }))
        }

        dispatch(setAmountFoodOption({ ingredientChoose, optionChoose }))
    }

    const handleRemoveIngredientsToFood = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientsFoodOption({ ingredientChoose, optionChoose }))
    }

    const handleDoneSelectFoodOption = () => {
        dispatch(doneSelectFoodOption())
    }

    return (
        <Modality show={isShow} close={false}>
            <Box bg={colors.white} w={'80%'} h={'90%'} as='center'>
                <ScrollView>
                    <Box w={'100%'} jc='space-between' row ai='center' p={10}>
                        <TouchOpacity onPress={() => dispatch(setFoodOption(null))}>
                            <CloseSquare color={colors.background} />
                        </TouchOpacity>
                        <Txt bold>{foodOption.name}</Txt>
                        <TouchOpacity onPress={handleDoneSelectFoodOption}>
                            <TickCircle color={colors.background} />
                        </TouchOpacity>
                    </Box>

                    <Box row ai={'center'} jc={'center'} w={'100%'} mb={20}>
                        <TouchOpacity onPress={handleMinusFood}>
                            <Minus color={colors.background} size={30} />
                        </TouchOpacity>
                        <Txt bold size={20} mx={20}>{foodOption.amount}</Txt>
                        <TouchOpacity onPress={handlePlusFood}>
                            <Add color={colors.background} size={30} />
                        </TouchOpacity>
                    </Box>

                    <Box styles={{ borderTopWidth: 1, borderColor: colors.gray3, width: '100%', paddingVertical: 10, paddingHorizontal: 5 }}>
                        <Txt>Giá bán: {foodOption.price}</Txt>
                    </Box>

                    <Box styles={{ borderTopWidth: 1, borderBottomWidth: 1, width: '100%', borderColor: colors.gray3 }}>
                        <Input
                            value={foodOption.note}
                            onChangeText={(text: String) => dispatch(changeNoteFoodOption(text))}
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
                                        onPress={() => handleAddIngredientsToFood(ingredient, option)}
                                        key={ingredient._id}
                                        ai='center'
                                        m={5}
                                        w={s(70)}
                                    // styles={{backgroundColor: 'red'}}
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
                                        {ingredient.food.amount > 0 &&
                                            <TouchOpacity
                                                onPress={() => handleRemoveIngredientsToFood(ingredient, option)}
                                                position='absolute'
                                                right={0}
                                                top={-5}
                                            >
                                                <CloseCircle size={18} color={colors.red} />
                                            </TouchOpacity>
                                        }
                                    </TouchOpacity>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </ScrollView>
            </Box>

            {foodOptionChild &&
                <ModalFoodOptionChild
                    dispatch={dispatch}
                    foodOption={foodOptionChild}
                    isShow={foodOption !== null}
                />
            }
        </Modality>
    )
}

export default ModalFoodOption