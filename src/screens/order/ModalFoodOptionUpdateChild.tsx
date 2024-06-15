import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { addIngredientToFoodOption, changeNoteFoodOptionChild, doneSelectFoodOptionChild, plusOrMinusFoodOptionChild, removeIngredientOfFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import ModalContainer from './ModalContainer'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOptionUpdateChild = ({ isShow, foodOption, dispatch }: Props) => {

    const handleCloseModalChild = () => {
        dispatch(setFoodOptionChild({ foodOptionChild: null, optionChoose: null, fieldName: 'foodOptionUpdateChild' }))
    }

    const handleDoneSelectFoodOptionChild = () => {
        dispatch(doneSelectFoodOptionChild('foodOptionUpdateChild'))
    }

    const handleChangeAmountFoodOptionChild = (type: 'plus' | 'minus') => {
        dispatch(plusOrMinusFoodOptionChild({ type, fieldName: 'foodOptionUpdateChild' }))
    }

    const handleChangeNoteFoodOptionChild = (text: string) => {
        dispatch(changeNoteFoodOptionChild({ newNote: text, fieldName: 'foodOptionUpdateChild' }))
    }

    const handleRemoveIngredientsFoodOptionChild = (ingredientChoose, optionChoose) => {
        dispatch(removeIngredientOfFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionUpdateChild' }))
    }

    const handleAddIngredientsToFood = (ingredientChoose, optionChoose) => {
        dispatch(addIngredientToFoodOption({ ingredientChoose, optionChoose, fieldName: 'foodOptionUpdateChild' }))
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

export default ModalFoodOptionUpdateChild