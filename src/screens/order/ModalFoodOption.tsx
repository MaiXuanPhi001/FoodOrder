import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Add, Alarm, BoxRemove, CloseCircle, CloseSquare, Minus, TickCircle, Trash } from 'iconsax-react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { ms, s } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { setFoodOption, setAmountFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import { colors } from '~/themes/colors'
import ModalFoodOptionChild from './ModalFoodOptionChild'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionChildMainSelector } from '~/reduxs/selectors/mainSelector'

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
        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            console.log('foodOptionService: ', JSON.stringify(foodOptionService))
            dispatch(setFoodOptionChild({ foodOptionChild: foodOptionService, optionChoose }))
        } else {
            dispatch(setAmountFoodOption({ ingredientChoose, optionChoose }))
        }
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
                        <TouchOpacity onPress={() => dispatch(setFoodOption(null))}>
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

                    {foodOption.options.map((option) => (
                        <Box key={option._id} w={'100%'}>
                            <Box row w={'100%'} bg={colors.gray3}>
                                <Txt ml={10}>{option.title}</Txt>
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
                                        <Alarm
                                            color={ingredient.food.amount > 0 ? colors.background : colors.gray2}
                                            size={ms(25)}
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
                                            <TouchOpacity position='absolute' right={0} top={-5}>
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