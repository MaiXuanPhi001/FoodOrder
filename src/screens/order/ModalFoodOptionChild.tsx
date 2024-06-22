import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { addIngredientToFoodOption, changeNoteFoodOptionChild, doneSelectFoodOptionChild, plusOrMinusFoodOptionChild, removeIngredientOfFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import ModalContainer from './ModalContainer'
import { Ingredient, Option } from '~/models/food'

interface Props {
    isShow: boolean
    foodOption: any
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOptionChild = ({ isShow, foodOption, dispatch }: Props) => {

    // Đóng modal
    const handleCloseModalChild = () => {
        dispatch(setFoodOptionChild({
            foodOptionChild: null,
            optionChoose: null,
            fieldName: 'foodOptionChild',
        }))
    }

    // Event bắt sự kiện khi người dúng nhấn vào nút hoàn thành trên modal
    const handleDoneSelectFoodOptionChild = () => {
        dispatch(doneSelectFoodOptionChild('foodOptionChild'))
    }

    // Thay đổi số lượng của món ăn
    const handleChangeAmountFoodOptionChild = (type: 'plus' | 'minus') => {
        dispatch(plusOrMinusFoodOptionChild({
            type,
            fieldName: 'foodOptionChild',
        }))
    }

    // Thay đổi ghi chú của món ăn
    const handleChangeNoteFoodOptionChild = (text: string) => {
        dispatch(changeNoteFoodOptionChild({
            newNote: text,
            fieldName: 'foodOptionChild',
        }))
    }

    // Xóa thành phần trong một món ăn
    const handleRemoveIngredientsFoodOptionChild = (ingredientChoose: Ingredient, optionChoose: Option) => {
        dispatch(removeIngredientOfFoodOption({
            ingredientChoose,
            optionChoose,
            fieldName: 'foodOptionChild',
        }))
    }

    // Thêm thành phần vào món ăn
    const handleAddIngredientsToFood = (ingredientChoose: Ingredient, optionChoose: Option) => {
        dispatch(addIngredientToFoodOption({
            ingredientChoose,
            optionChoose,
            fieldName: 'foodOptionChild',
        }))
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