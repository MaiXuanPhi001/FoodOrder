import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import React from 'react'
import { useAppSelector } from '~/hooks/redux'
import { foodOptionChildMainSelector } from '~/reduxs/selectors/mainSelector'
import { doneSelectFoodOption, removeIngredientOfFoodOption, addIngredientToFoodOption, setFoodOption, setFoodOptionChild } from '~/reduxs/slices/mainSlice'
import { getFoodOptionByFood } from '~/servers/databases/api/orderApi'
import ModalContainer from './ModalContainer'
import ModalFoodOptionChild from './ModalFoodOptionChild'
import { FoodOption, Ingredient, Option } from '~/models/food'

interface Props {
    isShow: boolean
    foodOption: FoodOption
    dispatch: Dispatch<UnknownAction>
}

const ModalFoodOption = ({ isShow, foodOption, dispatch }: Props) => {
    const foodOptionChild = useAppSelector(foodOptionChildMainSelector)

    // Đóng modal
    const handleCloseModal = () => {
        dispatch(setFoodOption(null))
    }

    // Event bắt sự kiện khi người dúng nhấn vào nút hoàn thành trên modal
    const handleDoneSelectFoodOption = () => {
        dispatch(doneSelectFoodOption())
    }

    // Thay đổi số lượng của món ăn
    const handleChangeAmountFoodOption = (type: 'plus' | 'minus') => {
        if (type === 'plus') {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount + 1 }))
        } else if (type === 'minus' && foodOption.amount > 1) {
            dispatch(setFoodOption({ ...foodOption, amount: foodOption.amount - 1 }))
        }
    }

    // Thay đổi ghi chú của món ăn
    const handleChangeNoteFoodOption = (text: string) => {
        dispatch(setFoodOption({ ...foodOption, note: text }))
    }

    // Thêm thành phần vào món ăn
    const handleAddIngredientsToFood = (ingredientChoose: Ingredient, optionChoose: Option) => {
        if (ingredientChoose.food.options) {
            return dispatch(setFoodOptionChild({
                foodOptionChild: ingredientChoose.food,
                optionChoose,
                fieldName: 'foodOptionChild',
            }))
        }

        const foodOptionService = getFoodOptionByFood(ingredientChoose.food)
        if (foodOptionService) {
            return dispatch(setFoodOptionChild({
                foodOptionChild: foodOptionService,
                optionChoose,
                fieldName: 'foodOptionChild',
            }))
        }

        dispatch(addIngredientToFoodOption({
            ingredientChoose,
            optionChoose,
            fieldName: 'foodOption',
        }))
    }

    // Xóa thành phần trong một món ăn
    const handleRemoveIngredientsFoodOption = (ingredientChoose: Ingredient, optionChoose: Option) => {
        dispatch(removeIngredientOfFoodOption({
            ingredientChoose,
            optionChoose,
            fieldName: 'foodOption'
        }))
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
            {foodOptionChild ?
                <ModalFoodOptionChild
                    dispatch={dispatch}
                    foodOption={foodOptionChild}
                    isShow={foodOption !== null}
                /> : <></>
            }
        </ModalContainer>
    )
}

export default ModalFoodOption