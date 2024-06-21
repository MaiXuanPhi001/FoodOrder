import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { Food } from "~/models/database";
import { FoodOption, Option } from "~/models/food";
import { MainSlice, PayloadAddIngredientToFoodOption, PayloadSetAreas, PayloadSetFoodOptionChild } from "~/models/mainSlicePayloadAction";
import { Area } from "~/servers/databases/areas";
import { Table } from "~/servers/databases/tables";
import { generateTimestampId } from "~/utils/date";

const initialState: MainSlice = {
    areas: [], // Danh sách khu vực
    tables: [], // Danh sách bàn
    foods: [], // Danh sách thức ăn
    areaChoose: undefined, // Khu vực được chọn
    orderedTab: 'orderPending', // Tab order
    foodOption: null,
    foodOptionChild: null,
    optionChoose: null,
    orderPending: [],
    foodOptionUpdate: null,
    foodOptionUpdateChild: null
}

const mainSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        setFirstData: (state, action: PayloadAction<PayloadSetAreas>) => {
            const { payload } = action
            state.areas = payload.areas
            state.tables = payload.tables
            state.foods = payload.foods
            if (payload.areas.length > 0) {
                state.areaChoose = payload.areas[0]
            } else {
                state.areaChoose = undefined
            }
        },
        setAreaChoose: (state, action: PayloadAction<Area>) => {
            state.areaChoose = action.payload
        },
        setOrderedTab: (state, action: PayloadAction<'orderPending' | 'ordered'>) => {
            state.orderedTab = action.payload
        },
        setFoodOption: (state, action: PayloadAction<FoodOption | null>) => {
            state.foodOption = action.payload
        },
        setFoodOptionChild: (state, action: PayloadAction<PayloadSetFoodOptionChild>) => {
            const { foodOptionChild, optionChoose, fieldName } = action.payload
            state[fieldName] = foodOptionChild
            state.optionChoose = optionChoose
        },
        addIngredientToFoodOption: (state, action: PayloadAction<PayloadAddIngredientToFoodOption>) => {
            const { ingredientChoose, optionChoose, fieldName } = action.payload
            const amountFoodOption = state[fieldName].amount
            state[fieldName].options.forEach((option: Option) => {
                if (option._id === optionChoose._id) {
                    let sum = 0
                    option.ingredients?.forEach(ingredient => {
                        sum += ingredient.food.amount
                    })

                    if ((sum + 1) <= (option.maxChoose * amountFoodOption)) {
                        option.ingredients?.forEach(ingredient => {
                            if (ingredient._id === ingredientChoose._id) {
                                ingredient.food.amount++
                            }
                        })
                    }
                }
            })
        },
        plusOrMinusFoodOptionChild: (state, action) => {
            const { type, fieldName } = action.payload
            const fieldFoodOption = fieldName === 'foodOptionChild' ? 'foodOption' : 'foodOptionUpdate'
            const amountFoodOption = state[fieldFoodOption].amount
            if (type === 'plus') {
                const amountCurrent = state[fieldName].amount + 1
                state[fieldFoodOption].options.forEach((option) => {
                    if (option._id === state.optionChoose._id) {
                        if (amountCurrent <= (option.maxChoose * amountFoodOption)) {
                            state[fieldName].amount = amountCurrent
                        }
                    }
                })
            } else {
                const amountCurrent = state[fieldName].amount - 1
                if (amountCurrent >= 1) {
                    state[fieldName].amount = amountCurrent
                }
            }
        },
        doneSelectFoodOption: (state) => {
            const error = handleCheckDoneSelectFoodOption(state, 'foodOption')
            if (error) return
            const _idOrder = generateTimestampId()
            state.orderPending.push({ ...state.foodOption, _idOrder})
            state.foodOption = null
        },
        doneSelectFoodOptionChild: (state, action) => {
            const fieldChild = action.payload
            const error = handleCheckDoneSelectFoodOption(state, fieldChild)
            if (error) return

            const amountFoodOptionChild = state[fieldChild].amount
            let sumAmountIngredients = 0
            let position = -1

            const fieldParent = fieldChild === 'foodOptionChild' ? 'foodOption' : 'foodOptionUpdate'

            state[fieldParent].options.forEach((option) => {
                if (option._id === state.optionChoose._id) {
                    option.ingredients.forEach((ingredient, index) => {
                        if (ingredient.food._id !== state[fieldChild]._id) {
                            sumAmountIngredients += ingredient.food.amount
                        }

                        if (ingredient.food._id === state[fieldChild]._id) {
                            position = index
                        }
                    })

                    if ((sumAmountIngredients + amountFoodOptionChild) > (state.optionChoose.maxChoose * state[fieldParent].amount)) {
                        Alert.alert('Vượt quá số lượng món trong một mục')
                    } else {
                        option.ingredients[position].food = state[fieldChild]
                    }
                    state[fieldChild] = null
                }
            })
        },
        removeIngredientOfFoodOption: (state, action: PayloadAction<PayloadAddIngredientToFoodOption>) => {
            const { ingredientChoose, optionChoose, fieldName } = action.payload
            state[fieldName].options.forEach((option: Option) => {
                if (option._id === optionChoose._id) {
                    option.ingredients?.forEach((ingredient) => {
                        if (ingredient._id === ingredientChoose._id) {
                            if (ingredientChoose.food.options) {
                                delete ingredient.food.options
                            }
                            ingredient.food.amount = 0
                        }
                    })
                }
            })
        },
        addFoodToOrderPending: (state, action: PayloadAction<FoodOption>) => {
            const _idOrder = generateTimestampId()
            state.orderPending.push({ ...action.payload, _idOrder })
        },
        changeNoteFoodOption: (state, action) => {
            state.foodOption = { ...state.foodOption, note: action.payload }
        },
        changeNoteFoodOptionChild: (state, action) => {
            const { newNote, fieldName } = action.payload
            state.foodOptionChild = { ...state[fieldName], note: newNote }
        },
        setFoodOptionUpdate: (state, action) => {
            state.foodOptionUpdate = action.payload
        },
        updateFoodOrderPending: (state) => {
            const error = handleCheckDoneSelectFoodOption(state, 'foodOptionUpdate')
            if (error) return

            state.orderPending = state.orderPending.map((item) => {
                if (item._idOrder === state.foodOptionUpdate._idOrder) {
                    return state.foodOptionUpdate
                }
                return item
            })
            state.foodOptionUpdate = null
        },
        deleteFoodOrder: (state, action) => {
            const foodDelete = action.payload
            state.orderPending = state.orderPending.filter((order) => order._idOrder !== foodDelete._idOrder)
        }
    },
    extraReducers: builder => { }
})

