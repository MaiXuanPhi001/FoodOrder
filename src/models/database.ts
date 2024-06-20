import { Ingredient } from "./food"

export interface Food {
    _id: number
    name: string
    price: number
    type: number // 0: món ăn | 1 mì cay | 2 lẩu | 3 combo | 4 nước | 5 cấp độ cay
}

export interface OptionFood {
    _id: number
    title: string
    maxChoose: number
    _idFood: number
    ingredients?: Ingredient[]
}