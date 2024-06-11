import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { Area } from "~/servers/databases/areas";
import { Food } from "~/servers/databases/foods";
import { Table } from "~/servers/databases/tables";

interface MainSlice {
    areas: Area[]
    tables: Table[]
    foods: Food[]
    areaChoose: Area | undefined
    orderedTab: 'orderPending' | 'ordered'
    foodOption: any
    foodOptionChild: any
    optionChoose: any
    orderPending: any
}

interface PayloadSetAreas {
    areas: Area[]
    tables: Table[]
    foods: Food[]
}

const initialState: MainSlice = {
    areas: [], // Danh sách khu vực
    tables: [], // Danh sách bàn
    foods: [], // Danh sách thức ăn
    areaChoose: undefined, // Khu vực được chọn
    orderedTab: 'orderPending', // Tab order
    foodOption: null,
    foodOptionChild: null,
    optionChoose: null,
    orderPending: [{ "_id": 0, "name": "CB mot minh", "price": 20000, "type": 3, "noteEnable": false, "amount": 1, "options": [{ "_id": 0, "title": "Cấp độ", "maxChoose": 1, "_idFood": 0, "ingredients": [{ "_id": 0, "_idOptionFood": 0, "_idFood": 2, "food": { "_id": 2, "name": "Cấp 2", "price": 0, "type": 5, "noteEnable": false, "amount": 1 } }] }, { "_id": 1, "title": "Món thêm", "maxChoose": 2, "_idFood": 0, "ingredients": [{ "_id": 1, "_idOptionFood": 1, "_idFood": 3, "food": { "_id": 3, "name": "Mực thêm", "price": 20000, "type": 0, "noteEnable": true, "amount": 1 } }, { "_id": 2, "_idOptionFood": 1, "_idFood": 4, "food": { "_id": 4, "name": "Bò thêm", "price": 25000, "type": 0, "noteEnable": true, "amount": 1 } }, { "_id": 3, "_idOptionFood": 1, "_idFood": 5, "food": { "_id": 5, "name": "Mì thêm", "price": 25000, "type": 0, "noteEnable": true, "amount": 0 } }] }, { "_id": 2, "title": "1 Mì kim chi bất kì", "maxChoose": 2, "_idFood": 0, "ingredients": [{ "_id": 4, "_idOptionFood": 2, "_idFood": 1, "food": { "_id": 1, "name": "Mì kim chi hải sản", "price": 55000, "type": 1, "noteEnable": true, "amount": 2, "options": [{ "_id": 3, "title": "Cấp độ", "maxChoose": 1, "_idFood": 1, "ingredients": [{ "_id": 5, "_idOptionFood": 3, "_idFood": 2, "food": { "_id": 2, "name": "Cấp 2", "price": 0, "type": 5, "noteEnable": false, "amount": 1 } }, { "_id": 8, "_idOptionFood": 3, "_idFood": 7, "food": { "_id": 7, "name": "Cấp 0", "price": 0, "type": 5, "noteEnable": false, "amount": 1 } }, { "_id": 9, "_idOptionFood": 3, "_idFood": 8, "food": { "_id": 8, "name": "Cấp 1", "price": 0, "type": 5, "noteEnable": false, "amount": 0 } }] }] } }, { "_id": 6, "_idOptionFood": 2, "_idFood": 6, "food": { "_id": 6, "name": "Mì kim chi bò", "price": 25000, "type": 1, "noteEnable": true, "amount": 0 } }] }] }],
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
        setFoodOption: (state, action) => {
            state.foodOption = action.payload
        },
        setAmountFoodOption: (state, action) => {
            const { ingredientChoose, optionChoose } = action.payload
            const amountFoodOption = state.foodOption.amount
            state.foodOption.options.forEach(option => {
                if (option._id === optionChoose._id) {
                    let sum = 0
                    option.ingredients.forEach(ingredient => {
                        sum += ingredient.food.amount
                    })

                    if ((sum + 1) <= (option.maxChoose * amountFoodOption)) {
                        option.ingredients.forEach(ingredient => {
                            if (ingredient._id === ingredientChoose._id) {
                                ingredient.food.amount++
                            }
                        })
                    }
                }
            })
        },
        setAmountFoodOptionChild: (state, action) => {
            const { ingredientChoose, optionChoose } = action.payload
            const amountFoodOption = state.foodOptionChild.amount
            state.foodOptionChild.options.forEach(option => {
                if (option._id === optionChoose._id) {
                    let sum = 0
                    option.ingredients.forEach(ingredient => {
                        sum += ingredient.food.amount
                    })

                    if ((sum + 1) <= (option.maxChoose * amountFoodOption)) {
                        option.ingredients.forEach(ingredient => {
                            if (ingredient._id === ingredientChoose._id) {
                                ingredient.food.amount++
                            }
                        })
                    }
                }
            })
        },
        setFoodOptionChild: (state, action) => {
            state.foodOptionChild = action.payload.foodOptionChild
            state.optionChoose = action.payload.optionChoose
        },
        plusOrMinusFoodOptionChild: (state, action) => {
            const type = action.payload
            const amountFoodOption = state.foodOption.amount
            if (type === 'plus') {
                const amountCurrent = state.foodOptionChild.amount + 1
                state.foodOption.options.forEach((option) => {
                    if (option._id === state.optionChoose._id) {
                        if (amountCurrent <= (option.maxChoose * amountFoodOption)) {
                            state.foodOptionChild.amount = amountCurrent
                        }
                    }
                })
            } else {
                const amountCurrent = state.foodOptionChild.amount - 1
                if (amountCurrent >= 1) {
                    state.foodOptionChild.amount = amountCurrent
                }
            }
        },
        doneSelectFoodOptionChild: (state, action) => {
            // Hàm check xem chọn đủ thành phần của một món ăn chưa, vd: mì cay phải chọn cấp độ mới cho hoàn thành
            let error = false
            if (state.foodOptionChild.amount < 1) {
                Alert.alert('Số lượng món phải lớn hơn 0')
                return
            }

            state.foodOptionChild.options.forEach((option) => {
                const maxChoose = option.maxChoose
                let sumAmountIngredients = 0
                option.ingredients.forEach((ingredient) => {
                    sumAmountIngredients += ingredient.food.amount
                })

                if (sumAmountIngredients !== (maxChoose * state.foodOptionChild.amount)) {
                    Alert.alert('Vui lòng chọn đủ thành phần của món')
                    error = true
                }
            })

            if (error) return

            const amountFoodOptionChild = state.foodOptionChild.amount
            let sumAmountIngredients = 0
            let position = -1
            state.foodOption.options.forEach((option) => {
                if (option._id === state.optionChoose._id) {
                    option.ingredients.forEach((ingredient, index) => {
                        if (ingredient.food._id !== state.foodOptionChild._id) {
                            sumAmountIngredients += ingredient.food.amount
                        }

                        if (ingredient.food._id === state.foodOptionChild._id) {
                            position = index
                        }
                    })

                    if ((sumAmountIngredients + amountFoodOptionChild) > (state.optionChoose.maxChoose * state.foodOption.amount)) {
                        Alert.alert('Vượt quá số lượng món trong một mục')
                    } else {
                        option.ingredients[position].food = state.foodOptionChild
                    }
                    state.foodOptionChild = null
                }
            })
        },
        removeIngredientsFoodOption: (state, action) => {
            const { ingredientChoose, optionChoose } = action.payload
            state.foodOption.options.forEach((option) => {
                if (option._id === optionChoose._id) {
                    option.ingredients.forEach((ingredient, index) => {
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
        removeIngredientsFoodOptionChild: (state, action) => {
            const { ingredientChoose, optionChoose } = action.payload
            state.foodOptionChild.options.forEach((option) => {
                if (option._id === optionChoose._id) {
                    option.ingredients.forEach((ingredient, index) => {
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
        doneSelectFoodOption: (state) => {
            let error = false
            if (state.foodOption.amount < 1) {
                Alert.alert('Số lượng món phải lớn hơn 0')
                return
            }

            state.foodOption.options.forEach((option) => {
                const maxChoose = option.maxChoose
                let sumAmountIngredients = 0
                option.ingredients.forEach((ingredient) => {
                    sumAmountIngredients += ingredient.food.amount
                })

                if (sumAmountIngredients !== (maxChoose * state.foodOption.amount)) {
                    Alert.alert('Vui lòng chọn đủ thành phần của món')
                    error = true
                }
            })

            if (error) return

            state.orderPending.push(state.foodOption)
            state.foodOption = null
            console.log('orderPendin3433: ', JSON.stringify(state.orderPending))
        },
    },
    extraReducers: builder => { }
})

export const {
    setFirstData,
    setAreaChoose,
    setOrderedTab,
    setFoodOption,
    setAmountFoodOption,
    setFoodOptionChild,
    setAmountFoodOptionChild,
    plusOrMinusFoodOptionChild,
    doneSelectFoodOptionChild,
    removeIngredientsFoodOption,
    removeIngredientsFoodOptionChild,
    doneSelectFoodOption,
} = mainSlice.actions

export default mainSlice.reducer