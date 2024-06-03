import { Food, foods } from "../foods";
import { ingredients as ingredientsDB } from "../ingredients";
import { optionFoods as optionFoodsDB } from "../optionFoods";

export const getFoodDetailApi = (food: Food) => {
    let optionFoods = optionFoodsDB.filter((option) => option._idFood === food._id)

    optionFoods.forEach((option, i) => {
        let ingredients = []
        ingredientsDB.forEach(ingredient => {
            if (ingredient._idOptionFood === option._id) {
                const food = foods.filter((food) => ingredient._idFood === food._id)[0]
                ingredients.push({ ...ingredient, food })
            }
        })
        optionFoods[i] = { ...option, ingredients }
    })

    return {
        ...food,
        options: optionFoods
    }
}