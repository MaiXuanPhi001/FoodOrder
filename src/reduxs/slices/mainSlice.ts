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
    foodOptionUpdate: any
    foodOptionUpdateChild: any
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
    orderPending: [
        // {
        //   "_id": 0,
        //   "name": "CB mot minh",
        //   "price": 20000,
        //   "type": 3,
        //   "noteEnable": false,
        //   "amount": 1,
        //   "options": [
        //     {
        //       "_id": 0,
        //       "title": "Cấp độ",
        //       "maxChoose": 1,
        //       "_idFood": 0,
        //       "ingredients": [
        //         {
        //           "_id": 0,
        //           "_idOptionFood": 0,
        //           "_idFood": 2,
        //           "food": {
        //             "_id": 2,
        //             "name": "Cấp 2",
        //             "price": 0,
        //             "type": 5,
        //             "noteEnable": false,
        //             "amount": 1
        //           }
        //         }
        //       ]
        //     },
        //     {
        //       "_id": 1,
        //       "title": "Món thêm",
        //       "maxChoose": 2,
        //       "_idFood": 0,
        //       "ingredients": [
        //         {
        //           "_id": 1,
        //           "_idOptionFood": 1,
        //           "_idFood": 3,
        //           "food": {
        //             "_id": 3,
        //             "name": "Mực thêm",
        //             "price": 20000,
        //             "type": 0,
        //             "noteEnable": true,
        //             "amount": 1
        //           }
        //         },
        //         {
        //           "_id": 2,
        //           "_idOptionFood": 1,
        //           "_idFood": 4,
        //           "food": {
        //             "_id": 4,
        //             "name": "Bò thêm",
        //             "price": 25000,
        //             "type": 0,
        //             "noteEnable": true,
        //             "amount": 1
        //           }
        //         },
        //         {
        //           "_id": 3,
        //           "_idOptionFood": 1,
        //           "_idFood": 5,
        //           "food": {
        //             "_id": 5,
        //             "name": "Mì thêm",
        //             "price": 25000,
        //             "type": 0,
        //             "noteEnable": true,
        //             "amount": 0
        //           }
        //         }
        //       ]
        //     },
        //     {
        //       "_id": 2,
        //       "title": "1 Mì kim chi bất kì",
        //       "maxChoose": 2,
        //       "_idFood": 0,
        //       "ingredients": [
        //         {
        //           "_id": 4,
        //           "_idOptionFood": 2,
        //           "_idFood": 1,
        //           "food": {
        //             "_id": 1,
        //             "name": "Mì kim chi hải sản",
        //             "price": 55000,
        //             "type": 1,
        //             "noteEnable": true,
        //             "amount": 2,
        //             "options": [
        //               {
        //                 "_id": 3,
        //                 "title": "Cấp độ",
        //                 "maxChoose": 1,
        //                 "_idFood": 1,
        //                 "ingredients": [
        //                   {
        //                     "_id": 5,
        //                     "_idOptionFood": 3,
        //                     "_idFood": 2,
        //                     "food": {
        //                       "_id": 2,
        //                       "name": "Cấp 2",
        //                       "price": 0,
        //                       "type": 5,
        //                       "noteEnable": false,
        //                       "amount": 1
        //                     }
        //                   },
        //                   {
        //                     "_id": 8,
        //                     "_idOptionFood": 3,
        //                     "_idFood": 7,
        //                     "food": {
        //                       "_id": 7,
        //                       "name": "Cấp 0",
        //                       "price": 0,
        //                       "type": 5,
        //                       "noteEnable": false,
        //                       "amount": 1
        //                     }
        //                   },
        //                   {
        //                     "_id": 9,
        //                     "_idOptionFood": 3,
        //                     "_idFood": 8,
        //                     "food": {
        //                       "_id": 8,
        //                       "name": "Cấp 1",
        //                       "price": 0,
        //                       "type": 5,
        //                       "noteEnable": false,
        //                       "amount": 0
        //                     }
        //                   }
        //                 ]
        //               }
        //             ]
        //           }
        //         },
        //         {
        //           "_id": 6,
        //           "_idOptionFood": 2,
        //           "_idFood": 6,
        //           "food": {
        //             "_id": 6,
        //             "name": "Mì kim chi bò",
        //             "price": 25000,
        //             "type": 1,
        //             "noteEnable": true,
        //             "amount": 0
        //           }
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //     "_id": 1,
        //     "name": "CB mot minh",
        //     "price": 20000,
        //     "type": 3,
        //     "noteEnable": false,
        //     "amount": 1,
        //     "options": [
        //       {
        //         "_id": 0,
        //         "title": "Cấp độ",
        //         "maxChoose": 1,
        //         "_idFood": 0,
        //         "ingredients": [
        //           {
        //             "_id": 0,
        //             "_idOptionFood": 0,
        //             "_idFood": 2,
        //             "food": {
        //               "_id": 2,
        //               "name": "Cấp 2",
        //               "price": 0,
        //               "type": 5,
        //               "noteEnable": false,
        //               "amount": 1
        //             }
        //           }
        //         ]
        //       },
        //       {
        //         "_id": 1,
        //         "title": "Món thêm",
        //         "maxChoose": 2,
        //         "_idFood": 0,
        //         "ingredients": [
        //           {
        //             "_id": 1,
        //             "_idOptionFood": 1,
        //             "_idFood": 3,
        //             "food": {
        //               "_id": 3,
        //               "name": "Mực thêm",
        //               "price": 20000,
        //               "type": 0,
        //               "noteEnable": true,
        //               "amount": 1
        //             }
        //           },
        //           {
        //             "_id": 2,
        //             "_idOptionFood": 1,
        //             "_idFood": 4,
        //             "food": {
        //               "_id": 4,
        //               "name": "Bò thêm",
        //               "price": 25000,
        //               "type": 0,
        //               "noteEnable": true,
        //               "amount": 1
        //             }
        //           },
        //           {
        //             "_id": 3,
        //             "_idOptionFood": 1,
        //             "_idFood": 5,
        //             "food": {
        //               "_id": 5,
        //               "name": "Mì thêm",
        //               "price": 25000,
        //               "type": 0,
        //               "noteEnable": true,
        //               "amount": 0
        //             }
        //           }
        //         ]
        //       },
        //       {
        //         "_id": 2,
        //         "title": "1 Mì kim chi bất kì",
        //         "maxChoose": 2,
        //         "_idFood": 0,
        //         "ingredients": [
        //           {
        //             "_id": 4,
        //             "_idOptionFood": 2,
        //             "_idFood": 1,
        //             "food": {
        //               "_id": 1,
        //               "name": "Mì kim chi hải sản",
        //               "price": 55000,
        //               "type": 1,
        //               "noteEnable": true,
        //               "amount": 2,
        //               "options": [
        //                 {
        //                   "_id": 3,
        //                   "title": "Cấp độ",
        //                   "maxChoose": 1,
        //                   "_idFood": 1,
        //                   "ingredients": [
        //                     {
        //                       "_id": 5,
        //                       "_idOptionFood": 3,
        //                       "_idFood": 2,
        //                       "food": {
        //                         "_id": 2,
        //                         "name": "Cấp 2",
        //                         "price": 0,
        //                         "type": 5,
        //                         "noteEnable": false,
        //                         "amount": 1
        //                       }
        //                     },
        //                     {
        //                       "_id": 8,
        //                       "_idOptionFood": 3,
        //                       "_idFood": 7,
        //                       "food": {
        //                         "_id": 7,
        //                         "name": "Cấp 0",
        //                         "price": 0,
        //                         "type": 5,
        //                         "noteEnable": false,
        //                         "amount": 1
        //                       }
        //                     },
        //                     {
        //                       "_id": 9,
        //                       "_idOptionFood": 3,
        //                       "_idFood": 8,
        //                       "food": {
        //                         "_id": 8,
        //                         "name": "Cấp 1",
        //                         "price": 0,
        //                         "type": 5,
        //                         "noteEnable": false,
        //                         "amount": 0
        //                       }
        //                     }
        //                   ]
        //                 }
        //               ]
        //             }
        //           },
        //           {
        //             "_id": 6,
        //             "_idOptionFood": 2,
        //             "_idFood": 6,
        //             "food": {
        //               "_id": 6,
        //               "name": "Mì kim chi bò",
        //               "price": 25000,
        //               "type": 1,
        //               "noteEnable": true,
        //               "amount": 0
        //             }
        //           }
        //         ]
        //       }
        //     ]
        //   }
    ],
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
        setFoodOption: (state, action) => {
            state.foodOption = action.payload
        },
        setFoodOptionChild: (state, action) => {
            const { foodOptionChild, optionChoose, fieldName } = action.payload
            state[fieldName] = foodOptionChild
            state.optionChoose = optionChoose
        },
        addIngredientToFoodOption: (state, action) => {
            const { ingredientChoose, optionChoose, fieldName } = action.payload
            const amountFoodOption = state[fieldName].amount
            state[fieldName].options.forEach(option => {
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

            state.orderPending.push(state.foodOption)
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
        removeIngredientOfFoodOption: (state, action) => {
            const { ingredientChoose, optionChoose, fieldName } = action.payload
            state[fieldName].options.forEach((option) => {
                if (option._id === optionChoose._id) {
                    option.ingredients.forEach((ingredient) => {
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
        addFoodToOrderPending: (state, action) => {
            state.orderPending.push(action.payload)
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
            state.orderPending = state.orderPending.map((item) => {
                if (item._id === state.foodOptionUpdate._id) {
                    return state.foodOptionUpdate
                }
                return item
            })
            state.foodOptionUpdate = null
        },
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
} = mainSlice.actions

export default mainSlice.reducer