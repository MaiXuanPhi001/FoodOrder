import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionChildMainSelector } from '~/reduxs/selectors/mainSelector'
import { doneSelectFoodOption, removeIngredientOfFoodOption, addIngredientToFoodOption, setFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import ModalContainer from './ModalContainer'
import ModalFoodOptionChild from './ModalFoodOptionChild'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOption = ({ isShow, foodOption, dispatch }: Props) => {
    const foodOptionChild = useAppSelector(foodOptionChildMainSelector)

    const handleCloseModal = () => {
        dispatch(setFoodOption(null))
    }

    const handleDoneSelectFoodOption = () => {
        dispatch(doneSelectFoodOption())
    }

    const handleChangeAmountFoodOption = (type: 'plus' | 'minus') => {
        if (type === 'plus') {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount + 1 }))
        } else if (type === 'minus' && foodOption.amount > 1) {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount - 1 }))
        }
    }

    const handleChangeNoteFoodOption = (text: string) => {
        dispatch(setFoodOption({ ...foodOption, note: text }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        if (ingredientChoose.food.options) {
            return dispatch(setFoodOptionChild({ foodOptionChild: ingredientChoose.food, optionChoose }))
        }

        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            return dispatch(setFoodOptionChild({ foodOptionChild: foodOptionService, optionChoose }))
        }

        dispatch(addIngredientToFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOption' }))
    }

    const handleRemoveIngredientsFoodOption = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientOfFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOption' }))
    }

    return (
        <ModalContainer
            isShow={isShow}
            foodOption={foodOption}
            dispatch={dispatch}
            onCloseModal={handleCloseModal}
            onAddIngredientsToFood={handleAddIngredientsToFood}
            onDoneSelectFoodOption={handleDoneSelectFoodOption}
            onChangeAmountFoodOption={handleChangeAmountFoodOption}
            onChangeNoteFoodOption={handleChangeNoteFoodOption}
            onRemoveIngredientsFoodOption={handleRemoveIngredientsFoodOption}
        >
            {foodOptionChild &&
                <ModalFoodOptionChild
                    dispatch={dispatch}
                    foodOption={foodOptionChild}
                    isShow={foodOption !== null}
                />
            }
        </ModalContainer>
    )
}

export default ModalFoodOption