import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Add, Alarm, CloseSquare, Minus, TickCircle } from 'iconsax-react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { ms, s } from 'react-native-size-matters'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { setFoodOption, setAmountFoodOption } from '~/reduxs/slices/mainSlice'
import { colors } from '~/themes/colors'

interface Props {
    isShow: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOption = ({ isShow, setShow, foodOption, dispatch }: Props) => {
    // console.log('orders: ', JSON.stringify(orders))

    const handleMinusFood = () => {
        if (foodOption.amount > 1) {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount - 1 }))
        }
    }

    const handlePlusFood = () => {
        dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount + 1 }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        // for (let i = 0; i < foodOptionCopy.options.length; i++) {
        //     let option = foodOptionCopy.options[i]
        //     if (option._id === optionChoose._id) {
        //         console.log('option === ')
        //         for (let j = 0; j < option.ingredients.length; j++) {
        //             console.log('skdj')
        //             let ingredient = option.ingredients[j]
        //             if (ingredient._id === ingredientChoose._id) {
        //                 console.log('================')
        //                 console.log('amount: ', foodOptionCopy.options[i].ingredients[j].food.amount)
        //                 foodOptionCopy.options[i].ingredients[j].food.amount = 10
        //                 console.log('amount2: ', foodOptionCopy.options[i].ingredients[j].food.amount)
        //             }
        //         }
        //         break
        //     }
        // }
        dispatch(setAmountFoodOption({ingredientChoose, optionChoose}))
    }

    return (
        <Modality show={isShow} setShow={setShow} close={false}>
            <Box bg={colors.white} w={'80%'} h={'90%'} as='center'>
                {foodOption &&
                    <ScrollView>
                        <Box w={'100%'} jc='space-between' row ai='center' p={10}>
                            <CloseSquare color={colors.background} />
                            <Txt bold>{foodOption.name}</Txt>
                            <TouchOpacity onPress={() => setShow(false)}>
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
                                        >
                                            <Alarm color={colors.gray2} size={ms(25)} />
                                            <Txt>{ingredient.food.amount}</Txt>
                                            <Txt size={s(12)}>{ingredient.food.name}</Txt>
                                        </TouchOpacity>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </ScrollView>
                }
            </Box>
        </Modality>
    )
}

export default ModalFoodOption