import { Area } from "~/servers/databases/areas";
import { FoodOption, Ingredient, Option } from "./food";
import { Table } from "~/servers/databases/tables";
import { Food } from "./database";
import { OrderPending } from "./order";

export interface FoodOptionObject {
    foodOption: FoodOption | null
    foodOptionChild: FoodOption | null
    foodOptionUpdate: FoodOption | null
    foodOptionUpdateChild: FoodOption | null
}

export interface MainSlice extends FoodOptionObject {
    areas: Area[]
    tables: Table[]
    foods: Food[]
    areaChoose: Area | undefined
    orderedTab: 'orderPending' | 'ordered'
    optionChoose: Option | null
    orderPending: OrderPending[]
    searchKeyFoods: string
}

export interface PayloadSetAreas {
    areas: Area[]
    tables: Table[]
    foods: Food[]
}

export interface PayloadSetFoodOptionChild {
    foodOptionChild: FoodOption | null
    optionChoose: Option | null
    fieldName: keyof FoodOptionObject
}

export interface PayloadAddIngredientToFoodOption {
    ingredientChoose: Ingredient
    optionChoose: Option
    fieldName: keyof FoodOptionObject
}

export interface PayloadPlusOrMinusFoodOptionChild {
    type: 'plus' | 'minus',
    fieldName: keyof FoodOptionObject,
}