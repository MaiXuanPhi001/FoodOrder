import React from 'react'
import { ScrollView } from 'react-native'
import { useAppSelector } from '~/hooks/redux'
import { foodsMainSelector } from '~/reduxs/selectors/mainSelector'
import { Food } from '~/servers/databases/foods'
import ItemFoodsOrder from './ItemFoodsOrder'

const FoodsOrder = () => {
    const foods = useAppSelector(foodsMainSelector)

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {foods.map((food: Food) =>
                <ItemFoodsOrder key={food._id} food={food} />
            )}
        </ScrollView>
    )
}

export default FoodsOrder