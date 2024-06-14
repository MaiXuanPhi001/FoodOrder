import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { addIngredientToFoodOption, changeNoteFoodOptionChild, doneSelectFoodOptionChild, plusOrMinusFoodOptionChild, removeIngredientOfFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import ModalContainer from './ModalContainer'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOptionChild = ({ isShow, foodOption, dispatch }: Props) => {

    const handleCloseModalChild = () => {
        dispatch(setFoodOptionChild({ foodOptionChild: null, optionChoose: null }))
    }

    const handleDoneSelectFoodOptionChild = () => {
        dispatch(doneSelectFoodOptionChild())
    }

    const handleChangeAmountFoodOptionChild = (type: 'plus' | 'minus') => {
        dispatch(plusOrMinusFoodOptionChild(type))
    }

    const handleChangeNoteFoodOptionChild = (text: string) => {
        dispatch(changeNoteFoodOptionChild(text))
    }

    const handleRemoveIngredientsFoodOptionChild = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientOfFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionChild' }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        dispatch(addIngredientToFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionChild' }))
    }

    return (
        <ModalContainer
            isShow={isShow}
            foodOption={foodOption}
            dispatch={dispatch}
            onCloseModal={handleCloseModalChild}
            onAddIngredientsToFood={handleAddIngredientsToFood}
            onDoneSelectFoodOption={handleDoneSelectFoodOptionChild}
            onChangeAmountFoodOption={handleChangeAmountFoodOptionChild}
            onChangeNoteFoodOption={handleChangeNoteFoodOptionChild}
            onRemoveIngredientsFoodOption={handleRemoveIngredientsFoodOptionChild}
        />
    )
}

export default ModalFoodOptionChild