import { Food, Ingredient as IngredientDB } from "./database"

export interface Ingredient extends IngredientDB {
    food: FoodOption
}

export interface FoodOption extends Food {
    note: string
    amount: number
    options?: Option[]
}

export interface Option {
    _id: number
    title: string
    maxChoose: number
    _idFood: number
    ingredients?: Ingredient[]
}