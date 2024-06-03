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
    orderedTab: false // Tab order
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
        }
    },
    extraReducers: builder => { }
})

export const {
    setFirstData,
    setAreaChoose,
    setOrderedTab,
} = mainSlice.actions

export default mainSlice.reducer