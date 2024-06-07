import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Add, Alarm, CloseCircle, CloseSquare, Minus, TickCircle } from 'iconsax-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { ms, s } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { setFoodOption, setAmountFoodOption, setFoodOptionChild, setAmountFoodOptionChild, plusOrMinusFoodOptionChild, doneSelectFoodOptionChild } from '~/reduxs/slices/mainSlice'
import { getFoodDetailApi, getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import { colors } from '~/themes/colors'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOptionChild = ({ isShow, foodOption, dispatch }: Props) => {

    const handlePlusOrMinusFoodOptionChild = (type) => {
        dispatch(plusOrMinusFoodOptionChild(type))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        dispatch(setAmountFoodOptionChild({ ingredientChoose, optionChoose }))
    }

    return (
        <Modality show={isShow} close={false}>
            <Box bg={colors.white} w={'80%'} h={'90%'} as='center'>
                <ScrollView>
                    <Box w={'100%'} jc='space-between' row ai='center' p={10}>
                        <TouchOpacity
                            onPress={() => dispatch(setFoodOptionChild({ foodOptionChild: null, optionChoose: null }))}
                        >
                            <CloseSquare color={colors.background} />
                        </TouchOpacity>
                        <Txt bold>{foodOption.name}</Txt>
                        <TouchOpacity
                            // onPress={() => dispatch(setFoodOptionChild({ foodOptionChild: null, optionChoose: null }))}
                            onPress={() => dispatch(doneSelectFoodOptionChild(''))}
                        >
                            <TickCircle color={colors.background} />
                        </TouchOpacity>
                    </Box>

                    <Box row ai={'center'} jc={'center'} w={'100%'} mb={20}>
                        <TouchOpacity onPress={() => handlePlusOrMinusFoodOptionChild('minus')}>
                            <Minus color={colors.background} size={30} />
                        </TouchOpacity>
                        <Txt bold size={20} mx={20}>{foodOption.amount}</Txt>
                        <TouchOpacity onPress={() => handlePlusOrMinusFoodOptionChild('plus')}>
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
        </Modality>
    )
}

export default ModalFoodOptionChild