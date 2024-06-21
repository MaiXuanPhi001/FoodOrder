import { Area } from "~/servers/databases/areas";
import { FoodOption, Ingredient, Option } from "./food";
import { Table } from "~/servers/databases/tables";
import { Food } from "./database";
import { OrderPending } from "./order";

export interface MainSlice {
    areas: Area[]
    tables: Table[]
    foods: Food[]
    areaChoose: Area | undefined
    orderedTab: 'orderPending' | 'ordered'
    foodOption: FoodOption | null
    foodOptionChild: any
    optionChoose: any
    orderPending: OrderPending[]
    foodOptionUpdate: any
    foodOptionUpdateChild: any
}

export interface PayloadSetAreas {
    areas: Area[]
    tables: Table[]
    foods: Food[]
}

export interface PayloadSetFoodOptionChild {
    foodOptionChild: FoodOption
    optionChoose: Option
    fieldName: keyof MainSlice
}

export interface PayloadAddIngredientToFoodOption {
    ingredientChoose: Ingredient
    optionChoose: Option
    fieldName: keyof MainSlice
}