import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionMainSelector } from '~/reduxs/selectors/mainSelector'
import { changeNoteFoodOption, removeIngredientsFoodOption, addIngredientToFoodOption, setFoodOption, setFoodOptionChild, setFoodOptionUpdate } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import ModalContainer from './ModalContainer'

interface Props {
    isShow: boolean
    dispatch: Dispatch<UnknownAction>
    foodOptionUpdate: any
}

const ModalFoodOptionUpdate = ({ isShow, dispatch, foodOptionUpdate }: Props) => {
    const handleCloseModal = () => {
        dispatch(setFoodOptionUpdate(null))
    }

    const handleUpdateFoodOption = () => {
        // dispatch(updateFoodOrder())
    }

    const handleChangeAmountFoodOption = (type: 'plus' | 'minus') => {
        if (type === 'plus') {
            dispatch(setFoodOptionUpdate({
                ...foodOptionUpdate,
                amount: foodOptionUpdate.amount + 1
            }))
        } else if (type === 'minus' && foodOptionUpdate.amount > 1) {
            dispatch(setFoodOptionUpdate({
                ...foodOptionUpdate,
                amount: foodOptionUpdate.amount - 1
            }))
        }
    }

    const handleChangeNoteFoodOption = (text: string) => {
        dispatch(setFoodOptionUpdate({ ...foodOptionUpdate, note: text }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        if (ingredientChoose.food.options) {
            return dispatch(setFoodOptionChild({ foodOptionChild: ingredientChoose.food, optionChoose }))
        }

        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            return dispatch(setFoodOptionChild({ foodOptionChild: foodOptionService, optionChoose }))
        }

        dispatch(addIngredientToFoodOption({ ingredientChoose, optionChoose }))
    }

    const handleRemoveIngredientsFoodOption = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientsFoodOption({ ingredientChoose, optionChoose }))
    }

    return (
        <ModalContainer
            isShow={isShow}
            foodOption={foodOptionUpdate}
            dispatch={dispatch}
            onCloseModal={handleCloseModal}
            onAddIngredientsToFood={handleAddIngredientsToFood}
            onDoneSelectFoodOption={handleUpdateFoodOption}
            onChangeAmountFoodOption={handleChangeAmountFoodOption}
            onChangeNoteFoodOption={handleChangeNoteFoodOption}
            onRemoveIngredientsFoodOption={handleRemoveIngredientsFoodOption}
        >
            {/* {foodOption &&
                <ModalFoodOptionChild
                    dispatch={dispatch}
                    foodOption={foodOption}
                    isShow={foodOption !== null}
                />
            } */}
        </ModalContainer>
    )
}

export default ModalFoodOptionUpdate