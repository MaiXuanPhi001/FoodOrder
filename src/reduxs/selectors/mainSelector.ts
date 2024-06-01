import { RootState } from "../store";

export const areasMainSelector = (state: RootState) => state.main.areas
export const areaChooseMainSelector = (state: RootState) => state.main.areaChoose
export const tablesMainSelector = (state: RootState) => state.main.tables
export const foodsMainSelector = (state: RootState) => state.main.foods