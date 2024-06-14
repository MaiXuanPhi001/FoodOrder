import { RootState } from "../store";

export const areasMainSelector = (state: RootState) => state.main.areas
export const areaChooseMainSelector = (state: RootState) => state.main.areaChoose
export const tablesMainSelector = (state: RootState) => state.main.tables
export const foodsMainSelector = (state: RootState) => state.main.foods
export const orderedTabMainSelector = (state: RootState) => state.main.orderedTab
export const foodOptionMainSelector = (state: RootState) => state.main.foodOption
export const foodOptionChildMainSelector = (state: RootState) => state.main.foodOptionChild
export const orderPendingMainSelector = (state: RootState) => state.main.orderPending
export const foodOptionUpdateSelector = (state: RootState) => state.main.foodOptionUpdate