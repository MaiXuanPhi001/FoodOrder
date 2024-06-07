import { ImageSourcePropType } from "react-native"

export const getImageByFoodType = (type: number): ImageSourcePropType => {
    switch (type) {
        case 1: return require('../assets/images/ramen.png')
        case 2: return require('../assets/images/hot-pot.png')
        case 3: return require('../assets/images/fast-food.png')
        case 4: return require('../assets/images/lemonade.png')
        case 5: return require('../assets/images/fire.png')
        default: return require('../assets/images/food.png')
    }
}