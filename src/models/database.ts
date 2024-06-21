export interface Food {
    _id: number
    name: string
    price: number
    type: number // 0: món ăn | 1 mì cay | 2 lẩu | 3 combo | 4 nước | 5 cấp độ cay
}

export interface Ingredient {
    _id: number
    _idOptionFood: number
    _idFood: number
}