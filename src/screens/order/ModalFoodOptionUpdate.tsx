import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionUpdateChildMainSelector } from '~/reduxs/selectors/mainSelector'
import { addIngredientToFoodOption, removeIngredientOfFoodOption, setFoodOptionChild, setFoodOptionUpdate, updateFoodOrderPending } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import ModalContainer from './ModalContainer'
import ModalFoodOptionUpdateChild from './ModalFoodOptionUpdateChild'

interface Props {
    isShow: boolean
    dispatch: Dispatch<UnknownAction>
    foodOptionUpdate: any
}

const ModalFoodOptionUpdate = ({ isShow, dispatch, foodOptionUpdate }: Props) => {
    const foodOptionUpdateChild = useAppSelector(foodOptionUpdateChildMainSelector)

    const handleCloseModal = () => {
        dispatch(setFoodOptionUpdate(null))
    }

    const handleUpdateFoodOption = () => {
        dispatch(updateFoodOrderPending())
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
            return dispatch(setFoodOptionChild({ foodOptionChild: ingredientChoose.food, optionChoose, fieldName: 'foodOptionUpdateChild' }))
        }

        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            return dispatch(setFoodOptionChild({ foodOptionChild: foodOptionService, optionChoose, fieldName: 'foodOptionUpdateChild' }))
        }

        dispatch(addIngredientToFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionUpdate' }))
    }

    const handleRemoveIngredientsFoodOption = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientOfFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionUpdate' }))
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
            {foodOptionUpdateChild &&
                <ModalFoodOptionUpdateChild
                    dispatch={dispatch}
                    foodOption={foodOptionUpdateChild}
                    isShow={foodOptionUpdateChild !== null}
                />
            }
        </ModalContainer>
    )
}

export default ModalFoodOptionUpdate