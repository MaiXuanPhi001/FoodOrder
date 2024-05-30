import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Area } from "~/servers/databases/areas";
import { Table } from "~/servers/databases/tables";

interface MainSlice {
    areas: Area[]
    tables: Table[]
    areaChoose: Area | undefined
}

interface PayloadSetAreas {
    areas: Area[]
    tables: Table[]
}

const initialState: MainSlice = {
    areas: [], // danh sách khu vực
    tables: [], // danh sách bàn
    areaChoose: undefined // khu vực được chọn
}

const mainSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        setAreas: (state, action: PayloadAction<PayloadSetAreas>) => {
            const { payload } = action
            state.areas = payload.areas
            if (payload.areas.length > 0) {
                state.areaChoose = payload.areas[0]
                state.tables = payload.tables
            } else {
                state.areaChoose = undefined
            }
        },
        setAreaChoose: (state, action: PayloadAction<Area>) => {
            state.areaChoose = action.payload
        }
    },
    extraReducers: builder => { }
})

export const { setAreas, setAreaChoose } = mainSlice.actions

export default mainSlice.reducer