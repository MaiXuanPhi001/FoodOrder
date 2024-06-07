import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Area } from "~/servers/databases/areas";
import { Food } from "~/servers/databases/foods";
import { Table } from "~/servers/databases/tables";

interface MainSlice {
    areas: Area[]
    tables: Table[]
    foods: Food[]
    areaChoose: Area | undefined
    orderedTab: boolean
    foodOption: any
    foodOptionChild: any
    optionChoose: any
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
    orderedTab: false, // Tab order
    foodOption: null,
    foodOptionChild: null,
    optionChoose: null
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
        setOrderedTab: (state, action: PayloadAction<boolean>) => {
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
        setFoodOptionChild: (state, action) => {
            state.foodOptionChild = action.payload.foodOptionChild
            state.optionChoose = action.payload.optionChoose
        },
        setAmountFoodOptionChild: (state, action) => {
            const { ingredientChoose, optionChoose } = action.payload
            state.foodOptionChild.options.forEach(option => {
                if (option._id === optionChoose._id) {
                    let sum = 0
                    option.ingredients.forEach(ingredient => {
                        sum += ingredient.food.amount
                    })

                    if ((sum + 1) <= option.maxChoose) {
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
            const type = action.payload
            if (type === 'plus') {
                const amountCurrent = state.foodOptionChild.amount + 1
                state.foodOption.options.forEach((option) => {
                    if (option._id === state.optionChoose._id) {
                        console.log('maxChoose: ', option.maxChoose)
                        if (amountCurrent <= option.maxChoose) {
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
            console.log('doneSelectFoodOptionChild: ', JSON.stringify(state.foodOptionChild))
            // Hàm check xem chọn đủ thành phần của một món ăn chưa, vd: mì cay phải chọn cấp độ mới cho hoàn thành
            if (true) {

            }
            state.foodOption.options.forEach((option) => {
                if (option._id === state.optionChoose._id) {
                    option.ingredients.forEach((ingredient) => {
                        if (ingredient.food._id === state.foodOptionChild._id) {
                            ingredient.food = state.foodOptionChild
                        }
                    })
                }
            })
            state.foodOptionChild = null
            console.log('done: ', JSON.stringify(state.foodOption))
        }
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
} = mainSlice.actions

export default mainSlice.reducer