// Hàm check xem chọn đủ thành phần của một món ăn chưa, vd: mì cay phải chọn cấp độ mới cho hoàn thành
const handleCheckDoneSelectFoodOption = (state: MainSlice, fieldName: keyof MainSlice) => {
    let error = false
    if (state[fieldName].amount < 1) {
        Alert.alert('Số lượng món phải lớn hơn 0')
        return
    }

    state[fieldName].options.forEach((option) => {
        const maxChoose = option.maxChoose
        let sumAmountIngredients = 0
        option.ingredients.forEach((ingredient) => {
            sumAmountIngredients += ingredient.food.amount
        })

        if (sumAmountIngredients !== (maxChoose * state[fieldName].amount)) {
            error = true
        }
    })

    if (error) {
        Alert.alert('Vui lòng chọn đủ thành phần của món')
    }

    return error
}

export const {
    setFirstData,
    setAreaChoose,
    setOrderedTab,
    setFoodOption,
    addIngredientToFoodOption,
    setFoodOptionChild,
    plusOrMinusFoodOptionChild,
    doneSelectFoodOptionChild,
    removeIngredientOfFoodOption,
    doneSelectFoodOption,
    addFoodToOrderPending,
    changeNoteFoodOption,
    changeNoteFoodOptionChild,
    setFoodOptionUpdate,
    updateFoodOrderPending,
    deleteFoodOrder
} = mainSlice.actions

export default mainSlice.reducer