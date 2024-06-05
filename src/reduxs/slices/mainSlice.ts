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
    foodOption: undefined,
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
            state.foodOption.options.forEach(option => {
                if (option._id === optionChoose._id) {
                    console.log('======')
                    let sum = 0
                    option.ingredients.forEach(ingredient => {
                        sum += ingredient.food.amount
                    })

                    console.log('sum: ', sum)
                    console.log('maxchoose: ', option)
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
    },
    extraReducers: builder => { }
})

export const {
    setFirstData,
    setAreaChoose,
    setOrderedTab,
    setFoodOption,
    setAmountFoodOption
} = mainSlice.actions

export default mainSlice.reducer